import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home.tsx";
import CaseStudy from "./app/CaseStudy.tsx";
import "./styles/index.css";

import { UIProvider } from "./app/context/UIContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UIProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </UIProvider>
  </BrowserRouter>
);