"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Mail, Briefcase, MapPin, Building2, CheckCircle2, FileDown } from "lucide-react";

export default function Hero() {
  const { t, lang, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0] to-[#F5EFEB]"
    >
      {/* Subtle Warm Decorative Background Rings */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C85A32]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-[350px] h-[350px] bg-[#B88746]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            {/* Verified Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7DF] border border-[#F8CEC0] text-[#96381A] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
              <span>{t.hero.verifiedPill}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <span className="text-sm md:text-base font-semibold text-[#7A6354] tracking-wider uppercase block">
                {t.hero.greeting}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#241812] tracking-tight leading-[1.2]">
                {t.hero.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#C85A32] leading-snug">
                {t.hero.title}
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#5E4A3D] leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Introduction Narrative */}
            <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Verified Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-[#44352C] bg-[#F2EBE1] border border-[#E7DCCE] px-3 py-2 rounded-lg">
                <Building2 className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span className="truncate">{t.hero.currentOrg}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#44352C] bg-[#F2EBE1] border border-[#E7DCCE] px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF6F0] bg-[#C85A32] hover:bg-[#B44823] rounded-xl shadow-md transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C85A32]"
              >
                <Briefcase className="w-4 h-4" />
                <span>{t.hero.viewWork}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#241812] bg-[#FAF6F0] hover:bg-[#F2EBE1] border border-[#D8C7B5] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#241812]"
              >
                <Mail className="w-4 h-4 text-[#7A6354]" />
                <span>{t.hero.contactMe}</span>
              </a>

              <a
                href="/assets/cv/Heba_Ashour_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#5E4A3D] hover:text-[#241812] hover:bg-[#F2EBE1] rounded-xl transition-colors"
                title={t.hero.downloadCv}
              >
                <FileDown className="w-4 h-4 text-[#C85A32]" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>
          </div>

          {/* Portrait Photo with Warm Aura (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Decorative Warm Terracotta Backdrop Card */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl bg-[#C85A32]/15 border border-[#C85A32]/25 -z-10" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C85A32]/20 via-transparent to-[#B88746]/20 blur-sm -z-10" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#E7DCCE] bg-[#FAF6F0] shadow-card group">
                <Image
                  src="/assets/profile/heba-ashour.jpeg"
                  alt={
                    lang === "ar"
                      ? "صورة شخصية رسمية — هبة عاشور إبراهيم"
                      : "Official portrait of Heba Ashour Ibrahim"
                  }
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1200px) 384px, 400px"
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#241812]/40 to-transparent pointer-events-none" />

                {/* Floating Verified Badge */}
                <div className="absolute bottom-3 inset-x-3 bg-[#FAF6F0]/95 backdrop-blur-md rounded-xl p-2.5 border border-[#E7DCCE] shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FCE7DF] text-[#C85A32] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#241812] leading-tight">
                        {lang === "ar" ? "كلية الصيدلة، جامعة القاهرة" : "B.Pharm, Cairo University"}
                      </span>
                      <span className="text-[10px] text-[#7A6354] leading-tight">
                        {lang === "ar" ? "صيدلانية ومسوقة رقمية" : "Pharmacist & Marketer"}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#96381A] bg-[#FCE7DF] px-2 py-0.5 rounded-full">
                    {lang === "ar" ? "موثق" : "Verified"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
