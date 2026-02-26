import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SidebarNavProps {
    id: string | undefined;
    imgGlobe: string;
    imgLeftArrow: string;
}

export default function SidebarNav({ id, imgGlobe, imgLeftArrow }: SidebarNavProps) {
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const homeVariants: any = {
        initial: { opacity: 0, y: 10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        hover: {
            scale: 1.15,
            backgroundColor: "#EEDAD7",
            y: 2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const nextVariants: any = {
        initial: { opacity: 0, y: 10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        hover: {
            scale: 1.15,
            backgroundColor: "#EEDAD7",
            y: -2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const tooltipVariants: any = {
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
    };

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
                        backgroundColor: hoveredButton === 'home' ? "#EEDAD7" : "#f1e1df",
                    }}
                    whileHover={{ y: 2 }} // Small nudge on top of the push
                    transition={springConfig as any}
                    onHoverStart={() => setHoveredButton('home')}
                    onHoverEnd={() => setHoveredButton(null)}
                    onClick={() => navigate('/')}
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer text-[#9a054e] transition-shadow duration-300"
                >
                    <img src={imgGlobe} alt="Home" className="w-[24px] h-[24px]" />
                </motion.div>

                <AnimatePresence>
                    {hoveredButton === 'home' && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={tooltipVariants}
                            className="inline-flex pt-[8px] pb-[4px] px-[10px] justify-center gap-[10px] rounded-md pointer-events-none"
                            style={{ backgroundColor: 'hsla(8, 40%, 89%, 1)' }}
                        >
                            <span
                                className="whitespace-nowrap"
                                style={{
                                    color: '#9A054E',
                                    fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '100%',
                                    letterSpacing: '-0.4px'
                                }}
                            >
                                HOME
                            </span>
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
                        backgroundColor: hoveredButton === 'next' ? "#EEDAD7" : "#f1e1df",
                    }}
                    whileHover={{ y: -2 }} // Small nudge on top of the push
                    transition={springConfig as any}
                    onHoverStart={() => setHoveredButton('next')}
                    onHoverEnd={() => setHoveredButton(null)}
                    onClick={() => {
                        const nextId = id === "lucrente" ? "scorecric" : "lucrente";
                        navigate(`/case-study/${nextId}`);
                        window.scrollTo(0, 0);
                    }}
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer text-[#9a054e] transition-shadow duration-300"
                >
                    <img src={imgLeftArrow} alt="Next Project" className="w-[24px] h-[24px]" />
                </motion.div>

                <AnimatePresence>
                    {hoveredButton === 'next' && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={tooltipVariants}
                            className="inline-flex pt-[8px] pb-[4px] px-[10px] justify-center gap-[10px] rounded-md pointer-events-none"
                            style={{ backgroundColor: 'hsla(8, 40%, 89%, 1)' }}
                        >
                            <span
                                className="whitespace-nowrap"
                                style={{
                                    color: '#9A054E',
                                    fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '100%',
                                    letterSpacing: '-0.4px'
                                }}
                            >
                                NEXT PROJECT
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
