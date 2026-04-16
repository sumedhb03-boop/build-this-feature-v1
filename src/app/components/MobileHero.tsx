import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { BASE_ITEMS } from "../data/homeItems";
import { useNavigate } from "react-router-dom";
import { RulerPicker } from "./RulerPicker";

export default function MobileHero({ skipAnimations }: { skipAnimations: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = BASE_ITEMS.length;
  const navigate = useNavigate();
  
  // Duplicate items to ensure smooth infinite sliding across 10 slots
  const CAROUSEL_ITEMS = [
    ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-1` })),
    ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-2` }))
  ];



  


  const lastScrollTime = useRef(0);

  const stepNext = () => setActiveIndex((prev) => (prev + 1) % 10);
  const stepPrev = () => setActiveIndex((prev) => (prev - 1 + 10) % 10);

  // Wheel listener for desktop-like scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 700) return;
      
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 20) {
        lastScrollTime.current = now;
        if (delta > 0) stepNext();
        else stepPrev();
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handlePanEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = 30;

    if (offset < -threshold || velocity < -100) {
      stepNext();
    } else if (offset > threshold || velocity > 100) {
      stepPrev();
    }
  };

  const handlePickerSelect = (option: string, index: number) => {
    // If we're at activeIndex 5-9, we should stay in that range if possible to avoid big jumps,
    // or just use normalized index.
    const isSecondSet = activeIndex >= 5;
    const targetIndex = isSecondSet ? index + 5 : index;
    setActiveIndex(targetIndex);
  };

  return (
    <motion.div 
      className="w-full h-full relative flex flex-col justify-between overflow-hidden px-4 pb-6 pt-4" 
      style={{ background: "#000" }}
      onPanEnd={handlePanEnd}
    >
      
      {/* HEADER */}
      <div className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="flex flex-col gap-0.5 items-start">
          <p className="font-['Geist',sans-serif] font-medium text-white text-[13px]">Hello, I'm Sumedh</p>
          <p className="font-['Geist',sans-serif] font-normal text-gray-400 text-[10px] leading-none tracking-tight whitespace-nowrap">Product designer, currently working freelance.</p>
        </div>
        <div>
          <p className="font-['Geist_Mono',sans-serif] text-white text-sm tracking-tight">// MENU</p>
        </div>
      </div>

      {/* CENTER CAROUSEL & HERO FRAME */}
      <div className="relative flex-grow flex items-center justify-center -mx-4 w-[calc(100%+2rem)] overflow-hidden">
        


        {/* Carousel Tracks */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           {CAROUSEL_ITEMS.map((item: any, i) => {
              // Calculate which slot this item belongs to (slot 2 is the center)
              const slotIndex = (i - activeIndex + 2 + 10) % 10;
              const isActive = slotIndex === 2;
              
              // Calculate horizontal position relative to the center (50%)
              // 300px offset ensures side items are slightly visible on standard mobile widths (~390px)
              const xOffset = (slotIndex - 2) * 300; 

              return (
                 <motion.div
                    key={item.id}
                    className="absolute aspect-[9/11]"
                    animate={{
                       left: `calc(50% + ${xOffset}px)`,
                       scale: isActive ? 1 : 0.8,
                       opacity: (slotIndex >= 1 && slotIndex <= 3) ? 1 : 0,
                       zIndex: isActive ? 10 : 0,
                       filter: isActive ? "blur(0px)" : "blur(2px)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ 
                      pointerEvents: isActive ? "auto" : "none",
                      width: '312px',
                      x: '-50%'
                    }}
                 >
                    <div className="w-full h-full relative overflow-hidden select-none bg-black">
                        {item.type === 'hero' ? (
                          <div className="z-20 flex flex-col items-center text-center justify-center px-4 w-full h-full pointer-events-none relative">
                             {/* Corner Brackets for Hero Frame */}
                             <div className="absolute left-[20px] top-[14px] opacity-60">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-[14px] h-[14px]">
                                   <path d="M0 0H14V1H1V14H0V0Z" fill="white"/>
                                </svg>
                             </div>
                             <div className="absolute right-[20px] top-[14px] opacity-60">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-[14px] h-[14px]">
                                   <path d="M14 0H0V1H13V14H14V0Z" fill="white"/>
                                </svg>
                             </div>
                             <div className="absolute left-[20px] bottom-[14px] opacity-60">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-[14px] h-[14px]">
                                   <path d="M0 14H14V13H1V0H0V14Z" fill="white"/>
                                </svg>
                             </div>
                             <div className="absolute right-[20px] bottom-[14px] opacity-60">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-[14px] h-[14px]">
                                   <path d="M14 14H0V13H13V0H14V14Z" fill="white"/>
                                </svg>
                             </div>



                             <h1 className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold uppercase text-[2.5rem] leading-[0.9] tracking-tighter text-white">
                                <span className="text-[#FF4D00]">DESIGN</span><br/>
                                <span className="text-[#FF4D00]">PARTNER</span><br/>
                                FOR<br/>
                                EARLY-STAGE<br/>
                                STARTUPS &<br/>
                                TEAMS
                             </h1>
                             <div className="mt-8 pointer-events-auto cursor-pointer" onClick={() => console.log('Book a call clicked')}>
                                <div className="bg-[#fbf9ef] text-black px-6 py-2.5 flex items-center justify-center gap-2">
                                   <span className="font-['Geist_Mono',sans-serif] text-xs font-semibold leading-none tracking-tight pt-[1px]">// BOOK A CALL</span>
                                </div>
                             </div>
                          </div>
                        ) : (

                         <motion.div 
                           className="w-full h-full relative"
                           animate={{
                             x: (slotIndex - 2) * -40, // Counter-movement for parallax
                             scale: 1.1 // Slight over-scale to allow movement bleed
                           }}
                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
                         >
                           {item.content}
                         </motion.div>
                       )}

                    </div>
                 </motion.div>
              );
           })}
        </div>



      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col gap-6 shrink-0 w-full z-10 pb-4">
        
        {/* The New Ruler Picker */}
        <div className="w-[calc(100%+2rem)] -mx-4 flex justify-center py-4">
            <RulerPicker 
                options={BASE_ITEMS.map(item => item.title)}
                currentIndex={activeIndex % 5}
                onSelect={(opt, idx) => handlePickerSelect(opt, idx)}
            />
        </div>

        {/* Bottom Index - Flattened for perfectly equal spacing */}
        <div className="flex w-full items-center justify-between px-[40px] pt-4 text-white text-xs font-['Geist_Mono',sans-serif]">
            <button 
                onClick={stepPrev}
                className="opacity-60 hover:opacity-100 transition-opacity p-2"
            >
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 2.50002C19 2.34309 18.8046 2.20276 18.5102 2.14831C18.2159 2.09386 17.8848 2.13682 17.6806 2.25597L11.6806 5.75599C11.4398 5.89639 11.4398 6.10364 11.6806 6.24404L17.6806 9.74404C17.8848 9.86319 18.2159 9.90619 18.5102 9.85174C18.8046 9.79729 19 9.65694 19 9.49999V2.50002Z" fill="white"/>
                    <path d="M10.75 2.08925C10.75 1.93232 10.5546 1.79199 10.2602 1.73755C9.96585 1.6831 9.63481 1.72606 9.43056 1.84521L3.4306 5.34523C3.1898 5.48563 3.1898 5.69288 3.4306 5.83328L9.43056 9.33328C9.63481 9.45243 9.96585 9.49543 10.2602 9.44098C10.5546 9.38653 10.75 9.24618 10.75 9.08923V2.08925Z" fill="white"/>
                </svg>
            </button>
            <span className="opacity-60 tracking-widest">{CAROUSEL_ITEMS[activeIndex].srNo}</span>
            <span className="opacity-30 tracking-widest">//</span>
            <span className="opacity-60 tracking-widest">{CAROUSEL_ITEMS[4].srNo}</span>
            <button 
                onClick={stepNext}
                className="opacity-60 hover:opacity-100 transition-opacity p-2"
            >
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M19 2.50002C19 2.34309 18.8046 2.20276 18.5102 2.14831C18.2159 2.09386 17.8848 2.13682 17.6806 2.25597L11.6806 5.75599C11.4398 5.89639 11.4398 6.10364 11.6806 6.24404L17.6806 9.74404C17.8848 9.86319 18.2159 9.90619 18.5102 9.85174C18.8046 9.79729 19 9.65694 19 9.49999V2.50002Z" fill="white"/>
                    <path d="M10.75 2.08925C10.75 1.93232 10.5546 1.79199 10.2602 1.73755C9.96585 1.6831 9.63481 1.72606 9.43056 1.84521L3.4306 5.34523C3.1898 5.48563 3.1898 5.69288 3.4306 5.83328L9.43056 9.33328C9.63481 9.45243 9.96585 9.49543 10.2602 9.44098C10.5546 9.38653 10.75 9.24618 10.75 9.08923V2.08925Z" fill="white"/>
                </svg>
            </button>
        </div>


      </div>

    </motion.div>
  );
}
