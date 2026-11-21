"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#services", label: t.nav.services },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#1C1410] text-[#FAF6F0] pt-16 pb-12 border-t border-[#2D221C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#2D221C]">
          {/* Brand Info */}
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C85A32] text-[#FAF6F0] flex items-center justify-center font-bold text-xs tracking-tight shadow-sm">
                HA
              </div>
              <span className="font-extrabold text-lg text-[#FAF6F0] tracking-tight">
                {lang === "ar" ? "هبة عاشور إبراهيم" : "Heba Ashour Ibrahim"}
              </span>
            </div>
            <p className="text-xs text-[#BEACA0] leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Direct Social / Email Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:Hebashour222@gmail.com"
              className="w-10 h-10 rounded-xl bg-[#2D221C] hover:bg-[#C85A32] flex items-center justify-center text-[#FAF6F0] transition-colors"
              aria-label="Email Heba Ashour"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/heba-ashour-d/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#2D221C] hover:bg-[#0077B5] flex items-center justify-center text-[#FAF6F0] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAF6F0] bg-[#2D221C] hover:bg-[#C85A32] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <div className="py-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 border-b border-[#2D221C]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-[#BEACA0] hover:text-[#FAF6F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Credits & Integrity Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start text-xs text-[#7A6354]">
          <p>{t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
