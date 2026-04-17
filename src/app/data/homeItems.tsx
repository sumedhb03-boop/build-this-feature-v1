import React from "react";
import imgLucrenteThumbnail from "../../assets/lucrente_02.png";
import imgCyhexThumbnail from "../../assets/CY 01.webp";
import imgScoreCricThumbnail from "../../assets/Scorecric Thumbnail.webp";
import imgScoreCricDesktopThumbnail from "../../assets/Scorecric Desktop Thumbnail.webp";
import imgOriginallyRawThumbnail from "../../assets/OR Mockup.webp";

export const BASE_ITEMS = [
  {
    id: "hero",
    type: "hero",
    srNo: "01",
    title: "PLAYGROUND",
    categories: [],
    content: (
      <div className="absolute inset-0 flex items-center justify-center bg-[#FF4C11]">
        <div className="font-['Times_New_Roman',_Times,_serif] text-white text-center leading-[1] tracking-[-0.04em] text-[1.8vw]">
          A sandbox of<br />experimental ideas
        </div>
      </div>
    )
  },
  {
    id: 1,
    slug: "lucrente",
    srNo: "02",
    title: "LUCRENTE",
    categories: ["Brand", "Product", "Web"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Lucrente Thumbnail" className="w-full h-full object-cover scale-[1.2] md:scale-100" src={imgLucrenteThumbnail} />
      </div>
    )
  },
  {
    id: 2,
    slug: "cyhex",
    srNo: "03",
    title: "CYHEX",
    categories: ["Web App", "Website"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Cyhex Thumbnail" className="w-full h-full object-cover" src={imgCyhexThumbnail} />
      </div>
    )
  },
  {
    id: 3,
    slug: "scorecric",
    srNo: "04",
    title: "SCORECRIC",
    categories: ["Brand", "Product"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="ScoreCric Thumbnail" className="w-full h-full object-cover scale-[1.1] md:hidden" src={imgScoreCricThumbnail} />
        <img alt="ScoreCric Desktop Thumbnail" className="w-full h-full object-cover object-top hidden md:block" src={imgScoreCricDesktopThumbnail} />
      </div>
    )
  },
  {
    id: 4,
    slug: "originally-raw",
    srNo: "05",
    title: "ORIGINALLY RAW",
    categories: ["E-commerce"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Originally Raw Thumbnail" className="w-full h-full object-cover scale-[0.85] md:scale-100" src={imgOriginallyRawThumbnail} />
      </div>
    )
  }
];

