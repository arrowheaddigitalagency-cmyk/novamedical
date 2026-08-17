import React from "react";
import Image from "next/image";
import { Doctor } from "@/data/clinicData";

interface DoctorAvatarProps {
  doctor: Doctor;
  className?: string;
}

export default function DoctorAvatar({ doctor, className = "h-64 w-full" }: DoctorAvatarProps) {
  const isFemale = doctor.gender === "female";

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {doctor.avatarUrl ? (
        /* Real Doctor Portrait Photo */
        <Image
          src={doctor.avatarUrl}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          unoptimized
          priority
        />
      ) : (
        /* Styled Full-Width Doctor Portrait Illustration */
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${doctor.accentColor}70 0%, transparent 70%)`,
            }}
          />

          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
          >
            <circle cx="60" cy="60" r="54" fill={doctor.accentColor} fillOpacity="0.18" />

            <path
              d="M18 110C18 90 32 76 52 76H68C88 76 102 90 102 110V120H18V110Z"
              fill="#FFFFFF"
            />
            <path
              d="M30 110C30 94 42 84 56 84H64C78 84 90 94 90 110V120H30V110Z"
              fill="#F1F5F9"
            />

            <path d="M52 84L60 100L68 84H52Z" fill={doctor.accentColor} />

            <path
              d="M38 74C38 84 46 93 60 93C74 93 82 84 82 74"
              stroke="#334155"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="60" cy="94" r="4.5" fill="#64748B" stroke="#334155" strokeWidth="2.5" />

            <circle cx="60" cy="48" r="22" fill="#FDE047" fillOpacity="0.3" />
            <circle cx="60" cy="46" r="20" fill="#FFE4E6" />

            {isFemale ? (
              <path
                d="M36 46C36 32 44 24 60 24C76 24 84 32 84 46C84 54 82 64 78 68C74 58 70 32 60 32C50 32 46 58 42 68C40 64 36 54 36 46Z"
                fill="#1E293B"
              />
            ) : (
              <path
                d="M38 42C38 32 46 26 60 26C74 26 82 32 82 42C82 42 78 34 60 34C42 34 38 42 38 42Z"
                fill="#1E293B"
              />
            )}

            <circle cx="53" cy="46" r="2.2" fill="#1E293B" />
            <circle cx="67" cy="46" r="2.2" fill="#1E293B" />
            <path
              d="M55 54C55 54 57.5 57 60 57C62.5 57 65 54 65 54"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            <rect x="74" y="90" width="13" height="13" rx="3.5" fill={doctor.accentColor} />
            <path
              d="M80.5 92.5V99.5M77 96H84"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Bottom Fade Gradient for Seamless Blend */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
    </div>
  );
}
