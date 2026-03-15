import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "./components/Header";
import CaseStudyHero from "./components/CaseStudyHero";
import SidebarNav from "./components/SidebarNav";
import { CASE_STUDIES, CaseStudyData, Visual } from "./data/caseStudiesData";

import imgMouseWireless from "../assets/0248826545f879f670bc16bf4f920e0d8f90d596.svg";
import imgLeftArrow from "../assets/64bd323606e5dac218af5d5952719a257afc6531.svg";
import imgGlobe from "../assets/9494c29dcac4f541872683dc0aee3d066f10498e.svg";

import Lenis from 'lenis';

export default function CaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Get project data
    const project: CaseStudyData = CASE_STUDIES[id || "lucrente"] || CASE_STUDIES["lucrente"];

    // Scroll Progress Logic
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeBgColor, setActiveBgColor] = useState(project.heroBgColor);
    const [activeIndicatorColor, setActiveIndicatorColor] = useState("#ffffff");
    const [activeHeaderColor, setActiveHeaderColor] = useState("#ffffff");
    const [scrollYPos, setScrollYPos] = useState(0);

    const { scrollY } = useScroll();

    // Smooth background transition from hero color to dark (#121212) over 50vh
    const dynamicBg = useTransform(
        scrollY,
        [0, window.innerHeight * 0.5],
        [project.heroBgColor, "#121212"]
    );

    // Also transition the content section text color
    const dynamicTextColor = useTransform(
        scrollY,
        [0, window.innerHeight * 0.5],
        [project.textColor, "#fbf9ef"]
    );

    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleScroll = () => {
            const scrollY = lenis.scroll;
            const maxScroll = lenis.limit;
            const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
            setScrollProgress(progress);

            const viewportCenter = window.innerHeight / 2;
            const trackHeight = 270;
            const trackTop = viewportCenter - (trackHeight / 2);
            const indicatorY = trackTop + (progress * trackHeight * 0.9);

            const getSection = (yPos: number) => {
                const sections = [
                    { ref: section1Ref, color: project.heroBgColor },
                    { ref: section2Ref, color: project.contentBgColor },
                    { ref: section3Ref, color: project.nextProjectBgColor }
                ];

                for (const section of sections) {
                    if (section.ref.current) {
                        const rect = section.ref.current.getBoundingClientRect();
                        if (yPos >= rect.top && yPos <= rect.bottom) {
                            return section;
                        }
                    }
                }
                return null;
            };

            const sectionForIndicator = getSection(indicatorY);
            if (sectionForIndicator) {
                const isCream = sectionForIndicator.color === "#fbf9ef" && sectionForIndicator.ref !== section2Ref;
                setActiveBgColor(sectionForIndicator.color);
                setActiveIndicatorColor(isCream ? "#171412" : "#ffffff");
            }

            const sectionForHeader = getSection(40);
            if (sectionForHeader) {
                const isCream = sectionForHeader.color === "#fbf9ef" && sectionForHeader.ref !== section2Ref;
                setActiveHeaderColor(isCream ? "#171412" : "#ffffff");
            }

            setScrollYPos(scrollY);
        };

        lenis.on('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            lenis.destroy();
        };
    }, [project]);

    const renderVisual = (visual: Visual, index: number) => {
        if (visual.type === 'single') {
            return (
                <div 
                    key={index}
                    className="w-full h-auto relative overflow-hidden"
                    style={{ 
                        backgroundColor: visual.bgColor || project.contentBgColor,
                        height: visual.height || 'auto',
                        aspectRatio: visual.aspectRatio || 'auto'
                    }}
                >
                    <img src={visual.src} alt={visual.alt} className="w-full h-full object-cover" />
                </div>
            );
        } else {
            return (
                <div key={index} className="w-full flex gap-2">
                    <div 
                        className="flex-1 relative overflow-hidden"
                        style={{ 
                            backgroundColor: visual.leftBgColor || project.contentBgColor,
                            height: visual.height || '620px'
                        }}
                    >
                        <img src={visual.leftSrc} alt={visual.leftAlt} className="w-full h-full object-cover" />
                    </div>
                    <div 
                        className="flex-1 relative overflow-hidden"
                        style={{ 
                            backgroundColor: visual.rightBgColor || project.contentBgColor,
                            height: visual.height || '620px'
                        }}
                    >
                        <img src={visual.rightSrc} alt={visual.rightAlt} className="w-full h-full object-cover" />
                    </div>
                </div>
            );
        }
    };

    return (
        <motion.div 
            className="relative w-full font-['Geist',sans-serif] min-h-screen"
            style={{ backgroundColor: dynamicBg }}
        >
            {/* --- FIXED NAVIGATION ELEMENTS --- */}

            {/* 1. Header (Logo + Links) - Fixed from shared component */}
            <Header color={activeHeaderColor} scrollY={scrollYPos} showScrollAnimation={true} />

            {/* 2. Left Nav (Home + Next Project) - Refactored Component */}
            <SidebarNav id={id} imgGlobe={imgGlobe} imgLeftArrow={imgLeftArrow} />

            {/* 3. Scroll Bar Progress - Fixed at right-center */}
            <div className="fixed right-[32px] top-1/2 -translate-y-1/2 h-[270px] w-[52px] flex flex-col items-center justify-center z-50">
                <div
                    className="w-px h-full relative"
                    style={{ backgroundColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.2)" : "rgba(23, 20, 18, 0.2)" }}
                >
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                        style={{ top: `${scrollProgress * 90}%` }}
                    >
                        {/* Masking Background Circle (creates the gap in the line) */}
                        <motion.div
                            className="w-[29px] h-[29px] rounded-full flex items-center justify-center"
                            style={{ 
                                backgroundColor: (activeBgColor === project.heroBgColor || activeBgColor === project.contentBgColor) ? dynamicBg : activeBgColor 
                            }}
                        >
                            {/* Outer Indicator Ring */}
                            <div
                                className="w-[17px] h-[17px] border rounded-full flex items-center justify-center"
                                style={{ borderColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.3)" : "rgba(23, 20, 18, 0.3)" }}
                            >
                                {/* Inner Indicator Dot */}
                                <div
                                    className="w-[5px] h-[5px] rounded-full"
                                    style={{ backgroundColor: activeIndicatorColor }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTIONS --- */}

            {/* 1. Hero Section (Refactored Component) */}
            <CaseStudyHero
                sectionRef={section1Ref}
                projectTitle={project.title}
                projectYear={project.year}
                projectIndustry={project.industry}
                heroDescription={project.heroDescription}
                bgColor="transparent" // Allow page background to show through
            />

            {/* 2. Main Content Section */}
            <motion.section 
                ref={section2Ref} 
                className="relative w-full py-[140px] flex flex-col items-center" 
                style={{ 
                    backgroundColor: 'transparent',
                    color: dynamicTextColor 
                }}
            >
                {/* Description Text */}
                <motion.p 
                    className="max-w-[625px] font-light text-[20px] leading-[1.4] tracking-[-0.4px] whitespace-pre-wrap mb-[140px]"
                    style={{ color: dynamicTextColor }}
                >
                    {project.mainDescription}
                </motion.p>

                {/* Snippets Header */}
                <div className="w-full max-w-[905px] flex justify-start items-center gap-2 mb-[36px]">
                    <h3 
                        className="text-[20px] font-light tracking-[-0.4px] m-0 leading-[1.4]"
                        style={{ color: project.headingColor }}
                    >
                        Snippets from the project
                    </h3>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Forward--Streamline-Solar-Ar" height="24" width="24" className="rotate-90">
                        <desc>Forward Streamline Icon: https://streamlinehq.com</desc>
                        <path d="m19.5 12 -5 -5m5 5 -5 5m5 -5 -10 0c-1.66667 0 -5 1 -5 5" stroke={project.headingColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                </div>

                {/* Visuals Grid */}
                <div className="w-full max-w-[905px] flex flex-col gap-[32px] items-center">
                    {project.visuals.map((visual, index) => renderVisual(visual, index))}
                </div>
            </motion.section>

            {/* 3. Next Project Section */}
            {/* 3. Next Project Section */}
            <div
                className="cursor-pointer"
                onClick={() => {
                    const getNextId = (currentId: string) => {
                        switch (currentId) {
                            case 'scorecric': return 'lucrente';
                            case 'lucrente': return 'cyhex';
                            case 'cyhex': return 'originally-raw';
                            case 'originally-raw': return 'scorecric';
                            default: return 'lucrente';
                        }
                    };
                    const nextId = getNextId(project.id);
                    navigate(`/case-study/${nextId}`);
                    window.scrollTo(0, 0);
                }}
            >
                <CaseStudyHero
                    sectionRef={section3Ref}
                    projectTitle={project.nextProjectTitle}
                    projectYear={project.nextProjectYear}
                    projectIndustry={project.nextProjectIndustry}
                    heroDescription={project.nextProjectDescription}
                    bgColor={project.nextProjectBgColor}
                    scrollText="(Keep Scrolling to view next case study)"
                />
            </div>
        </motion.div>
    );
}
