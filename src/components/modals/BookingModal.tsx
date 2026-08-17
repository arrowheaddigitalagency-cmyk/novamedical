"use client";

import React, { useState } from "react";
import { X, Calendar, Phone, FileText, CheckCircle2, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  doctorName,
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"appointment" | "script">("appointment");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "morning",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#18893B] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-semibold text-emerald-200 tracking-wider">
              {CLINIC_INFO.name}
            </span>
            <h2 className="text-xl font-bold">
              {doctorName
                ? `Book with ${doctorName}`
                : activeTab === "appointment"
                ? "Book an Appointment"
                : "Request Repeat Script"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Toggle */}
        {!doctorName && (
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setActiveTab("appointment")}
              className={`flex-1 py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
                activeTab === "appointment"
                  ? "border-[#18893B] text-[#18893B] bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => setActiveTab("script")}
              className={`flex-1 py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
                activeTab === "script"
                  ? "border-[#18893B] text-[#18893B] bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Repeat Script</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#18893B] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Thank you. Our clinic reception team will call or email you shortly to confirm your slot at {CLINIC_INFO.shortName}.
              </p>
              <button
                onClick={handleReset}
                className="py-2.5 px-6 bg-[#18893B] text-white font-semibold rounded-xl hover:bg-[#116B31] transition-colors text-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Quick direct call option */}
              <div className="bg-emerald-50/80 border border-emerald-200/70 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-600">Need instant booking?</p>
                  <p className="text-sm font-bold text-[#18893B]">
                    Call Clinic directly: {CLINIC_INFO.phone}
                  </p>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                  className="py-1.5 px-3 bg-[#18893B] text-white text-xs font-semibold rounded-lg hover:bg-[#116B31] transition-colors flex items-center gap-1 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none bg-white"
                    >
                      <option value="morning">Morning (7:30 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="evening">Late Afternoon (4:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {activeTab === "appointment" ? "Reason for visit / Notes" : "Medication & Details"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      activeTab === "appointment"
                        ? "General checkup, skin check, vaccination, etc."
                        : "Name of medication and regular doctor name"
                    }
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#18893B] focus:ring-1 focus:ring-[#18893B] outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl shadow transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>

              {/* Clinic info note */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#18893B]" /> Open 7 Days
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#18893B]" /> Stirling WA
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
