import { useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import AsciiBackground from "./components/AsciiBackground";
import AboutOverlay from "./components/AboutOverlay";

export default function Playground() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const playgroundText = "PLAYGROUND".split("");
    const comingSoonText = "COMING SOON".split("");

    return (
        <div className="bg-[#000000] min-h-[100dvh] w-full relative overflow-hidden flex flex-col selection:bg-[#FF4C11] selection:text-white">
            {/* Optimized Raw Canvas / Pre Background */}
            <AsciiBackground />

            {/* Header uses fixed positioning internally */}
            <Header color="#ffffff" />

            {/* Main Content */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center pointer-events-none px-4">
                <div className="relative flex flex-col items-center justify-center pb-[10vh]">
                    
                    {/* Background giant text */}
                    <div className="flex font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold text-[18vw] md:text-[14vw] tracking-[-0.04em] uppercase leading-[0.8] text-white opacity-10">
                        {playgroundText.map((char, i) => (
                            <motion.span
                                key={i}
                                className="inline-block"
                                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1.2, delay: 0.2 + (i * 0.05), ease: [0.33, 1, 0.68, 1] }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Foreground coming soon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex overflow-hidden py-2" style={{ paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
                            {comingSoonText.map((char, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block font-['Geist_Mono',_sans-serif] font-bold text-[8vw] md:text-[5vw] text-[#FF4C11] tracking-tighter"
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.8 + (i * 0.04),
                                        ease: [0.33, 1, 0.68, 1]
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Technical Subtext indicator */}
                    <motion.div 
                        className="absolute -bottom-[6vh] font-['Geist_Mono',_sans-serif] text-[10px] md:text-[12px] text-white opacity-40 uppercase tracking-widest flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-[#FF4C11] animate-pulse" />
                        Awaiting sandbox initialization...
                    </motion.div>
                </div>
            </main>
            
            <AboutOverlay />
        </div>
    );
}
