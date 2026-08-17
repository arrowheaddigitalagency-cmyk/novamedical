"use client";

import React from "react";
import { X, Calendar, CheckCircle2, Stethoscope, ExternalLink } from "lucide-react";
import { Doctor, CLINIC_URLS } from "@/data/clinicData";
import DoctorAvatar from "@/components/common/DoctorAvatar";

interface DoctorModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorModal({
  doctor,
  isOpen,
  onClose,
}: DoctorModalProps) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-20"
          aria-label="Close profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Doctor Photo & Main Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-slate-100 pb-5">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-emerald-100">
            <DoctorAvatar doctor={doctor} className="w-full h-full" />
          </div>

          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#18893B] text-xs font-semibold rounded-full border border-emerald-100 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Accepting Patients
            </span>

            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {doctor.name}
            </h2>

            <p className="text-sm font-bold text-[#18893B] flex items-center justify-center sm:justify-start gap-1.5">
              <Stethoscope className="w-4 h-4" />
              <span>{doctor.role}</span>
            </p>

            <p className="text-xs text-slate-600 font-mono bg-slate-100 inline-block px-2.5 py-1 rounded-lg font-medium">
              {doctor.qualifications}
            </p>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Clinical Areas of Interest
          </h3>
          <div className="flex flex-wrap gap-2">
            {doctor.areasOfInterest.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-[#18893B] text-slate-700 text-xs font-medium rounded-full transition-colors border border-slate-200/60"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Booking CTA */}
        <div className="border-t border-slate-100 pt-5 space-y-3">
          <div className="flex items-center gap-3">
            <a
              href={CLINIC_URLS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
