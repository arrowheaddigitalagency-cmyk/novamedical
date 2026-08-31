"use client";

import React from "react";
import Image from "next/image";
import { ACCREDITATION_LOGOS } from "@/data/clinicData";
import { ShieldCheck } from "lucide-react";

export default function AccreditationSection() {
  return (
    <section className="py-16 bg-[#FFFBF9] border-b border-orange-100/60 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-[#5aa316]/10 text-[#5aa316] text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-[#5aa316]/30">
            QUALITY ASSURED
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Accredited &amp; <span className="text-[#e6704a]">Trusted</span>
          </h2>
          <p className="text-sm text-slate-600">
            Recognized by leading healthcare standards &amp; regulatory bodies across Australia.
          </p>
        </div>

        {/* SINGLE CLEAN BOX WITH LARGE LOGOS */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-box rounded-3xl p-8 sm:p-10 relative flex flex-col items-center justify-between shadow-sm">
            {/* Top Shield Tag */}
            <div className="flex items-center gap-2 px-5 py-2 bg-[#5aa316]/10 text-[#5aa316] rounded-full text-sm font-semibold border border-[#5aa316]/30 mb-6 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#5aa316]" />
              <span>Accredited General Practice</span>
            </div>

            {/* Large Single Row Icons */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16 w-full my-6">
              {ACCREDITATION_LOGOS.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    width={400}
                    height={160}
                    className="h-20 sm:h-24 md:h-28 w-auto max-w-[220px] object-contain"
                    unoptimized
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Bottom Subtle Accent Bar */}
            <div className="w-20 h-1.5 bg-[#e6704a]/40 rounded-full mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
