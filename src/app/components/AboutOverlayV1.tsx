import { motion, AnimatePresence } from "motion/react";
import { useUI } from "../context/UIContext";
import RadarAnimation from "./RadarAnimation";
import { X } from "lucide-react";

export default function AboutOverlayV1() {
    const { isAboutOpen, closeAbout } = useUI();

    const bioLines = [
        "I'm a designer who loves to build",
        "things and solve complex problems.",
        "Currently exploring the intersection",
        "of AI and human-centered design."
    ];

    return (
        <AnimatePresence>
            {isAboutOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-[2.222vw]"
                >
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(40px)" }}
                        exit={{ backdropFilter: "blur(0px)" }}
                        className="absolute inset-0 bg-black/80"
                        onClick={closeAbout}
                    />

                    {/* Main Content Container */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                        className="relative w-full max-w-[1440px] h-full flex flex-col justify-between pointer-events-none"
                    >
                        {/* Header Area */}
                        <div className="flex justify-between items-start pointer-events-auto">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-['Geist',sans-serif] text-[#fbf9ef] text-[3.5vw] font-medium leading-[0.9] tracking-[-0.04em] uppercase">
                                    About
                                </h1>
                                <p className="font-['Geist_Mono',sans-serif] text-[#fbf9ef]/40 text-[0.833vw] uppercase tracking-[0.1em]">
                                    Sumedh Bambal
                                </p>
                            </div>
                            
                            <button 
                                onClick={closeAbout}
                                className="group flex items-center gap-3 font-['Geist_Mono',sans-serif] text-[#fbf9ef]/60 text-[0.833vw] uppercase hover:text-[#fbf9ef] transition-colors"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                                <div className="p-3 rounded-full border border-white/10 group-hover:border-white/40 transition-colors">
                                    <X size={20} />
                                </div>
                            </button>
                        </div>

                        {/* Center Content Section */}
                        <div className="grid grid-cols-12 gap-[2.222vw] items-center py-[4vh]">
                            {/* Left: Bio Text */}
                            <div className="col-span-12 lg:col-span-8 flex flex-col gap-[3.333vh]">
                                <div className="flex flex-col">
                                    {bioLines.map((line, i) => (
                                        <div key={i} className="overflow-hidden py-[0.1em] -my-[0.1em]">
                                            <motion.p
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ 
                                                    duration: 0.8, 
                                                    delay: 0.4 + (i * 0.1),
                                                    ease: [0.33, 1, 0.68, 1]
                                                }}
                                                className="font-['Geist',sans-serif] text-[#fbf9ef] text-[3.2vw] font-light leading-[1.05] tracking-[-0.03em]"
                                            >
                                                {line}
                                            </motion.p>
                                        </div>
                                    ))}
                                </div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 0.6, y: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="max-w-[35vw]"
                                >
                                    <p className="font-['Geist',sans-serif] text-[#fbf9ef] text-[1.1vw] leading-[1.6] font-light">
                                        Based in Mumbai, India. I specialize in designing scalable product experiences 
                                        and visual identities for startups that want to stand out. My approach combines 
                                        technical precision with expressive aesthetics.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right: Status / Location Widget */}
                            <div className="hidden lg:col-span-4 lg:flex flex-col items-end gap-6 pointer-events-auto">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md w-full max-w-[20vw]"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <RadarAnimation />
                                        <div className="flex flex-col">
                                            <span className="text-[#FF4C11] font-['Geist_Mono',sans-serif] text-[0.7vw] uppercase font-bold">Currently Active</span>
                                            <span className="text-[#fbf9ef] font-['Geist',sans-serif] text-[0.9vw]">Mumbai, India</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <a href="#" className="group flex justify-between items-center text-[#fbf9ef]/60 hover:text-[#fbf9ef] transition-colors">
                                            <span className="font-['Geist_Mono',sans-serif] text-[0.8vw] uppercase">Twitter</span>
                                            <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#FF4C11] transition-colors" />
                                        </a>
                                        <a href="#" className="group flex justify-between items-center text-[#fbf9ef]/60 hover:text-[#fbf9ef] transition-colors">
                                            <span className="font-['Geist_Mono',sans-serif] text-[0.8vw] uppercase">LinkedIn</span>
                                            <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#FF4C11] transition-colors" />
                                        </a>
                                        <a href="#" className="group flex justify-between items-center text-[#fbf9ef]/60 hover:text-[#fbf9ef] transition-colors">
                                            <span className="font-['Geist_Mono',sans-serif] text-[0.8vw] uppercase">Dribbble</span>
                                            <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#FF4C11] transition-colors" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Footer Area */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <span className="font-['Geist_Mono',sans-serif] text-[#fbf9ef]/20 text-[0.7vw] uppercase">Availability</span>
                                <p className="font-['Geist',sans-serif] text-[#fbf9ef] text-[0.9vw]">Open for freelance projects from May 2024</p>
                            </div>
                            
                            <div className="flex gap-[4vw]">
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="font-['Geist_Mono',sans-serif] text-[#fbf9ef]/20 text-[0.7vw] uppercase">Email</span>
                                    <p className="font-['Geist',sans-serif] text-[#fbf9ef] text-[0.9vw]">hello@sumedh.design</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
