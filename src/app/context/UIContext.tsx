import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
    isAboutOpen: boolean;
    hasLoaded: boolean;
    openAbout: () => void;
    closeAbout: () => void;
    toggleAbout: () => void;
    setHasLoaded: (val: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(() => {
        // If the user first lands on the site via a subpage (e.g., /case-study/...),
        // bypass the boot sequence entirely.
        return typeof window !== 'undefined' && window.location.pathname !== '/';
    });

    const openAbout = () => setIsAboutOpen(true);
    const closeAbout = () => setIsAboutOpen(false);
    const toggleAbout = () => setIsAboutOpen(prev => !prev);

    return (
        <UIContext.Provider value={{ 
            isAboutOpen, 
            hasLoaded, 
            openAbout, 
            closeAbout, 
            toggleAbout, 
            setHasLoaded 
        }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}
