"use client";

import React from "react";
import { Doctor, CLINIC_URLS } from "@/data/clinicData";
import { ExternalLink, Calendar, Stethoscope } from "lucide-react";
import DoctorAvatar from "@/components/common/DoctorAvatar";

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctor: Doctor) => void;
}

export default function DoctorCard({
  doctor,
  onViewProfile,
}: DoctorCardProps) {
  const visibleInterests = doctor.areasOfInterest.slice(0, 4);
  const remainingCount = doctor.areasOfInterest.length - visibleInterests.length;

  return (
    <div className="glass-box glass-box-hover rounded-3xl flex flex-col justify-between overflow-hidden group border border-emerald-200/60 shadow-soft h-full">
      {/* Full-Width Doctor Photo Header */}
      <div className="relative w-full shrink-0">
        <DoctorAvatar doctor={doctor} className="h-60 sm:h-64 w-full" />
      </div>

      {/* Doctor Info Body (TIGHT SPACING UNDER QUALIFICATIONS) */}
      <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-1">
          {/* Doctor Name */}
          <h3 className="text-xl font-extrabold text-[#10182D] tracking-tight group-hover:text-[#18893B] transition-colors leading-tight">
            {doctor.name}
          </h3>

          {/* Role */}
          <p className="text-xs font-bold text-[#18893B] flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 shrink-0" />
            <span>{doctor.role}</span>
          </p>

          {/* Qualifications */}
          <div className="pt-0.5">
            <p className="text-[11px] text-slate-500 font-mono font-medium bg-slate-100/90 inline-block px-2.5 py-0.5 rounded-md border border-slate-200/60">
              {doctor.qualifications}
            </p>
          </div>
        </div>

        {/* Areas of Interest Soft Pills (TIGHTLY PLACED UNDER QUALIFICATIONS) */}
        <div className="pt-1">
          <div className="flex flex-wrap gap-1.5">
            {visibleInterests.map((interest, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 bg-slate-100/90 hover:bg-emerald-50 hover:text-[#18893B] text-slate-700 text-[11px] font-medium rounded-full transition-colors border border-slate-200/50"
              >
                {interest}
              </span>
            ))}
            {remainingCount > 0 && (
              <button
                onClick={() => onViewProfile(doctor)}
                className="px-2.5 py-0.5 bg-emerald-50 text-[#18893B] text-[11px] font-semibold rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200/60"
              >
                +{remainingCount} more
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-3 bg-slate-50/80 border-t border-emerald-100/80 grid grid-cols-2 gap-1.5 shrink-0">
        <button
          onClick={() => onViewProfile(doctor)}
          className="py-2.5 px-2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#18893B] text-xs font-bold rounded-xl border border-slate-200 transition-colors text-center shadow-2xs whitespace-nowrap"
        >
          View Profile
        </button>

        <a
          href={CLINIC_URLS.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 bg-[#18893B] hover:bg-[#116B31] text-white text-xs font-bold rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1 whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">Book Now</span>
          <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
        </a>
      </div>
    </div>
  );
}
