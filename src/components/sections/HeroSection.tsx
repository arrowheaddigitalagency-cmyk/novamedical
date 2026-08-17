import React from "react";
import {
  Phone,
  Calendar,
  FileText,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  ExternalLink,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS, HERO_BADGES } from "@/data/clinicData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-slate-100/80">
      {/* Background Accent Circle */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Billing Banner */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-fadeIn">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/90 text-[#116B31] border border-emerald-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#18893B] animate-ping" />
            <span>{HERO_BADGES[0]}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              <strong>Private Billing Practice</strong> • Bulk billing available for children &lt; 16 &amp; seniors &gt; 60
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-medium tracking-tight text-slate-900 leading-[1.12]">
              Bringing Health <br className="hidden sm:inline" />
              <span className="text-[#18893B] font-bold underline decoration-emerald-300 decoration-wavy decoration-2 underline-offset-4">
                to life for the whole
              </span>{" "}
              family
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {CLINIC_INFO.heroDescription}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-base rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 ml-0.5" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                className="px-5 py-3.5 bg-white hover:bg-emerald-50 text-[#18893B] font-semibold text-base rounded-2xl border-2 border-emerald-200 transition-all flex items-center gap-2 shadow-2xs hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#18893B]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <a
                href={CLINIC_URLS.repeatScriptsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-base rounded-2xl border border-amber-200 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Repeat Scripts</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Bottom Quick Chips */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 bg-white/90 rounded-2xl border border-slate-100 shadow-2xs hover:border-emerald-200 transition-all">
                <div className="p-2.5 bg-emerald-100/60 text-[#18893B] rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                    Open 7 Days
                  </span>
                  <span className="text-xs text-slate-600 block">
                    Mon–Fri: 7:30 AM – 6:00 PM
                  </span>
                  <span className="text-xs text-slate-600 block">
                    Sat–Sun: 9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>

              <a
                href={CLINIC_URLS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 bg-white/90 rounded-2xl border border-slate-100 shadow-2xs hover:border-teal-200 transition-all group"
              >
                <div className="p-2.5 bg-teal-100/60 text-[#19BFC4] rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block flex items-center gap-1 group-hover:text-[#18893B]">
                    <span>Location</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-xs text-slate-600 block">
                    {CLINIC_INFO.shortAddress}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium block">
                    {CLINIC_INFO.parking}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Card: Clean, Integrated Card Layout (No Floating Overlaps) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-5">
              {/* Integrated Top Highlights Bar */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-emerald-50/90 p-2.5 rounded-xl border border-emerald-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#18893B] flex items-center justify-center font-bold text-xs shrink-0">
                    8
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Experienced GPs</p>
                    <p className="text-[10px] text-emerald-700 font-medium">Accepting New Patients</p>
                  </div>
                </div>

                <div className="bg-teal-50/90 p-2.5 rounded-xl border border-teal-100 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#19BFC4] shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Yellow Fever</p>
                    <p className="text-[10px] text-teal-700 font-medium">Accredited Clinic</p>
                  </div>
                </div>
              </div>

              {/* Brand Header */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-12 h-12 rounded-2xl bg-[#18893B] text-white flex items-center justify-center font-bold shadow-md shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Nova Medical Stirling
                  </h3>
                  <p className="text-xs text-slate-500">
                    {CLINIC_INFO.tagline}
                  </p>
                </div>
              </div>

              {/* Details Table */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Practice Type</span>
                  <span className="font-semibold text-slate-800">Private Billing</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Medicare Registered</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Yes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Walk-ins Accepted</span>
                  <span className="font-semibold text-slate-800">Yes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">In-House Specialists</span>
                  <span className="font-semibold text-[#18893B]">Paediatrician &amp; Psychiatrist</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 space-y-2.5">
                <a
                  href={CLINIC_URLS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Online</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={CLINIC_URLS.repeatScriptsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-600" />
                  <span>Request Repeat Scripts Online</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
