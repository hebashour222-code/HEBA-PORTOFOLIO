"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang, t, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#services", label: t.nav.services },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E7DCCE] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg p-1"
            aria-label={t.hero.name}
          >
            <div className="w-10 h-10 rounded-full bg-[#241812] text-[#FAF6F0] flex items-center justify-center font-bold text-sm tracking-tight border border-[#C85A32]/40 shadow-sm group-hover:bg-[#C85A32] transition-colors">
              HA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-[#241812] leading-tight tracking-tight">
                {lang === "ar" ? "هبة عاشور إبراهيم" : "Heba Ashour"}
              </span>
              <span className="text-xs text-[#7A6354] font-medium leading-tight">
                {lang === "ar" ? "تسويق رقمي واستراتيجية" : "Marketing Strategist"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#5E4A3D] hover:text-[#241812] hover:bg-[#F2EBE1] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#241812] bg-[#F2EBE1] hover:bg-[#E7DCCE] border border-[#D8C7B5] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-label={lang === "ar" ? "Switch language to English" : "تغيير اللغة إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{t.nav.switchLang}</span>
            </button>

            <a
              href="/assets/cv/Heba_Ashour_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#FAF6F0] bg-[#241812] hover:bg-[#C85A32] rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <span>{t.nav.resume}</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="p-2 text-xs font-semibold text-[#241812] bg-[#F2EBE1] border border-[#D8C7B5] rounded-lg sm:hidden flex items-center gap-1"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{t.nav.switchLang}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#241812] hover:bg-[#F2EBE1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7DCCE] bg-[#FAF6F0] px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#241812] hover:bg-[#F2EBE1] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#E7DCCE] flex flex-col gap-2">
            <a
              href="/assets/cv/Heba_Ashour_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FAF6F0] bg-[#241812] hover:bg-[#C85A32] rounded-lg transition-colors"
            >
              <span>{t.nav.resume}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#241812] bg-[#F2EBE1] border border-[#D8C7B5] rounded-lg"
            >
              <Globe className="w-4 h-4 text-[#C85A32]" />
              <span>{t.nav.switchLang}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
