"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Calendar, FileText, Menu, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";
import MobileDrawer from "./MobileDrawer";

export function NovaLogo({ className = "h-16 sm:h-20 md:h-24 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5 group py-1">
      <Image
        src="/images/logo.png"
        alt="Nova Medical Centre Stirling Logo"
        width={320}
        height={85}
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
          isScrolled ? "shadow-xs py-2 border-b border-orange-100" : "py-3 border-b border-orange-100/70"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Prominent Logo */}
            <Link href="/" aria-label="Nova Medical Centre Stirling Home">
              <NovaLogo className="h-14 sm:h-18 md:h-20 w-auto" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold whitespace-nowrap">
              <Link
                href="/"
                className="text-[#e6704a] hover:text-[#c8552e] transition-colors py-1 border-b-2 border-[#e6704a]"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-slate-700 hover:text-[#e6704a] transition-colors py-1"
              >
                Our Services
              </Link>
              <Link
                href="/#doctors"
                className="text-slate-700 hover:text-[#e6704a] transition-colors py-1"
              >
                Our Doctors
              </Link>
              <Link
                href="/#openinghours"
                className="text-slate-700 hover:text-[#e6704a] transition-colors py-1"
              >
                Opening Times
              </Link>
              <Link
                href="/fees"
                className="text-slate-700 hover:text-[#e6704a] transition-colors py-1"
              >
                Fees
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-[#e6704a] transition-colors py-1"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Bar - Replicating original 3 pill buttons */}
            <div className="hidden xl:flex flex-col gap-1.5 items-end text-xs font-bold">
              {/* 1. Emergency 000 */}
              <a
                href={CLINIC_URLS.emergencyTel}
                className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[#D92D20] hover:bg-[#B42318] text-white rounded-full transition-all shadow-2xs w-44"
              >
                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center font-bold text-[10px]">!</div>
                <span>Emergency 000</span>
              </a>

              {/* 2. Repeat Scripts */}
              <a
                href={CLINIC_URLS.repeatScriptsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-1.5 bg-white hover:bg-purple-50 text-[#8B5CF6] border-2 border-[#8B5CF6] rounded-full transition-all shadow-2xs w-44"
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>Repeat Scripts</span>
              </a>

              {/* 3. Book Now */}
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[#5aa316] hover:bg-[#4a8a12] text-white rounded-full transition-all shadow-2xs w-44"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Medium screen CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2 lg:gap-3 xl:hidden">
              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-[#5aa316] hover:bg-[#4a8a12] text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`}
                className="p-2 sm:p-2.5 bg-orange-50 text-[#e6704a] rounded-xl hover:bg-orange-100 transition-colors"
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
