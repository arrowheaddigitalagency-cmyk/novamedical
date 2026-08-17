import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#18893B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <ContactSection />
    </div>
  );
}
