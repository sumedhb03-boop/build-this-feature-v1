import imgFreeHandHoldingIPhone16ProMockup2 from "../assets/cb404150f92e88ed4a66f5525a525988047fb537.png";
import imgLucrenteHomepage1 from "../assets/934e76980decd08a547dbf8807403b703fd07584.png";
import imgShotsMockups21 from "../assets/f0cf51fe902c49e33273901f4d5947d40e8551e8.png";
import imgShotsMockups131 from "../assets/8b29ebd34c3524dbc7989b4884ebd904c19ff803.png";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.03vw)]" style={{ top: '37.44vh', width: '2.15vw', bottom: '-5vh' }}>
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

function Frame18() {
  return (
    <div className="-translate-x-1/2 absolute bg-black left-1/2 flex items-center justify-center z-0" style={{ height: '39.67vh', top: '55.33vh', width: '51.81vw' }}>
      <div className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold not-italic flex flex-col items-center justify-center h-full w-full text-center text-white uppercase whitespace-pre-wrap" style={{ fontSize: '5.556vw', lineHeight: '90%', letterSpacing: '-4%' }}>
        <p className="m-0 text-center">
          Design <br />
          <span className="text-[#ff4c11]">Partner</span> for <br />
          Early-Stage <br />
          Startups & Teams
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" style={{ gap: '0.417vw' }}>
      <p className="font-['Geist',sans-serif] font-normal leading-[1.2] opacity-80 relative shrink-0 text-[#fbf9ef] tracking-[-0.009vw]" style={{ fontSize: '0.903vw' }}>Hello, I'm Sumedh</p>
      <div className="relative shrink-0" style={{ width: '1.389vw', height: '2.222vh' }}>
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="#2C217D" id="Ellipse 652" r="10" />
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '0.333vh', width: '18.472vw' }}>
      <Frame21 />
      <p className="font-['Geist',sans-serif] font-normal leading-[1.2] min-w-full opacity-60 relative shrink-0 text-white tracking-[-0.009vw] w-[min-content] whitespace-pre-wrap" style={{ fontSize: '0.903vw' }}>Product designer, currently working freelance.</p>
    </div>
  );
}

