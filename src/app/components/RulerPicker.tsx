import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";

interface RulerPickerProps {
  options?: string[];
  onSelect?: (option: string, index: number) => void;
  currentIndex?: number; // Added to make it controlled
}

function RulerTicks() {
  return (
    <div className="h-[14px] relative shrink-0 w-[392px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392 14">
          <g>
            {/* Left side ticks */}
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="0" x2="0" y1="0" y2="8" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="8" x2="8" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="16" x2="16" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="24" x2="24" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="32" x2="32" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="36" x2="36" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="44" x2="44" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="52" x2="52" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="60" x2="60" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="68" x2="68" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="76" x2="76" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="84" x2="84" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="92" x2="92" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="100" x2="100" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="108" x2="108" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="116" x2="116" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="124" x2="124" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="132" x2="132" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="140" x2="140" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="148" x2="148" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="156" x2="156" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="164" x2="164" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="172" x2="172" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="180" x2="180" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="188" x2="188" y1="0" y2="5" />
            </g>

            {/* MASTER CENTER TICK */}
            <line stroke="white" x1="196" x2="196" y1="0" y2="14" strokeWidth="1" />

            {/* Right side ticks */}
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="204" x2="204" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="212" x2="212" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="220" x2="220" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="228" x2="228" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="236" x2="236" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="244" x2="244" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="252" x2="252" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="260" x2="260" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="268" x2="268" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="276" x2="276" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="284" x2="284" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="292" x2="292" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="300" x2="300" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="308" x2="308" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="316" x2="316" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="324" x2="324" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="332" x2="332" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="340" x2="340" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="348" x2="348" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="356" x2="356" y1="0" y2="8" />
            </g>
            <g>
              <line stroke="var(--stroke-0, #7A7A7A)" x1="364" x2="364" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="372" x2="372" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="380" x2="380" y1="0" y2="5" />
              <line stroke="var(--stroke-0, #7A7A7A)" x1="388" x2="388" y1="0" y2="5" />
              <line stroke="var(--stroke-0, white)" x1="392" x2="392" y1="0" y2="8" />
            </g>
          </g>
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
    // Measure only the middle set of items for baseline
    const measured = itemRefs.current
      .slice(options.length, options.length * 2)
      .map(ref => ref?.getBoundingClientRect().width || 0);
    
    if (measured.length > 0 && measured.every(w => w > 0)) {
      setItemWidths(measured);
    }
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
    <div className="flex flex-col gap-[4px] items-center w-full max-w-[504px] pointer-events-auto">
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
                  font-['Helvetica_Neue_LT_Std',_sans-serif] 
                  font-bold uppercase not-italic
                  leading-[100%] transition-all duration-300 whitespace-nowrap
                  cursor-pointer
                  text-white
                `}
                style={{
                  fontFamily: '"Helvetica Neue LT Std", sans-serif',
                  fontWeight: 700,
                  fontSize: isCurrent ? '28px' : '22.4px',
                  letterSpacing: isCurrent ? '-0.84px' : '-0.672px',
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
