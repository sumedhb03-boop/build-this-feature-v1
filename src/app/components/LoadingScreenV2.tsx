import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, animate, useTransform } from "motion/react";

// Left bracket corners (top-left + bottom-left L-shapes)
function LeftCorners() {
    return (
        <div className="content-stretch flex flex-col h-[80px] items-start justify-between relative shrink-0 w-[17px]">
            {/* Top-left corner: Needs to face down and right. (Original path faces down-right, so no scales needed) */}
            <motion.div layoutId="corner-tl" className="relative w-[17px] h-[17px] opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw]">
                    <path fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667" />
                </svg>
            </motion.div>
            {/* Bottom-left corner: Needs to face up and right. (Flip Y) */}
            <motion.div layoutId="corner-bl" className="relative w-[17px] h-[17px] opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw] scale-y-[-1]">
                    <path fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667" />
                </svg>
            </motion.div>
        </div>
    );
}

// Right bracket corners (top-right + bottom-right, mirrored)
function RightCorners() {
    return (
        <div className="content-stretch flex flex-col h-[80px] items-end justify-between relative shrink-0 w-[17px]">
            {/* Top-right corner: Needs to face down and left. (Flip X) */}
            <motion.div layoutId="corner-tr" className="relative w-[17px] h-[17px] opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw] scale-x-[-1]">
                    <path fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667" />
                </svg>
            </motion.div>
            {/* Bottom-right corner: Needs to face up and left. (Flip X and Flip Y) */}
            <motion.div layoutId="corner-br" className="relative w-[17px] h-[17px] opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw] scale-x-[-1] scale-y-[-1]">
                    <path fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667" />
                </svg>
            </motion.div>
        </div>
    );
}

export default function LoadingScreenV2({ onComplete }: { onComplete: () => void }) {
    const [progressText, setProgressText] = useState(0);

    // We use a MotionValue to handle the actual math so it renders smoothly outside of React state loops
    const progressValue = useMotionValue(0);

    useEffect(() => {
        // We animate the motion value linearly (or nicely eased) from 0 to 100
        const controls = animate(progressValue, 100, {
            duration: 2.5, // Changed duration to 2.5s for a snappier feel
            ease: [0.33, 1, 0.68, 1], // Very smooth, premium ease-out
            onUpdate: (latest) => {
                setProgressText(Math.round(latest));
            },
            onComplete: () => {
                // Trigger the swap in Home.tsx directly.
                // Home.tsx's AnimatePresence will handle keeping this component mounted during exit.
                setTimeout(onComplete, 300);
            }
        });

        return () => controls.stop();
    }, [progressValue]);

    // Indicator center: from calc(50% + 260px) at 0% → calc(50% - 210px) at 100%
    // topOffsetPx goes from +260 to -210, delta = 470px
    // We compute this reactively from the motion value for perfectly smooth 60fps rendering
    const topOffsetPx = useTransform(progressValue, [0, 100], [260, -210]);

    // Half of indicator height (80px bracket)
    const halfIndicator = 40;

    // Top line: from 0 → (indicatorCenter - halfIndicator)
    // Bottom line: from (indicatorCenter + halfIndicator) → 100%
    // We express as percentages + px using CSS calc via useTransform
    const topLineBottom = useTransform(topOffsetPx, (val) => `calc(50% + ${val - halfIndicator}px)`);
    const bottomLineTop = useTransform(topOffsetPx, (val) => `calc(50% + ${val + halfIndicator}px)`);
    const indicatorTop = useTransform(topOffsetPx, (val) => `calc(50% + ${val}px)`);

    return (
        <motion.div
            key="loader-v2"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* The black background fades out independently so the corners can remain fully opaque while expanding */}
            <motion.div
                className="absolute inset-0 bg-black"
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="bg-transparent relative size-full overflow-hidden">

                {/* TOP vertical line segment — ends with horizontal tick at bottom */}
                <motion.div
                    className="absolute left-1/2 top-0 w-[31px] opacity-40 overflow-hidden"
                    style={{
                        x: "-50%",
                        top: 0,
                        height: topLineBottom,
                    }}
                    exit={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
                    transition={{ duration: 0.6, ease: "circIn" }}
                >
                    <svg width="31" height="100%" style={{ display: "block", width: "31px", height: "100%" }} preserveAspectRatio="none" fill="none">
                        {/* Vertical line */}
                        <line x1="15.5" x2="15.5" y1="0" y2="100%" stroke="white" />
                        {/* Horizontal tick at bottom */}
                        <line x1="0" x2="31" y1="100%" y2="100%" stroke="white" />
                    </svg>
                </motion.div>

                {/* BOTTOM vertical line segment — starts with horizontal tick at top */}
                <motion.div
                    className="absolute left-1/2 bottom-0 w-[31px] opacity-40"
                    style={{
                        x: "-50%",
                        top: bottomLineTop,
                    }}
                    exit={{ opacity: 0, scaleY: 0, transformOrigin: 'bottom' }}
                    transition={{ duration: 0.6, ease: "circIn" }}
                >
                    <svg width="31" height="100%" style={{ display: "block", width: "31px", height: "100%" }} preserveAspectRatio="none" fill="none">
                        {/* Horizontal tick at top */}
                        <line x1="0" x2="31" y1="0.5" y2="0.5" stroke="white" />
                        {/* Vertical line */}
                        <line x1="15.5" x2="15.5" y1="0" y2="100%" stroke="white" />
                    </svg>
                </motion.div>

                {/* Indicator: bracket + percentage text */}
                <motion.div
                    className="absolute left-1/2 flex items-center justify-between w-[120px] bg-transparent"
                    style={{
                        x: "-50%",
                        y: "-50%",
                        top: indicatorTop,
                        height: "80px",
                    }}
                >
                    <LeftCorners />
                    <div className="overflow-hidden flex items-center shrink-0">
                        <motion.p
                            className="text-white whitespace-nowrap"
                            style={{
                                fontFamily: "'Geist', sans-serif",
                                fontWeight: 300,
                                fontSize: "24px",
                                lineHeight: 1,
                            }}
                            exit={{ y: "110%" }} // Line unreveal down
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        >
                            {progressText}%
                        </motion.p>
                    </div>
                    <RightCorners />
                </motion.div>

            </div>
        </motion.div>
    );
}
