import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

function LetterReveal({ text, delay = 0 }: { text: string, delay?: number }) {
    return (
        <div className="flex overflow-hidden">
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
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white"
            exit={{
                y: "-100%",
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
        >
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
        </motion.div>
    );
}
