"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, MapPin, Copy, Check, Download, ExternalLink, ShieldCheck } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.contact.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Direct Email Card */}
            <div className="rounded-3xl bg-[#FCFAF7] border border-[#E7DCCE] p-6 sm:p-7 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE7DF] border border-[#F8CEC0] flex items-center justify-center text-[#C85A32] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#7A6354] uppercase tracking-wider block">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="text-base sm:text-lg font-bold text-[#241812] hover:text-[#C85A32] transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded"
                    >
                      {t.contact.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-center">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#241812] bg-[#F2EBE1] hover:bg-[#E7DCCE] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                    aria-label={t.contact.copyEmail}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7A6354]" />
                        <span>{t.contact.copyEmail}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${t.contact.emailValue}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#FAF6F0] bg-[#C85A32] hover:bg-[#B44823] rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                  >
                    <span>{t.contact.sendEmail}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="rounded-3xl bg-[#FCFAF7] border border-[#E7DCCE] p-6 sm:p-7 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center text-[#0077B5] shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#7A6354] uppercase tracking-wider block">
                      {t.contact.linkedInLabel}
                    </span>
                    <a
                      href={t.contact.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#241812] hover:text-[#0077B5] transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] rounded"
                    >
                      {t.contact.linkedInText}
                    </a>
                  </div>
                </div>

                <a
                  href={t.contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#FAF6F0] bg-[#241812] hover:bg-[#0077B5] rounded-xl transition-colors shadow-sm sm:self-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
                >
                  <span>{t.contact.openLinkedIn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-3xl bg-[#FCFAF7] border border-[#E7DCCE] p-5 shadow-card flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F2EBE1] flex items-center justify-center text-[#C85A32] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#7A6354] uppercase tracking-wider block">
                  {t.contact.locationLabel}
                </span>
                <span className="text-sm font-semibold text-[#241812]">
                  {t.contact.locationValue}
                </span>
              </div>
            </div>

            {/* Direct Contact Notice */}
            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E7DCCE] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
              <p className="text-xs text-[#5E4A3D] leading-relaxed">
                {t.contact.transparencyNote}
              </p>
            </div>
          </div>

          {/* Resume & Credentials Download Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#241812] text-[#FAF6F0] p-8 shadow-card flex flex-col justify-between h-full border border-[#44352C]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0]/10 border border-[#FAF6F0]/20 flex items-center justify-center text-[#C85A32]">
                  <Download className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#FAF6F0]">
                  {t.contact.resumeDownloadCardTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#D9CDC4] leading-relaxed">
                  {t.contact.resumeDownloadCardDesc}
                </p>

                <div className="py-2 space-y-2 text-xs text-[#D9CDC4]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                    <span>{lang === "ar" ? "الصيغة: PDF رسمي عالي الدقة" : "Format: Official High-Res PDF"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                    <span>{lang === "ar" ? "الحجم: 45 كيلوبايت — صفحتان" : "Size: 45 KB — 2 Pages"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                    <span>{lang === "ar" ? "بيانات موثقة ومطابقة لسجل الأعمال" : "Verified Credentials & Work Record"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#44352C]">
                <a
                  href="/assets/cv/Heba_Ashour_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#B44823] text-[#FAF6F0] text-sm font-bold transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C85A32]"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.contact.downloadResume}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
