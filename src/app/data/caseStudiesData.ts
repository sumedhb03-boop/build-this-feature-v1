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
import imgOrders from "../../assets/PNG to WEBP Orders.webp";
import imgAddresses from "../../assets/Addresses.webp";
import imgOrderDetails from "../../assets/Order Details.webp";
import imgPersonalDetails from "../../assets/Personal Details.webp";
import imgScoreCricColor from "../../assets/PNG to WEBP Color (1).webp";
import imgScoreCricType from "../../assets/PNG to WEBP Type.webp";
import imgOR01 from "../../assets/OR 01.webp";
import imgOR02 from "../../assets/OR 02.webp";
import imgOR03 from "../../assets/OR 03.webp";
import imgOR04 from "../../assets/OR 04.webp";
import imgOR05 from "../../assets/OR 05.webp";
import imgOR06 from "../../assets/OR 06.webp";
import imgOR07 from "../../assets/OR 07.webp";
import imgOR08 from "../../assets/OR 08.webp";
import imgOR09 from "../../assets/OR 09.webp";
import imgORMockup from "../../assets/OR Mockup.webp";
import imgConcrete from "../../assets/Concrete.webp";
import imgCart1 from "../../assets/Cart 1.webp";
import imgCart2 from "../../assets/Cart 02.webp";
import imgCart3 from "../../assets/Cart 03.webp";
import imgCart4 from "../../assets/Cart 04.webp";
import imgBricks from "../../assets/Bricks.webp";
import imgNewCampaign from "../../assets/New Campaign.webp";
import imgNewCampaign1 from "../../assets/New Campaign (1).webp";
import imgNewCampaign2 from "../../assets/New Campaign (2).webp";
import imgNewCampaignEmpGroups from "../../assets/New Campaign Emp Groups.webp";
import imgNewCampaignIIAll from "../../assets/New Campaign II All.webp";
import imgNewCampaignIISummary from "../../assets/New Campaign II Summary.webp";
import imgNewCampaignIISummary1 from "../../assets/New Campaign II Summary (1).webp";
import imgEmployeeListCampaignII from "../../assets/Employee List Campaign II.webp";
import imgQuestionEditor from "../../assets/Question Editor.webp";
import imgCY01 from "../../assets/CY 01.webp";
import imgCY02 from "../../assets/CY 02.webp";
import imgCY03 from "../../assets/CY 03.webp";
import imgCY04 from "../../assets/CY 04.webp";
import imgCY05 from "../../assets/CY 05.webp";
import imgCY06 from "../../assets/CY 06.webp";
import imgCY07 from "../../assets/CY 07.webp";
import imgCY08 from "../../assets/CY 08.webp";
import imgCY09 from "../../assets/CY 09.webp";


