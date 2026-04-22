import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import AboutOverlay from "./components/AboutOverlay";
import MobileHero from "./components/MobileHero";
import { useNavigate } from "react-router-dom";
import { useUI } from "./context/UIContext";
import { BASE_ITEMS } from "./data/homeItems";

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.03vw)]" style={{ top: '38vh', width: '2.15vw', bottom: '-5vh' }}>
      <div className="absolute inset-[-0.19%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 516">
          <g id="Group 4353" opacity="0.2">
            <line id="Line 257" stroke="white" x1="16.5" x2="16.5" y1="1" y2="516" />
            <line id="Line 258" stroke="white" x2="31" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame18({ skipAnimations }: { skipAnimations: boolean }) {
  const lines = [
    { text: "Design" },
    { highlight: "Partner", suffix: " for" },
    { text: "Early-Stage" },
    { text: "Startups & Teams" }
  ];

  return (
    <div className="-translate-x-1/2 absolute bg-black left-1/2 flex items-center justify-center z-10" style={{ height: '39.67vh', top: '55.33vh', width: '51.81vw' }}>
      <div className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold not-italic flex flex-col items-center justify-center h-full w-full text-center text-white uppercase whitespace-pre-wrap" style={{ fontSize: '5.556vw', lineHeight: '90%', letterSpacing: '-4%' }}>
        <div className="m-0 text-center">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden py-[0.1em] -my-[0.1em]">
              <motion.div
                initial={skipAnimations ? false : { y: "120%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: skipAnimations ? 0 : 0.2 + (i * 0.12),
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                {line.text}
                {line.highlight && <span className="text-[#ff4c11]">{line.highlight}</span>}
                {line.suffix && <span>{line.suffix}</span>}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import RadarAnimation from "./components/RadarAnimation";

function Frame8() {
  return <RadarAnimation />;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Geist',sans-serif] font-medium leading-none relative shrink-0 text-[#fbf9ef] tracking-[-0.05vw]" style={{ fontSize: '0.833vw' }}>Open to</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start relative shrink-0" style={{ gap: '0.222vh' }}>
      <Frame6 />
      <p className="font-['Geist',sans-serif] font-medium leading-none opacity-40 relative shrink-0 text-[#fbf9ef] tracking-[-0.025vw]" style={{ fontSize: '0.833vw' }}>full-time roles</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ gap: '0.556vw' }}>
      <div className="mr-[4px]">
        <Frame8 />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  const [time, setTime] = useState({ timeString: '10:24', ampm: 'PM' });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const timeString = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const match = timeString.match(/(\d{1,2}:\d{2})\s*(AM|PM)/i);
      if (match) {
        setTime({ timeString: match[1], ampm: match[2].toUpperCase() });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-stretch flex items-center relative shrink-0 tracking-[-0.05vw]" style={{ gap: '0.139vw' }}>
      <p className="relative shrink-0">{time.timeString}</p>
      <p className="opacity-40 relative shrink-0">{time.ampm}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Geist',sans-serif] font-medium items-end justify-end leading-none relative shrink-0 text-[#fbf9ef]" style={{ gap: '0.222vh', fontSize: '0.833vw', width: '7.431vw' }}>
      <Frame3 />
      <p className="opacity-40 relative shrink-0 tracking-[-0.025vw]">Mumbai, India</p>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.03vw)]" style={{ height: '15.56vh', top: '-8.33vh', width: '2.15vw' }}>
      <div className="absolute inset-[0_0_-0.71%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 141">
          <g id="Group 4352" opacity="0.2">
            <line id="Line 259" stroke="white" x1="15.5" x2="15.5" y1="140" y2="2.42842e-08" />
            <line id="Line 260" stroke="white" x1="31" x2="4.33992e-08" y1="140.5" y2="140.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Mathematically matched to original Figma positioning:
// Slot 0 (Far Left): Original Frame10
// Slot 1 (Mid Left): Original Frame9
// Slot 2 (Center):  Original Frame13
// Slot 3 (Mid Right): Original Frame11
// Slot 4 (Far Right): Original Frame12

const SLOTS = [
  // 0: Far Left
  { left: 'calc(50% + -39.34vw)', top: '49.43vh', scale: 0.33, zIndex: 1, opacity: 1 },
  // 1: Mid Left
  { left: 'calc(50% + -25.5vw)', top: '35.16vh', scale: 0.45, zIndex: 5, opacity: 1 },
  // 2: Center
  { left: 'calc(50% + 0.001vw)', top: '13.78vh', scale: 1, zIndex: 10, opacity: 1 },
  // 3: Mid Right
  { left: 'calc(50% + 25.5vw)', top: '35.16vh', scale: 0.45, zIndex: 5, opacity: 1 },
  // 4: Far Right
  { left: 'calc(50% + 39.34vw)', top: '49.43vh', scale: 0.33, zIndex: 1, opacity: 1 },

  // --- Offscreen Buffers extending the Parabola Downwards ---
  // 5: Offscreen Right 1
  { left: 'calc(50% + 60vw)', top: '60vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 6: Offscreen Right 2
  { left: 'calc(50% + 80vw)', top: '70vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 7: Back Middle (Fully hidden)
  { left: 'calc(50% + 0.001vw)', top: '80vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 8: Offscreen Left 2
  { left: 'calc(50% + -80vw)', top: '70vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 9: Offscreen Left 1
  { left: 'calc(50% + -60vw)', top: '60vh', scale: 0.33, zIndex: 0, opacity: 0 },
];



// Duplicate items to ensure smooth infinite sliding across 10 slots
const CAROUSEL_ITEMS = [
  ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-1` })),
  ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-2` }))
];

function LetterReveal({ text, value, className, delay = 0, duration = 0.4, style }: { text: string, value: any, className?: string, delay?: number, duration?: number, style?: React.CSSProperties }) {
  return (
    <div className={`flex overflow-hidden ${className}`} style={style}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${value}-${i}`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration,
            delay: delay + (i * 0.03),
            ease: [0.33, 1, 0.68, 1]
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

function Frame27({ srNo }: { srNo: string }) {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" style={{ paddingTop: '5.333vh', width: '3.056vw' }}>
      <LetterReveal
        text={srNo}
        value={srNo}
        className="justify-end w-full font-['Geist_Mono',sans-serif] font-normal leading-[0.98] opacity-40 text-right text-white"
        style={{ fontSize: '0.833vw' }}
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="opacity-40 relative w-full h-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw]">
        <g id="Chevron-Corner-Top-Left">
          <path id="Vector" fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667"></path>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="opacity-40 relative w-full h-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw]">
        <g id="Chevron-Corner-Top-Left">
          <path id="Vector" fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667"></path>
        </g>
      </svg>
    </div>
  );
}

function Frame24({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0" style={{ height: '16.667vw', marginRight: '-0.208vw', width: '1.181vw' }}>
      <motion.div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={{ height: '1.889vh' }}
        animate={{ x: isHovered ? -8 : 0, y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="-scale-y-100 flex-none rotate-90 w-full">
          <Frame15 />
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={{ height: '1.889vh' }}
        animate={{ x: isHovered ? -8 : 0, y: isHovered ? 8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="-rotate-90 flex-none w-full">
          <Frame14 />
        </div>
      </motion.div>
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="relative shrink-0"
      style={{ height: '16.667vw', marginRight: '-0.208vw', width: '27.778vw' }}
    />
  );
}

function Frame17() {
  return (
    <div className="opacity-40 relative w-full h-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw]">
        <g id="Chevron-Corner-Top-Left">
          <path id="Vector" fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667"></path>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="opacity-40 relative w-full h-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[1vw] h-[1vw]">
        <g id="Chevron-Corner-Top-Left">
          <path id="Vector" fill="white" d="M12.666666666666666 3.333333333333333v1.3333333333333333H4.666666666666666v8H3.333333333333333V4c0 -0.36818666666666666 0.29847999999999997 -0.6666666666666666 0.6666666666666666 -0.6666666666666666z" strokeWidth="0.6667"></path>
        </g>
      </svg>
    </div>
  );
}

function Frame25({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0" style={{ height: '16.667vw', marginRight: '-0.208vw', width: '1.181vw' }}>
      <motion.div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={{ height: '1.889vh' }}
        animate={{ x: isHovered ? 8 : 0, y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex-none rotate-90 w-full">
          <Frame17 />
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={{ height: '1.889vh' }}
        animate={{ x: isHovered ? 8 : 0, y: isHovered ? 8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <Frame16 />
        </div>
      </motion.div>
    </div>
  );
}

function Frame26({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ paddingRight: '0.208vw', width: '29.722vw' }}>
      <Frame24 isHovered={isHovered} />
      <Frame13 />
      <Frame25 isHovered={isHovered} />
    </div>
  );
}

function Frame19({ categories }: { categories: string[] }) {
  return (
    <div className="content-stretch flex flex-col font-['Geist',sans-serif] font-normal items-start leading-[0.98] opacity-40 relative shrink-0 text-white whitespace-pre-wrap" style={{ gap: '0.444vh', paddingTop: '5.333vh', fontSize: '0.833vw', width: '8vw' }}>
      {categories.map((cat, i) => (
        <LetterReveal key={i} text={cat} value={cat} delay={0.05 + (i * 0.05)} />
      ))}
    </div>
  );
}

interface CaseStudyProps {
  srNo: string;
  categories: string[];
  title: string;
}

function Frame28({ srNo, categories, isHovered }: Omit<CaseStudyProps, 'title'> & { isHovered: boolean }) {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full z-20 pointer-events-none"
    >
      <Frame27 srNo={srNo} />
      <Frame26 isHovered={isHovered} />
      <Frame19 categories={categories} />
    </div>
  );
}

function Frame29({ srNo, categories, title, isHovered }: CaseStudyProps & { isHovered: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center top-0 pointer-events-none z-20" style={{ left: '26.042vw', width: '35.833vw' }}>
      <Frame28 srNo={srNo} categories={categories} isHovered={isHovered} />
      <div className="w-full text-center overflow-hidden flex justify-center" style={{ marginTop: 0, marginBottom: '2vh' }}>
        <LetterReveal
          text={title}
          value={title}
          delay={0.1}
          className="font-['Geist_Mono',sans-serif] font-normal leading-[0.98] relative shrink-0 text-white whitespace-pre-wrap uppercase"
          style={{ fontSize: '0.833vw' }}
        />
      </div>
    </div>
  );
}

interface Frame30Props {
  onEntranceDone: () => void;
  isEntranceReady: boolean;
  skipAnimations?: boolean;
}

function Frame30({ onEntranceDone, isEntranceReady, skipAnimations = false }: Frame30Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Apply scroll lock to body when on Home page
  useEffect(() => {
    // Add no-scroll class to BOTH html and body for best cross-browser support
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
    
    // Immediate cleanup on unmount
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isEntranceDone, setIsEntranceDone] = useState(false);
  const lastScrollTime = useRef(0);
  const isScrollingLock = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEntranceReady) return;
    const timer = setTimeout(() => {
      setIsEntranceDone(true);
      onEntranceDone();
    }, 2500); // 2.5s covers the staggered entrance
    return () => clearTimeout(timer);
  }, [isEntranceReady, onEntranceDone]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      // Use 700ms cooldown to ensure momentum scrolls on trackpads don't trigger dual steps
      if (now - lastScrollTime.current < 700 || isScrollingLock.current) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (Math.abs(delta) > 20) {
        isScrollingLock.current = true;
        lastScrollTime.current = now;

        if (delta > 0) {
          setActiveIndex((prev) => (prev + 1) % 10);
        } else {
          setActiveIndex((prev) => (prev - 1 + 10) % 10);
        }

        // Release the lock after the cooldown period
        setTimeout(() => {
          isScrollingLock.current = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const activeItem = CAROUSEL_ITEMS[activeIndex];

  return (
    <div className="-translate-x-1/2 absolute left-1/2" style={{ height: '53.972vh', top: '7.222vh', width: '88.056vw' }}>
      {CAROUSEL_ITEMS.map((item, i) => {
        const slotIndex = (i - activeIndex + 2 + 10) % 10;
        const slot = SLOTS[slotIndex];
        const isCenter = slotIndex === 2;

        return (
          <motion.div
            key={item.id}
            className="absolute overflow-visible"
            style={{
              width: '27.778vw', height: '16.667vw',
              transformOrigin: 'center center',
              pointerEvents: isCenter ? 'auto' : 'none',
              cursor: isCenter ? 'pointer' : 'default',
              x: '-50%',
              y: '-50%'
            }}
            initial={!skipAnimations ? {
              ...slot,
              opacity: 0,
              y: '50%' // Start slightly lower for a slide-up effect
            } : false}
            // ... (click and hover handlers remain identical)
            onClick={() => {
              if (isCenter) {
                if (activeItem.type === "hero") {
                  navigate(`/playground`);
                } else {
                  navigate(`/case-study/${activeItem.slug}`);
                }
              }
            }}
            onMouseEnter={() => {
              if (isCenter) setIsHovered(true);
            }}
            onMouseLeave={() => {
              if (isCenter) setIsHovered(false);
            }}
            animate={{
              left: slot.left,
              top: slot.top,
              scale: isCenter && isHovered ? 0.9 : slot.scale,
              zIndex: slot.zIndex,
              opacity: slot.opacity,
              y: '-50%' // Animate to its correct centered Y position
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              // Only apply stagger delay initially on mount based on the ORIGINAL item index distance from center.
              // We use `i` (mount index position) instead of `slotIndex` (dynamic scroll position) to prevent mid-animation delay changes!
              delay: (isEntranceDone || skipAnimations) ? 0 : (0.6 + Math.abs(((i + 2 + 10) % 10) - 2) * 0.15)
            }}
          >
            <div className="w-full h-full relative overflow-clip bg-[#121212]">
              {item.content}
            </div>
          </motion.div>
        );
      })}

      <div className="pointer-events-none">
        <Frame29
          srNo={activeItem.srNo}
          categories={activeItem.categories}
          title={activeItem.title}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
}

export default function App() {
  const { hasLoaded, setHasLoaded } = useUI();
  const [isLoading, setIsLoading] = useState(!hasLoaded);

  const skipAnimations = hasLoaded;

  return (
    <div className="bg-black relative overflow-hidden" style={{ width: '100vw', height: '100dvh' }} data-name="51">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen 
            key="loader" 
            onComplete={() => {
              setIsLoading(false);
              setHasLoaded(true);
            }} 
          />
        ) : (
          <motion.div
            key="content"
            className="relative w-full h-full"
            initial={skipAnimations ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden md:block w-full h-full">
            {/* 1. Top Guide Line */}
            <motion.div
              initial={skipAnimations ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: skipAnimations ? 0 : 0.8 }}
            >
              <Group />
            </motion.div>
 
            {/* 2. Header */}
            <motion.div
              initial={skipAnimations ? false : { y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0, ease: "easeOut" }}
            >
              <Header color="#ffffff" />
            </motion.div>
 
            {/* 3. Intro Text */}
            <motion.p
              data-name="intro-description-text"
              className="absolute font-['Geist',sans-serif] font-normal leading-[1.2] opacity-40 text-[#fbf9ef] tracking-[-0.009vw] whitespace-pre-wrap"
              style={{ left: '2.222vw', fontSize: '0.903vw', top: '12.778vh', width: '12.708vw' }}
              initial={skipAnimations ? { x: 0, opacity: 0.4 } : { x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.4, ease: "easeOut" }}
            >
              {`This is my corner of the internet where I showcase my work and variety of other things I'm currently exploring.`}
            </motion.p>
 
            {/* 4. Carousel */}
            <motion.div
              initial={skipAnimations ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: skipAnimations ? 0 : 0.6, ease: "easeOut" }}
            >
              <Frame30 isEntranceReady={true} onEntranceDone={() => { }} skipAnimations={skipAnimations} />
            </motion.div>
 
            {/* 6. Bottom Info */}
            <div className="absolute content-stretch flex items-center justify-between left-0 right-0 bottom-0" style={{ paddingBottom: '2.667vh', paddingLeft: '2.222vw', paddingRight: '2.222vw' }}>
              <motion.div
                initial={skipAnimations ? false : { y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: skipAnimations ? 0 : 1, ease: [0.33, 1, 0.68, 1] }}
              >
                <Frame7 />
              </motion.div>
              <motion.div
                initial={skipAnimations ? false : { y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: skipAnimations ? 0 : 1.1, ease: [0.33, 1, 0.68, 1] }}
              >
                <Frame2 />
              </motion.div>
            </div>
 
            {/* 7. Bottom Guide Line */}
            <motion.div
              initial={skipAnimations ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: skipAnimations ? 0 : 1.2 }}
            >
              <Group1 />
            </motion.div>
 
            <Frame18 skipAnimations={skipAnimations} />
            </div>
            <div className="block md:hidden w-full h-full relative z-10">
              <MobileHero skipAnimations={skipAnimations} />
            </div>
            <AboutOverlay />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}