import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Baby } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "Lip & Tongue Tie (Oral Frenectomy) | Nova Medical Centre Stirling",
  description:
    "Lip and tongue tie release (oral frenectomy) for infants under 1 year old at Nova Medical Centre Stirling.",
};

export default function LipAndTongueTiePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#7D8056] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Baby className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            LIP &amp; TONGUE TIE (ORAL FRENECTOMY)
          </span>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#e6704a] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-soft space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e6704a]">
              Lip &amp; Tongue Tie – Oral Frenectomy
            </h1>

            <a
              href={CLINIC_URLS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#e6704a] hover:bg-[#c8552e] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 shrink-0 self-start md:self-auto"
            >
              <span>BOOK NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            <p>
              The most common sign of tongue-tie in newborns is difficulty with breastfeeding or bottle-feeding. Your newborn&apos;s tongue or lip tie may also be picked up during a newborn or 6-week check. It is important to look into this further, as this can affect your baby&apos;s growth.
            </p>

            <p>
              A tongue or lip tie may also affect the mother who might suffer from breast pain due to difficult latching amongst other problems. Therefore, the earlier this is treated, the better.
            </p>

            <p>
              Whether treatment is necessary depends on a number of factors and this is best decided in an initial consult with your expert doctor.
            </p>

            <p>
              When treatment is advised, the release procedure is a low-risk and quick procedure. In a clinical setting, the tie is released using an instrument of the provider&apos;s choice. Recovery is typically fast, with minimal discomfort and bleeding and depends mostly on the expertise of the doctor rather than the instrument used.
            </p>

            <div className="bg-orange-50/80 p-5 rounded-2xl border border-orange-200/80 space-y-2 text-slate-800 font-medium">
              <p>
                Your practitioner will first go through a series of questions and examination to assess the suitability of procedure. Please make an appointment for initial screening with <strong>Dr Hira Shehzad</strong>.
              </p>
              <p>
                After assessing the suitability of procedure, your Doctor will book an appointment for this procedure at our clinic. Please note that currently we offer this procedure for <strong>children age less than 1 year</strong>.
              </p>
            </div>

            <p className="pt-2">
              <Link href="/contact" className="text-[#e6704a] font-bold hover:underline">
                Contact us
              </Link>{" "}
              today or book online for an initial consult.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
