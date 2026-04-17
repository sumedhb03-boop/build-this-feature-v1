import React, { useEffect, useRef } from 'react';

const CHARS = ['▓', '▒', '░', '█', '▀', '▄', '▅', '▆', '▇', '+', '-', '*', '|', ' ', ' ', ' ', ' '];

export default function AsciiBackground() {
    const containerRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        let frame = 0;
        let animationId: number;
        
        let cols = 0;
        let rows = 0;

        const calculateGrid = () => {
            // Approximate grid size based on 12px font and 18px line height
            cols = Math.ceil(window.innerWidth / 8); 
            rows = Math.ceil(window.innerHeight / 18);
        };

        const fillRandom = () => {
            let result = '';
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
                result += '\n';
            }
            return result;
        };

        const render = () => {
            // Update every 4 frames (~15fps) for that chunky terminal feel
            if (frame % 4 === 0 && containerRef.current) {
                containerRef.current.textContent = fillRandom();
            }
            frame++;
            animationId = requestAnimationFrame(render);
        };

        calculateGrid();
        render();

        const handleResize = () => {
            calculateGrid();
            if (containerRef.current) {
                containerRef.current.textContent = fillRandom();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen select-none bg-black flex items-center justify-center">
            {/* The ASCII text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
                <pre
                    ref={containerRef}
                    className="m-0 font-['Geist_Mono',_monospace] text-[12px] leading-[18px] text-[#FF4C11] whitespace-pre"
                />
            </div>
            {/* Edge fading gradient to ensure smooth blend with solid black */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000_80%)] pointer-events-none" />
        </div>
    );
}
