import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Header from "./components/Header";

import imgLucrenteHomepage2 from "../assets/1d77d66ff6b45fa2d2226a141a9e634ce5327a61.png";
import imgShotsMockups171 from "../assets/fcb9c5216992368da81368867fa77e03f1e9618e.png";
import imgShotsMockups51 from "../assets/4f162cf32622d4dfcb2e70aa9a67a7097d9ee1f5.png";
import imgShotsMockups161 from "../assets/b38b430a823043dace439426de6370f44cbbb53f.png";
import imgShotsMockups111 from "../assets/7292e05d82287909056e88cc3881368921d19f29.png";
import imgFrame20856631201 from "../assets/fdca36244b9d48ef4d9c01a80a95c75c31a83452.png";
import imgShotsMockups21 from "../assets/f0cf51fe902c49e33273901f4d5947d40e8551e8.png";
import imgGrid1 from "../assets/b67d14d76aba74947169a7a21d07218ec1db1d44.png";
import imgTypography1 from "../assets/75b341d239b30523b250b3bafb2f129e4945c291.png";
import img73 from "../assets/bfe61e94ef2acd77eb43463530da3d3698e50670.png";
import imgMouseWireless from "../assets/0248826545f879f670bc16bf4f920e0d8f90d596.svg";
import imgLeftArrow from "../assets/64bd323606e5dac218af5d5952719a257afc6531.svg";
import imgGlobe from "../assets/9494c29dcac4f541872683dc0aee3d066f10498e.svg";