export interface Visual {
    type: 'single' | 'split' | 'trio' | 'placeholder';
    src?: string;
    images?: string[];
    label?: string;
    alt?: string;
    bgColor?: string;
    leftBgColor?: string;
    centerBgColor?: string;
    rightBgColor?: string;
    overlaySrc?: string;
    leftOverlaySrc?: string;
    centerOverlaySrc?: string;
    rightOverlaySrc?: string;
    overlayAnimation?: 'scroll-up';
    leftSrc?: string;
    leftAlt?: string;
    centerSrc?: string;
    centerAlt?: string;
    rightSrc?: string;
    rightAlt?: string;
    height?: string;
    aspectRatio?: string;
    bgImage?: string;
    imageScale?: number;
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
                height: "620px"
            },
            { type: 'single', src: imgShotsMockups21, alt: "Mockup 2", bgColor: "#feeef9", height: "600px" },
            { 
                type: 'split', 
                leftSrc: imgGrid1, leftAlt: "Grid", leftBgColor: "#f4f2ef",
                rightSrc: imgTypography1, rightAlt: "Typography", rightBgColor: "#1a1c1d",
                height: "662px"
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
        nextProjectBgColor: "#234031",
        nextProjectTitle: "ORIGINALLY RAW",
        nextProjectYear: "2023",
        nextProjectIndustry: "E-commerce",
        nextProjectDescription: "A modern, bold e-commerce platform.",
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
            { type: 'single', src: imgScoreCric7, alt: "ScoreCric webp 7", bgColor: "#bf0b33" },
            { 
                type: 'split', 
                leftSrc: imgScoreCricColor, leftAlt: "ScoreCric Color", leftBgColor: "#bf0b33",
                rightSrc: imgScoreCricType, rightAlt: "ScoreCric Typography", rightBgColor: "#bf0b33",
                height: "90vh"
            }
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
        nextProjectBgColor: "#bf0b33",
        nextProjectTitle: "SCORECRIC",
        nextProjectYear: "2024",
        nextProjectIndustry: "Sports",
        nextProjectDescription: "A real-time cricket app for live scores, stats, and match insights.",
        sidebarIconColor: "#0D3330",
        sidebarBgColor: "#d0e6e4",
        sidebarHoverColor: "#c0dbd9",
        heroDescription: "Automating governance, risk, and compliance with streamlined insights.",
        role: "Lead Product Designer",
        services: ["Product Strategy", "UX/UI Design", "Design Systems"],
        leadDescription: "Cyhex simplifies the complex landscape of cybersecurity compliance, offering a unified platform that automates evidence collection and audit readiness.",
        mainDescription: "Working closely with the founding team, I designed a unified GRC platform that transforms tedious manual audits into a streamlined, automated experience. Much like Vanta or Scrut, Cyhex enables organizations to manage SOC 2, ISO 27001, and other frameworks with ease.\n\nThe design focuses on making complex security data digestible through intuitive dashboards, automated workflows, and a robust risk ledger, ensuring that compliance becomes a strategic advantage rather than a bureaucratic hurdle.",
        visuals: [
            { type: 'single', src: imgCY01, alt: "Cyhex 01", bgColor: "#0D3330" },
            { type: 'single', src: imgCY02, alt: "Cyhex 02", bgColor: "#0D3330" },
            { type: 'single', src: imgCY03, alt: "Cyhex 03", bgColor: "#0D3330" },
            { type: 'single', src: imgCY04, alt: "Cyhex 04", bgColor: "#0D3330" },
            { type: 'single', src: imgCY05, alt: "Cyhex 05", bgColor: "#0D3330" },
            { type: 'single', src: imgCY06, alt: "Cyhex 06", bgColor: "#0D3330" },
            { type: 'single', src: imgCY07, alt: "Cyhex 07", bgColor: "#0D3330" },
            { 
                type: 'placeholder', 
                label: 'Campaign Management', 
                bgColor: '#EBEDE2', 
                bgImage: imgBricks,
                height: '680px',
                imageScale: 1.2,
                images: [
                    imgNewCampaign,
                    imgNewCampaign2,
                    imgEmployeeListCampaignII,
                    imgNewCampaignIIAll,
                    imgNewCampaignEmpGroups,
                    imgNewCampaignIISummary1,
                    imgQuestionEditor
                ]
            },
            { type: 'single', src: imgCY08, alt: "Cyhex 08", bgColor: "#0D3330" },
            { type: 'single', src: imgCY09, alt: "Cyhex 09", bgColor: "#0D3330" }
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
        nextProjectBgColor: "#9a054e",
        nextProjectTitle: "LUCRENTE",
        nextProjectYear: "2023",
        nextProjectIndustry: "Fintech",
        nextProjectDescription: "Redefining how rent payments work --> simple, rewarding, and seamless.",
        sidebarIconColor: "#234031",
        sidebarBgColor: "#d6e3dc",
        sidebarHoverColor: "#c6d3cc",
        heroDescription: "A modern, bold e-commerce platform.",
        mainDescription: "Originally Raw is a disruptive lifestyle brand. We designed an immersive e-commerce experience that feels both raw and refined, driving higher conversion rates.",
        visuals: [
            { type: 'single', src: imgOR01, alt: "Originally Raw 1", bgColor: "transparent" },
            { type: 'single', src: imgORMockup, alt: "Originally Raw Mockup", bgColor: "#ffffff" },
            { type: 'single', src: imgOR03, alt: "Originally Raw 3", bgColor: "#234031" },
            { 
                type: 'placeholder', 
                label: 'Profile Pages', 
                bgColor: '#EBEDE2', 
                bgImage: imgBricks,
                height: '654px',
                images: [imgOrders, imgAddresses, imgPersonalDetails, imgOrderDetails]
            },
            { type: 'single', src: imgOR04, alt: "Originally Raw 4", bgColor: "#234031" },
            { type: 'single', src: imgOR05, alt: "Originally Raw 5", bgColor: "#234031" },
            { 
                type: 'split', 
                leftSrc: imgOR06, leftAlt: "Originally Raw 6", leftBgColor: "#234031",
                rightSrc: imgOR07, rightAlt: "Originally Raw 7", rightBgColor: "#234031"
            },
            { type: 'single', src: imgOR08, alt: "Originally Raw 8", bgColor: "#234031" },
            { 
                type: 'placeholder', 
                label: 'Shopping Cart', 
                bgColor: '#EBEDE2', 
                bgImage: imgBricks,
                height: '654px',
                images: [imgCart1, imgCart2, imgCart3, imgCart4]
            },
            { type: 'single', src: imgOR09, alt: "Originally Raw 9", bgColor: "#234031" }
        ]
    }
};
