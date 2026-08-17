"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Navigation, ExternalLink, Calendar } from "lucide-react";
import { CLINIC_INFO, OPENING_HOURS, CLINIC_URLS } from "@/data/clinicData";

export default function ContactSection() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const nowInPerth = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Australia/Perth" })
      );
      setCurrentDayIndex(nowInPerth.getDay());
    } catch {
      setCurrentDayIndex(null);
    }
  }, []);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-emerald-100/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19BFC4]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact <span className="text-[#18893B]">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We&apos;re here to help. Reach out to us for appointments, inquiries, or any health concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Contact Info Cards */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Phone Card */}
            <div className="glass-box p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-[#18893B] border border-emerald-200/80 rounded-xl shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Phone &amp; Fax
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-[#18893B] hover:underline block"
                >
                  {CLINIC_INFO.phone}
                </a>
                <p className="text-xs text-slate-600">
                  Fax: {CLINIC_INFO.fax}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-box p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 border border-purple-200/80 rounded-xl shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-base font-bold text-slate-800 hover:text-[#18893B] hover:underline block break-all"
                >
                  {CLINIC_INFO.email}
                </a>
                <p className="text-xs text-slate-600">
                  For general inquiries and non-urgent messages.
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-box p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 border border-amber-200/80 rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Clinic Address
                </span>
                <p className="text-sm font-bold text-slate-800 leading-snug">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-xs text-amber-900 font-medium">
                  {CLINIC_INFO.parking}
                </p>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18893B] hover:underline pt-1"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#10182D] text-white p-5 sm:p-6 rounded-2xl shadow-xs space-y-4 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#19BFC4]" />
                  <h3 className="font-bold text-base text-white">Opening Hours</h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  Open 7 Days
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {OPENING_HOURS.map((item, idx) => {
                  const isWeekday = idx === 0 && currentDayIndex !== null && currentDayIndex >= 1 && currentDayIndex <= 5;
                  const isSat = idx === 1 && currentDayIndex === 6;
                  const isSun = idx === 2 && currentDayIndex === 0;
                  const isHighlighted = isWeekday || isSat || isSun;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                        isHighlighted ? "bg-slate-800/90 text-white font-semibold border border-slate-700" : "text-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isHighlighted && <span className="w-1.5 h-1.5 rounded-full bg-[#19BFC4]" />}
                        <span>{item.day}</span>
                      </span>
                      <span className="font-mono text-emerald-300 font-semibold">{item.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Map Embed + Ready to Book Banner (ALIGNED FLUSH NO FREE SPACE) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {/* Map Container */}
            <div className="glass-box rounded-3xl overflow-hidden flex-1 min-h-[380px] relative group">
              <iframe
                title="Nova Medical Centre Stirling Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.0833139369986!2d115.80302507662828!3d-31.8897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ab5d496a7981%3A0x6b772b22f7c0411d!2s31%20Cedric%20St%2C%20Stirling%20WA%206021%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />

              <div className="absolute top-4 left-4 glass-box px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#18893B]" />
                <span>31 Cedric St, Stirling WA 6021</span>
              </div>
            </div>

            {/* Ready to Book Banner (FLUSH WITH BOTTOM LINE) */}
            <div className="bg-gradient-to-r from-[#18893B] to-[#116B31] text-white p-5 rounded-2xl shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div>
                <h4 className="font-bold text-base">Ready to book?</h4>
                <p className="text-xs text-white/90">
                  Book your appointment online now in less than 2 minutes.
                </p>
              </div>
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-[#18893B] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-2xs transition-all shrink-0 flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* After-Hours & Feedback Notices */}
        <div className="pt-6 border-t border-emerald-100/60 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          {/* After-Hours Care Notice */}
          <div className="glass-box p-4 rounded-xl space-y-1">
            <span className="font-bold text-slate-800 block">
              After Hours Care &amp; Home Visits
            </span>
            <p className="leading-relaxed">
              For after hours home visits, please contact{" "}
              <strong className="text-slate-800">{CLINIC_INFO.afterHours.service}</strong> on{" "}
              <a
                href={`tel:${CLINIC_INFO.afterHours.phone.replace(/\s+/g, "")}`}
                className="font-bold text-[#18893B] underline"
              >
                {CLINIC_INFO.afterHours.phone}
              </a>{" "}
              or visit{" "}
              <a
                href={CLINIC_INFO.afterHours.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 underline"
              >
                nightdr.com.au
              </a>.
            </p>
          </div>

          {/* Complaints & Feedback Notice */}
          <div className="glass-box p-4 rounded-xl space-y-1">
            <span className="font-bold text-slate-800 block">
              Feedback &amp; Complaints
            </span>
            <p className="leading-relaxed">
              If concerns cannot be resolved internally, patients may contact the{" "}
              <strong>{CLINIC_INFO.hadsco.name}</strong> at{" "}
              <a href="tel:0865517600" className="font-medium text-slate-800 underline">
                {CLINIC_INFO.hadsco.perthPhone}
              </a>{" "}
              or Country Free Call{" "}
              <a href="tel:1800813583" className="font-medium text-slate-800 underline">
                {CLINIC_INFO.hadsco.countryFreeCall}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
