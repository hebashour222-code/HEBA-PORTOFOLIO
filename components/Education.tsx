"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Award, CheckCircle2, ZoomIn, X, Calendar, Building, Sparkles } from "lucide-react";

export default function Education() {
  const { t, lang } = useLanguage();
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.education.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight mb-4">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed">
            {t.education.description}
          </p>
        </div>

        {/* Academic Degrees & Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.education.degrees.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#FAF6F0] border border-[#E7DCCE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#96381A] bg-[#FCE7DF] px-3 py-1 rounded-full border border-[#F8CEC0]">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#7A6354] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EBE1] flex items-center justify-center text-[#C85A32] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#241812] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#7A6354] font-medium">{item.institution}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#5E4A3D] leading-relaxed">
                  {item.description || item.statusNote}
                </p>
              </div>

              {item.noteBadge && (
                <div className="mt-6 pt-4 border-t border-[#E7DCCE] flex items-center gap-2 text-xs text-[#7A6354]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{item.noteBadge}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verified Certificate Showcase Card */}
        <div className="rounded-3xl bg-[#FAF6F0] border border-[#E7DCCE] p-6 sm:p-8 shadow-card">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Certificate Details (Left) */}
            <div className="w-full lg:w-7/12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{t.education.certTitle}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#241812] leading-snug">
                {t.education.certificate.title}
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-[#5E4A3D]">
                <p className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === "ar" ? "الجهة المانحة: " : "Issuing Body: "}</strong>
                    {t.education.certificate.issuer}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C85A32] shrink-0" />
                  <span>
                    <strong>{lang === "ar" ? "تاريخ الإصدار: " : "Issued: "}</strong>
                    {t.education.certificate.date}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0" />
                  <span>
                    <strong>{lang === "ar" ? "الممنوح له: " : "Awarded To: "}</strong>
                    {t.education.certificate.recipient}
                  </span>
                </p>
              </div>

              {/* Signatories */}
              <div className="pt-3 border-t border-[#E7DCCE]">
                <span className="text-[11px] font-bold text-[#241812] uppercase tracking-wider block mb-1.5">
                  {lang === "ar" ? "الاعتماد والتوقيع الرسمي:" : "Official Signatories:"}
                </span>
                <ul className="space-y-1">
                  {t.education.certificate.signatories.map((sig, sIdx) => (
                    <li key={sIdx} className="text-xs text-[#7A6354] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                      <span>{sig}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setCertModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#241812] hover:bg-[#C85A32] text-[#FAF6F0] text-xs font-semibold transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>{lang === "ar" ? "معاينة الشهادة الرسمية" : "View Official Certificate"}</span>
                </button>
              </div>
            </div>

            {/* Certificate Preview Thumbnail (Right) */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div
                onClick={() => setCertModalOpen(true)}
                className="relative aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#E7DCCE] bg-[#FFFFFF] shadow-md cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setCertModalOpen(true)}
                aria-label="Click to enlarge certificate"
              >
                <Image
                  src={t.education.certificate.image}
                  alt="MCIT & Microsoft Certificate of Completion"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#241812]/0 group-hover:bg-[#241812]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#241812]/80 text-[#FAF6F0] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    {lang === "ar" ? "تكبير الشهادة" : "Enlarge Certificate"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {certModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#241812]/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#E7DCCE] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DCCE] mb-4">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#241812]">
                  {t.education.certificate.title}
                </h3>
                <span className="text-xs text-[#7A6354]">
                  {t.education.certificate.issuer} — {t.education.certificate.date}
                </span>
              </div>
              <button
                onClick={() => setCertModalOpen(false)}
                className="p-1.5 rounded-lg text-[#7A6354] hover:text-[#241812] hover:bg-[#F2EBE1] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[65vh] max-h-[600px] bg-white rounded-xl overflow-hidden border border-[#E7DCCE]">
              <Image
                src={t.education.certificate.image}
                alt="Full Certificate of Completion"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