function Frame23() {
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const aboutText = "About";
  const contactText = "Contact";
  const aboutLetters = aboutText.split("");
  const contactLetters = contactText.split("");

  return (
    <div className="content-stretch flex font-normal items-center leading-[0.98] relative shrink-0 text-white" style={{ gap: '0.556vw', fontSize: '0.833vw' }}>
      {/* About Link */}
      <p
        className="font-['Geist_Mono',sans-serif] relative shrink-0 uppercase inline-flex overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHoveredAbout(true)}
        onMouseLeave={() => setIsHoveredAbout(false)}
      >
        {aboutLetters.map((letter, index) => (
          <span key={index} className="inline-block relative" style={{ display: 'inline-block' }}>
            {/* Original letter that slides out */}
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
            {/* New letter that slides in */}
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

      <p className="font-['Geist',sans-serif] relative shrink-0"> //</p>

      {/* Contact Link - Same pattern */}
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

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 right-0 top-0" style={{ paddingTop: '2.667vh', paddingLeft: '2.222vw', paddingRight: '2.222vw' }}>
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0" style={{ width: '1.806vw', height: '2.889vh' }}>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g clipPath="url(#clip0_1_104)" id="Frame 2085663155">
          <circle cx="13" cy="13" fill="#FF4C11" id="Ellipse 650" opacity="0.2" r="13" />
          <circle cx="13" cy="13" fill="#FF4C11" id="Ellipse 649" opacity="0.4" r="8.125" />
          <circle cx="13" cy="13" fill="#FF4C11" id="Ellipse 648" r="3.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_104">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
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
      <Frame8 />
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-0 bottom-0" style={{ paddingBottom: '2.667vh', paddingLeft: '2.222vw', paddingRight: '2.222vw' }}>
      <Frame7 />
      <Frame2 />
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
  { left: 'calc(50% - 39.34vw)', top: '49.43vh', scale: 0.33, zIndex: 1, opacity: 1 },
  // 1: Mid Left
  { left: 'calc(50% - 25.5vw)', top: '35.16vh', scale: 0.45, zIndex: 5, opacity: 1 },
  // 2: Center
  { left: '50%', top: '13.78vh', scale: 1, zIndex: 10, opacity: 1 },
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
  { left: '50%', top: '80vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 8: Offscreen Left 2
  { left: 'calc(50% - 80vw)', top: '70vh', scale: 0.33, zIndex: 0, opacity: 0 },
  // 9: Offscreen Left 1
  { left: 'calc(50% - 60vw)', top: '60vh', scale: 0.33, zIndex: 0, opacity: 0 },
];

const BASE_ITEMS = [
  {
    id: 0,
    srNo: "01",
    title: "Scorecric",
    categories: ["Brand", "Product"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img alt="Project mockup" className="w-full h-full object-cover" src={imgShotsMockups21} />
      </div>
    )
  },
  {
    id: 1,
    srNo: "02",
    title: "Lucrente",
    categories: ["Brand", "Product", "Web"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img alt="iPhone mockup" className="w-full h-full object-cover" src={imgFreeHandHoldingIPhone16ProMockup2} />
      </div>
    )
  },
  {
    id: 2,
    srNo: "03",
    title: "Cyhex",
    categories: ["Web App", "Website"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img alt="Project mockup" className="w-full h-full object-cover" src={imgShotsMockups131} />
      </div>
    )
  },
  {
    id: 3,
    srNo: "04",
    title: "ORIGINALLY RAW",
    categories: ["E-commerce"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img alt="Lucrente homepage" className="w-full h-full object-cover" src={imgLucrenteHomepage1} />
      </div>
    )
  },
  {
    id: 4,
    srNo: "05",
    title: "Playground",
    categories: ["Design", "Experiments"],
    content: (
      <div className="w-full h-full bg-[#ff4c11] relative overflow-clip">
        <div className="absolute flex flex-col items-end leading-[0.98] text-white whitespace-pre-wrap" style={{ left: '7.4vw', top: '13vh', width: '19.1vw' }}>
          <p className="font-['Times_New_Roman',serif] italic relative shrink-0 text-right w-full" style={{ fontSize: '3.08vw', letterSpacing: '-0.031vw' }}>My</p>
          <p className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold not-italic opacity-40 relative shrink-0 w-full" style={{ fontSize: '3.7vw', letterSpacing: '-0.0375vw' }}>Playground</p>
        </div>
      </div>
    )
  }
];

// Duplicate items to ensure smooth infinite sliding across 10 slots
const CAROUSEL_ITEMS = [
  ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-1` })),
  ...BASE_ITEMS.map((item) => ({ ...item, id: `${item.id}-2` }))
];

function Frame27({ srNo }: { srNo: string }) {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" style={{ paddingTop: '5.333vh', width: '3.056vw' }}>
      <p className="font-['Geist_Mono',sans-serif] font-normal leading-[0.98] opacity-30 relative shrink-0 text-right text-white" style={{ fontSize: '0.833vw' }}>{srNo}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="opacity-20 relative w-full h-full flex items-center justify-center">
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
    <div className="opacity-20 relative w-full h-full flex items-center justify-center">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '23.778vh', marginRight: '-0.208vw', width: '1.181vw' }}>
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
      style={{ height: '24.444vh', marginRight: '-0.208vw', width: '27.778vw' }}
    />
  );
}

function Frame17() {
  return (
    <div className="opacity-20 relative w-full h-full flex items-center justify-center">
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
    <div className="opacity-20 relative w-full h-full flex items-center justify-center">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '23.778vh', marginRight: '-0.208vw', width: '1.181vw' }}>
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
        <p key={i} className="relative shrink-0 w-full whitespace-nowrap">{cat}</p>
      ))}
    </div>
  );
}

interface CaseStudyProps {
  srNo: string;
  categories: string[];
  title: string;
}

function Frame28({ srNo, categories, onHover, onLeave, isHovered }: Omit<CaseStudyProps, 'title'> & { onHover: () => void, onLeave: () => void, isHovered: boolean }) {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full cursor-pointer z-20 pointer-events-auto"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Frame27 srNo={srNo} />
      <Frame26 isHovered={isHovered} />
      <Frame19 categories={categories} />
    </div>
  );
}

function Frame29({ srNo, categories, title, onHover, onLeave, isHovered }: CaseStudyProps & { onHover: () => void, onLeave: () => void, isHovered: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center top-0 pointer-events-none z-20" style={{ left: '26.042vw', width: '35.833vw' }}>
      <Frame28 srNo={srNo} categories={categories} onHover={onHover} onLeave={onLeave} isHovered={isHovered} />
      <p className="font-['Geist_Mono',sans-serif] font-normal leading-[0.98] relative shrink-0 text-center text-white w-full whitespace-pre-wrap uppercase" style={{ fontSize: '0.833vw', marginTop: '1.481vh' }}>{title}</p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

function Frame30() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastTime = 0;
    const handleWheel = (e: WheelEvent) => {
      // Prevent the page from scrolling down/up
      e.preventDefault();

      const now = Date.now();
      if (now - lastTime < 500) return;
      if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
        lastTime = now;
        if (e.deltaY > 0 || e.deltaX > 0) {
          setActiveIndex((prev) => (prev + 1) % 10);
        } else {
          setActiveIndex((prev) => (prev - 1 + 10) % 10);
        }
      }
    };

    // We must pass { passive: false } to allow e.preventDefault()
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
              width: '27.778vw', height: '24.444vh',
              transformOrigin: 'center center',
              pointerEvents: isCenter ? 'auto' : 'none',
              cursor: isCenter ? 'pointer' : 'default',
              x: '-50%',
              y: '-50%'
            }}
            initial={slot}
            onClick={() => {
              if (isCenter) {
                // Remove the "-1" or "-2" suffix duplicate tag if present
                const routeId = item.title.toLowerCase().replace(/\s+/g, '-');
                navigate(`/case-study/${routeId}`);
              }
            }}
            animate={{
              left: slot.left,
              top: slot.top,
              scale: isCenter && isHovered ? 0.9 : slot.scale,
              zIndex: slot.zIndex,
              opacity: slot.opacity
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
          >
            <div className="w-full h-full relative overflow-clip bg-[#121212]">
              {item.content}
            </div>
          </motion.div>
        );
      })}

      <div
        onClick={() => {
          const routeId = activeItem.title.toLowerCase().replace(/\s+/g, '-');
          navigate(`/case-study/${routeId}`);
        }}
        className="cursor-pointer"
      >
        <Frame29
          srNo={activeItem.srNo}
          categories={activeItem.categories}
          title={activeItem.title}
          onHover={() => setIsHovered(true)}
          onLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-black relative overflow-hidden" style={{ width: '100vw', height: '100vh' }} data-name="51">
      <Group1 />
      <Frame18 />
      <Frame />
      <Frame5 />
      <Group />
      <Frame30 />
      <p className="absolute font-['Geist',sans-serif] font-normal leading-[1.2] opacity-40 text-[#fbf9ef] tracking-[-0.009vw] whitespace-pre-wrap" style={{ left: '2.222vw', fontSize: '0.903vw', top: '12.778vh', width: '12.708vw' }}>{`This is my corner of the internet where I showcase my work and variety of other things I'm currently exploring.`}</p>
    </div>
  );
}