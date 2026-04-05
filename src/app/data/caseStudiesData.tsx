import React from 'react';
import imgLucrenteHomepage2 from "../../assets/1d77d66ff6b45fa2d2226a141a9e634ce5327a61.png";
import imgShotsMockups171 from "../../assets/fcb9c5216992368da81368867fa77e03f1e9618e.png";
import imgShotsMockups51 from "../../assets/4f162cf32622d4dfcb2e70aa9a67a7097d9ee1f5.png";
import imgShotsMockups161 from "../../assets/b38b430a823043dace439426de6370f44cbbb53f.png";
import imgShotsMockups111 from "../../assets/7292e05d82287909056e88cc3881368921d19f29.png";
import imgFrame20856631201 from "../../assets/fdca36244b9d48ef4d9c01a80a95c75c31a83452.png";
import imgShotsMockups21 from "../../assets/f0cf51fe902c49e33273901f4d5947d40e8551e8.png";
import imgGrid1 from "../../assets/b67d14d76aba74947169a7a21d07218ec1db1d44.png";
import imgTypography1 from "../../assets/75b341d239b30523b250b3bafb2f129e4945c291.png";
import img73 from "../../assets/bfe61e94ef2acd77eb43463530da3d3698e50670.png";
import imgLucrenteVisual1 from "../../assets/Lucrente visuaal 1.webp";
import imgShotsMockups131 from "../../assets/8b29ebd34c3524dbc7989b4884ebd904c19ff803.png";
import imgScoreCric1 from "../../assets/PNG to WEBP 1.webp";
import imgScoreCric2 from "../../assets/PNG to WEBP 2.webp";
import imgScoreCric3 from "../../assets/PNG to WEBP 3.webp";
import imgScoreCric4 from "../../assets/PNG to WEBP 4.webp";
import imgScoreCric5 from "../../assets/PNG to WEBP 5.webp";
import imgScoreCric6 from "../../assets/PNG to WEBP 6.webp";
import imgScoreCric7 from "../../assets/PNG to WEBP 7.webp";

export interface Visual {
    type: 'single' | 'split' | 'component';
    src?: string;
    alt?: string;
    leftSrc?: string;
    leftAlt?: string;
    rightSrc?: string;
    rightAlt?: string;
    bgColor?: string;
    leftBgColor?: string;
    rightBgColor?: string;
    height?: string;
    aspectRatio?: string;
    component?: React.ReactNode;
}

