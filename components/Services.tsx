"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, PenTool, GitMerge, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const { t, lang } = useLanguage();

  const serviceIcons = [
    <Compass key="strategic" className="w-6 h-6 text-[#C85A32]" />,
    <PenTool key="content" className="w-6 h-6 text-[#C85A32]" />,
    <GitMerge key="funnel" className="w-6 h-6 text-[#C85A32]" />,
    <Cpu key="ai" className="w-6 h-6 text-[#C85A32]" />,
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.services.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((svc, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#FCFAF7] border border-[#E7DCCE] p-8 shadow-card hover:shadow-card-hover hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE7DF] border border-[#F8CEC0] flex items-center justify-center shrink-0">
                    {serviceIcons[idx]}
                  </div>
                  <span className="text-xs font-bold text-[#7A6354] uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#241812] mb-3 leading-snug">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E4A3D] leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#E7DCCE]">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#44352C]">
                      <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E7DCCE] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#241812] hover:text-[#C85A32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded"
                >
                  <span>{lang === "ar" ? "طلب استشارة أو تعاون" : "Discuss Collaboration"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] font-semibold text-[#7A6354]">
                  {lang === "ar" ? "B2B وقطاع الصيدلة" : "B2B & Pharma"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
