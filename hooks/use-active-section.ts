"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}