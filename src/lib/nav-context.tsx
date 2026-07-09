"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

type Section = "garage" | "shop" | "cart" | "profile";

interface NavContextType {
  lastSection: Section;
  setLastSection: (section: Section) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [lastSection, setLastSectionState] = useState<Section>("garage");
  const lastSetRef = useRef<Section>("garage");

  const setLastSection = useCallback((section: Section) => {
    if (lastSetRef.current !== section) {
      lastSetRef.current = section;
      setLastSectionState(section);
    }
  }, []);

  return (
    <NavContext.Provider value={{ lastSection, setLastSection }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within NavProvider");
  return context;
}
