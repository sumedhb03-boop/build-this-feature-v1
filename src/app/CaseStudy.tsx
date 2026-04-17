import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, AnimatePresence, useSpring } from "motion/react";
import Header from "./components/Header";
import CaseStudyHero from "./components/CaseStudyHero";
import SidebarNav from "./components/SidebarNav";
import AboutOverlay from "./components/AboutOverlay";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./components/ui/carousel";
import { CASE_STUDIES, CaseStudyData, Visual } from "./data/caseStudiesData";

import Lenis from 'lenis';

export default function CaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Get project data
    const project: CaseStudyData = CASE_STUDIES[id || "lucrente"] || CASE_STUDIES["lucrente"];

    const getNextId = (currentId: string) => {
        switch (currentId) {
            case 'lucrente': return 'cyhex';
            case 'cyhex': return 'scorecric';
            case 'scorecric': return 'originally-raw';
            case 'originally-raw': return 'lucrente';
            default: return 'lucrente';
        }
    };
    const nextProject = CASE_STUDIES[getNextId(project.id)];

    // Scroll Progress Logic
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeBgColor, setActiveBgColor] = useState(project.heroBgColor);
    const [activeIndicatorColor, setActiveIndicatorColor] = useState("#ffffff");
    const [activeHeaderColor, setActiveHeaderColor] = useState("#ffffff");
    const [scrollYPos, setScrollYPos] = useState(0);

    const [isHoveringFooter, setIsHoveringFooter] = useState(false);
    const [isTransitionComplete, setIsTransitionComplete] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const smoothMouseX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.8 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.8 });

    useEffect(() => {
        const updateMousePosition = (e: PointerEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("pointermove", updateMousePosition);
        return () => window.removeEventListener("pointermove", updateMousePosition);
    }, [mouseX, mouseY]);

    const localScrollY = useMotionValue(0);
    const footerScrollValue = useMotionValue(0);
    const exitColorProgress = useMotionValue(0);

    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const footerContainerRef = useRef<HTMLDivElement>(null);

    const [vHeight, setVHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
    
    useEffect(() => {
        const handleResize = () => setVHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 1. Entry Transition: From Hero color to dark (#121212) over 50vh
    const entryBg = useTransform(localScrollY, [0, vHeight * 0.5], [project.heroBgColor, "#121212"]);
    const entryText = useTransform(localScrollY, [0, vHeight * 0.5], [project.textColor, "#fbf9ef"]);

    // 2. Exit Transition: From dark to Next Project color over 50vh BEFORE footer overscroll starts
    const exitBg = useTransform(exitColorProgress, [0, 1], ["#121212", nextProject.heroBgColor]);
    const exitText = useTransform(exitColorProgress, [0, 1], ["#fbf9ef", nextProject.textColor]);

    useMotionValueEvent(exitColorProgress, "change", (latest) => {
        setIsTransitionComplete(latest === 1);
    });

    // 3. Composite Dynamic Values: Prioritize exit values as we near bottom
    const dynamicBg = useTransform([exitColorProgress, entryBg, exitBg], ([p, entry, exit]) => (p as number) > 0 ? exit : (entry as string));
    const dynamicTextColor = useTransform([exitColorProgress, entryText, exitText], ([p, entry, exit]) => (p as number) > 0 ? exit : (entry as string));

    // Initial scroll reset
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const lenisRef = useRef<Lenis | null>(null);
    const trackHeight = 270;

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        const lenis = new Lenis();
        lenisRef.current = lenis;

        // Start with scroll stopped to prevent momentum bleed
        lenis.stop();
        setTimeout(() => {
            lenis.start();
            window.scrollTo(0, 0); // Second reset after settle
        }, 150); // 150ms buffer for browser momentum to clear

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleScroll = () => {
            const scrollY = lenis.scroll;
            const maxScroll = lenis.limit;

            // 1. Calculate main scroll progress over the ENTIRE document (including footer)
            // This ensures the indicator doesn't get stuck at the bottom during the footer overscroll.
            const progress = maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0;

            setScrollProgress(progress);
            localScrollY.set(scrollY);

            // 2. Calculate background transition progress
            // We want the color to transition into the next project as we scroll into the footer area.
            // Currently, footer overscroll starts at 'effectiveMaxScroll'.
            const overscrollAmount = window.innerHeight * 3;
            const effectiveMaxScroll = maxScroll - overscrollAmount;
            
            const exitStart = effectiveMaxScroll - (vHeight * 0.75); // Start transition slightly earlier
            const exitEnd = effectiveMaxScroll + (vHeight * 0.25);  // End it slightly after footer starts appearing
            const exitP = Math.min(1, Math.max(0, (scrollY - exitStart) / (exitEnd - exitStart)));
            exitColorProgress.set(exitP);

            // 3. Calculate footer fill progress (still separate for the filling effect)
            const footerProgress = Math.max(0, (scrollY - effectiveMaxScroll) / overscrollAmount);
            footerScrollValue.set(footerProgress);

            const viewportCenter = window.innerHeight / 2;
            const trackTop = viewportCenter - (trackHeight / 2);
            const indicatorY = trackTop + (progress * trackHeight);

            const getSection = (yPos: number) => {
                const sections = [
                    { ref: section1Ref, color: project.heroBgColor },
                    { ref: section2Ref, color: project.contentBgColor },
                    { ref: section3Ref, color: project.nextProjectBgColor }
                ];

                for (const section of sections) {
                    if (section.ref.current) {
                        const rect = section.ref.current.getBoundingClientRect();
                        if (yPos >= rect.top && yPos <= rect.bottom) {
                            return section;
                        }
                    }
                }
                return null;
            };

            const sectionForIndicator = getSection(indicatorY);
            if (sectionForIndicator) {
                const isCream = sectionForIndicator.color === "#fbf9ef" && sectionForIndicator.ref !== section2Ref;
                setActiveBgColor(sectionForIndicator.color);
                setActiveIndicatorColor(isCream ? "#171412" : "#ffffff");
            }

            const sectionForHeader = getSection(40);
            if (sectionForHeader) {
                const isCream = sectionForHeader.color === "#fbf9ef" && sectionForHeader.ref !== section2Ref;
                setActiveHeaderColor(isCream ? "#171412" : "#ffffff");
            }

            setScrollYPos(scrollY);
        };

        lenis.on('scroll', handleScroll);

        // ResizeObserver to detect when content height changes (e.g., images loading)
        // This ensures maxScroll is always accurate.
        const resizeObserver = new ResizeObserver(() => {
            lenis.resize();
            handleScroll(); // Recalculate progress immediately after resize
        });
        
        if (document.body) {
            resizeObserver.observe(document.body);
        }

        // Initial check
        handleScroll();

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            resizeObserver.disconnect();
        };
    }, [project]);

    // Handle interactive scroll via clicking the track
    const handleTrackClick = (e: React.MouseEvent) => {
        if (!lenisRef.current) return;
        
        const trackRect = e.currentTarget.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        const progress = Math.min(1, Math.max(0, clickY / trackRect.height));
        
        const scrollLimit = lenisRef.current.limit;
        const overscrollAmount = vHeight * 3;
        const targetScroll = progress * (scrollLimit - overscrollAmount);
        
        lenisRef.current.scrollTo(targetScroll, { lerp: 0.1 });
    };

    // Manual Drag State
    const [isDragging, setIsDragging] = useState(false);

    // Handle interactive scroll via dragging the indicator
    useEffect(() => {
        if (!isDragging || !lenisRef.current) return;

        const handlePointerMove = (e: PointerEvent) => {
            const viewportCenter = window.innerHeight / 2;
            const trackTop = viewportCenter - (trackHeight / 2);
            
            const relativeY = e.clientY - trackTop;
            const progress = Math.min(1, Math.max(0, relativeY / trackHeight));
            
            const scrollLimit = lenisRef.current.limit;
            const overscrollAmount = vHeight * 3;
            const targetScroll = progress * (scrollLimit - overscrollAmount);
            
            lenisRef.current.scrollTo(targetScroll, { immediate: true });
        };

        const handlePointerUp = () => {
            setIsDragging(false);
            document.body.style.userSelect = "";
            document.body.style.cursor = "";
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging]);

    const handleDragStart = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
    };

    const renderVisual = (visual: Visual, index: number) => {
        if (visual.type === 'single') {
            return (
                <div
                    key={index}
                    className="w-full relative overflow-hidden"
                    style={{
                        backgroundColor: visual.bgColor || project.contentBgColor,
                        height: typeof window !== 'undefined' && window.innerWidth < 768 ? 'auto' : (visual.height || 'auto'),
                        aspectRatio: visual.aspectRatio || 'auto'
                    }}
                >
                    <img 
                        src={visual.src} 
                        alt={visual.alt} 
                        className="w-full h-auto md:h-full object-contain md:object-cover" 
                        onLoad={() => lenisRef.current?.resize()}
                    />
                    {visual.overlaySrc && (
                        <div className="absolute inset-0 overflow-hidden flex items-center justify-center p-[20px] md:p-[40px] pointer-events-none">
                            {visual.overlayAnimation === 'scroll-up' ? (
                                <motion.img 
                                    src={visual.overlaySrc} 
                                    alt="Overlay" 
                                    className="max-w-full object-contain"
                                    animate={{ y: ["120%", "-120%"] }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                />
                            ) : (
                                <img 
                                    src={visual.overlaySrc} 
                                    alt="Overlay" 
                                    className="max-w-full max-h-full object-contain" 
                                />
                            )}
                        </div>
                    )}
                </div>
            );
        } else if (visual.type === 'placeholder') {
            const isOriginallyRaw = project.id === 'originally-raw';
            return (
                <div
                    key={index}
                    className="w-full relative overflow-hidden flex flex-col justify-center"
                    style={{
                        backgroundColor: visual.bgColor || '#000',
                        backgroundImage: visual.bgImage ? `url(${visual.bgImage})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: typeof window !== 'undefined' && window.innerWidth < 768 ? '300px' : (visual.height || '90vh'),
                    }}
                >
                    {/* Carousel Content */}
                    <div className="w-full flex items-center justify-center min-h-0">
                        {visual.images && visual.images.length > 0 && (
                            <Carousel 
                                className="w-full"
                                opts={{
                                    loop: true,
                                    align: "center"
                                }}
                                plugins={[
                                    Autoplay({
                                      delay: 2500,
                                      stopOnInteraction: false,
                                      stopOnMouseEnter: false,
                                    }),
                                ]}
                            >
                                <CarouselContent className="-ml-[16px] md:-ml-[32px]">
                                    {visual.images.map((image, i) => {
                                        // Use desktop-inspired basis for Originally Raw on mobile if requested
                                        const baseBasis = { 
                                            mobile: isOriginallyRaw ? 81.65 : 90, 
                                            md: 81.65, 
                                            lg: 76.5 
                                        };
                                        const scale = visual.imageScale || 1;
                                        
                                        return (
                                            <CarouselItem 
                                                key={i} 
                                                className="pl-[16px] md:pl-[32px] basis-[var(--item-basis-mobile)] md:basis-[var(--item-basis-md)] lg:basis-[var(--item-basis-lg)]"
                                                style={{ 
                                                    '--item-basis-mobile': `${baseBasis.mobile * scale}%`,
                                                    '--item-basis-md': `${baseBasis.md * scale}%`,
                                                    '--item-basis-lg': `${baseBasis.lg * scale}%`
                                                } as React.CSSProperties}
                                            >
                                                <div className="relative group flex justify-center items-center">
                                                    <img 
                                                        src={image} 
                                                        alt={`${visual.label} ${i + 1}`} 
                                                        className="max-w-full h-auto object-contain"
                                                        style={{ maxHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '55vh' : 'auto' }}
                                                        onLoad={() => lenisRef.current?.resize()}
                                                    />
                                                </div>
                                            </CarouselItem>
                                        );
                                    })}
                                </CarouselContent>
                            </Carousel>
                        )}
                    </div>
                </div>
            );
        } else if (visual.type === 'trio') {
            return (
                <div key={index} className="w-full flex flex-col md:flex-row gap-[10px] md:gap-[20px]" style={{ height: typeof window !== 'undefined' && window.innerWidth < 768 ? 'auto' : (visual.height || '940px') }}>
                    <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: visual.leftBgColor || '#fbf9ef' }}>
                        {visual.leftSrc && <img src={visual.leftSrc} alt={visual.leftAlt} className="w-full h-auto md:h-full object-contain md:object-cover" onLoad={() => lenisRef.current?.resize()} />}
                        {visual.leftOverlaySrc && (
                            <div className="absolute inset-0 flex items-center justify-center p-[20px] md:p-[40px]">
                                <img src={visual.leftOverlaySrc} alt="Overlay" className="max-w-full max-h-full object-contain" onLoad={() => lenisRef.current?.resize()} />
                            </div>
                        )}
                    </div>
                    <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: visual.centerBgColor || '#fbf9ef' }}>
                        {visual.centerSrc && <img src={visual.centerSrc} alt={visual.centerAlt} className="w-full h-auto md:h-full object-contain md:object-cover" onLoad={() => lenisRef.current?.resize()} />}
                        {visual.centerOverlaySrc && (
                            <div className="absolute inset-0 flex items-center justify-center p-[20px] md:p-[40px]">
                                <img src={visual.centerOverlaySrc} alt="Overlay" className="max-w-full max-h-full object-contain" onLoad={() => lenisRef.current?.resize()} />
                            </div>
                        )}
                    </div>
                    <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: visual.rightBgColor || '#fbf9ef' }}>
                        {visual.rightSrc && <img src={visual.rightSrc} alt={visual.rightAlt} className="w-full h-auto md:h-full object-contain md:object-cover" onLoad={() => lenisRef.current?.resize()} />}
                        {visual.rightOverlaySrc && (
                            <div className="absolute inset-0 flex items-center justify-center p-[20px] md:p-[40px]">
                                <img src={visual.rightOverlaySrc} alt="Overlay" className="max-w-full max-h-full object-contain" onLoad={() => lenisRef.current?.resize()} />
                            </div>
                        )}
                    </div>
                </div>
            );
        } else {
            const isOriginallyRaw = project.id === 'originally-raw';
            return (
                <div key={index} className={`w-full flex ${isOriginallyRaw ? 'flex-row' : 'flex-col md:flex-row'} gap-[10px] md:gap-[20px]`} style={{ height: typeof window !== 'undefined' && window.innerWidth < 768 && !isOriginallyRaw ? 'auto' : (visual.height || 'auto') }}>
                    <div className="flex-1 relative overflow-hidden flex flex-col" style={{ backgroundColor: visual.leftBgColor || '#fbf9ef' }}>
                        {visual.leftSrc && (
                            <img 
                                src={visual.leftSrc} 
                                alt={visual.leftAlt} 
                                className="w-full h-auto md:h-full object-contain md:object-cover flex-1" 
                                onLoad={() => lenisRef.current?.resize()}
                            />
                        )}
                        {visual.leftOverlaySrc && (
                            <div className="absolute inset-0 overflow-hidden flex items-center justify-center p-[20px] md:p-[40px] pointer-events-none">
                                {visual.overlayAnimation === 'scroll-up' ? (
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <motion.img 
                                            src={visual.leftOverlaySrc} 
                                            alt="Overlay" 
                                            className="absolute top-0 w-full object-contain"
                                            animate={{ y: ["90vh", "-100%"] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            onLoad={() => lenisRef.current?.resize()}
                                        />
                                        {/* Layer the background again on top but masked to only show the top heading area */}
                                        {visual.leftSrc && (
                                            <div 
                                                className="absolute inset-0 z-10" 
                                                style={{ 
                                                    maskImage: 'linear-gradient(to bottom, black 0%, black 10%, transparent 12%)',
                                                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 10%, transparent 12%)'
                                                }}
                                            >
                                                <img 
                                                    src={visual.leftSrc} 
                                                    alt={visual.leftAlt} 
                                                    className="w-full h-full object-cover" 
                                                    onLoad={() => lenisRef.current?.resize()}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <img 
                                        src={visual.leftOverlaySrc} 
                                        alt="Overlay" 
                                        className="max-w-full max-h-full object-contain" 
                                        onLoad={() => lenisRef.current?.resize()}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    <div className="flex-1 relative overflow-hidden flex flex-col" style={{ backgroundColor: visual.rightBgColor || '#fbf9ef' }}>
                        {visual.rightSrc && (
                            <img 
                                src={visual.rightSrc} 
                                alt={visual.rightAlt} 
                                className="w-full h-auto md:h-full object-contain md:object-cover flex-1" 
                                onLoad={() => lenisRef.current?.resize()}
                            />
                        )}
                        {visual.rightOverlaySrc && (
                            <div className="absolute inset-0 flex items-center justify-center p-[20px] md:p-[40px]">
                                <img 
                                    src={visual.rightOverlaySrc} 
                                    alt="Overlay" 
                                    className="max-w-full max-h-full object-contain" 
                                    onLoad={() => lenisRef.current?.resize()}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <motion.div
            key={id || 'default'}
            className="relative w-full font-['Geist',sans-serif] min-h-screen"
            style={{ backgroundColor: dynamicBg }}
        >
            {/* --- FIXED NAVIGATION ELEMENTS --- */}

            {/* 1. Header (Logo + Links) - Fixed from shared component */}
            <Header color={activeHeaderColor} scrollY={scrollYPos} showScrollAnimation={true} />

            {/* 2. Left Nav (Home + Next Project) - Refactored Component */}
            {(() => {
                const nextId = getNextId(project.id);
                const nextProjectData = CASE_STUDIES[nextId];
                return (
                    <div className="hidden md:block">
                        <SidebarNav 
                            id={id} 
                            iconColor={project.sidebarIconColor}
                            bgColor={project.sidebarBgColor}
                            hoverColor={project.sidebarHoverColor}
                            nextIconColor={nextProjectData.sidebarIconColor}
                            nextBgColor={nextProjectData.sidebarBgColor}
                            nextHoverColor={nextProjectData.sidebarHoverColor}
                            exitColorProgress={exitColorProgress}
                            scrollProgress={footerScrollValue}
                            mainScrollY={localScrollY}
                            nextId={nextId}
                        />
                    </div>
                );
            })()}

            {/* 3. Scroll Bar Progress - Interactive */}
            <div className="hidden md:flex fixed right-[32px] top-1/2 -translate-y-1/2 h-[270px] w-[52px] flex-col items-center justify-center z-50">
                <div
                    className="w-px h-full relative cursor-pointer"
                    style={{ backgroundColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.2)" : "rgba(23, 20, 18, 0.2)" }}
                    onClick={handleTrackClick}
                >
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center cursor-grab active:cursor-grabbing"
                        style={{ top: `${scrollProgress * 100}%` }}
                        onPointerDown={handleDragStart}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Masking Background Circle (creates the gap in the line) */}
                        <motion.div
                            className="w-[29px] h-[29px] rounded-full flex items-center justify-center"
                            style={{
                                backgroundColor: dynamicBg as any
                            }}
                        >
                            {/* Outer Indicator Ring */}
                            <div
                                className="w-[17px] h-[17px] border rounded-full flex items-center justify-center"
                                style={{ borderColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.3)" : "rgba(23, 20, 18, 0.3)" }}
                            >
                                {/* Inner Indicator Dot */}
                                <div
                                    className="w-[5px] h-[5px] rounded-full"
                                    style={{ backgroundColor: activeIndicatorColor }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTIONS --- */}

            {/* 1. Hero Section (Refactored Component) */}
            <CaseStudyHero
                sectionRef={section1Ref}
                projectTitle={project.title}
                projectYear={project.year}
                projectIndustry={project.industry}
                heroDescription={project.heroDescription}
                bgColor={dynamicBg}
            />

            {/* 2. Main Content Section */}
            <motion.section
                ref={section2Ref}
                className="relative w-full py-[140px] flex flex-col items-center"
                style={{
                    backgroundColor: dynamicBg,
                    color: dynamicTextColor
                }}
            >
                {/* Description Grid */}
                <div className="w-full max-w-[905px] flex flex-col md:flex-row gap-[60px] md:gap-[120px] mb-[140px] px-4 md:px-0">
                    {/* Metadata Column */}
                    <div className="flex flex-row md:flex-col gap-[32px] md:gap-[40px] min-w-fit md:min-w-[150px]">
                        {project.role && (
                            <div>
                                <span className="text-[11px] opacity-40 uppercase tracking-[0.1em] block mb-2 font-['Geist_Mono',monospace] font-medium">Role</span>
                                <span className="text-[15px] md:text-[16px] font-light">{project.role}</span>
                            </div>
                        )}
                        {project.industry && (
                            <div>
                                <span className="text-[11px] opacity-40 uppercase tracking-[0.1em] block mb-2 font-['Geist_Mono',monospace] font-medium">Industry</span>
                                <span className="text-[15px] md:text-[16px] font-light">{project.industry}</span>
                            </div>
                        )}
                        {project.services && (
                            <div>
                                <span className="text-[11px] opacity-40 uppercase tracking-[0.1em] block mb-2 font-['Geist_Mono',monospace] font-medium">Services</span>
                                <div className="flex flex-col gap-1">
                                    {project.services.map((service, i) => (
                                        <span key={i} className="text-[15px] md:text-[16px] font-light">{service}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div>
                            <span className="text-[11px] opacity-40 uppercase tracking-[0.1em] block mb-2 font-['Geist_Mono',monospace] font-medium">Year</span>
                            <span className="text-[15px] md:text-[16px] font-light">{project.year}</span>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="flex flex-col flex-1">
                        <div>
                            <span className="text-[11px] opacity-40 uppercase tracking-[0.1em] block mb-2 font-['Geist_Mono',monospace] font-medium">Description</span>
                            <div className="flex flex-col gap-[32px]">
                                {project.leadDescription && (
                                    <motion.p
                                        className="text-[16px] md:text-[17px] font-light leading-[1.3] tracking-[-0.01em] m-0"
                                        style={{ color: '#fff' }}
                                    >
                                        {project.leadDescription}
                                    </motion.p>
                                )}
                                <motion.p
                                    className="text-[16px] md:text-[17px] font-light leading-[1.6] whitespace-pre-wrap m-0"
                                    style={{ color: '#fff' }}
                                >
                                    {project.mainDescription}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Snippets Header */}
                <div className="w-full max-w-[905px] flex justify-start items-center gap-2 mb-[32px] px-4 md:px-0">
                    <h3
                        className="text-[20px] font-['Geist',sans-serif] font-light tracking-[-0.4px] m-0 leading-[1.4]"
                        style={{ color: project.headingColor }}
                    >
                        Snippets from the project
                    </h3>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Forward--Streamline-Solar-Ar" height="24" width="24" className="rotate-90">
                        <desc>Forward Streamline Icon: https://streamlinehq.com</desc>
                        <path d="m19.5 12 -5 -5m5 5 -5 5m5 -5 -10 0c-1.66667 0 -5 1 -5 5" stroke={project.headingColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                </div>

                {/* Visuals Grid */}
                <div className="w-full max-w-[905px] flex flex-col gap-[20px] items-center px-4 md:px-0">
                    {project.visuals.map((visual, index) => renderVisual(visual, index))}
                </div>
            </motion.section>

            {/* 3. Next Project Section */}
            <motion.div
                ref={footerContainerRef}
                className={`relative w-full h-[400vh] ${isHoveringFooter && isTransitionComplete ? 'cursor-none' : 'cursor-pointer'}`}
                onPointerEnter={() => setIsHoveringFooter(true)}
                onPointerLeave={() => setIsHoveringFooter(false)}
                onClick={() => {
                    const nextId = nextProject.id;
                    lenisRef.current?.stop();
                    window.scrollTo(0, 0);
                    navigate(`/case-study/${nextId}`);
                }}
            >
                <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
                    <CaseStudyHero
                        sectionRef={section3Ref}
                        projectTitle={project.nextProjectTitle}
                        projectYear={project.nextProjectYear}
                        projectIndustry={project.nextProjectIndustry}
                        heroDescription={project.nextProjectDescription}
                        bgColor={dynamicBg}
                        scrollText="(Keep Scrolling to view next case study)"
                        scrollProgress={footerScrollValue}
                        onFillComplete={() => {
                            const nextId = nextProject.id;
                            lenisRef.current?.stop();
                            window.scrollTo(0, 0);
                            navigate(`/case-study/${nextId}`);
                        }}
                    />
                </div>
            </motion.div>
            <AboutOverlay />

            {/* Custom Cursor for Footer - Desktop Only */}
            <AnimatePresence>
                {isHoveringFooter && isTransitionComplete && (
                    <motion.div
                        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
                        style={{
                            x: smoothMouseX,
                            y: smoothMouseY,
                        }}
                    >
                        <motion.div
                            className="flex items-center overflow-hidden bg-[#fbf9ef] text-[#171412] font-['Geist_Mono',monospace]"
                            style={{
                                width: '135px',
                                padding: '6px 10px',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '11px',
                                fontWeight: 500,
                                letterSpacing: '0.22px',
                                textTransform: 'uppercase'
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                            exit={{ scale: 0, opacity: 0, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                        >
                            <motion.div
                                className="flex"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center whitespace-nowrap gap-[10px] pr-[10px]">
                                    <span>KEEP SCROLLING</span>
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0L6 3L3 6L0 3L3 0Z"/></svg>
                                    <span>KEEP SCROLLING</span>
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0L6 3L3 6L0 3L3 0Z"/></svg>
                                </div>
                                <div className="flex items-center whitespace-nowrap gap-[10px] pr-[10px]">
                                    <span>KEEP SCROLLING</span>
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0L6 3L3 6L0 3L3 0Z"/></svg>
                                    <span>KEEP SCROLLING</span>
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0L6 3L3 6L0 3L3 0Z"/></svg>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
