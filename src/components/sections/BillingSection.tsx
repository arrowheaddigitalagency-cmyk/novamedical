import React from "react";
import Link from "next/link";
import { CreditCard, CheckCircle2, AlertCircle, Calendar, ShieldCheck, HelpCircle, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export default function BillingSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18893B]">
            PATIENT INFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Fees &amp; <span className="text-[#18893B]">Billing Policy</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent patient billing information for Nova Medical Centre Stirling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Card: Billing Type & Eligibility */}
          <div className="lg:col-span-7 bg-[#F7F9FB] p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
              <div className="p-3 bg-emerald-100 text-[#18893B] rounded-2xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Practice Type
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Private Billing Practice
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Bulk Billing Eligibility Criteria
              </h4>
              <div className="space-y-3">
                {CLINIC_INFO.bulkBillingNotes.map((note, index) => (
                  <div
                    key={index}
                    className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-start gap-3 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#18893B] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-[#18893B]" />
                Registered Medicare Provider
              </span>
              <span>EFTPOS &amp; Medicare Instant Rebate Available</span>
            </div>
          </div>

          {/* Right Card: Consultation Fees Notice */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#10182D] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Consultation Fee Schedule</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Current Consultation Fees
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Specific consultation fee amounts vary depending on appointment length and complexity. Please contact our clinic reception directly for current fee schedules and Medicare rebates.
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between items-center">
                <span>Phone Reception:</span>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                  className="font-bold text-[#19BFC4] hover:underline"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex justify-between items-center border-t border-slate-700/60 pt-2">
                <span>Email Inquiries:</span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="font-semibold text-slate-200 hover:underline"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl text-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <Link
                href="/fees"
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4 text-[#19BFC4]" />
                <span>Fees Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
