import React from "react";
import { Phone, Calendar, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:p-3 shadow-2xl flex items-center gap-2 sm:gap-3 px-3 sm:px-4">
      {/* Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
        className="shrink-0 py-2.5 sm:py-3 px-3 bg-orange-50 border border-orange-200 text-[#e6704a] font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 active:bg-orange-100 transition-colors whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        <span className="whitespace-nowrap">Call Clinic</span>
      </a>

      {/* Book Appointment CTA */}
      <a
        href={CLINIC_URLS.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 sm:py-3 px-3 bg-[#5aa316] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 active:bg-[#4a8a12] shadow-md transition-colors whitespace-nowrap"
      >
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        <span className="whitespace-nowrap">Book Appointment</span>
        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80 shrink-0" />
      </a>
    </div>
  );
}
