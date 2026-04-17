import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./app/Home.tsx";
import CaseStudy from "./app/CaseStudy.tsx";
import Playground from "./app/Playground.tsx";
import Contact from "./app/Contact.tsx";
import PageTransition from "./app/components/PageTransition.tsx";
import "./styles/index.css";

import { UIProvider } from "./app/context/UIContext.tsx";

function AppRoutes() {
  const location = useLocation();

  // Group all case study routes under the same key so AnimatePresence doesn't trigger the wipe overlay
  const routeKey = location.pathname.startsWith('/case-study') ? 'case-study' : location.pathname;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={routeKey}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/playground" element={<PageTransition><Playground /></PageTransition>} />
        <Route path="/case-study/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UIProvider>
      <AppRoutes />
    </UIProvider>
  </BrowserRouter>
);