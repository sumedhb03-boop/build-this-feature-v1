import { motion } from "motion/react";
import { useState } from "react";

interface HeaderProps {
    color?: string;
}

function IntroSection({ color }: { color: string }) {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '0.333vh', width: '18.472vw' }}>
            <div className="content-stretch flex items-end relative shrink-0" style={{ gap: '0.417vw' }}>
                <p
                    className="font-['Geist',sans-serif] font-normal leading-[1.2] opacity-80 relative shrink-0 tracking-[-0.009vw]"
                    style={{ fontSize: '0.903vw', color: color }}
                >
                    Hello, I'm Sumedh
                </p>
                <div className="relative shrink-0" style={{ width: '1.389vw', height: '2.222vh' }}>
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" fill="#2C217D" id="Ellipse 652" r="10" />
                    </svg>
                </div>
            </div>
            <p
                className="font-['Geist',sans-serif] font-normal leading-[1.2] min-w-full opacity-60 relative shrink-0 tracking-[-0.009vw] w-[min-content] whitespace-pre-wrap"
                style={{ fontSize: '0.903vw', color: color }}
            >
                Product designer, currently working freelance.
            </p>
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

export default function Header({ color = "#ffffff" }: HeaderProps) {
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
                <IntroSection color={color} />
            </div>
            <div className="pointer-events-auto">
                <NavLinks color={color} />
            </div>
        </div>
    );
}
