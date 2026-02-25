import React from 'react';
import imgMouseWireless from "../../assets/0248826545f879f670bc16bf4f920e0d8f90d596.svg";

interface CaseStudyHeroProps {
    sectionRef: React.RefObject<HTMLElement | null>;
    projectTitle: string;
    projectYear: string;
    projectIndustry: string;
    heroDescription: string;
}

export default function CaseStudyHero({
    sectionRef,
    projectTitle,
    projectYear,
    projectIndustry,
    heroDescription
}: CaseStudyHeroProps) {
    return (
        <section ref={sectionRef} className="relative bg-[#9a054e] w-full min-h-[100vh] flex flex-col items-center justify-between text-white overflow-hidden pb-[40px]">
            {/* Empty spacer for fixed header overlay */}
            <div className="w-full h-[100px] shrink-0" />

            {/* Hero Content */}
            <div className="flex flex-col items-center w-full max-w-[968px] mx-auto z-10">
                {/* Title */}
                <h1 className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] text-[8vw] leading-none mb-20 md:text-[128px] font-bold tracking-[-5.12px] uppercase text-center w-full">
                    {projectTitle}
                </h1>

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
                <span className="text-[12px] font-['Arial',sans-serif]">(Scroll down)</span>
            </div>
        </section>
    );
}
