import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Briefcase } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "Corporate Medicals & Pre-Employment Assessments | Nova Medical Centre Stirling",
  description:
    "Pre-employment medicals, workers compensation management, driver medicals, drug & alcohol testing, and audiometry in Stirling, WA.",
};

export default function CorporateMedicalsPage() {
  const corporateServices = [
    "Pre-employment medicals",
    "Workers compensation claims",
    "Driver medicals",
    "Drug & Alcohol testing",
    "Bulk onsite flu vaccination",
  ];

  const offeringList = [
    "Job and task analysis.",
    "Pre-employment medical assessment.",
    "Drug and alcohol testing.",
    "Heart and lung function screening – ECG & Spirometry",
    "Biochemistry and Serology – on site pathology",
    "Baseline and periodic health screening.",
    "Audiometry",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#F59A3C] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Briefcase className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            CORPORATE MEDICALS
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
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-soft">
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e6704a]">
              Corporate Medicals &amp; Occupational Health
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-800">
                  We provide the following corporate medical services:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {corporateServices.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  We are experienced in providing pre-employment medical assessments that respect privacy, workplace relations and anti-discrimination legislation.
                </p>

                <p className="font-semibold text-slate-800">
                  We offer:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  {offeringList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  The purpose of the pre-employment medical is to verify that the prospective member of staff is physically fit to perform the duties of the position for which he/she has applied and to help guard against work-related illness and injury occurring subsequent to the person&apos;s employment.
                </p>

                <p>
                  We are able to accommodate workplace medicals on short notice and are able to accommodate to employers needs including the management of any injury that arises under a workers compensation claim.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#e6704a] font-bold hover:underline">
                    Contact
                  </Link>{" "}
                  our team to find out more.
                </p>
              </div>

              {/* Right Column: Image & Book Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="/images/services/corporate-medicals.jpg"
                    alt="Corporate occupational health engineer on industrial worksite"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="flex justify-end">
                  <a
                    href={CLINIC_URLS.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-[#e6704a] hover:bg-[#c8552e] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>BOOK NOW</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
