import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, MotionValue } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface SidebarNavProps {
    id: string | undefined;
    iconColor: string;
    bgColor: string;
    hoverColor: string;
    nextIconColor: string;
    nextBgColor: string;
    nextHoverColor: string;
    scrollProgress: MotionValue<number>; // Footer overscroll progress
    mainScrollY: MotionValue<number>;     // Global window scroll
    exitColorProgress: MotionValue<number>; // Smooth transition before footer
}

export default function SidebarNav({
    id,
    iconColor,
    bgColor,
    hoverColor,
    nextIconColor,
    nextBgColor,
    nextHoverColor,
    scrollProgress,
    mainScrollY,
    exitColorProgress
}: SidebarNavProps) {
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const [vHeight, setVHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
    
    useEffect(() => {
        const handleResize = () => setVHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Color Tokens for "Black Background" sections
    const DARK_ICON = "#ffffff";
    const DARK_BG = "#1A1A1A";
    const DARK_HOVER = "#2A2A2A";

    // Phase 1: Transition from Hero theme to Dark Mode (White/Transparent) over first 50vh
    const entryIconColor = useTransform(mainScrollY, [0, vHeight * 0.5], [iconColor, DARK_ICON]);
    const entryBgColor = useTransform(mainScrollY, [0, vHeight * 0.5], [bgColor, DARK_BG]);
    const entryHoverColor = useTransform(mainScrollY, [0, vHeight * 0.5], [hoverColor, DARK_HOVER]);

    // Phase 2: Transition from Dark Mode to NEXT Project theme over 50vh BEFORE footer overscroll starts
    const exitIconColor = useTransform(exitColorProgress, [0, 1], [DARK_ICON, nextIconColor]);
    const exitBgColor = useTransform(exitColorProgress, [0, 1], [DARK_BG, nextBgColor]);
    const exitHoverColor = useTransform(exitColorProgress, [0, 1], [DARK_HOVER, nextHoverColor]);

    // Master Dynamic Values: Use Exit values if we're in the transition window (exitColorProgress > 0)
    const dynamicIconColor = useTransform([exitColorProgress, entryIconColor, exitIconColor], ([p, entry, exit]) => (p as number) > 0 ? exit : entry);
    const dynamicBgColor = useTransform([exitColorProgress, entryBgColor, exitBgColor], ([p, entry, exit]) => (p as number) > 0 ? exit : entry);
    const dynamicHoverColor = useTransform([exitColorProgress, entryHoverColor, exitHoverColor], ([p, entry, exit]) => (p as number) > 0 ? exit : entry);

    const springConfig = { type: "spring", stiffness: 400, damping: 25 };

    return (
        <div className="fixed left-[32px] top-1/2 -translate-y-1/2 flex flex-col gap-[8px] z-50">
            {/* Home (Globe) */}
            <div className="relative flex items-center gap-3">
                <motion.div
                    custom={0}
                    initial="initial"
                    animate={{
                        opacity: 1,
                        y: hoveredButton === 'next' ? -6 : 0,
                        scale: hoveredButton === 'home' ? 1.15 : 1,
                    }}
                    whileHover={{ y: 2 }} // Small nudge on top of the push
                    transition={springConfig as any}
                    onHoverStart={() => setHoveredButton('home')}
                    onHoverEnd={() => setHoveredButton(null)}
                    onClick={() => navigate('/')}
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer transition-shadow duration-300"
                    style={{ 
                        color: dynamicIconColor as any,
                        backgroundColor: (hoveredButton === 'home' ? dynamicHoverColor : dynamicBgColor) as any
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2181_183)">
                            <path d="M23 12C23 5.925 18.075 1 12 1M23 12C23 18.075 18.075 23 12 23M23 12C23 14.21 18.575 10.5 12.5 10.5C6.425 10.5 1 14.21 1 12M12 1C5.925 1 1 5.925 1 12M12 1C14.761 1 17 5.925 17 12C17 18.075 14.761 23 12 23M12 1C9.239 1 7 5.925 7 12C7 18.075 9.239 23 12 23M12 23C5.925 23 1 18.075 1 12" stroke="currentColor" strokeWidth="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2181_183">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </motion.div>

                <AnimatePresence>
                    {hoveredButton === 'home' && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={{
                                initial: { opacity: 0, x: -10 },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    x: -5,
                                    transition: { duration: 0.15 }
                                }
                            }}
                            className="inline-flex pt-[8px] pb-[4px] px-[10px] justify-center gap-[10px] rounded-md pointer-events-none"
                            style={{ backgroundColor: dynamicHoverColor as any }}
                        >
                            <motion.span
                                className="whitespace-nowrap"
                                style={{
                                    color: dynamicIconColor as any,
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '100%',
                                    letterSpacing: '-0.4px'
                                }}
                            >
                                HOME
                            </motion.span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Next Project (Arrow) */}
            <div className="relative flex items-center gap-3">
                <motion.div
                    custom={1}
                    initial="initial"
                    animate={{
                        opacity: 1,
                        y: hoveredButton === 'home' ? 6 : 0,
                        scale: hoveredButton === 'next' ? 1.15 : 1,
                    }}
                    whileHover={{ y: -2 }} // Small nudge on top of the push
                    transition={springConfig as any}
                    onHoverStart={() => setHoveredButton('next')}
                    onHoverEnd={() => setHoveredButton(null)}
                    onClick={() => {
                        navigate("/");
                        window.scrollTo(0, 0);
                    }}
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer transition-shadow duration-300"
                    style={{ 
                        color: dynamicIconColor as any,
                        backgroundColor: (hoveredButton === 'next' ? dynamicHoverColor : dynamicBgColor) as any
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 5C16 5.742 16.733 6.85 17.475 7.78C18.429 8.98 19.569 10.027 20.876 10.826C21.856 11.425 23.044 12 24 12M24 12C23.044 12 21.855 12.575 20.876 13.174C19.569 13.974 18.429 15.021 17.475 16.219C16.733 17.15 16 18.26 16 19M24 12H0" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </motion.div>

                <AnimatePresence>
                    {hoveredButton === 'next' && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={{
                                initial: { opacity: 0, x: -10 },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    x: -5,
                                    transition: { duration: 0.15 }
                                }
                            }}
                            className="inline-flex pt-[8px] pb-[4px] px-[10px] justify-center gap-[10px] rounded-md pointer-events-none"
                            style={{ backgroundColor: dynamicHoverColor as any }}
                        >
                            <motion.span
                                className="whitespace-nowrap"
                                style={{
                                    color: dynamicIconColor as any,
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '100%',
                                    letterSpacing: '-0.4px'
                                }}
                            >
                                NEXT PROJECT
                            </motion.span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
