import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";

interface RulerPickerProps {
  options?: string[];
  onSelect?: (option: string, index: number) => void;
  currentIndex?: number; // Added to make it controlled
}

function RulerTicks() {
  return (
    <div className="h-[14px] relative shrink-0 w-[801px] flex justify-center">
      <div className="absolute inset-0">
        <svg width="801" height="14" viewBox="0 0 801 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-full">
          <line x1="0.5" y1="0" x2="0.5" y2="8" stroke="white"/>
          <line x1="10.5" y1="0" x2="10.5" y2="6" stroke="#7A7A7A"/>
          <line x1="20.5" y1="0" x2="20.5" y2="6" stroke="#7A7A7A"/>
          <line x1="30.5" y1="0" x2="30.5" y2="6" stroke="#7A7A7A"/>
          <line x1="40.5" y1="0" x2="40.5" y2="6" stroke="#7A7A7A"/>
          <line x1="50.5" y1="0" x2="50.5" y2="8" stroke="white"/>
          <line x1="60.5" y1="0" x2="60.5" y2="6" stroke="#7A7A7A"/>
          <line x1="70.5" y1="0" x2="70.5" y2="6" stroke="#7A7A7A"/>
          <line x1="80.5" y1="0" x2="80.5" y2="6" stroke="#7A7A7A"/>
          <line x1="90.5" y1="0" x2="90.5" y2="6" stroke="#7A7A7A"/>
          <line x1="100.5" y1="0" x2="100.5" y2="8" stroke="white"/>
          <line x1="110.5" y1="0" x2="110.5" y2="6" stroke="#7A7A7A"/>
          <line x1="120.5" y1="0" x2="120.5" y2="6" stroke="#7A7A7A"/>
          <line x1="130.5" y1="0" x2="130.5" y2="6" stroke="#7A7A7A"/>
          <line x1="140.5" y1="0" x2="140.5" y2="6" stroke="#7A7A7A"/>
          <line x1="150.5" y1="0" x2="150.5" y2="8" stroke="white"/>
          <line x1="160.5" y1="0" x2="160.5" y2="6" stroke="#7A7A7A"/>
          <line x1="170.5" y1="0" x2="170.5" y2="6" stroke="#7A7A7A"/>
          <line x1="180.5" y1="0" x2="180.5" y2="6" stroke="#7A7A7A"/>
          <line x1="190.5" y1="0" x2="190.5" y2="6" stroke="#7A7A7A"/>
          <line x1="200.5" y1="0" x2="200.5" y2="8" stroke="white"/>
          <line x1="210.5" y1="0" x2="210.5" y2="6" stroke="#7A7A7A"/>
          <line x1="220.5" y1="0" x2="220.5" y2="6" stroke="#7A7A7A"/>
          <line x1="230.5" y1="0" x2="230.5" y2="6" stroke="#7A7A7A"/>
          <line x1="240.5" y1="0" x2="240.5" y2="6" stroke="#7A7A7A"/>
          <line x1="250.5" y1="0" x2="250.5" y2="8" stroke="white"/>
          <line x1="260.5" y1="0" x2="260.5" y2="6" stroke="#7A7A7A"/>
          <line x1="270.5" y1="0" x2="270.5" y2="6" stroke="#7A7A7A"/>
          <line x1="280.5" y1="0" x2="280.5" y2="6" stroke="#7A7A7A"/>
          <line x1="290.5" y1="0" x2="290.5" y2="6" stroke="#7A7A7A"/>
          <line x1="300.5" y1="0" x2="300.5" y2="8" stroke="white"/>
          <line x1="310.5" y1="0" x2="310.5" y2="6" stroke="#7A7A7A"/>
          <line x1="320.5" y1="0" x2="320.5" y2="6" stroke="#7A7A7A"/>
          <line x1="330.5" y1="0" x2="330.5" y2="6" stroke="#7A7A7A"/>
          <line x1="340.5" y1="0" x2="340.5" y2="6" stroke="#7A7A7A"/>
          <line x1="350.5" y1="0" x2="350.5" y2="8" stroke="white"/>
          <line x1="360.5" y1="0" x2="360.5" y2="6" stroke="#7A7A7A"/>
          <line x1="370.5" y1="0" x2="370.5" y2="6" stroke="#7A7A7A"/>
          <line x1="380.5" y1="0" x2="380.5" y2="6" stroke="#7A7A7A"/>
          <line x1="390.5" y1="0" x2="390.5" y2="6" stroke="#7A7A7A"/>
          <line x1="400.5" y1="0" x2="400.5" y2="14" stroke="white"/>
          <line x1="410.5" y1="0" x2="410.5" y2="6" stroke="#7A7A7A"/>
          <line x1="420.5" y1="0" x2="420.5" y2="6" stroke="#7A7A7A"/>
          <line x1="430.5" y1="0" x2="430.5" y2="6" stroke="#7A7A7A"/>
          <line x1="440.5" y1="0" x2="440.5" y2="6" stroke="#7A7A7A"/>
          <line x1="450.5" y1="0" x2="450.5" y2="8" stroke="white"/>
          <line x1="460.5" y1="0" x2="460.5" y2="6" stroke="#7A7A7A"/>
          <line x1="470.5" y1="0" x2="470.5" y2="6" stroke="#7A7A7A"/>
          <line x1="480.5" y1="0" x2="480.5" y2="6" stroke="#7A7A7A"/>
          <line x1="490.5" y1="0" x2="490.5" y2="6" stroke="#7A7A7A"/>
          <line x1="500.5" y1="0" x2="500.5" y2="8" stroke="white"/>
          <line x1="510.5" y1="0" x2="510.5" y2="6" stroke="#7A7A7A"/>
          <line x1="520.5" y1="0" x2="520.5" y2="6" stroke="#7A7A7A"/>
          <line x1="530.5" y1="0" x2="530.5" y2="6" stroke="#7A7A7A"/>
          <line x1="540.5" y1="0" x2="540.5" y2="6" stroke="#7A7A7A"/>
          <line x1="550.5" y1="0" x2="550.5" y2="8" stroke="white"/>
          <line x1="560.5" y1="0" x2="560.5" y2="6" stroke="#7A7A7A"/>
          <line x1="570.5" y1="0" x2="570.5" y2="6" stroke="#7A7A7A"/>
          <line x1="580.5" y1="0" x2="580.5" y2="6" stroke="#7A7A7A"/>
          <line x1="590.5" y1="0" x2="590.5" y2="6" stroke="#7A7A7A"/>
          <line x1="600.5" y1="0" x2="600.5" y2="8" stroke="white"/>
          <line x1="610.5" y1="0" x2="610.5" y2="6" stroke="#7A7A7A"/>
          <line x1="620.5" y1="0" x2="620.5" y2="6" stroke="#7A7A7A"/>
          <line x1="630.5" y1="0" x2="630.5" y2="6" stroke="#7A7A7A"/>
          <line x1="640.5" y1="0" x2="640.5" y2="6" stroke="#7A7A7A"/>
          <line x1="650.5" y1="0" x2="650.5" y2="8" stroke="white"/>
          <line x1="660.5" y1="0" x2="660.5" y2="6" stroke="#7A7A7A"/>
          <line x1="670.5" y1="0" x2="670.5" y2="6" stroke="#7A7A7A"/>
          <line x1="680.5" y1="0" x2="680.5" y2="6" stroke="#7A7A7A"/>
          <line x1="690.5" y1="0" x2="690.5" y2="6" stroke="#7A7A7A"/>
          <line x1="700.5" y1="0" x2="700.5" y2="8" stroke="white"/>
          <line x1="710.5" y1="0" x2="710.5" y2="6" stroke="#7A7A7A"/>
          <line x1="720.5" y1="0" x2="720.5" y2="6" stroke="#7A7A7A"/>
          <line x1="730.5" y1="0" x2="730.5" y2="6" stroke="#7A7A7A"/>
          <line x1="740.5" y1="0" x2="740.5" y2="6" stroke="#7A7A7A"/>
          <line x1="750.5" y1="0" x2="750.5" y2="8" stroke="white"/>
          <line x1="760.5" y1="0" x2="760.5" y2="6" stroke="#7A7A7A"/>
          <line x1="770.5" y1="0" x2="770.5" y2="6" stroke="#7A7A7A"/>
          <line x1="780.5" y1="0" x2="780.5" y2="6" stroke="#7A7A7A"/>
          <line x1="790.5" y1="0" x2="790.5" y2="6" stroke="#7A7A7A"/>
          <line x1="800.5" y1="0" x2="800.5" y2="8" stroke="white"/>
        </svg>
      </div>
    </div>
  );
}