export interface CaseStudyData {
    id: string;
    title: string;
    year: string;
    industry: string;
    heroDescription: string;
    mainDescription: string;
    heroBgColor: string;
    contentBgColor: string;
    textColor: string;
    headingColor: string;
    nextProjectBgColor: string;
    nextProjectTitle: string;
    nextProjectYear: string;
    nextProjectIndustry: string;
    nextProjectDescription: string;
    sidebarIconColor: string;
    sidebarBgColor: string;
    sidebarHoverColor: string;
    role?: string;
    services?: string[];
    leadDescription?: string;
    visuals: Visual[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
    "lucrente": {
        id: "lucrente",
        title: "LUCRENTE",
        year: "2023",
        industry: "Fintech",
        heroBgColor: "#9a054e",
        contentBgColor: "#fbf9ef",
        textColor: "#171412",
        headingColor: "#171412",
        nextProjectBgColor: "#0D3330",
        nextProjectTitle: "CYHEX",
        nextProjectYear: "2024",
        nextProjectIndustry: "Web3",
        nextProjectDescription: "A next-generation Web3 platform with seamless UX.",
        sidebarIconColor: "#9a054e",
        sidebarBgColor: "#f1e1df",
        sidebarHoverColor: "#EEDAD7",
        heroDescription: "Redefining how rent payments work\n--> simple, rewarding, and seamless.",
        mainDescription: "I partnered with Lucrente from the earliest stages, helping define the product, user experience, and initial brand direction.\n\nLucrente enables users to earn rewards on rent payments, navigating a highly regulated space where clarity is essential. Every design decision prioritised trust, simplicity, and ease of use, ensuring the product felt credible from the first interaction.",
        visuals: [
            { type: 'single', src: imgLucrenteVisual1, alt: "Lucrente Visual 1", bgColor: "#fbf9ef" },
            { type: 'single', src: imgLucrenteHomepage2, alt: "Lucrente Demo", bgColor: "#f2e7f0", height: "675px" },
            { type: 'single', src: imgShotsMockups171, alt: "Mockup 3", bgColor: "#feeaf1", height: "675px" },
            { type: 'single', src: imgShotsMockups51, alt: "Mockup 5", bgColor: "#231b26", aspectRatio: "900/632" },
            { type: 'single', src: imgShotsMockups161, alt: "Mockup 16", bgColor: "#f8e1eb", height: "724px" },
            { 
                type: 'split', 
                leftSrc: imgShotsMockups111, leftAlt: "Mockup 11", leftBgColor: "#f1efe9",
                rightSrc: imgFrame20856631201, rightAlt: "Mockup Frame", rightBgColor: "#0c0005",
                height: "80vh"
            },
            { type: 'single', src: imgShotsMockups21, alt: "Mockup 2", bgColor: "#feeef9", height: "600px" },
            { 
                type: 'split', 
                leftSrc: imgGrid1, leftAlt: "Grid", leftBgColor: "#f4f2ef",
                rightSrc: imgTypography1, rightAlt: "Typography", rightBgColor: "#1a1c1d",
                height: "80vh"
            },
            { type: 'single', src: img73, alt: "Colors", bgColor: "#f2f1ec", height: "660px" },
        ]
    },
    "scorecric": {
        id: "scorecric",
        title: "SCORECRIC",
        year: "2024",
        industry: "Sports",
        heroBgColor: "#bf0b33",
        contentBgColor: "#bf0b33",
        textColor: "#fbf9ef",
        headingColor: "#fbf9ef",
        nextProjectBgColor: "#9a054e",
        nextProjectTitle: "LUCRENTE",
        nextProjectYear: "2023",
        nextProjectIndustry: "Fintech",
        nextProjectDescription: "Redefining how rent payments work --> simple, rewarding, and seamless.",
        sidebarIconColor: "#bf0b33",
        sidebarBgColor: "#f7e1e5",
        sidebarHoverColor: "#f2d1d7",
        heroDescription: "A real-time cricket app for live scores, stats, and match insights.",
        role: "Lead Product Designer",
        services: ["Product Strategy", "UX/UI Design", "Visual Identity"],
        leadDescription: "ScoreCric provides a premium experience for cricket fans, offering real-time updates and deep analytics in a sleek, high-perfomance interface.",
        mainDescription: "Every feature was designed to bring the excitement of the stadium to the palm of your hand. From live scoreboards to detailed player statistics, the app focuses on speed and clarity.\n\nI lead the design process, ensuring a cohesive visual language that feels both energetic and professional, catering to both casual fans and die-hard enthusiasts.",
        visuals: [
            { type: 'single', src: imgScoreCric1, alt: "ScoreCric webp 1", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric2, alt: "ScoreCric webp 2", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric3, alt: "ScoreCric webp 3", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric4, alt: "ScoreCric webp 4", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric5, alt: "ScoreCric webp 5", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric6, alt: "ScoreCric webp 6", bgColor: "#bf0b33" },
            { type: 'single', src: imgScoreCric7, alt: "ScoreCric webp 7", bgColor: "#bf0b33" }
        ]
    },
    "cyhex": {
        id: "cyhex",
        title: "CYHEX",
        year: "2024",
        industry: "Web3",
        heroBgColor: "#0D3330",
        contentBgColor: "#0D3330",
        textColor: "#fbf9ef",
        headingColor: "#fbf9ef",
        nextProjectBgColor: "#234031",
        nextProjectTitle: "ORIGINALLY RAW",
        nextProjectYear: "2023",
        nextProjectIndustry: "E-commerce",
        nextProjectDescription: "A modern, bold e-commerce platform.",
        sidebarIconColor: "#0D3330",
        sidebarBgColor: "#d0e6e4",
        sidebarHoverColor: "#c0dbd9",
        heroDescription: "Automating governance, risk, and compliance with streamlined insights.",
        role: "Lead Product Designer",
        services: ["Product Strategy", "UX/UI Design", "Design Systems"],
        leadDescription: "Cyhex simplifies the complex landscape of cybersecurity compliance, offering a unified platform that automates evidence collection and audit readiness.",
        mainDescription: "Working closely with the founding team, I designed a unified GRC platform that transforms tedious manual audits into a streamlined, automated experience. Much like Vanta or Scrut, Cyhex enables organizations to manage SOC 2, ISO 27001, and other frameworks with ease.\n\nThe design focuses on making complex security data digestible through intuitive dashboards, automated workflows, and a robust risk ledger, ensuring that compliance becomes a strategic advantage rather than a bureaucratic hurdle.",
        visuals: [
            { type: 'single', src: imgShotsMockups131, alt: "Cyhex Mockup", bgColor: "#0c0005", height: "675px" }
        ]
    },
    "originally-raw": {
        id: "originally-raw",
        title: "ORIGINALLY RAW",
        year: "2023",
        industry: "E-commerce",
        heroBgColor: "#234031",
        contentBgColor: "#234031",
        textColor: "#fbf9ef",
        headingColor: "#fbf9ef",
        nextProjectBgColor: "#bf0b33",
        nextProjectTitle: "SCORECRIC",
        nextProjectYear: "2024",
        nextProjectIndustry: "Sports",
        nextProjectDescription: "A real-time cricket app for live scores, stats, and match insights.",
        sidebarIconColor: "#234031",
        sidebarBgColor: "#d6e3dc",
        sidebarHoverColor: "#c6d3cc",
        heroDescription: "A modern, bold e-commerce platform.",
        mainDescription: "Originally Raw is a disruptive lifestyle brand. We designed an immersive e-commerce experience that feels both raw and refined, driving higher conversion rates.",
        visuals: []
    }
};
