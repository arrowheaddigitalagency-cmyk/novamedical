import React from "react";
import { Phone, Calendar, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center gap-3 px-4">
      {/* Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
        className="flex-1 py-3 px-3 bg-emerald-50 border border-emerald-200 text-[#18893B] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 active:bg-emerald-100 transition-colors"
      >
        <Phone className="w-4 h-4 shrink-0" />
        <span>Call Clinic</span>
      </a>

      {/* Book Appointment CTA */}
      <a
        href={CLINIC_URLS.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 bg-[#18893B] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 active:bg-[#116B31] shadow-md transition-colors"
      >
        <Calendar className="w-4 h-4 shrink-0" />
        <span>Book Appointment</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
      </a>
    </div>
  );
}