export function RulerPicker({ 
  options = ["CYHEX", "SWIPE", "LUCRENTE", "NEBULA", "ORBIT", "VORTEX", "ZENITH"],
  onSelect,
  currentIndex: externalIndex // Renamed prop for clarity
}: RulerPickerProps) {
  const [internalIndex, setInternalIndex] = useState(externalIndex ?? 0);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  const GAP = 60; // Fixed gap between word edges

  // 1. Measure widths on mount or when options change
  useEffect(() => {
    // Small delay to ensure the browser has laid out the text and fonts are ready
    const timer = setTimeout(() => {
      const measured = itemRefs.current
        .slice(options.length, options.length * 2)
        .map((ref, idx) => {
          if (!ref) return 0;
          const rect = ref.getBoundingClientRect();
          // Calculate if this specific item in the middle set is the currently active one
          const isActive = idx === internalIndex; 
          // If it's active, it's scaled by 1.25. We need the layout (base) width.
          return isActive ? rect.width / 1.25 : rect.width;
        });
      
      if (measured.length > 0 && measured.every(w => w > 0)) {
        setItemWidths(measured);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [options]);

  // 2. Calculate offsets based on measured widths
  // centerXForIndex[i] is the cumulative distance to the center of item i
  const getOffsets = (widths: number[]) => {
    let currentPos = 0;
    const offsets: number[] = [];
    
    // One cycle width: sum of widths + sum of gaps
    const cycleWidth = widths.reduce((acc, w) => acc + w, 0) + (widths.length * GAP);

    // Calculate centering offset for each index in the middle set
    for (let i = 0; i < widths.length * 3; i++) {
      const realIdx = i % widths.length;
      const width = widths[realIdx];
      
      // Calculate where the center of this item should be relative to the track start
      const centerX = currentPos + width / 2;
      
      // The x value to center this item is -centerX
      // Note: paddingLeft: 50% will be added to the container to set the 'center' reference
      offsets.push(-centerX);
      
      currentPos += width + GAP;
    }
    
    return { offsets, cycleWidth };
  };

  const { offsets, cycleWidth } = getOffsets(itemWidths.length > 0 ? itemWidths : Array(options.length).fill(200));

  // Initialize position
  useEffect(() => {
    if (itemWidths.length > 0) {
      const targetIdx = options.length + (externalIndex ?? 0);
      x.set(offsets[targetIdx]);
    }
  }, [itemWidths]);

  // Watch for external index changes
  useEffect(() => {
    if (externalIndex !== undefined && externalIndex !== internalIndex && itemWidths.length > 0) {
      animateToIndex(externalIndex);
      setInternalIndex(externalIndex);
    }
  }, [externalIndex, itemWidths]);

  const snapToNearest = (currentX: number) => {
    if (itemWidths.length === 0) return;

    // Find closest offset
    let closestIndex = 0;
    let minDiff = Infinity;
    
    for (let i = 0; i < offsets.length; i++) {
      const diff = Math.abs(currentX - offsets[i]);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }

    const snapPosition = offsets[closestIndex];
    
    animate(x, snapPosition, {
      type: "spring", stiffness: 300, damping: 30
    }).then(() => {
      checkAndLoop(closestIndex);
    });
    
    const realIndex = closestIndex % options.length;
    setInternalIndex(realIndex);
    onSelect?.(options[realIndex], realIndex);
  };

  const checkAndLoop = (idx: number) => {
    if (itemWidths.length === 0) return;
    
    // If we're in the first copy, jump to the middle copy
    if (idx < options.length) {
      const newIdx = idx + options.length;
      x.set(offsets[newIdx]);
    }
    // If we're in the third copy, jump to the middle copy
    else if (idx >= options.length * 2) {
      const newIdx = idx - options.length;
      x.set(offsets[newIdx]);
    }
  };

  const animateToIndex = (targetRealIndex: number) => {
    if (itemWidths.length === 0) return;

    const currentX = x.get();
    
    // Current position in coordinates
    let currentIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < offsets.length; i++) {
        const diff = Math.abs(currentX - offsets[i]);
        if (diff < minDiff) {
            minDiff = diff;
            currentIdx = i;
        }
    }

    const currentRealIndex = currentIdx % options.length;
    
    // Shortest path logic
    let diff = targetRealIndex - currentRealIndex;
    if (Math.abs(diff) > options.length / 2) {
      diff = diff > 0 ? diff - options.length : diff + options.length;
    }
    
    const targetIdx = currentIdx + diff;
    
    animate(x, offsets[targetIdx], {
      type: "spring", stiffness: 300, damping: 30
    }).then(() => {
      checkAndLoop(targetIdx);
    });
  };

  const infiniteOptions = [...options, ...options, ...options];

  return (
    <div className="flex flex-col gap-[8px] items-center w-full max-w-[504px] overflow-hidden pointer-events-auto">
      <RulerTicks />
      
      <div className="relative w-full overflow-hidden py-2">
        <motion.div
          ref={containerRef}
          className="flex items-center cursor-grab active:cursor-grabbing"
          style={{ x, paddingLeft: '50%', paddingRight: '50%', gap: `${GAP}px` }}
          drag="x"
          dragElastic={0.1}
          onDragEnd={() => snapToNearest(x.get())}
        >
          {infiniteOptions.map((option, index) => {
            const realIndex = index % options.length;
            const isCurrent = realIndex === internalIndex;
            
            return (
              <motion.p
                key={`${option}-${index}`}
                ref={el => itemRefs.current[index] = el}
                className={`
                  relative shrink-0 w-auto text-center
                  font-['Helvetica_Neue',_sans-serif] 
                  font-bold uppercase not-italic
                  leading-[100%] transition-all duration-300 whitespace-nowrap
                  cursor-pointer
                  text-white
                  [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]
                `}
                style={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 700,
                  fontSize: '22.4px', // Fixed font size for stable layout
                  letterSpacing: '-0.03em', // Constant letter spacing to prevent layout shifts
                  scale: isCurrent ? 1.25 : 1, // Use scale for visual prominence
                  opacity: isCurrent ? 1 : 0.3,
                }}
                onClick={() => animateToIndex(realIndex)}
              >
                {option}
              </motion.p>
            );
          })}
        </motion.div>
      </div>
      
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none font-[0]">
          <RulerTicks />
        </div>
      </div>
    </div>
  );
}
