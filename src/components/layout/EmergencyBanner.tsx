import React from "react";
import { AlertCircle } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function EmergencyBanner() {
  return (
    <div className="bg-[#DC2626] text-white py-1.5 px-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 z-50">
      <AlertCircle className="w-4 h-4 shrink-0 animate-pulse" />
      <span>
        Emergency? Please call{" "}
        <a
          href={`tel:${CLINIC_INFO.emergency.phone}`}
          className="font-bold underline hover:text-red-100 transition-colors"
        >
          {CLINIC_INFO.emergency.phone}
        </a>{" "}
        immediately for life-threatening situations.
      </span>
    </div>
  );
}
