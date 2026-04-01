import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
    isAboutOpen: boolean;
    openAbout: () => void;
    closeAbout: () => void;
    toggleAbout: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const openAbout = () => setIsAboutOpen(true);
    const closeAbout = () => setIsAboutOpen(false);
    const toggleAbout = () => setIsAboutOpen(prev => !prev);

    return (
        <UIContext.Provider value={{ isAboutOpen, openAbout, closeAbout, toggleAbout }}>
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
