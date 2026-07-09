"use client";

import { useEffect } from "react";
import { useNav } from "@/lib/nav-context";

interface SectionTrackerProps {
  section: "garage" | "shop" | "cart" | "profile";
}

export default function SectionTracker({ section }: SectionTrackerProps) {
  const { setLastSection } = useNav();

  useEffect(() => {
    setLastSection(section);
  }, [section, setLastSection]);

  return null;
}
