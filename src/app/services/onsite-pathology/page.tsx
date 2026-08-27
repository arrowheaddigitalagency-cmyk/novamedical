import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FlaskConical } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "On-site Pathology Collection Services | Nova Medical Centre Stirling",
  description:
    "In-house Clinicalabs pathology collection, blood tests, biochemistry, haematology, STI screening, and diagnostic testing at Nova Medical Centre Stirling.",
};

export default function OnsitePathologyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#7D8056] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <FlaskConical className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            ONSITE PATHOLOGY
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
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E06338]">
              On-Site Pathology Services
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  We have our very own pathology service within our own premises. Please note the hours available for this service are mainly during business hours and Saturday morning and a doctors referral is required. Medicare card holders are not charged for this service (however please note health insurance providers usually cover most tests). The services Clinicalabs Pathology can provide cover the following: All routine biochemistry testing; cancer markers; hormones; therapeutic drugs; vitamins; trace elements; urine drug screening, liver and kidney function, cholesterol and lipid screening, diabetes screening, thyroid function, inflammatory markers.
                </p>

                <p>
                  All routine haematology testing such as anaemia tests; coagulation testing; warfarin/INR testing.
                </p>

                <p>
                  Microbiology testing such as sexual transmitted infection (STI/STD) screening eg PCR testing; Serological testing; Parasitology; Mycology – infectious diseases serology testing.
                </p>

                <p>
                  Histopathology/Cytology: Histopathology and cytology on all anatomical specimens; Thin prep; FNA; immunohistochemistry – which includes excisional biopsies or sampling of any human tissues to examine for signs of cancer or any cell change/cytological examination.
                </p>

                <p>
                  All test results are automatically processed and sent back to your GP electronically to be securely stored in your patient file and therefore can be monitored over time.
                </p>

                <p>
                  Please note in order to obtain your results due to legal restrictions it is necessary to visit your doctor to obtain a copy as we are unable to verbally report results over the phone – this must be done in person for legal reasons. Most results can take a few days but some may take a few weeks. Your doctor should inform you of when to return as result turnaround times can vary depending on the complexity of the test and variable laboratory demands.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Will I be charged for my results appointment?
                </h3>

                <p>
                  Most of the time a GP will not charge for a follow up appointment just to go over a few normal results and give you a copy however keep in mind these follow up appointments are sometimes complete new consultations and depending on the complexity of the problem will be considered another consultation. We advise you to discuss any financial concerns upfront with your GP as we are a private health care service provider committed to providing you with a valuable and efficient service that ensures high patient safety and privacy as well as high quality care.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#E06338] font-bold hover:underline">
                    Contact us
                  </Link>{" "}
                  today to learn more or book an appointment online.
                </p>
              </div>

              {/* Right Column: Image & Book Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="/images/services/onsite-pathology.jpg"
                    alt="Pathology nurse drawing blood sample"
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
    </div>
  );
}
