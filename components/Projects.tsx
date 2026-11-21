"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/lib/content";
import {
  FileText,
  Images,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Building2,
  CalendarClock,
} from "lucide-react";

export default function Projects() {
  const { t, lang, dir } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [imageLightboxOpen, setImageLightboxOpen] = useState(false);

  const openProjectModal = (proj: ProjectItem) => {
    setActiveProject(proj);
    setActiveImageIndex(0);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    setImageLightboxOpen(false);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E7DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7DF] text-[#96381A] text-xs font-semibold mb-3">
            {t.projects.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241812] tracking-tight leading-tight mb-4">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E4A3D] leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.projectsList.map((project) => {
            const isVerified = project.status === "verified";

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#FAF6F0] border border-[#E7DCCE] overflow-hidden shadow-card hover:shadow-card-hover hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Banner */}
                <div className="relative aspect-[16/9] w-full bg-[#F2EBE1] border-b border-[#E7DCCE] overflow-hidden">
                  {isVerified && project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-full group">
                      <Image
                        src={project.images[0]}
                        alt={project.title[lang]}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/70 via-[#241812]/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#FAF6F0]">
                        <span className="text-xs font-medium flex items-center gap-1.5 bg-[#241812]/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <Images className="w-3.5 h-3.5 text-[#C85A32]" />
                          {project.images.length} {lang === "ar" ? "نماذج منشورات بصرية" : "visual post samples"}
                        </span>
                        {project.pdfFile && (
                          <span className="text-xs font-medium flex items-center gap-1 bg-[#241812]/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            <FileText className="w-3.5 h-3.5 text-[#B88746]" />
                            {lang === "ar" ? "وثيقة استراتيجية متوفرة" : "PDF Strategy Document"}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Clean labeled placeholder for pending assets */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F2EBE1] to-[#E7DCCE]">
                      <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#D8C7B5] flex items-center justify-center text-[#7A6354] mb-3">
                        <CalendarClock className="w-6 h-6 text-[#C85A32]" />
                      </div>
                      <span className="text-xs font-bold text-[#241812] uppercase tracking-wider mb-1">
                        {project.badge[lang]}
                      </span>
                      <p className="text-xs text-[#7A6354] max-w-xs">
                        {project.scopeNote ? project.scopeNote[lang] : t.projects.assetPendingBadge}
                      </p>
                    </div>
                  )}

                  {/* Status Badge Tag */}
                  <div className="absolute top-3 left-3">
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#241812]/80 text-[#FAF6F0] backdrop-blur-md border border-[#FAF6F0]/20">
                        <CheckCircle2 className="w-3 h-3 text-[#C85A32]" />
                        {t.projects.verifiedBadge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF6F0]/90 text-[#96381A] backdrop-blur-md border border-[#F8CEC0]">
                        <AlertCircle className="w-3 h-3 text-[#C85A32]" />
                        {t.projects.assetPendingBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    {/* Category & Client Info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#C85A32] uppercase tracking-wider">
                        {project.category[lang]}
                      </span>
                      <span className="text-[#7A6354] font-medium flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-[#7A6354]" />
                        {project.clientOrOrg[lang]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#241812] leading-snug">
                      {project.title[lang]}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#5E4A3D] leading-relaxed">
                      {project.summary[lang]}
                    </p>

                    {/* Key Deliverables Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-[#241812] mb-2 uppercase tracking-wider">
                        {lang === "ar" ? "المخرجات الموثقة:" : "Demonstrated Deliverables:"}
                      </h4>
                      <ul className="space-y-1.5">
                        {project.deliverables[lang].slice(0, 3).map((d, dIdx) => (
                          <li key={dIdx} className="text-xs text-[#5E4A3D] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-6 pt-5 border-t border-[#E7DCCE] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => openProjectModal(project as ProjectItem)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#241812] hover:text-[#C85A32] bg-[#F2EBE1] hover:bg-[#E7DCCE] px-3.5 py-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>{lang === "ar" ? "تفاصيل دراسة الحالة" : "Case Study Details"}</span>
                    </button>

                    {project.pdfFile && (
                      <a
                        href={project.pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAF6F0] bg-[#241812] hover:bg-[#C85A32] px-3.5 py-2 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{t.projects.viewPdf}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#241812]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={closeProjectModal}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E7DCCE] my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E7DCCE] gap-4">
              <div>
                <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider block mb-1">
                  {activeProject.category[lang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#241812]">
                  {activeProject.title[lang]}
                </h3>
                <span className="text-xs text-[#7A6354] mt-1 block">
                  {activeProject.clientOrOrg[lang]}
                </span>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-xl text-[#7A6354] hover:text-[#241812] hover:bg-[#F2EBE1] transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-sm font-bold text-[#241812] mb-2 uppercase tracking-wider">
                  {lang === "ar" ? "الوصف الاستراتيجي لنطاق العمل:" : "Scope & Strategy Summary:"}
                </h4>
                <p className="text-sm text-[#5E4A3D] leading-relaxed bg-[#FCFAF7] p-4 rounded-xl border border-[#E7DCCE]">
                  {activeProject.description[lang]}
                </p>
              </div>

              {/* All Deliverables */}
              <div>
                <h4 className="text-sm font-bold text-[#241812] mb-2 uppercase tracking-wider">
                  {lang === "ar" ? "قائمة المخرجات المثبتة بالمشروع:" : "Confirmed Project Deliverables:"}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.deliverables[lang].map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#44352C] flex items-start gap-2 bg-[#FCFAF7] p-3 rounded-lg border border-[#E7DCCE]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PDF Document Download & Viewer Bar (if present) */}
              {activeProject.pdfFile && (
                <div className="p-4 rounded-2xl bg-[#FCE7DF] border border-[#F8CEC0] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#C85A32] shrink-0 shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#241812] block">
                        {activeProject.pdfTitle ? activeProject.pdfTitle[lang] : "PDF Strategy Document"}
                      </span>
                      <span className="text-[11px] text-[#96381A]">
                        {lang === "ar"
                          ? "وثيقة أصلية موثقة في ملفات المشروع"
                          : "Official document preserved in project assets"}
                      </span>
                    </div>
                  </div>
                  <a
                    href={activeProject.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#FAF6F0] bg-[#241812] hover:bg-[#C85A32] rounded-xl transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === "ar" ? "تحميل / قراءة الوثيقة" : "Download / View PDF"}</span>
                  </a>
                </div>
              )}

              {/* Visual Posts Gallery (if verified images exist) */}
              {activeProject.images && activeProject.images.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-[#241812] uppercase tracking-wider flex items-center gap-2">
                      <Images className="w-4 h-4 text-[#C85A32]" />
                      <span>
                        {lang === "ar"
                          ? `معرض المنشورات البصرية (${activeProject.images.length} منشورات)`
                          : `Visual Post Gallery (${activeProject.images.length} Posts)`}
                      </span>
                    </h4>
                    <span className="text-xs text-[#7A6354]">
                      {lang === "ar" ? "انقر على الصورة للتكبير" : "Click image to enlarge"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {activeProject.images.map((imgUrl, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => {
                          setActiveImageIndex(imgIdx);
                          setImageLightboxOpen(true);
                        }}
                        className="relative aspect-square rounded-xl overflow-hidden border border-[#E7DCCE] cursor-pointer group bg-[#F2EBE1]"
                      >
                        <Image
                          src={imgUrl}
                          alt={`Post visual ${imgIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-[#241812]/0 group-hover:bg-[#241812]/20 transition-colors flex items-center justify-center">
                          <Eye className="w-5 h-5 text-[#FAF6F0] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pending Upload Notice (if status is pending) */}
              {activeProject.status === "pending_upload" && (
                <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#D8C7B5] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-[#5E4A3D]">
                    <span className="font-bold text-[#241812] block">
                      {lang === "ar" ? "ملاحظة الشفافية والموثوقية" : "Integrity Notice"}
                    </span>
                    <p>
                      {activeProject.scopeNote ? activeProject.scopeNote[lang] : t.projects.assetPendingBadge}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E7DCCE] flex justify-end">
              <button
                onClick={closeProjectModal}
                className="px-5 py-2.5 text-xs font-bold text-[#241812] bg-[#F2EBE1] hover:bg-[#E7DCCE] rounded-xl transition-colors"
              >
                {lang === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Viewer for High-Res Post Details */}
      {imageLightboxOpen && activeProject && activeProject.images && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#241812]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setImageLightboxOpen(false)}
        >
          <button
            onClick={() => setImageLightboxOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF6F0]/20 text-[#FAF6F0] hover:bg-[#FAF6F0]/40 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={activeProject.images[activeImageIndex]}
                alt="Enlarged Post Visual"
                fill
                className="object-contain"
              />
            </div>

            {/* Controls Bar */}
            <div className="mt-4 flex items-center justify-between w-full max-w-md px-4 text-[#FAF6F0]">
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev > 0 ? prev - 1 : activeProject.images!.length - 1
                  )
                }
                className="p-2 rounded-full bg-[#FAF6F0]/20 hover:bg-[#FAF6F0]/40 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold">
                {activeImageIndex + 1} / {activeProject.images.length}
              </span>

              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev < activeProject.images!.length - 1 ? prev + 1 : 0
                  )
                }
                className="p-2 rounded-full bg-[#FAF6F0]/20 hover:bg-[#FAF6F0]/40 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
