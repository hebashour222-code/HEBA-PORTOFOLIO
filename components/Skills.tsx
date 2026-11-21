"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  TrendingUp,
  Filter,
  FileText,
  Building,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const { t, lang } = useLanguage();

  const categoryIcons = [
    <Compass key="strategy" className="w-6 h-6 text-[#C85A32]" />,
    <TrendingUp key="growth" className="w-6 h-6 text-[#C85A32]" />,
    <Filter key="funnel" className="w-6 h-6 text-[#C85A32]" />,
    <FileText key="content" className="w-6 h-6 text-[#C85A32]" />,
    <Building key="b2b" className="w-6 h-6 text-[#C85A32]" />,
    <Sparkles key="ai" className="w-6 h-6 text-[#C85A32]" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.skills.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight mb-4">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed">
            {t.skills.description}
          </p>
        </div>

        {/* 6 Skill Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#FCFAF7] border border-[#E7DCCE] p-6 shadow-card hover:shadow-card-hover hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FCE7DF] flex items-center justify-center shrink-0 border border-[#F8CEC0]">
                    {categoryIcons[idx]}
                  </div>
                  <h3 className="font-bold text-base text-[#241812] leading-snug">
                    {cat.title}
                  </h3>
                </div>

                {/* Subtitle / Overview */}
                <p className="text-xs text-[#5E4A3D] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Bullet List */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#44352C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C85A32] shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Domain Badge Footer */}
              <div className="mt-6 pt-4 border-t border-[#E7DCCE] flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#7A6354] uppercase tracking-wider">
                  {lang === "ar" ? "كفاءة مثبتة بالعمل" : "Verified Competency"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
