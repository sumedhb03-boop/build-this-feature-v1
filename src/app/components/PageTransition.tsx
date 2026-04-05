import { motion } from "motion/react";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* The Wipe Overlay - Single Dark Layer */}
            <motion.div
                className="fixed inset-0 z-[9999] pointer-events-none bg-[#0a0a0a]"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                exit={{ y: ["100%", "0%"] }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
            
            {/* The Page Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="w-full h-full relative"
            >
                {children}
            </motion.div>
        </>
    );
}
