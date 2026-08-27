import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Stethoscope, ExternalLink } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "General Practice | Nova Medical Centre Stirling",
  description:
    "Comprehensive General Practice healthcare services at Nova Medical Centre Stirling. Open 7 days a week.",
};

export default function GeneralPracticePage() {
  const serviceList = [
    "General Practice",
    "Men & Women's Health",
    "Skin cancer screening",
    "Mental Health",
    "Travel vaccinations",
    "Pre-employment medicals",
    "Sexual health screening",
    "Onsite pathology",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#F59A3C] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Stethoscope className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            GENERAL PRACTICE
          </span>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E06338] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Nova Medical Centre Stirling is a modern medical practice in Stirling. Our team of dedicated physicians deliver personalised, quality healthcare. We provide a wide spectrum of care and function as physicians as well as health counsellors within the local community.
              </p>

              <p>
                Health is highly personal so we take a holistic approach to relieve disease and promote health in all its forms. All while considering the physical, psychological, and social aspects relevant to the care of each patient. Our general practitioners assess a problem and decide on the best course of action.
              </p>

              <p>
                Your healthcare needs remain central to our evaluation process. The scope of our services span across disease prevention, health promotion, and early intervention as well as management of acute and chronic conditions. We coordinate with a range of specialists to promote desired health outcomes.
              </p>

              <p>
                Our purpose built facility allows us to provide quality care in a friendly environment. Services at our practice include:
              </p>

              <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                {serviceList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p>
                We strive to provide healthcare services in a modern and friendly environment.
              </p>

              <p>
                Our general practitioners seek to establish long term relationships to deliver accessible patient care. Our practice is in the process of being accredited by Australian General Practice Accreditation Limited (AGPAL). We meet all the guidelines and practice standards established by the Royal Australian College of General Practitioners. This is an industry recognised mark of quality which you can expect at our medical centre.
              </p>

              <p className="font-semibold text-slate-800">
                Every individual needs a personal health physician.
              </p>

              <p>
                <Link href="/contact" className="text-[#E06338] font-bold hover:underline">
                  Contact us
                </Link>{" "}
                today to see a friendly and professional GP in Stirling. Our physicians are available 7 days of the week and are committed to delivering patient-centred care. You can also use our online booking system to make an appointment to see one of our practitioners at a time that is convenient for you.
              </p>
            </div>

            {/* Right Column: Image & Book Button */}
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                <img
                  src="/images/services/general-practice.jpg"
                  alt="General Practice doctor consultation at Nova Medical Centre Stirling"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex justify-end">
                <a
                  href={CLINIC_URLS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#E06338] hover:bg-[#C54E26] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-md inline-flex items-center gap-2"
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
  );
}
