"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Clock,
  CheckCircle2,
  Phone,
  Calendar,
  AlertCircle,
  ArrowLeft,
  FileText,
  DollarSign,
  ShieldCheck,
  Ban,
  UserCheck
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";
import BookingModal from "@/components/modals/BookingModal";

export default function FeesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const feeSchedule = [
    {
      type: "Standard Consult",
      feeRange: "$85.00 – $110.00",
      rebate: "$43.90",
      outOfPocket: "$41.10 – $66.10",
    },
    {
      type: "Long Consult",
      feeRange: "$135.00 – $160.00",
      rebate: "$84.90",
      outOfPocket: "$50.10 – $75.10",
    },
    {
      type: "Standard Consult (Weekend/Public Holidays)",
      feeRange: "$110.00 – $135.00",
      rebate: "$57.15",
      outOfPocket: "$52.85 – $77.85",
    },
    {
      type: "Long Consult (Weekend/Public Holidays)",
      feeRange: "$160.00 – $180.00",
      rebate: "$98.00",
      outOfPocket: "$62.00 – $82.00",
    },
  ];

  return (
    <>
      <div className="bg-slate-50 min-h-screen py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
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
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-soft space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18893B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                PATIENT INFORMATION &amp; BILLING
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Fees &amp; Billing <span className="text-[#18893B]">Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed font-medium">
              Nova Medical Centre provides a mix of private and bulk billed consultations.
            </p>
          </div>

          {/* Bulk Billed Eligibility Highlight Banner */}
          <div className="bg-emerald-700 text-white p-5 sm:p-6 rounded-2xl shadow-md flex items-center gap-4 border border-emerald-800">
            <UserCheck className="w-8 h-8 text-emerald-200 shrink-0" />
            <p className="text-sm sm:text-base font-semibold leading-snug">
              ** All patients eligible to be bulk-billed should have a Valid Medicare card.
            </p>
          </div>

          {/* Opening Hours & Quick Info */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-emerald-100 text-[#18893B] rounded-2xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Opening Hours
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  We are open 7 days a week
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Monday – Friday
                </span>
                <span className="text-base font-bold text-slate-900">
                  7:30am – 6:00pm
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Weekends
                </span>
                <span className="text-base font-bold text-slate-900 block">
                  9:00am – 5:00pm
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  (may vary due to doctor availability)
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Public Holidays
                </span>
                <span className="text-base font-bold text-slate-900 block">
                  9:00am – 5:00pm
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  (may vary due to doctor availability)
                </span>
              </div>
            </div>
          </div>

          {/* Consultation Fee Schedule Table */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Consultation Fee Schedule
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  All fees vary according to the complexity of the consultation.
                </p>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-sm rounded-xl transition-colors shadow-sm shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <th className="py-4 px-4 rounded-l-xl">Consult Type</th>
                    <th className="py-4 px-4">Fee Range</th>
                    <th className="py-4 px-4">Medicare Rebate</th>
                    <th className="py-4 px-4 rounded-r-xl text-[#18893B]">Out of Pocket</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {feeSchedule.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">{row.type}</td>
                      <td className="py-4 px-4 font-medium text-slate-700">{row.feeRange}</td>
                      <td className="py-4 px-4 font-medium text-slate-600">{row.rebate}</td>
                      <td className="py-4 px-4 font-bold text-[#18893B]">{row.outOfPocket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Notes under table */}
            <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100/80 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#18893B] shrink-0" />
                <span>These fees also apply to telephone consultations.</span>
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#18893B] shrink-0" />
                <span>A discounted fee may apply at the discretion of the treating doctor.</span>
              </p>
            </div>
          </div>

          {/* Policy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Consultation Fees */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-[#18893B] rounded-xl">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Consultation Fees</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fees vary depending on the length and complexity of the consultation and are determined by the GP.
              </p>
            </div>

            {/* Payment */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-[#18893B] rounded-xl">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Payment</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Payment is required on the day of your consultation and can be made by cash, EFTPOS or credit card (excluding Diners Club and American Express).
              </p>
            </div>

            {/* Specific Medicare Items */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-[#18893B] rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Specific Medicare Items</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Some consultations may be bulk billed at the GP’s discretion. A valid Medicare card and concession card (where applicable) must be presented upon arrival.
              </p>
            </div>

            {/* WorkCover, MVIT & Insurance */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-[#18893B] rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">WorkCover, MVIT &amp; Insurance</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consultation accounts must be paid by the patient on the day of the appointment. Patients are responsible for seeking reimbursement directly from their insurer.
              </p>
            </div>

            {/* Weekend & Public Holiday Appointments */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Weekend &amp; Public Holiday Appointments</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                All weekend and public holiday appointments are privately billed. Appointment times advertised may vary due to doctor availability.
              </p>
            </div>
          </div>

          {/* Cancellation / DNA Fee Banner */}
          <div className="bg-rose-50 border border-rose-200 p-6 sm:p-8 rounded-3xl shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Cancellation / Did Not Attend (DNA) Fee
              </h3>
            </div>
            <div className="text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                A fee of <strong>$40.00</strong> applies if an appointment is not cancelled by <strong>3:00pm</strong> on the day before the appointment.
              </p>
              <p>
                A minimum of <strong>2 hours’ notice</strong> is required to change or cancel an appointment. Patients will be notified of the fee by phone and invoice. Outstanding fees must be paid before the next appointment.
              </p>
            </div>
          </div>

          {/* Transfer of Medical Records Section */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-soft space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Transfer of Medical Records
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Electronic Records (XML/HTML only)
                </span>
                <div className="text-2xl font-bold text-slate-900">$40.00</div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Hard Copy Records
                </span>
                <div className="text-2xl font-bold text-slate-900">$50.00</div>
                <div className="text-xs text-slate-500 font-medium">
                  (an additional $1.00 per page applies after 150 pages)
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <div className="flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Nova Medical Centre does not upload medical records to USB devices.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#18893B] shrink-0 mt-0.5" />
                <span>Please allow up to 30 days after full payment has been received for processing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-[#18893B] shrink-0 mt-0.5" />
                <span>
                  Payment is required on the day of the consult and can be made by cash, EFTPOS or Credit Card. Workers compensation &amp; motor vehicle accident patients are required to pay their accounts at the time of consult until a letter of liability is produced from their insurance company.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Driving license medicals, corporate &amp; insurance medicals and any other medical where forms are needing to be filled are privately charged for all patients with payment required on the day of the consult. These consults will <strong>NOT</strong> be Bulk-Billed.
                </span>
              </div>
            </div>
          </div>

          {/* Contact / Help Card */}
          <div className="bg-[#10182D] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Have questions about our billing policy?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Our reception team is here to assist you with any fee or Medicare rebate inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                className="px-6 py-3 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
