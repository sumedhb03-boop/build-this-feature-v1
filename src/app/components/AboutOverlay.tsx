import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import { X, ArrowUpRight } from "lucide-react";
import birdsImg from "../../assets/about_photo.jpg";

export default function AboutOverlay() {
    const { isAboutOpen, closeAbout } = useUI();

    const paragraphs = [
        "I'm Sumedh Bambal, a Product Designer based in Pune, India. With a strong foundation built through hands-on internships and independent freelance work, I focus on crafting intuitive digital experiences and am currently seeking my first full-time role.",
        "I’ve had the opportunity to work closely with early-stage startups, creating products across both web and mobile spaces. I have a strong interest in applied AI products, and beyond just designing interfaces, I love bringing my own ideas to life using the gift of vibecoding.",
        <>To me, design is how you translate a vision into trust and an idea into something tangible. Something <span className="italic">memorable</span>.</>
    ];

    const xDrag = useMotionValue(0);
    const [isFolded, setIsFolded] = useState(true);
    const [isFullyOpen, setIsFullyOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Safe check for window existence (hydration safety)
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", handleResize);
        
        function handleResize() {
            checkMobile();
        }
    }, []);

    // Map drag coordinate (0-300) to section transforms
    const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
    const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
    const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
    const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);
    
    // Dynamic opacity for seams/shadows based on fold state
    const foldIntensity = useTransform(xDrag, [200, 300], [1, 0]);

    // Slight skews to emulate 3D paper folds during transition, flattening to 0 when open
    const leftSkew = useTransform(xDrag, [0, 300], ["-2deg", "0deg"]);
    const rightSkew = useTransform(xDrag, [0, 300], ["2deg", "0deg"]);

    // Track state to disable draggable layer when interacting with content
    useEffect(() => {
        const unsubscribe = xDrag.on("change", (latest) => {
            setIsFolded(latest < 290);
            setIsFullyOpen(latest >= 299.9); // Use 299.9 to account for spring resting delta
        });
        return unsubscribe;
    }, [xDrag]);

    // Automatically unfold the card after the entrance animation finishes
    useEffect(() => {
        if (isAboutOpen) {
            xDrag.set(0); // Ensure it starts completely folded
            
            const timeout = setTimeout(() => {
                animate(xDrag, 300, { 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 20,
                    restDelta: 0.001
                });
            }, 1200); // Wait 1.2s for the slide-up entrance to complete
            return () => clearTimeout(timeout);
        }
    }, [isAboutOpen, xDrag]);

    // The inner UI of the card rendered inside the 3 columns
    const CardContentInner = () => (
        <div className="relative w-full h-full flex bg-[#F5F0E6]">
            {/* Noise Texture Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.75] mix-blend-multiply z-20" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                }} 
            />

            {/* Close button (top right of card) */}
            <motion.button 
                onClick={closeAbout}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-30 text-[#0047AB]/30 hover:text-[#0047AB] transition-colors p-2 md:p-3 flex items-center justify-center group cursor-pointer"
                whileHover="hover"
                initial="initial"
            >
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="transparent"
                        strokeLinecap="round"
                        variants={{
                            initial: { pathLength: 0, opacity: 0 },
                            hover: { pathLength: 1.01, opacity: 1 }
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </svg>
                <X size={18} className="relative z-10" />
            </motion.button>

            {/* Left Side: Photo */}
            <div className="w-[40%] relative overflow-hidden p-6 hidden md:block">
                 <div className="w-full h-full relative rounded-none overflow-hidden">
                    <img 
                        src={birdsImg} 
                        className="w-full h-full object-cover grayscale-[0.05] brightness-[1.02] contrast-[1.02]" 
                        alt="About photo"
                    />
                 </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-[60%] flex-1 flex flex-col justify-between p-[32px] md:p-[4vw] text-[#0047AB] z-10 min-h-0">
                <div className="flex flex-col min-h-0 overflow-hidden">
                    <h1 className="font-['Times_New_Roman',_serif] text-[clamp(40px,5vw,72px)] font-medium leading-[0.9] tracking-[-0.05em] mb-6 md:mb-[4vh] shrink-0">
                        Hello, World!
                    </h1>
                    
                    <div className="flex flex-col gap-[2vh] opacity-90 max-w-full md:max-w-[85%] lg:max-w-[750px] overflow-y-auto pr-2 custom-scrollbar">
                        {paragraphs.map((paragraph, i) => (
                            <p key={i} className="font-['Geist',_sans-serif] text-[clamp(15px,1vw,18px)] font-normal leading-[1.6] tracking-tight text-justify">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-auto pt-6 border-t border-[#0047AB]/5 shrink-0 gap-4">
                    {/* Primary Link: View CV */}
                    <div className="flex items-center">
                        <motion.a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-['Geist',_sans-serif] text-[clamp(14px,1vw,16px)] font-normal opacity-90 transition-opacity relative group"
                            initial="initial"
                            whileHover="hover"
                        >
                            <span>View CV</span>
                            <motion.div 
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0047AB] origin-left"
                                variants={{
                                    initial: { scaleX: 0 },
                                    hover: { scaleX: 1 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                        </motion.a>
                    </div>

                    {/* Contact & Social Links: Email, Linked, X */}
                    <div className="flex items-center gap-[4vw] md:gap-[2vw]">
                        <motion.a 
                            href="mailto:hello@sumedh.design" 
                            className="group flex items-center font-['Geist',_sans-serif] text-[clamp(14px,1vw,16px)] font-normal opacity-90 relative"
                            initial="initial"
                            whileHover="hover"
                        >
                            <span className="relative">
                                Email
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0047AB] origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </span>
                        </motion.a>
                        <motion.a 
                            href="https://www.linkedin.com/in/sumedh-bambal" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-['Geist',_sans-serif] text-[clamp(14px,1vw,16px)] font-normal opacity-90 transition-opacity relative group"
                            initial="initial"
                            whileHover="hover"
                        >
                            <span>LinkedIn</span>
                            <motion.div 
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0047AB] origin-left"
                                variants={{
                                    initial: { scaleX: 0 },
                                    hover: { scaleX: 1 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                        </motion.a>
                        <motion.a 
                            href="https://x.com/sumedhb03" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-['Geist',_sans-serif] text-[clamp(14px,1vw,16px)] font-normal opacity-90 transition-opacity relative group"
                            initial="initial"
                            whileHover="hover"
                        >
                            <span>X</span>
                            <motion.div 
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0047AB] origin-left"
                                variants={{
                                    initial: { scaleX: 0 },
                                    hover: { scaleX: 1 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <AnimatePresence>
            {isAboutOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-[2.222vw]"
                    style={{ perspective: "2500px" }}
                >
                    {/* Obsidian Frost Backdrop */}
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        animate={{ backdropFilter: "blur(40px)", opacity: 1 }}
                        exit={{ backdropFilter: "blur(0px)", opacity: 0, transition: { delay: 0.6, duration: 0.5 } }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black/80"
                        onClick={closeAbout}
                    />

                    {/* 2.5D Foldable Map Wrapper */}
                    <motion.div
                        initial={{ y: "120vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "120vh", transition: { delay: 0, duration: 0.8, ease: [0.33, 1, 0.68, 1] } }}
                        transition={{ y: { delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] } }}
                        className={`relative grid w-full max-w-[1100px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)] ${
                            isMobile ? "h-[85vh] aspect-auto" : "h-[min(85vh,720px)] aspect-auto md:aspect-[1.65/1]"
                        }`}
                        style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                    >
                        {isFullyOpen && !isMobile ? (
                            <div className="[grid-area:1/1] w-full h-full bg-[#F5F0E6] overflow-hidden">
                                <CardContentInner />
                            </div>
                        ) : (
                            /* 3 Columns for the map fold */
                            <div className="grid grid-cols-3 [grid-area:1/1] w-full h-full">
                                
                                {/* Left Section (Column 1) */}
                                <motion.div 
                                    style={{ 
                                        x: isMobile ? 0 : xLeftSection, 
                                        skewY: isMobile ? 0 : leftSkew,
                                        width: isMobile ? "100%" : "calc(33.33% + 0.5px)"
                                    }}
                                    className="relative overflow-hidden origin-bottom-right z-30 bg-[#F5F0E6]"
                                >
                                    {/* Crease Shadow */}
                                    <motion.div 
                                        className="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-r from-transparent to-black/10 z-40 hidden md:block"
                                        style={{ opacity: foldIntensity }}
                                    />
                                    <div className="absolute top-0 left-0 w-[300%] h-full">
                                        <CardContentInner />
                                    </div>
                                </motion.div>

                                {/* Center Section (Column 2) */}
                                <motion.div 
                                    style={{ 
                                        scaleX: isMobile ? 1 : centerScale, 
                                        "--brightness": isMobile ? 1 : centerBrightness 
                                    } as any}
                                    className="relative overflow-hidden origin-center z-10 brightness-[--brightness] bg-[#F5F0E6]"
                                >
                                    {/* Center Crease Shadows */}
                                    <motion.div 
                                        className="absolute inset-y-0 left-0 w-[20px] bg-gradient-to-l from-transparent to-black/5 z-40 hidden md:block"
                                        style={{ opacity: foldIntensity }}
                                    />
                                    <motion.div 
                                        className="absolute inset-y-0 right-0 w-[20px] bg-gradient-to-r from-transparent to-black/5 z-40 hidden md:block"
                                        style={{ opacity: foldIntensity }}
                                    />
                                    <div className="absolute top-0 left-[-100%] w-[300%] h-full">
                                        <CardContentInner />
                                    </div>
                                </motion.div>

                                {/* Right Section (Column 3) */}
                                <motion.div 
                                    style={{ x: isMobile ? 0 : xRightSection, skewY: isMobile ? 0 : rightSkew }}
                                    className="relative overflow-hidden origin-bottom-left z-20 bg-[#F5F0E6]"
                                >
                                    {/* Crease Shadow */}
                                    <motion.div 
                                        className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-l from-transparent to-black/10 z-40 hidden md:block"
                                        style={{ opacity: foldIntensity }}
                                    />
                                    <div className="absolute top-0 left-[-200%] w-[300%] h-full">
                                        <CardContentInner />
                                    </div>
                                </motion.div>
                            </div>
                        )}
                        
                        {/* Interactive Drag Overlay (optional, allows manual scrubbing to open/close) */}
                        {isFolded && !isMobile && (
                            <motion.div
                                drag="x"
                                _dragX={xDrag}
                                dragConstraints={{ left: 0, right: 300 }}
                                dragTransition={{ 
                                    modifyTarget: (target) => target > 150 ? 300 : 0, 
                                    timeConstant: 45 
                                }}
                                className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing [grid-area:1/1]"
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