export default function CaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Scroll Progress Logic
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeBgColor, setActiveBgColor] = useState("#9a054e");
    const [activeIndicatorColor, setActiveIndicatorColor] = useState("#ffffff");
    const [activeHeaderColor, setActiveHeaderColor] = useState("#ffffff");
    const [scrollYPos, setScrollYPos] = useState(0);

    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
            setScrollProgress(progress);

            // Calculate indicator's absolute Y position in the viewport
            // The container is fixed at top-1/2 -translate-y-1/2, height 270px
            const viewportCenter = window.innerHeight / 2;
            const trackHeight = 270;
            const trackTop = viewportCenter - (trackHeight / 2);
            // The dot moves 90% of the track height (as seen in the style top: scrollProgress * 90%)
            const indicatorY = trackTop + (progress * trackHeight * 0.9);

            const getSection = (yPos: number) => {
                const sections = [
                    { ref: section1Ref, color: "#9a054e" },
                    { ref: section2Ref, color: "#fbf9ef" },
                    { ref: section3Ref, color: "#bf0b33" }
                ];

                for (const section of sections) {
                    if (section.ref.current) {
                        const rect = section.ref.current.getBoundingClientRect();
                        // Get absolute Y of the section relative to viewport top
                        if (yPos >= rect.top && yPos <= rect.bottom) {
                            return section;
                        }
                    }
                }
                return null;
            };

            // Calculate active color for the scroll indicator based on its specific Y position
            const sectionForIndicator = getSection(indicatorY);
            if (sectionForIndicator) {
                const isCream = sectionForIndicator.color === "#fbf9ef";
                setActiveBgColor(sectionForIndicator.color);
                setActiveIndicatorColor(isCream ? "#171412" : "#ffffff");
            }

            // Calculate active color for the header based on the top of the viewport
            // The header is at the very top (fixed top-0), so we check which section is at the header's vertical position (y=40 in viewport).
            const sectionForHeader = getSection(40);
            if (sectionForHeader) {
                const isCream = sectionForHeader.color === "#fbf9ef";
                setActiveHeaderColor(isCream ? "#171412" : "#ffffff");
            }

            setScrollYPos(scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const PROJECT_DATA: Record<string, any> = {
        "lucrente": {
            title: "LUCRENTE",
            year: "2023",
            industry: "Fintech",
            heroDescription: "Redefining how rent payments work\n--> simple, rewarding, and seamless.",
            mainDescription: "I partnered with Lucrente from the earliest stages, helping define the product, user experience, and initial brand direction.\n\nLucrente enables users to earn rewards on rent payments, navigating a highly regulated space where clarity is essential. Every design decision prioritised trust, simplicity, and ease of use, ensuring the product felt credible from the first interaction."
        },
        "scorecric": {
            title: "SCORECRIC",
            year: "2024",
            industry: "Sports",
            heroDescription: "A real-time cricket app for live scores, stats, and match insights.",
            mainDescription: "Scorecric was designed to bring the excitement of live cricket to fans with unparalleled speed and depth. The interface was crafted to handle massive amounts of real-time data while remaining clean and intuitive. From live scorecards to detailed player analytics, every component was built for the modern sports enthusiast who demands both accuracy and aesthetics."
        }
    };

    const project = PROJECT_DATA[id || "lucrente"] || PROJECT_DATA["lucrente"];
    const projectTitle = project.title;
    const projectYear = project.year;
    const projectIndustry = project.industry;
    const heroDescription = project.heroDescription;
    const mainDescription = project.mainDescription;

    return (
        <div className="bg-[#fbf9ef] relative w-full font-['Geist',sans-serif] min-h-screen">
            {/* --- FIXED NAVIGATION ELEMENTS --- */}

            {/* 1. Header (Logo + Links) - Fixed from shared component */}
            <Header color={activeHeaderColor} scrollY={scrollYPos} showScrollAnimation={true} />

            {/* 2. Left Nav (Home + Next Project) - Fixed at left-center */}
            <div className="fixed left-[32px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-50">
                {/* Home (Globe) */}
                <div onClick={() => navigate('/')} className="w-[52px] h-[52px] bg-[#f1e1df] rounded-full flex items-center justify-center cursor-pointer text-[#9a054e]">
                    <img src={imgGlobe} alt="Home" className="w-[24px] h-[24px]" />
                </div>
                {/* Next Project (Arrow) */}
                <div
                    onClick={() => {
                        const nextId = id === "lucrente" ? "scorecric" : "lucrente";
                        navigate(`/case-study/${nextId}`);
                        window.scrollTo(0, 0);
                    }}
                    className="w-[52px] h-[52px] bg-[#f1e1df] rounded-full flex items-center justify-center cursor-pointer text-[#9a054e]"
                >
                    <img src={imgLeftArrow} alt="Next Project" className="w-[24px] h-[24px] rotate-180" />
                </div>
            </div>

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
                        <div
                            className="w-[29px] h-[29px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: activeBgColor }}
                        >
                            {/* Outer Indicator Ring */}
                            <div
                                className="w-[17px] h-[17px] border rounded-full flex items-center justify-center"
                                style={{ borderColor: activeIndicatorColor === "#ffffff" ? "rgba(255, 255, 255, 0.3)" : "rgba(23, 20, 18, 0.3)" }}
                            >
                                {/* Inner White Dot */}
                                <div
                                    className="w-[5px] h-[5px] rounded-full"
                                    style={{ backgroundColor: activeIndicatorColor }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTIONS --- */}

            {/* 1. Hero Section (Maroon Background) */}
            <section ref={section1Ref} className="relative bg-[#9a054e] w-full min-h-[100vh] flex flex-col items-center justify-between text-white overflow-hidden pb-[40px]">
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
                            fontSize: '20px',
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
                <div className="flex flex-col items-center gap-2 opacity-70 mb-4 z-10">
                    <div className="w-6 h-6 flex justify-center items-center">
                        <img src={imgMouseWireless} className="w-full h-full object-contain" alt="Scroll" />
                    </div>
                    <span className="text-[12px] font-['Arial',sans-serif]">(Scroll down)</span>
                </div>
            </section>

            {/* 2. Main Content Section (Cream Background) */}
            <section ref={section2Ref} className="relative w-full py-[140px] flex flex-col items-center text-[#171412]">

                {/* Description Text */}
                <p className="max-w-[625px] text-[#171412] font-light text-[20px] leading-[1.4] tracking-[-0.4px] whitespace-pre-wrap mb-[140px]">
                    {mainDescription}
                </p>

                {/* Snippets Header */}
                <div className="w-full max-w-[905px] flex justify-start items-center gap-2 mb-[36px]">
                    <h3 className="text-[20px] font-light text-[#171412] tracking-[-0.4px] m-0 leading-[1.4]">
                        Snippets from the project
                    </h3>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Forward--Streamline-Solar-Ar" height="24" width="24" className="rotate-90">
                        <desc>Forward Streamline Icon: https://streamlinehq.com</desc>
                        <path d="m19.5 12 -5 -5m5 5 -5 5m5 -5 -10 0c-1.66667 0 -5 1 -5 5" stroke="#171412" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                </div>

                {/* Visuals Grid */}
                <div className="w-full max-w-[905px] flex flex-col gap-[32px] items-center">
                    {/* Visual 1 */}
                    <div className="w-full h-[600px] bg-[#171412] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center gap-4">
                            <div className="w-[32px] h-[130px] bg-[#ff4c11]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                            <div className="w-[69px] h-[30px] bg-[#ff4c11]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                        </div>
                    </div>
                    {/* Visual 2 */}
                    <div className="w-[900px] h-[675px] bg-[#f2e7f0] relative overflow-hidden">
                        <img src={imgLucrenteHomepage2} alt="Lucrente Demo" className="w-full h-full object-cover" />
                    </div>
                    {/* Visual 3 */}
                    <div className="w-[900px] h-[675px] bg-[#feeaf1] relative overflow-hidden">
                        <img src={imgShotsMockups171} alt="Mockup 3" className="w-full h-full object-cover" />
                    </div>
                    {/* Visual 4 */}
                    <div className="w-full aspect-[900/632] bg-[#231b26] relative overflow-hidden">
                        <img src={imgShotsMockups51} alt="Mockup 5" className="w-full h-full object-cover" />
                    </div>
                    {/* Visual 5 */}
                    <div className="w-full h-[724px] bg-[#f8e1eb] relative overflow-hidden">
                        <img src={imgShotsMockups161} alt="Mockup 16" className="w-full h-full object-cover" />
                    </div>
                    {/* Visual 6 (Split) */}
                    <div className="w-full flex gap-2">
                        <div className="w-[448px] h-[620px] bg-[#f1efe9] relative overflow-hidden">
                            <img src={imgShotsMockups111} alt="Mockup 11" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[448px] h-[620px] bg-[#0c0005] relative overflow-hidden">
                            <img src={imgFrame20856631201} alt="Mockup Frame" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Visual 7 */}
                    <div className="w-full h-[600px] bg-[#feeef9] relative overflow-hidden">
                        <img src={imgShotsMockups21} alt="Mockup 2" className="w-full h-full object-cover" />
                    </div>
                    {/* Visual 8 (Split Grid/Typo) */}
                    <div className="w-full flex justify-between">
                        <div className="w-[445px] h-[662px] bg-[#f4f2ef] relative overflow-hidden">
                            <img src={imgGrid1} alt="Grid" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[445px] h-[662px] bg-[#1a1c1d] relative overflow-hidden">
                            <img src={imgTypography1} alt="Typography" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Visual 9 (Colors) */}
                    <div className="w-full h-[660px] bg-[#f2f1ec] relative overflow-hidden">
                        <img src={img73} alt="Colors" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* 3. Next Project Section (Red Background) */}
            <section ref={section3Ref} className="bg-[#bf0b33] content-stretch flex flex-col items-center justify-between px-[32px] relative w-full h-[100vh]">
                <div className="h-[79px] shrink-0 w-full" />
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
                    <div className="content-stretch flex flex-col h-[396.2px] items-center justify-between relative shrink-0 w-[968px] mx-auto">
                        <div className="content-stretch flex flex-col h-[396.2px] items-center justify-between relative shrink-0 w-full">
                            <p className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold h-[91px] leading-none not-italic relative shrink-0 text-[128px] text-center text-white tracking-[-5.12px] uppercase w-full whitespace-pre-wrap">
                                SCORECRIC
                            </p>
                            <div className="content-stretch flex flex-col h-[33.2px] items-center relative shrink-0 w-full">
                                <div className="content-stretch flex font-normal items-center justify-center leading-[0] max-w-[400px] relative shrink-0 text-center w-full whitespace-nowrap">
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.6px] items-center min-h-px min-w-px pb-[0.6px] relative flex-1">
                                        <div className="flex flex-col font-['Geist_Mono',sans-serif] justify-center relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[1.12px] uppercase">
                                            <p className="leading-[11.2px]">Year</p>
                                        </div>
                                        <div className="flex flex-col font-['Geist',sans-serif] justify-center relative shrink-0 text-[14px] text-white tracking-[-0.14px]">
                                            <p className="leading-[13.6px]">2024</p>
                                        </div>
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.6px] items-center min-h-px min-w-px pb-[0.6px] relative flex-1">
                                        <div className="flex flex-col font-['Geist_Mono',sans-serif] justify-center relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[1.12px] uppercase">
                                            <p className="leading-[11.2px]">industry</p>
                                        </div>
                                        <div className="flex flex-col font-['Geist',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
                                            <p className="leading-[13.6px]">Sports</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px] w-[358px]">
                                <p className="leading-[1.4] whitespace-pre-wrap">A real-time cricket app for live scores, stats, and match insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center pb-[40px] relative shrink-0 w-full opacity-70">
                    <div className="overflow-clip relative shrink-0 w-6 h-6 flex justify-center items-center">
                        <img src={imgMouseWireless} className="w-full h-full object-contain" alt="Keep Scrolling" />
                    </div>
                    <div className="flex flex-col font-['Arial',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                        <p className="leading-[20px]">(Keep Scrolling to view next case study)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
