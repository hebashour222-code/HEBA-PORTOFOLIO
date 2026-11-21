"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, portfolioContent } from "@/lib/content";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof portfolioContent.ar;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    // Check saved preference or default to Arabic
    const saved = localStorage.getItem("heba_portfolio_lang") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("heba_portfolio_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
  };

  const currentDir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";

  const value: LanguageContextType = {
    lang,
    setLang,
    toggleLang,
    t: portfolioContent[lang],
    dir: currentDir,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
