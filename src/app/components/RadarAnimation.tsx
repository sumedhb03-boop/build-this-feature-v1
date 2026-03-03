import { motion } from "motion/react";

export default function RadarAnimation() {
    return (
        // Increased size from 1.5vw to 1.65vw (1.5 * 1.1) and changed colors to orange #FF4C11
        <div className="relative flex items-center justify-center shrink-0 w-[1.65vw] h-[1.65vw] rounded-full overflow-hidden bg-[#1A0802] border border-[#FF4C11]/40 shadow-[0_0_10px_rgba(255,76,17,0.2)]">

            {/* 1. Concentric Circles */}
            <div className="absolute w-[66%] h-[66%] rounded-full border border-[#FF4C11]/30" />
            <div className="absolute w-[33%] h-[33%] rounded-full border border-[#FF4C11]/30" />

            {/* 2. Crosshairs */}
            <div className="absolute w-full h-[1px] bg-[#FF4C11]/40" />
            <div className="absolute h-full w-[1px] bg-[#FF4C11]/40" />

            {/* 3. The Radar Sweep (Scanner) */}
            <motion.div
                className="absolute w-[100%] h-[100%] rounded-full"
                style={{
                    background: "conic-gradient(from 0deg, transparent 70%, rgba(255,76,17,0.1) 90%, rgba(255,76,17,0.8) 100%)",
                    transformOrigin: "center center",
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                }}
            />

            {/* 4. Tiny Blips (Pings) */}
            <motion.div
                className="absolute w-[2px] h-[2px] rounded-full bg-[#FF4C11] top-[30%] right-[30%] shadow-[0_0_4px_#FF4C11]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 3, // Matches sweep duration
                    times: [0, 0.1, 1], // Quick fade in, slow fade out
                    delay: 0.1, // Offset based on angle
                }}
            />

            <motion.div
                className="absolute w-[1.5px] h-[1.5px] rounded-full bg-[#FF4C11] bottom-[40%] left-[25%] shadow-[0_0_3px_#FF4C11]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    times: [0, 0.1, 1],
                    delay: 1.6, // Approx half sweep
                }}
            />

            {/* Center Dot */}
            <div className="absolute w-[2.5px] h-[2.5px] rounded-full bg-[#FF4C11] shadow-[0_0_6px_#FF4C11]" />
        </div>
    );
}
