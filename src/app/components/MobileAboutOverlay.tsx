import { motion, AnimatePresence } from "motion/react";
import { useUI } from "../context/UIContext";
import { X } from "lucide-react";
import birdsImg from "../../assets/about_photo.jpg";

export default function MobileAboutOverlay() {
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
                    className="fixed inset-0 z-[100] flex flex-col justify-end md:hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        animate={{ backdropFilter: "blur(20px)", opacity: 1 }}
                        exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-black/80"
                        onClick={closeAbout}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full h-[85vh] bg-[#F5F0E6] rounded-t-2xl flex flex-col"
                    >
                        {/* Noise Texture Overlay */}
                        <div 
                            className="absolute inset-0 pointer-events-none opacity-[0.75] mix-blend-multiply z-20 rounded-t-2xl" 
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                backgroundSize: '100px 100px'
                            }} 
                        />

                        {/* Top close button */}
                        <div className="absolute top-4 right-4 z-30">
                            <button 
                                onClick={closeAbout}
                                className="bg-[#F5F0E6]/80 backdrop-blur-sm rounded-full p-2 text-[#0047AB] border border-[#0047AB]/10 shadow-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto z-10 flex flex-col relative custom-scrollbar rounded-t-2xl">
                            {/* Photo */}
                            <div className="w-full h-[40vh] shrink-0 relative">
                                <img 
                                    src={birdsImg} 
                                    className="w-full h-full object-cover grayscale-[0.05] brightness-[1.02] contrast-[1.02]" 
                                    alt="About photo"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col text-[#0047AB] gap-6 flex-1 min-h-[50vh]">
                                <h1 className="font-['Times_New_Roman',_serif] text-[clamp(32px,8vw,48px)] font-medium leading-[0.95] tracking-[-0.05em] shrink-0">
                                    Hello, World!
                                </h1>
                                
                                <div className="flex flex-col gap-4 opacity-90 grow">
                                    {paragraphs.map((paragraph, i) => (
                                        <p key={i} className="font-['Geist',_sans-serif] text-[15px] leading-[1.6]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-2 pt-6 border-t border-[#0047AB]/10 flex flex-col gap-4 shrink-0 pb-8">
                                    <a 
                                        href="/resume.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="font-['Geist',_sans-serif] text-[15px] font-[500] w-fit"
                                    >
                                        View CV
                                    </a>

                                    <div className="flex flex-wrap gap-6 opacity-90">
                                        <a href="mailto:hello@sumedh.design" className="font-['Geist',_sans-serif] text-[15px]">Email</a>
                                        <a href="https://www.linkedin.com/in/sumedh-bambal" target="_blank" rel="noopener noreferrer" className="font-['Geist',_sans-serif] text-[15px]">LinkedIn</a>
                                        <a href="https://x.com/sumedhb03" target="_blank" rel="noopener noreferrer" className="font-['Geist',_sans-serif] text-[15px]">X</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
