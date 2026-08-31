import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function TopHeaderBar() {
  return (
    <div className="bg-[#10182D] text-white py-2 px-4 text-xs font-medium border-b border-slate-800">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-slate-300">
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#e6704a] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#e6704a] shrink-0" />
            <span>31 Cedric Street, Stirling</span>
          </a>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#e6704a] transition-colors font-semibold text-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#e6704a] shrink-0" />
            <span>(08) 9349 9900</span>
          </a>

          <div className="flex items-center gap-1.5 text-[#5aa316] font-semibold bg-[#5aa316]/10 px-2.5 py-0.5 rounded-full border border-[#5aa316]/30">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Open 7 Days</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-[11px] text-slate-400">
          <span>Quality Service &amp; Patient Care</span>
        </div>
      </div>
    </div>
  );
}
