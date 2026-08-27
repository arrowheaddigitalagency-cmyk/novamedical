import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Sun } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "Skin Cancer Screening, Mole Checks & Excision | Nova Medical Centre Stirling",
  description:
    "Full body skin cancer checks, mole screening, dermoscopy, and lesion excision at Nova Medical Centre Stirling.",
};

export default function SkinCancerScreeningPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#E06338] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Sun className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            SKIN CHECKS, MOLE SCAN &amp; EXCISION
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
              Skin Cancer Screening, Mole Checks &amp; Excision
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Skin cancer accounts for a majority of newly diagnosed cancers in Australia. The incidence rate is two to three times higher than in Canada, the US, and the UK. Early detection is critical as an increasing number of people are diagnosed each year.
                </p>

                <p className="font-semibold text-slate-800">
                  There are three main types of skin cancer:
                </p>

                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>Melanoma:</strong> Melanoma is the most serious and can become life-threatening if left untreated. It can be treated effectively when detected in its earliest stages.
                  </li>
                  <li>
                    <strong>Basal cell carcinoma:</strong> This is the most common type and typically develops on sun-exposed areas including the neck, shoulders, and back.
                  </li>
                  <li>
                    <strong>Squamous cell carcinoma:</strong> This is another common form of skin cancer that develops in the outer layers of the skin and is usually treatable.
                  </li>
                </ul>

                <p>
                  Anyone can develop skin cancer but frequent sun exposure dramatically increases the risk. The good news is that most cases are highly curable when detected early.
                </p>

                <p className="font-semibold text-slate-800">
                  Look for any of the following on your body:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>New moles or freckles that change in size, shape or colour over a period of weeks to months</li>
                  <li>Large spots or moles</li>
                  <li>Small, scaly patches or lumps</li>
                </ul>

                <p>
                  If you notice any unusual spots on your skin, make a booking immediately to a skin cancer clinic in Perth.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Screening tests
                </h3>

                <p>
                  The sooner a skin lesion is detected, the better your chances of successfully treating it.
                </p>

                <p>
                  Nova Medical Centre Stirling uses the latest equipment to magnify and digitally inspect potentially cancerous lesions. All images are digitally scanned into our filing system to track any changes over time. The procedure takes around 15 minutes, and is completely painless and safe.
                </p>

                <p>
                  Your practitioner will first ask a set of questions to better understand your level of risk. Because skin cancer and melanoma can develop anywhere on the skin, we recommend a fully body screening. We conduct a comprehensive review of your skin for any abnormal moles or lesions.
                </p>

                <p>
                  Screening involves the use of high resolution imaging equipment and dermoscopy, a specialised technique to evaluate pigmented skin lesions. This is the screening standard to accurately screen and detect skin cancers in its early stages.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Treatment
                </h3>

                <p>
                  The screening will reveal any lesions or moles that are at risk of being or becoming cancerous. Your physician will determine if further action is needed and will discuss the results with you in detail. Treatment options depend on the stage and type but most skin cancers are removed with a local excision. This involves a simple procedure which can be performed in our centre.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#E06338] font-bold hover:underline">
                    Contact us
                  </Link>{" "}
                  today or book online at our modern practice for mole removal.
                </p>
              </div>

              {/* Right Column: Images & Book Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="/images/services/skin-cancer-1.jpg"
                    alt="Sun protection and skin safety on beach"
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

                {/* Bottom Awareness Image Poster */}
                <div className="pt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="/images/services/skin-cancer-2.png"
                    alt="Skin Cancer awareness SunSmart poster"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
