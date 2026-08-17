"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer, Shield, ArrowUp, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#10182D] text-white pt-14 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block border border-emerald-500/30 shadow-xs">
              <Image
                src="/images/logo.png"
                alt="Nova Medical Centre Stirling Logo"
                width={220}
                height={58}
                className="h-12 sm:h-14 w-auto object-contain"
                unoptimized
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {CLINIC_INFO.footerDescription}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Shield className="w-4 h-4 shrink-0 text-[#29A84A]" />
              <span>Fully Accredited General Practice</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#18893B] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#19BFC4] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#19BFC4] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#doctors"
                  className="hover:text-[#19BFC4] transition-colors"
                >
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="hover:text-[#19BFC4] transition-colors"
                >
                  Fees &amp; Billing Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#19BFC4] transition-colors"
                >
                  Contact Us &amp; Directions
                </Link>
              </li>
              <li>
                <a
                  href={CLINIC_URLS.repeatScriptsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Request Repeat Scripts</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_URLS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#19BFC4] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Book Appointment Online</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#18893B] pl-2.5">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#19BFC4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Phone</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white font-medium"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Printer className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Fax</span>
                  <span>{CLINIC_INFO.fax}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#19BFC4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Email</span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="hover:text-white font-medium"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#19BFC4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Address</span>
                  <span>{CLINIC_INFO.shortAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours & Action */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#18893B] pl-2.5">
              Opening Hours
            </h3>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="font-semibold text-white">7:30 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="font-semibold text-white">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-1.5 mt-1.5">
                <span>Public Holidays:</span>
                <span className="font-semibold text-white">9:00 AM – 5:00 PM</span>
              </div>
            </div>

            <a
              href={CLINIC_URLS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-sm rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-1.5"
            >
              <span>Book Appointment</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Nova Medical Centre Stirling. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Compliant with Commonwealth Privacy Act (1988)</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
