"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Pill, Factory, Megaphone, Bot, ZoomIn, X, CheckCircle } from "lucide-react";

export default function About() {
  const { t, lang, dir } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const pillarIcons = [
    <Pill key="pharmacy" className="w-5 h-5 text-[#C85A32]" />,
    <Factory key="manufacturing" className="w-5 h-5 text-[#C85A32]" />,
    <Megaphone key="marketing" className="w-5 h-5 text-[#C85A32]" />,
    <Bot key="ai" className="w-5 h-5 text-[#C85A32]" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.about.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Two Column Narrative & Branding Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#5E4A3D] text-base leading-relaxed">
            <p className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#E7DCCE] font-medium text-[#241812] shadow-sm">
              {t.about.paragraph1}
            </p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>

            {/* 4 Pillars Grid */}
            <div className="pt-6">
              <h3 className="text-lg font-bold text-[#241812] mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
                {lang === "ar" ? "ركائز التخصص والقيمة:" : "Core Strategic Pillars:"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E7DCCE] hover:border-[#C85A32]/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#FCE7DF] flex items-center justify-center shrink-0">
                        {pillarIcons[idx]}
                      </div>
                      <h4 className="font-bold text-sm text-[#241812]">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-[#5E4A3D] leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Branding Graphic Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-[#FAF6F0] border border-[#E7DCCE] rounded-3xl p-4 shadow-card">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-[#241812] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C85A32]" />
                  {t.about.brandGraphicTitle}
                </span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-xs font-medium text-[#C85A32] hover:text-[#96381A] flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded"
                  aria-label="Zoom branding graphic"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "تكبير" : "Enlarge"}</span>
                </button>
              </div>

              {/* Graphic Display with Click-to-Enlarge */}
              <div
                onClick={() => setModalOpen(true)}
                className="relative aspect-square w-full rounded-2xl overflow-hidden cursor-pointer group border border-[#E7DCCE] bg-[#F2EBE1]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setModalOpen(true)}
                aria-label={t.about.brandGraphicCaption}
              >
                <Image
                  src="/assets/brand/heba-ashour-brand.jpeg"
                  alt={
                    lang === "ar"
                      ? "رسم الهوية الشخصية — هبة عاشور إبراهيم: الصيدلة، التصنيع، التسويق، والذكاء الاصطناعي"
                      : "Personal branding graphic for Heba Ashour Ibrahim: Pharmacy, Manufacturing, Marketing, AI"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#241812]/0 group-hover:bg-[#241812]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#241812]/80 text-[#FAF6F0] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    {lang === "ar" ? "معاينة بدقة عالية" : "View Full Graphic"}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-[#7A6354] text-center leading-relaxed px-2">
                {t.about.brandGraphicCaption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full-Resolution Brand Graphic */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#241812]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF6F0] rounded-2xl p-4 shadow-2xl overflow-hidden border border-[#E7DCCE]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DCCE] mb-3">
              <h3 className="font-bold text-sm text-[#241812]">{t.about.brandGraphicTitle}</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-[#7A6354] hover:text-[#241812] hover:bg-[#F2EBE1] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[70vh] max-h-[600px]">
              <Image
                src="/assets/brand/heba-ashour-brand.jpeg"
                alt="Personal Branding Infographic"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
