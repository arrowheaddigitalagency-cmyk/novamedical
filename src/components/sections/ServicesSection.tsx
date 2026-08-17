"use client";

import React, { useState } from "react";
import {
  PRIMARY_SERVICES,
  INHOUSE_SPECIALISTS,
  ADDITIONAL_SERVICES,
  Service,
  CLINIC_URLS,
} from "@/data/clinicData";
import ServiceCard from "./ServiceCard";
import { ArrowRight, ChevronDown, ChevronUp, Sparkles, CheckCircle2, X, ExternalLink } from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showMoreServices, setShowMoreServices] = useState(false);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19BFC4]">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our <span className="text-[#18893B]">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From routine check-ups to specialized care, we offer a comprehensive range of medical services to meet all your healthcare needs.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIMARY_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {/* In-House Specialist Consultants Highlights */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-6 sm:p-8 rounded-3xl border border-emerald-100/80 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#18893B] text-white rounded-xl shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  In-House Specialist Consultants
                </h3>
                <p className="text-xs text-slate-600">
                  Multidisciplinary healthcare expertise right here at Nova Stirling
                </p>
              </div>
            </div>
            <a
              href={CLINIC_URLS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-[#18893B] hover:bg-[#116B31] text-white text-xs font-bold rounded-xl transition-colors shadow-xs shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Book Specialist Consult</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {INHOUSE_SPECIALISTS.map((specialist, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-center gap-2.5 text-xs font-semibold text-slate-800 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#18893B] shrink-0" />
                <span>{specialist}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Additional Services Section */}
        <div className="space-y-4 pt-2">
          <div className="text-center">
            <button
              onClick={() => setShowMoreServices(!showMoreServices)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-colors"
            >
              <span>{showMoreServices ? "Hide Secondary Services" : "View Additional Medical Services"}</span>
              {showMoreServices ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {showMoreServices && (
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-slate-100 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Full Spectrum Clinic Services &amp; Medical Assessments
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {ADDITIONAL_SERVICES.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-700 flex items-center gap-2 hover:border-[#18893B] hover:text-[#18893B] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18893B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Services CTA Banner matching reference screenshot */}
        <div className="bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-white p-6 sm:p-8 rounded-3xl border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              Contact our reception team to discuss your specific healthcare requirements.
            </p>
          </div>

          <a
            href={CLINIC_URLS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#19BFC4] hover:bg-[#15A5A9] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all shrink-0 flex items-center gap-2"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-5 border border-slate-100 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-[#18893B] uppercase tracking-wider">
                Service Overview
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {selectedService.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {selectedService.details && (
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  What we cover:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#18893B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-xs rounded-xl shadow transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <span>Book Appointment</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
