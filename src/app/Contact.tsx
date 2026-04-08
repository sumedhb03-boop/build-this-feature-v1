import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import AboutOverlay from "./components/AboutOverlay";

export default function Contact() {
    const words = ["WORK", "CREATE", "GET", "GROW"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#110e0c" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <motion.div
            key="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full min-h-screen font-['Geist_Mono',monospace] font-light flex flex-col items-center justify-start pt-[2vh] pb-[80px]"
            style={{ backgroundColor: "#050505" }} // Deep terminal black
        >
            <Header color="#ffffff" showScrollAnimation={false} />

            <div className="w-full px-6 md:px-12 lg:px-24 xl:px-[160px] 2xl:px-[200px] flex flex-col gap-16 md:gap-32 z-10 mt-16 md:mt-24 items-center">
                
                {/* Top Section: Hero & Terminal Card */}
                <div className="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-start justify-between">
                    
                    {/* Left: Hero Tagline */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col pt-10"
                    >
                        <h1 className="font-['Helvetica_Neue_LT_Std',sans-serif] uppercase text-[42px] md:text-[70px] lg:text-[84px] xl:text-[94px] text-[#e2e2e2] leading-[0.95] tracking-tight font-light flex flex-col items-start justify-start">
                            <div className="flex items-center gap-[0.15em] h-[1.1em] overflow-hidden">
                                <span>LET'S</span>
                                <span className="relative inline-grid text-[#FF4C11] h-full items-center">
                                    {/* Invisible spans to reserve space for the longest word */}
                                    {words.map((word) => (
                                        <span key={word} className="invisible col-start-1 row-start-1 pointer-events-none whitespace-nowrap">
                                            {word}
                                        </span>
                                    ))}
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={words[index]}
                                            initial={{ y: "120%" }}
                                            animate={{ y: "0%" }}
                                            exit={{ y: "-120%" }}
                                            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }} 
                                            className="col-start-1 row-start-1 inline-block whitespace-nowrap"
                                        >
                                            {words[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </div>
                            <div className="h-[1.1em]">TOGETHER</div>
                        </h1>
                    </motion.div>

                    {/* Right: Terminal Profile Card */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-full flex flex-col lg:pt-12 ml-auto lg:w-fit min-w-[300px]"
                    >
                        <div className="flex flex-col w-full font-light text-[11px] md:text-[12px] tracking-widest">
                            
                            <div className="grid grid-cols-[100px_1fr] items-start mb-3">
                                <span className="text-[#FF4C11]">REACH</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span><a href="mailto:hello@sumedh.design" className="hover:text-[#FF4C11]">HELLO@SUMEDH.DESIGN</a></span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] items-start mb-10">
                                <span className="text-[#FF4C11]">BASE</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span>UTC+05:30 / PUNE, INDIA</span>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-start mb-3">
                                <span className="text-[#FF4C11]">STATUS</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span>TRANSMITTING...</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] items-start mb-14">
                                <span className="text-[#FF4C11]">OPEN TO</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span>NEW COLLABORATIONS</span>
                            </div>

                            <div className="text-[#FF4C11] opacity-40 select-none mb-14 text-[10px] tracking-[0.3em]">
                                //////////////////////////////////////////
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-start mb-3">
                                <span className="text-[#FF4C11]">SOCIAL</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span><a href="https://linkedin.com/in/sumedhbambal" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4C11]">@LINKEDIN</a> <span className="text-[#FF4C11]/50 mx-2">/</span> <a href="https://x.com/sumedhbambal" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4C11]">@X_ARCHIVE</a></span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] items-start mb-24">
                                <span className="text-[#FF4C11]">ENCRYPT</span>
                                <span className="text-[#e2e2e2] text-right md:text-left"><span className="text-[#FF4C11] mr-2">&gt;</span><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4C11]">VIEW RESUME</a></span>
                            </div>

                            {/* Footer Row */}
                            <div className="border-t border-[#FF4C11]/20 pt-6 flex xl:items-start justify-between text-[9px] md:text-[10px] tracking-widest leading-[1.6]">
                                <div className="flex gap-4 sm:gap-6 items-center text-[#e2e2e2]">
                                    <div className="flex flex-col">
                                        <span>SYSTEM</span>
                                        <span>TERMINAL</span>
                                    </div>
                                    <div className="w-[6px] h-[6px] bg-[#FF4C11]"></div>
                                    <div className="flex flex-col">
                                        <span>VER</span>
                                        <span>2.0.4</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-6 items-start text-[#FF4C11] text-right">

                                    <div className="flex flex-col">
                                        <span>SECURE CHANNEL</span>
                                        <span>ESTABLISHED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Calendar Scheduler Element */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-[1000px] flex flex-col overflow-hidden h-full min-h-[600px]"
                >
                    <div className="mb-6 flex items-center justify-between text-[#FF4C11]">
                        <span className="text-[11px] md:text-[12px] uppercase tracking-widest font-light border border-[#FF4C11]/30 py-2 px-6 rounded-full inline-block text-center w-full md:w-auto">EXECUTE: SCHEDULE_MEETING.SH</span>
                    </div>
                    <div className="flex-1 rounded-xl overflow-hidden shadow-2xl relative w-full border border-[#FF4C11]/10">
                        {/* Wrapper for the calendar embed */}
                        <Cal 
                            calLink="sumedh.design"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ layout: 'month_view', theme: 'dark' }}
                        />
                    </div>
                </motion.div>
            </div>
            
            <AboutOverlay />
        </motion.div>
    );
}
