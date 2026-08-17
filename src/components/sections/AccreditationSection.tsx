"use client";

import React from "react";
import Image from "next/image";
import { ACCREDITATION_LOGOS } from "@/data/clinicData";
import { ShieldCheck } from "lucide-react";

export default function AccreditationSection() {
  // Duplicate logos array for smooth infinite marquee loop
  const marqueeLogos = [...ACCREDITATION_LOGOS, ...ACCREDITATION_LOGOS, ...ACCREDITATION_LOGOS];

  return (
    <section className="py-14 bg-[#F7FAF9] border-b border-emerald-100/60 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18893B]">
            QUALITY ASSURED
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Accredited &amp; <span className="text-[#18893B]">Trusted</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Recognized by leading healthcare standards &amp; regulatory bodies across Australia.
          </p>
        </div>

        {/* CONTINUOUS SMOOTH MARQUEE LOGO CAROUSEL BOX */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-box rounded-3xl p-6 relative flex flex-col items-center justify-between min-h-[170px] overflow-hidden">
            {/* Top Shield Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#18893B] rounded-full text-xs font-semibold border border-emerald-200/80 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Accredited General Practice</span>
            </div>

            {/* Continuous Marquee Track */}
            <div className="w-full overflow-hidden relative my-2 py-2">
              <div className="animate-marquee flex items-center gap-12 sm:gap-16">
                {marqueeLogos.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="shrink-0 flex items-center justify-center px-4"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={280}
                      height={90}
                      className="max-h-16 sm:max-h-20 w-auto object-contain transition-opacity hover:opacity-90"
                      unoptimized
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Subtle Accent Bar */}
            <div className="w-16 h-1 bg-emerald-500/40 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
