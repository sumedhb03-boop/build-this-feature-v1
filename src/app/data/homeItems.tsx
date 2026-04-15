import React from "react";
import imgFreeHandHoldingIPhone16ProMockup2 from "../../assets/cb404150f92e88ed4a66f5525a525988047fb537.png";
import imgLucrenteHomepage1 from "../../assets/934e76980decd08a547dbf8807403b703fd07584.png";
import imgShotsMockups21 from "../../assets/f0cf51fe902c49e33273901f4d5947d40e8551e8.png";
import imgShotsMockups131 from "../../assets/8b29ebd34c3524dbc7989b4884ebd904c19ff803.png";

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
    title: "Lucrente",
    categories: ["Brand", "Product", "Web"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="iphone mockup" className="w-full h-full object-cover" src={imgFreeHandHoldingIPhone16ProMockup2} />
      </div>
    )
  },
  {
    id: 2,
    slug: "cyhex",
    srNo: "03",
    title: "Cyhex",
    categories: ["Web App", "Website"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Project mockup" className="w-full h-full object-cover" src={imgShotsMockups131} />
      </div>
    )
  },
  {
    id: 3,
    slug: "scorecric",
    srNo: "04",
    title: "Scorecric",
    categories: ["Brand", "Product"],
    content: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        <img alt="Project mockup" className="w-full h-full object-cover" src={imgShotsMockups21} />
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
        <img alt="Lucrente homepage" className="w-full h-full object-cover" src={imgLucrenteHomepage1} />
      </div>
    )
  }
];

