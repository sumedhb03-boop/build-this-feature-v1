import React from "react";
import imgLucrenteThumbnail from "../../assets/Lucrente visuaal 1.webp";
import imgCyhexThumbnail from "../../assets/CY 01.webp";
import imgScoreCricThumbnail from "../../assets/PNG to WEBP 1.webp";
import imgOriginallyRawThumbnail from "../../assets/OR 01.webp";

export const BASE_ITEMS = [
  {
    id: "hero",
    type: "hero",
    srNo: "01",
    title: "MY WORK",
    categories: [],
    content: null // Handled specially in MobileHero
  },
  {
    id: 1,
    slug: "lucrente",
    srNo: "02",
    title: "LUCRENTE",
    categories: ["Brand", "Product", "Web"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Lucrente Thumbnail" className="w-full h-full object-cover" src={imgLucrenteThumbnail} />
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
        <img alt="ScoreCric Thumbnail" className="w-full h-full object-cover" src={imgScoreCricThumbnail} />
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
        <img alt="Originally Raw Thumbnail" className="w-full h-full object-cover" src={imgOriginallyRawThumbnail} />
      </div>
    )
  }
];

