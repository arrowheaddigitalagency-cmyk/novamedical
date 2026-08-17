"use client";

import React, { useState } from "react";
import { DOCTORS, Doctor } from "@/data/clinicData";
import DoctorCard from "./DoctorCard";
import DoctorModal from "@/components/modals/DoctorModal";
import { ShieldCheck } from "lucide-react";

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-gradient-to-b from-[#F7FAF9] via-white to-[#F7FAF9] border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18893B]">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our <span className="text-[#18893B]">Doctors</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our experienced and compassionate team of general practitioners is dedicated to providing you with the highest quality care.
          </p>
        </div>

        {/* 8 Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onViewProfile={(d) => setSelectedDoctor(d)}
            />
          ))}
        </div>

        {/* Doctor Accreditation Notice Footer */}
        <div className="text-center bg-white p-4 rounded-2xl border border-slate-100 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-500 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-[#18893B] shrink-0" />
          <span>
            All our doctors are fully accredited and committed to ongoing professional development.
          </span>
        </div>
      </div>

      {/* Doctor Profile Modal */}
      <DoctorModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />
    </section>
  );
}
