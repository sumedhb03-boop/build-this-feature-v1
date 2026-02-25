import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    color?: string;
    scrollY?: number;
    showScrollAnimation?: boolean;
}

function IntroSection({ color, scrollY = 0, showScrollAnimation = false }: { color: string; scrollY?: number; showScrollAnimation?: boolean }) {
    const navigate = useNavigate();
    // Line 2 (0vh to 7vh): y: 0 -> -20, opacity: 1 -> 0
    // Line 1 (4vh to 10vh): y: 0 -> -20, opacity: 1 -> 0

    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

    // Line 2 (Start: 15vh, Finish: 22vh)
    // Duration: 7vh
    const line2Progress = Math.max(0, Math.min((scrollY - 0.15 * vh) / (0.07 * vh), 1));
    const line2Y = showScrollAnimation ? -20 * line2Progress : 0;
    const line2Opacity = showScrollAnimation ? 1 - line2Progress : 1;

    // Line 1 (Start: 19vh, Finish: 25vh)
    // Offset: 4vh from start (15+4=19vh), Duration: 6vh (19+6=25vh)
    const line1Progress = Math.max(0, Math.min((scrollY - 0.19 * vh) / (0.06 * vh), 1));
    const line1Y = showScrollAnimation ? -20 * line1Progress : 0;
    const line1Opacity = showScrollAnimation ? 1 - line1Progress : 1;

    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 overflow-hidden" style={{ gap: '0.333vh', width: '18.472vw' }}>
            <div className="content-stretch flex items-end relative shrink-0" style={{ gap: '0.417vw' }}>
                <p
                    className="font-['Geist',sans-serif] font-normal leading-[1.2] opacity-80 relative shrink-0 tracking-[-0.009vw] cursor-pointer"
                    style={{ fontSize: '0.903vw', color: color }}
                    onClick={() => navigate('/')}
                >
                    Hello, I'm Sumedh
                </p>
            </div>
            <div
                className="font-['Geist',sans-serif] font-normal leading-[1.2] min-w-full opacity-60 relative shrink-0 tracking-[-0.009vw] w-[min-content] flex flex-col items-start overflow-hidden"
                style={{ fontSize: '0.903vw', color: color }}
            >
                <motion.span
                    style={{
                        y: line1Y,
                        opacity: line1Opacity,
                    }}
                    transition={{ ease: "linear" }}
                >
                    Product designer, currently working
                </motion.span>
                <motion.span
                    style={{
                        y: line2Y,
                        opacity: line2Opacity,
                    }}
                    transition={{ ease: "linear" }}
                >
                    freelance.
                </motion.span>
            </div>
        </div>
    );
}

function NavLinks({ color }: { color: string }) {
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredContact, setIsHoveredContact] = useState(false);
    const aboutText = "About";
    const contactText = "Contact";
    const aboutLetters = aboutText.split("");
    const contactLetters = contactText.split("");

    return (
        <div
            className="content-stretch flex font-normal items-center leading-[0.98] relative shrink-0"
            style={{ gap: '0.556vw', fontSize: '0.833vw', color: color }}
        >
            {/* About Link */}
            <p
                className="font-['Geist_Mono',sans-serif] relative shrink-0 uppercase inline-flex overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHoveredAbout(true)}
                onMouseLeave={() => setIsHoveredAbout(false)}
            >
                {aboutLetters.map((letter, index) => (
                    <span key={index} className="inline-block relative" style={{ display: 'inline-block' }}>
                        <motion.span
                            className="inline-block"
                            initial={{ y: 0, opacity: 1 }}
                            animate={{
                                y: isHoveredAbout ? (index % 2 === 0 ? -20 : 20) : 0,
                                opacity: isHoveredAbout ? 0 : 1
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.04,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            {letter}
                        </motion.span>
                        <motion.span
                            className="inline-block absolute inset-0"
                            initial={{ y: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                            animate={{
                                y: isHoveredAbout ? 0 : (index % 2 === 0 ? 20 : -20),
                                opacity: isHoveredAbout ? 1 : 0
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.04,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            {letter}
                        </motion.span>
                    </span>
                ))}
            </p>

            <p className="font-['Geist',sans-serif] relative shrink-0 opacity-60"> //</p>

            {/* Contact Link */}
            <p
                className="font-['Geist_Mono',sans-serif] relative shrink-0 uppercase inline-flex overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHoveredContact(true)}
                onMouseLeave={() => setIsHoveredContact(false)}
            >
                {contactLetters.map((letter, index) => (
                    <span key={index} className="inline-block relative" style={{ display: 'inline-block' }}>
                        <motion.span
                            className="inline-block"
                            initial={{ y: 0, opacity: 1 }}
                            animate={{
                                y: isHoveredContact ? (index % 2 === 0 ? -20 : 20) : 0,
                                opacity: isHoveredContact ? 0 : 1
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.04,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            {letter}
                        </motion.span>
                        <motion.span
                            className="inline-block absolute inset-0"
                            initial={{ y: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                            animate={{
                                y: isHoveredContact ? 0 : (index % 2 === 0 ? 20 : -20),
                                opacity: isHoveredContact ? 1 : 0
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.04,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            {letter}
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    );
}

export default function Header({ color = "#ffffff", scrollY = 0, showScrollAnimation = false }: HeaderProps) {
    return (
        <div
            className="fixed z-50 pointer-events-none content-stretch flex items-start justify-between left-0 right-0 top-0 transition-colors duration-200"
            style={{
                paddingTop: '2.667vh',
                paddingLeft: '2.222vw',
                paddingRight: '2.222vw',
                pointerEvents: 'none'
            }}
        >
            <div className="pointer-events-auto">
                <IntroSection color={color} scrollY={scrollY} showScrollAnimation={showScrollAnimation} />
            </div>
            <div className="pointer-events-auto">
                <NavLinks color={color} />
            </div>
        </div>
    );
}
