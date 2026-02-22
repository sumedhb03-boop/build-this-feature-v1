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
    <div className="-translate-x-1/2 absolute bg-black left-1/2 flex items-center justify-center z-10" style={{ height: '39.67vh', top: '47.33vh', width: '51.81vw' }}>
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

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#121212] overflow-clip" style={{ height: '12.11vh', left: 'calc(50% - 25.486vw)', top: '29.11vh', width: '12.5vw' }}>
      <div className="-translate-x-1/2 absolute left-1/2 top-0" style={{ height: '12.11vh', width: '12.5vw' }} data-name="Free_Hand_Holding_iPhone_16_Pro_Mockup 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="iPhone mockup" className="absolute left-[-0.04%] max-w-none pointer-events-none" style={{ height: '123.92%', top: '-6.46%', width: '100.41%' }} src={imgFreeHandHoldingIPhone16ProMockup2} />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#121212] overflow-clip" style={{ height: '12.11vh', left: 'calc(50% + 25.556vw)', top: '29.11vh', width: '12.5vw' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2" style={{ height: '13.33vh', top: 'calc(50% - 0.611vh)', width: '12.5vw' }} data-name="Lucrente Homepage 1">
        <img alt="Lucrente homepage" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLucrenteHomepage1} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#121212] overflow-clip" style={{ height: '9.083vh', left: 'calc(50% - 39.34vw)', top: '44.89vh', width: '9.375vw' }}>
      <div className="absolute left-0" style={{ height: '10vh', top: '-0.417vh', width: '9.375vw' }} data-name="Shots Mockups (2) 1">
        <img alt="Project mockup" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShotsMockups21} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-end leading-[0.98] text-white whitespace-pre-wrap" style={{ left: '2.5vw', paddingBottom: '0.167vh', top: '4.833vh', width: '6.458vw' }}>
      <p className="font-['Times_New_Roman',serif] italic relative shrink-0 text-right w-full" style={{ fontSize: '1.042vw', letterSpacing: '-0.031vw' }}>My</p>
      <p className="font-['Helvetica_Neue',_'Helvetica',_sans-serif] font-bold not-italic opacity-40 relative shrink-0 w-full" style={{ fontSize: '1.25vw', letterSpacing: '-0.0375vw' }}>Playground</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ff4c11] overflow-clip" style={{ height: '9.083vh', left: 'calc(50% + 39.34vw)', top: '44.89vh', width: '9.375vw' }}>
      <Frame20 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" style={{ paddingTop: '5.333vh', width: '3.056vw' }}>
      <p className="font-['Geist_Mono',sans-serif] font-normal leading-[0.98] opacity-30 relative shrink-0 text-right text-white" style={{ fontSize: '0.833vw' }}>02</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="opacity-20 relative w-full" style={{ height: '1.889vh' }}>
      <div className="absolute flex h-0 items-center justify-center left-0 top-0" style={{ width: '1.181vw' }}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 261" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-px top-0 w-0" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 262" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="opacity-20 relative w-full" style={{ height: '1.889vh' }}>
      <div className="absolute flex h-0 items-center justify-center left-0 top-0" style={{ width: '1.181vw' }}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 261" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-px top-0 w-0" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 262" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '23.778vh', marginRight: '-0.208vw', width: '1.181vw' }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: '1.889vh' }}>
        <div className="-scale-y-100 flex-none rotate-90 w-full">
          <Frame15 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 flex-none w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#121212] overflow-clip relative shrink-0" style={{ height: '24.444vh', marginRight: '-0.208vw', width: '27.778vw' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.03vw)]" style={{ height: '55.778vh', top: 'calc(50% + 13.556vh)', width: '27.847vw' }} data-name="Shots Mockups (13) 1">
        <img alt="ScoreCric mockup" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShotsMockups131} />
      </div>
      <div className="-translate-x-1/2 absolute" style={{ height: '24.556vh', left: 'calc(50% - 7.778vw)', top: '-2vh', width: '20.417vw' }} data-name="Free_Hand_Holding_iPhone_16_Pro_Mockup 1" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="opacity-20 relative w-full" style={{ height: '1.889vh' }}>
      <div className="absolute flex h-0 items-center justify-center left-0 top-0" style={{ width: '1.181vw' }}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 261" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-px top-0 w-0" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 262" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="opacity-20 relative w-full" style={{ height: '1.889vh' }}>
      <div className="absolute flex h-0 items-center justify-center left-0 top-0" style={{ width: '1.181vw' }}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 261" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-px top-0 w-0" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative" style={{ width: '1.181vw' }}>
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 262" stroke="white" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ gap: '23.778vh', marginRight: '-0.208vw', width: '1.181vw' }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: '1.889vh' }}>
        <div className="flex-none rotate-90 w-full">
          <Frame17 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: '1.889vh' }}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ paddingRight: '0.208vw', width: '29.722vw' }}>
      <Frame24 />
      <Frame13 />
      <Frame25 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Geist',sans-serif] font-normal items-start leading-[0.98] opacity-40 relative shrink-0 text-white whitespace-pre-wrap" style={{ gap: '0.444vh', paddingTop: '5.333vh', fontSize: '0.833vw', width: '3.056vw' }}>
      <p className="relative shrink-0 w-full">Brand</p>
      <p className="relative shrink-0 w-full">Product</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame26 />
      <Frame19 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col items-center top-0" style={{ left: '26.042vw', width: '35.833vw' }}>
      <Frame28 />
      <p className="font-['Geist_Mono',sans-serif] font-normal leading-[0.98] relative shrink-0 text-center text-white w-full whitespace-pre-wrap" style={{ fontSize: '0.833vw' }}>SCORECRIC</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2" style={{ height: '53.972vh', top: '7.222vh', width: '88.056vw' }}>
      <Frame9 />
      <Frame11 />
      <Frame10 />
      <Frame12 />
      <Frame29 />
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