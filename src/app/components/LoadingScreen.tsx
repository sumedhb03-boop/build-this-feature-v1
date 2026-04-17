import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const TICKER_MESSAGES = [
    "[SYS_INIT] Boot sequence initiated...",
    "[ALLOC] Reserving memory blocks...",
    "[NET] Resolving host coordinates...",
    "[MOD] Loading core dependencies...",
    "[RENDER] Parsing geometric data...",
    "[ASSETS] Fetching high-res textures...",
    "[VRAM] Synchronizing frame buffers...",
    "[SEC] Establishing secure tunnel...",
    "[UI] Constructing DOM tree...",
    "[STATE] Hydrating components...",
    "[READY] Handshake complete."
];

function LetterReveal({ text, delay = 0 }: { text: string, delay?: number }) {
    return (
        <div className="flex overflow-hidden py-[0.1em] -my-[0.1em]">
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: delay + (i * 0.03),
                        ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2500; // 2.5 seconds
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);

            // Use standard easeOutExpo for count timing
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const nextCount = Math.floor(easedProgress * 100);

            setCount(nextCount);

            if (progress >= 1) {
                clearInterval(interval);
                setTimeout(onComplete, 800); // Small pause at 100%
            }
        }, 16);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black text-white"
            exit={{
                y: "-100%",
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* =========================================
                DESKTOP LAYOUT (Hidden on mobile) 
               ========================================= */}
            <div className="hidden md:flex w-full h-full flex-col items-center justify-center relative">
                {/* Branding Reveal */}
                <div className="absolute top-[45%] -translate-y-1/2 flex flex-col items-center gap-[1vh]">
                    <div className="font-['Helvetica_Neue',_sans-serif] font-bold text-[4vw] tracking-[-0.04em] uppercase leading-none">
                        <LetterReveal text="Sumedh Bambal" delay={0.2} />
                    </div>
                    <div className="font-['Geist_Mono',_sans-serif] font-normal opacity-40 text-[0.833vw] leading-[0.98] uppercase">
                        <LetterReveal text="Product Designer" delay={0.6} />
                    </div>
                </div>

                {/* Percentage Counter */}
                <div className="absolute bottom-[10vh] flex items-baseline gap-[0.5vw]">
                    <motion.div
                        className="font-['Geist_Mono',_sans-serif] font-light text-[3vw] leading-none tabular-nums"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {count}
                    </motion.div>
                    <motion.span
                        className="font-['Geist_Mono',_sans-serif] font-light text-[2vw] opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        %
                    </motion.span>
                </div>

                {/* Aesthetic Bottom Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-[#FF4C11]"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                    transition={{ ease: "linear", duration: 0.2 }}
                />
            </div>

            {/* =========================================
                MOBILE LAYOUT (Hidden on desktop) 
               ========================================= */}
            <div className="flex md:hidden w-full h-full flex-col relative p-6">
                {/* Mobile: Giant Typography */}
                <div className="flex flex-col mt-16 gap-2">
                    <div className="font-['Helvetica_Neue',_sans-serif] font-bold text-[18vw] tracking-[-0.04em] uppercase leading-[0.85]">
                        <LetterReveal text="SUMEDH" delay={0.2} />
                    </div>
                    <div className="font-['Helvetica_Neue',_sans-serif] font-bold text-[18vw] tracking-[-0.04em] uppercase leading-[0.85] text-[#FF4C11]">
                        <LetterReveal text="BAMBAL" delay={0.3} />
                    </div>
                    <div className="mt-4 font-['Geist_Mono',_sans-serif] font-normal opacity-60 text-[4vw] uppercase">
                        <LetterReveal text="Product Designer" delay={0.6} />
                    </div>
                </div>

                {/* Mobile: Bottom Section */}
                <div className="absolute bottom-10 left-6 right-6 flex flex-col items-start gap-4">
                    {/* Ticker */}
                    <div className="font-['Geist_Mono',_sans-serif] text-[3vw] opacity-50 h-[4vw] overflow-hidden whitespace-nowrap">
                        {TICKER_MESSAGES[Math.min(Math.floor(count / 10), TICKER_MESSAGES.length - 1)]}
                    </div>
                    
                    {/* Giant Percentage */}
                    <div className="flex items-baseline leading-[0.8]">
                        <motion.div
                            className="font-['Geist_Mono',_sans-serif] font-light text-[32vw] tracking-tighter tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: count === 100 ? "#FF4C11" : "#FFFFFF" }}
                            transition={{ duration: 0.5 }}
                        >
                            {count}
                        </motion.div>
                        <motion.span
                            className="font-['Geist_Mono',_sans-serif] font-light text-[12vw] opacity-20 ml-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            %
                        </motion.span>
                    </div>
                </div>

                {/* Mobile: Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[4px] bg-[#FF4C11]"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                    transition={{ ease: "linear", duration: 0.2 }}
                />
            </div>
        </motion.div>
    );
}
