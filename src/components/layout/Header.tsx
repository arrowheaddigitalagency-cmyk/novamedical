"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Calendar, FileText, Menu, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";
import MobileDrawer from "./MobileDrawer";

export function NovaLogo({ className = "h-14 sm:h-16 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5 group py-1">
      <Image
        src="/images/logo.png"
        alt="Nova Medical Centre Stirling Logo"
        width={240}
        height={64}
        className={`${className} object-contain transition-transform group-hover:scale-105`}
        priority
        unoptimized
      />
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-xs py-2 border-b border-emerald-100" : "py-3 border-b border-emerald-100/70"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Prominent Logo */}
            <Link href="/" aria-label="Nova Medical Centre Stirling Home">
              <NovaLogo className="h-12 sm:h-14 md:h-16 w-auto" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
              <Link
                href="/"
                className="hover:text-[#18893B] transition-colors py-1 font-semibold text-[#18893B]"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="hover:text-[#18893B] transition-colors py-1"
              >
                Services
              </Link>
              <Link
                href="/#doctors"
                className="hover:text-[#18893B] transition-colors py-1"
              >
                Doctors
              </Link>
              <Link
                href="/fees"
                className="hover:text-[#18893B] transition-colors py-1"
              >
                Fees
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#18893B] transition-colors py-1"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Bar - ICON ONLY FOR PHONE & LOCATION AS REQUESTED */}
            <div className="hidden xl:flex items-center gap-3 text-xs font-medium">
              {/* Phone Icon Button ONLY */}
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#18893B] rounded-xl border border-emerald-200/80 transition-colors group relative"
                title={`Call ${CLINIC_INFO.phone}`}
                aria-label={`Call ${CLINIC_INFO.phone}`}
              >
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              {/* Location Map Pin Icon Button ONLY */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#18893B] rounded-xl border border-emerald-200/80 transition-colors group relative"
                title="31 Cedric Street, Stirling, Western Australia 6021 (Open Google Maps)"
                aria-label="31 Cedric Street, Stirling, Western Australia 6021 (Open Google Maps)"
              >
                <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              {/* Repeat Scripts Button */}
              <a
                href={CLINIC_URLS.repeatScriptsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 rounded-xl text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Repeat Scripts</span>
              </a>

              {/* Book Appointment CTA */}
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-sm rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Medium screen CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2 lg:gap-3 xl:hidden">
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-[#18893B] hover:bg-[#116B31] text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                className="p-2 sm:p-2.5 bg-emerald-50 text-[#18893B] rounded-xl hover:bg-emerald-100 transition-colors"
                aria-label="Call clinic"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
