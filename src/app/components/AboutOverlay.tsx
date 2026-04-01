import { motion, AnimatePresence } from "motion/react";
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
                    {/* Obsidian Frost Backdrop */}
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        animate={{ backdropFilter: "blur(40px)", opacity: 1 }}
                        exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        className="absolute inset-0 bg-black/80"
                        onClick={closeAbout}
                    />

                    {/* Editorial Card Component */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="relative w-full max-w-[1100px] aspect-[1.65/1] bg-[#F5F0E6] rounded-none overflow-hidden flex shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border border-white/5"
                    >
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
                            className="absolute top-6 right-6 z-30 text-[#0047AB]/30 hover:text-[#0047AB] transition-colors p-3 flex items-center justify-center group"
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
                        <div className="w-[48%] relative overflow-hidden group/art p-6">
                             <div className="w-full h-full relative rounded-none overflow-hidden">
                                <img 
                                    src={birdsImg} 
                                    className="w-full h-full object-cover grayscale-[0.05] brightness-[1.02] contrast-[1.02]" 
                                    alt="About photo"
                                />
                             </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex-1 flex flex-col justify-between p-[4vw] text-[#0047AB] z-10">
                            <div className="flex flex-col">
                                <h1 className="font-['Times_New_Roman',_serif] text-[5.5vw] font-medium leading-[0.85] tracking-[-0.05em] mb-[4vh]">
                                    Hello, World!
                                </h1>
                                
                                <div className="flex flex-col gap-[2.5vh] opacity-90 max-w-[95%]">
                                    {paragraphs.map((paragraph, i) => (
                                        <p key={i} className="font-['Geist',_sans-serif] text-[1.1vw] font-normal leading-[1.55] tracking-tight text-justify">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-8">
                                <a 
                                    href="mailto:hello@sumedh.design" 
                                    className="group inline-flex items-center gap-2 font-['Geist',_sans-serif] text-[1.2vw] font-medium transition-all"
                                >
                                    Let's connect 
                                    <span className="underline underline-offset-8 decoration-1 inline-flex items-center gap-1.5 ml-1 border-b border-transparent hover:border-[#0047AB] transition-all">
                                        Email me 
                                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
