import React, { useEffect, useRef } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import imgMouseWireless from "../../assets/0248826545f879f670bc16bf4f920e0d8f90d596.svg";

interface CaseStudyHeroProps {
    sectionRef: React.RefObject<HTMLElement | null>;
    projectTitle: string;
    projectYear: string;
    projectIndustry: string;
    heroDescription: string;
    bgColor: string;
    scrollText?: string;
    scrollProgress?: MotionValue<number>;
    onFillComplete?: () => void;
}

export default function CaseStudyHero({
    sectionRef,
    projectTitle,
    projectYear,
    projectIndustry,
    heroDescription,
    bgColor,
    scrollText = '(Scroll down)',
    scrollProgress,
    onFillComplete
}: CaseStudyHeroProps) {
    const hasTriggeredRef = useRef(false);

    // If scrollProgress is provided, map it (e.g., from 0.3 to 0.9)
    // to a percentage for the clip-path. We use a dummy value if it's undefined
    // because useTransform still expects a valid MotionValue.
    // However, we only render the overlay if scrollProgress actually exists.
    const dummyMotionValue = useTransform(() => 0);
    const fillPercentage = useTransform(
        scrollProgress || dummyMotionValue,
        [0, 0.95], // Start filling immediately on overscroll, finish just before the absolute bottom
        [0, 100]
    );

    useEffect(() => {
        if (!scrollProgress || !onFillComplete) return;

        const unsubscribe = scrollProgress.on("change", (latest) => {
            if (latest >= 0.98 && !hasTriggeredRef.current) {
                hasTriggeredRef.current = true;
                onFillComplete();
            } else if (latest < 0.9) {
                // Reset if they scroll back up
                hasTriggeredRef.current = false;
            }
        });

        return () => unsubscribe();
    }, [scrollProgress, onFillComplete]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[100vh] flex flex-col items-center justify-between text-white overflow-hidden pb-[40px]" style={{ backgroundColor: bgColor }}>
            {/* Empty spacer for fixed header overlay */}
            <div className="w-full h-[100px] shrink-0" />

            {/* Hero Content */}
            <div className="flex flex-col items-center w-full max-w-[968px] mx-auto z-10">
                {/* Title */}
                <div className="relative mb-20 w-full flex justify-center">
                    {/* Base text (dimmed) */}
                    <h1 
                        className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] text-[8vw] leading-none md:text-[128px] font-bold tracking-[-5.12px] uppercase text-center w-full"
                        style={{ opacity: scrollProgress ? 0.4 : 1 }}
                    >
                        {projectTitle}
                    </h1>

                    {/* Filled text overlay (revealed by scroll) */}
                    {scrollProgress && (
                        <motion.h1 
                            className="absolute inset-0 font-['Helvetica_Neue',_'Helvetica',_sans-serif] text-[8vw] leading-none md:text-[128px] font-bold tracking-[-5.12px] uppercase text-center w-full pointer-events-none select-none"
                            style={{ 
                                opacity: 1,
                                // Clip from the bottom up. 
                                // `inset(top right bottom left)`
                                // `100 - val` on the top property means the top is clipped heavily when val is 0.
                                // Bottom is 0, meaning it anchors to the bottom.
                                clipPath: useTransform(fillPercentage, (val) => `inset(${100 - val}% 0 0 0)`)
                            }}
                        >
                            {projectTitle}
                        </motion.h1>
                    )}
                </div>

                {/* Project Info (Year & Industry) */}
                <div className="flex justify-center items-center w-full max-w-[400px] mb-24">
                    <div className="flex flex-col items-center flex-1">
                        <span className="font-['Geist_Mono',sans-serif] text-[10px] text-white/50 uppercase tracking-[1.12px] mb-1">Year</span>
                        <span className="text-[14px]">{projectYear}</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                        <span className="font-['Geist_Mono',sans-serif] text-[10px] text-white/50 uppercase tracking-[1.12px] mb-1">Industry</span>
                        <span className="text-[14px]">{projectIndustry}</span>
                    </div>
                </div>

                {/* Hero Sub-description */}
                <p
                    className="text-center whitespace-pre-wrap max-w-[490px]"
                    style={{
                        color: '#FFF',
                        fontFamily: 'Geist, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: '140%',
                        letterSpacing: '-0.2px'
                    }}
                >
                    {heroDescription}
                </p>
            </div>

            {/* Scroll Down Indicator */}
            <div className="flex flex-col items-center gap-2 opacity-70 mb-4 z-10" style={{ marginTop: '8vh' }}>
                <div className="w-6 h-6 flex justify-center items-center">
                    <img src={imgMouseWireless} className="w-full h-full object-contain" alt="Scroll" />
                </div>
                <span className="text-[12px] font-['Arial',sans-serif]">{scrollText}</span>
            </div>
        </section>
    );
}
