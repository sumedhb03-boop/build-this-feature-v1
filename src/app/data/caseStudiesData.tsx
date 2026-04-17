import React from 'react';
import imgLucrente02 from "../../assets/lucrente_02.png";
import imgLucrente03 from "../../assets/lucrente_03.png";
import imgLucrente04 from "../../assets/lucrente_04.png";
import imgLucrente05 from "../../assets/lucrente_05.png";
import imgLucrente06 from "../../assets/lucrente_06.png";
import imgLucrente07 from "../../assets/lucrente_07.png";
import imgLucrente08 from "../../assets/lucrente_08.png";
import imgLucrente09 from "../../assets/lucrente_09.png";
import imgLucrente10 from "../../assets/lucrente_10.png";
import imgLucrente11 from "../../assets/lucrente_11.png";
import imgLucrente01 from "../../assets/lucrente_01.webp";
import imgScoreCric1 from "../../assets/Scorecric Thumbnail.webp";
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
            { type: 'single', src: imgLucrente01, alt: "Lucrente 01", bgColor: "#fbf9ef" },
            { type: 'single', src: imgLucrente02, alt: "Lucrente 02", bgColor: "#f2e7f0", height: "675px" },
            { type: 'single', src: imgLucrente03, alt: "Lucrente 03", bgColor: "#feeaf1", height: "675px" },
            { type: 'single', src: imgLucrente04, alt: "Lucrente 04", bgColor: "#231b26", aspectRatio: "900/632" },
            { type: 'single', src: imgLucrente05, alt: "Lucrente 05", bgColor: "#f8e1eb", height: "724px" },
            { 
                type: 'split', 
                leftSrc: imgLucrente06, leftAlt: "Lucrente 06", leftBgColor: "#f1efe9",
                rightSrc: imgLucrente07, rightAlt: "Lucrente 07", rightBgColor: "#0c0005",
                height: "80vh"
            },
            { type: 'single', src: imgLucrente08, alt: "Lucrente 08", bgColor: "#feeef9", height: "600px" },
            { 
                type: 'split', 
                leftSrc: imgLucrente09, leftAlt: "Lucrente 09", leftBgColor: "#f4f2ef",
                rightSrc: imgLucrente10, rightAlt: "Lucrente 10", rightBgColor: "#1a1c1d",
                height: "80vh"
            },
            { type: 'single', src: imgLucrente11, alt: "Lucrente 11", bgColor: "#f2f1ec", height: "660px" },
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
        visuals: []
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
