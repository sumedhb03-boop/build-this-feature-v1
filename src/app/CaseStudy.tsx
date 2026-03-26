import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import Header from "./components/Header";
import CaseStudyHero from "./components/CaseStudyHero";
import SidebarNav from "./components/SidebarNav";
import { CASE_STUDIES, CaseStudyData, Visual } from "./data/caseStudiesData";

import Lenis from 'lenis';

export default function CaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Get project data
    const project: CaseStudyData = CASE_STUDIES[id || "lucrente"] || CASE_STUDIES["lucrente"];

    const getNextId = (currentId: string) => {
        switch (currentId) {
            case 'scorecric': return 'lucrente';
            case 'lucrente': return 'cyhex';
            case 'cyhex': return 'originally-raw';
            case 'originally-raw': return 'scorecric';
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

    const localScrollY = useMotionValue(0);
    const footerScrollValue = useMotionValue(0);
    const exitColorProgress = useMotionValue(0);

    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const footerContainerRef = useRef<HTMLDivElement>(null);

    // 1. Entry Transition: From Hero color to dark (#121212) over 50vh
    const entryBg = useTransform(localScrollY, [0, window.innerHeight * 0.5], [project.heroBgColor, "#121212"]);
    const entryText = useTransform(localScrollY, [0, window.innerHeight * 0.5], [project.textColor, "#fbf9ef"]);

    // 2. Exit Transition: From dark to Next Project color over 50vh BEFORE footer overscroll starts
    const exitBg = useTransform(exitColorProgress, [0, 1], ["#121212", nextProject.heroBgColor]);
    const exitText = useTransform(exitColorProgress, [0, 1], ["#fbf9ef", nextProject.textColor]);

    // 3. Composite Dynamic Values: Prioritize exit values as we near bottom
    const dynamicBg = useTransform([exitColorProgress, entryBg, exitBg], ([p, entry, exit]) => (p as number) > 0 ? exit : (entry as string));
    const dynamicTextColor = useTransform([exitColorProgress, entryText, exitText], ([p, entry, exit]) => (p as number) > 0 ? exit : (entry as string));

    // Initial scroll reset
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleScroll = () => {
            const scrollY = lenis.scroll;
            const maxScroll = lenis.limit;

            // Calculate main content height by subtracting the overscroll area (300vh of the 400vh is overscroll)
            // The footer starts at H - 400vh because it is h-[400vh].
            // We want progress to reach 1 when scrollY hits that point.
            const overscrollAmount = window.innerHeight * 3; // 400vh total, 100vh for footer + 300vh overscroll
            const effectiveMaxScroll = maxScroll - overscrollAmount;
            const progress = effectiveMaxScroll > 0 ? Math.min(1, scrollY / effectiveMaxScroll) : 0;

            setScrollProgress(progress);
            localScrollY.set(scrollY);

            // Calculate background transition progress (last 50vh of main content)
            const exitStart = effectiveMaxScroll - (window.innerHeight * 0.5);
            const exitP = Math.min(1, Math.max(0, (scrollY - exitStart) / (window.innerHeight * 0.5)));
            exitColorProgress.set(exitP);

            // Calculate footer scroll progress (starts after effectiveMaxScroll)
            const footerProgress = Math.max(0, (scrollY - effectiveMaxScroll) / overscrollAmount);
            footerScrollValue.set(footerProgress);

            const viewportCenter = window.innerHeight / 2;
            const trackHeight = 270;
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

        // Initial check
        handleScroll();

        return () => {
            lenis.destroy();
        };
    }, [project]);

    const renderVisual = (visual: Visual, index: number) => {
        if (visual.type === 'single') {
            return (
                <div
                    key={index}
                    className="w-full relative overflow-hidden"
                    style={{
                        backgroundColor: visual.bgColor || project.contentBgColor,
                        height: visual.height || 'auto',
                        aspectRatio: visual.aspectRatio || 'auto'
                    }}
                >
                    <img src={visual.src} alt={visual.alt} className="w-full h-auto block" />
                </div>
            );
        } else {
            return (
                <div key={index} className="w-full flex gap-[20px]">
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{
                            backgroundColor: visual.leftBgColor || project.contentBgColor,
                            height: visual.height || '620px'
                        }}
                    >
                        <img src={visual.leftSrc} alt={visual.leftAlt} className="w-full h-full object-cover" />
                    </div>
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{
                            backgroundColor: visual.rightBgColor || project.contentBgColor,
                            height: visual.height || '620px'
                        }}
                    >
                        <img src={visual.rightSrc} alt={visual.rightAlt} className="w-full h-full object-cover" />
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
                const getNextId = (currentId: string) => {
                    switch (currentId) {
                        case 'scorecric': return 'lucrente';
                        case 'lucrente': return 'cyhex';
                        case 'cyhex': return 'originally-raw';
                        case 'originally-raw': return 'scorecric';
                        default: return 'lucrente';
                    }
                };
                const nextProject = CASE_STUDIES[getNextId(project.id)];
                return (
                    <SidebarNav 
                        id={id} 
                        iconColor={project.sidebarIconColor}
                        bgColor={project.sidebarBgColor}
                        hoverColor={project.sidebarHoverColor}
                        nextIconColor={nextProject.sidebarIconColor}
                        nextBgColor={nextProject.sidebarBgColor}
                        nextHoverColor={nextProject.sidebarHoverColor}
                        exitColorProgress={exitColorProgress}
                        scrollProgress={footerScrollValue}
                        mainScrollY={localScrollY}
                    />
                );
            })()}

            {/* 3. Scroll Bar Progress - Fixed at right-center */}
            <div className="fixed right-[32px] top-1/2 -translate-y-1/2 h-[270px] w-[52px] flex flex-col items-center justify-center z-50">
                <div
                    className="w-px h-full relative"
                    style={{ backgroundColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.2)" : "rgba(23, 20, 18, 0.2)" }}
                >
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                        style={{ top: `${scrollProgress * 100}%` }}
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
                <div className="w-full max-w-[905px] flex flex-col md:flex-row gap-[60px] md:gap-[120px] mb-[140px]">
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
                <div className="w-full max-w-[905px] flex justify-start items-center gap-2 mb-[32px]">
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
                <div className="w-full max-w-[905px] flex flex-col gap-[20px] items-center">
                    {project.visuals.map((visual, index) => renderVisual(visual, index))}
                </div>
            </motion.section>

            {/* 3. Next Project Section */}
            <motion.div
                ref={footerContainerRef}
                className="cursor-pointer relative w-full h-[400vh]"
                onClick={() => {
                    const nextId = nextProject.id;
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
                            window.scrollTo(0, 0);
                            navigate(`/case-study/${nextId}`);
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
