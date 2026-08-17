"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, FileText, MapPin, X, Clock, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <Link href="/" onClick={onClose}>
          <Image
            src="/images/logo.png"
            alt="Nova Medical Centre Stirling Logo"
            width={160}
            height={42}
            className="h-10 w-auto object-contain"
            unoptimized
          />
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <nav className="flex flex-col space-y-3">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg font-semibold text-slate-800 hover:text-[#18893B] py-2 border-b border-slate-100"
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={onClose}
            className="text-lg font-semibold text-slate-800 hover:text-[#18893B] py-2 border-b border-slate-100"
          >
            Our Services
          </Link>
          <Link
            href="/#doctors"
            onClick={onClose}
            className="text-lg font-semibold text-slate-800 hover:text-[#18893B] py-2 border-b border-slate-100"
          >
            Meet Our Doctors
          </Link>
          <Link
            href="/fees"
            onClick={onClose}
            className="text-lg font-semibold text-slate-800 hover:text-[#18893B] py-2 border-b border-slate-100"
          >
            Fees &amp; Billing
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-lg font-semibold text-slate-800 hover:text-[#18893B] py-2 border-b border-slate-100"
          >
            Contact &amp; Directions
          </Link>
        </nav>

        {/* Action Buttons inside Drawer */}
        <div className="space-y-3 pt-2">
          <a
            href={CLINIC_URLS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 bg-[#18893B] hover:bg-[#116B31] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment Online</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
            className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-[#18893B] font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>

          <a
            href={CLINIC_URLS.repeatScriptsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3 px-4 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <FileText className="w-5 h-5 text-amber-600" />
            <span>Request Repeat Scripts</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* Hours & Location Info */}
        <div className="bg-slate-50 p-4 rounded-xl space-y-3 text-xs text-slate-600 border border-slate-100">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#18893B] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Opening Hours</p>
              <p>Mon–Fri: 7:30 AM – 6:00 PM</p>
              <p>Sat–Sun &amp; Public Holidays: 9:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 border-t border-slate-200/60 pt-2.5">
            <MapPin className="w-4 h-4 text-[#18893B] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Address</p>
              <p>{CLINIC_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
