"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, CheckCircle2, Phone, Mail, Calendar, HelpCircle, ShieldCheck, ArrowLeft, Info } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";
import BookingModal from "@/components/modals/BookingModal";

export default function FeesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb / Back link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#18893B] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18893B]">
              PATIENT INFORMATION &amp; BILLING
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Fees &amp; Billing <span className="text-[#18893B]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Nova Medical Centre Stirling is a <strong>Private Billing Practice</strong>. We are committed to providing accessible, high-quality, comprehensive family medicine for all patients in Stirling and surrounding Perth northern suburbs.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Practice Model Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-[#18893B] rounded-2xl">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Private Billing Practice Model
                    </h2>
                    <span className="text-xs text-slate-500">
                      Registered Medicare Provider
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    As a private billing practice, consultation fees are payable on the day of your appointment. We process your Medicare rebate instantly on-site so that your rebate is deposited directly into your linked bank account.
                  </p>
                </div>

                {/* Bulk Billing Criteria */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Bulk Billing Eligibility Rules
                  </h3>
                  <div className="space-y-2.5">
                    {CLINIC_INFO.bulkBillingNotes.map((rule, idx) => (
                      <div
                        key={idx}
                        className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100 flex items-start gap-3 text-sm font-semibold text-slate-800"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#18893B] shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Accepted Payment Methods &amp; Medicare Claims
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#18893B]" />
                    <span>EFTPOS, Visa, MasterCard, and Cash accepted.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#18893B]" />
                    <span>Instant Medicare rebates via Tyro / Easyclaim on-site.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#18893B]" />
                    <span>Worker&apos;s Compensation &amp; Corporate Direct Billing available upon authorization.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Fee Schedule Notice */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#10182D] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
                <div className="flex items-center gap-2 text-[#19BFC4] text-xs font-bold uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Fee Schedule Notice</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Consultation Fee Schedule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Specific consultation fees depend on consultation complexity, length (Standard vs Long), and specific medical procedures performed.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3 text-xs">
                  <p className="font-semibold text-white">
                    To inquire about current consultation rates:
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Call Clinic:</span>
                      <a
                        href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-[#19BFC4] hover:underline"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Email:</span>
                      <a
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="font-semibold text-slate-200 hover:underline"
                      >
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setBookingOpen(true)}
                  className="w-full py-3.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Online</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
