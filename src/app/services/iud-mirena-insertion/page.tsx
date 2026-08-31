import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "IUD & Mirena Insertion & Removal | Nova Medical Centre Stirling",
  description:
    "Long-acting contraception (Mirena, Kyleena, Copper IUD) insertion and removal by female GPs Dr Zille Shehzad and Dr Hira Shehzad.",
};

export default function IUDMirenaPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#7D8056] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Heart className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            IUD &amp; MIRENA INSERTION
          </span>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#e6704a] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-soft space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e6704a]">
              IUD &amp; Mirena Insertion &amp; Removal
            </h1>

            <a
              href={CLINIC_URLS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#e6704a] hover:bg-[#c8552e] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 shrink-0 self-start md:self-auto"
            >
              <span>BOOK NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            <p>
              Available through our female GPs, <strong>Dr Zille Shehzad</strong> and <strong>Dr Hira Shehzad</strong>. Intrauterine devices include the Mirena, Kyleena and Copper IUD, forms of long-acting contraception. Mirena has a few other indications that it is useful for. These are popularly one of the &quot;set and forget&quot; methods, where the method stays in place and active for multiple years.
            </p>

            <p>
              If you decide that this method is right for you, a consult with one of the above GPs is required for risk assessment, full consent and to acquire a prescription. You will then bring the device from the pharmacy to be used on the day of the procedure. The procedure itself is short, but in total may take up to 45 minutes. We use local anaesthetic on the cervix to decrease pain. If you have more questions, please book a consult with one of our expert GPs.
            </p>

            <p className="pt-2 font-medium">
              <Link href="/contact" className="text-[#e6704a] font-bold hover:underline">
                Contact us
              </Link>{" "}
              today or book online for an initial consult.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
