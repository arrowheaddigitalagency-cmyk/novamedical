import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Brain } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "Mental Health Care Plans & Self-Help | Nova Medical Centre Stirling",
  description:
    "GP Mental Health Treatment Plans, Medicare rebates, self-help resources, and referrals at Nova Medical Centre Stirling.",
};

export default function MentalHealthPage() {
  const selfHelpLinks = [
    { label: "Depression and Bipolar Disorder", url: "https://blackdoginstitute.org.au" },
    { label: "Anxiety disorders", url: "https://crufad.org" },
    { label: "Perinatal and general mental health", url: "https://beyondblue.org.au" },
    { label: "General psychiatric problems", url: "https://psychcentral.org" },
    { label: "General problems and eating disorders", url: "https://cci.health.wa.gov.au" },
  ];

  const eligibleDisorders = [
    "depression",
    "anxiety",
    "stress",
    "schizophrenia",
    "bipolar disorder",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#F59A3C] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Brain className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            MENTAL HEALTH
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e6704a]">
                Mental Health Care &amp; Support
              </h1>

              <a
                href={CLINIC_URLS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#e6704a] hover:bg-[#c8552e] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-md inline-flex items-center gap-2 shrink-0"
              >
                <span>BOOK NOW</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
              {/* Self Help Section */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#e6704a]">
                  Self-Help
                </h2>
                <p>
                  Self-help is a major weapon in the treatment of mental illnesses. Your doctor will help guide you in what you can do yourself which may include physical exercise, relaxation exercises, problem solving, sleep hygiene, and a healthy lifestyle.
                </p>
                <p>
                  Recommended websites for self-care: General psychiatric problems: psychcentral.org General problems and eating disorders: cci.health.wa.gov.au
                </p>
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Helpful Mental Health Resources:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm">
                    {selfHelpLinks.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e6704a] shrink-0" />
                        <span>{item.label}:</span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e6704a] font-semibold hover:underline"
                        >
                          {item.url.replace("https://", "")}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mental Health Care Plan Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-[#e6704a]">
                  Mental Health Care Plan
                </h2>

                <p>
                  A Mental Health Care Plan is for patients with a mental health condition that can be written out into a plan and up to 10 visits to mental health services will be covered by medicare.
                </p>

                <p>
                  It identifies what type of health care you need, and spells out what you and your doctor have agreed you are aiming to achieve.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  Who is eligible for a mental health care plan?
                </h3>

                <p>
                  A mental health care plan is available to you if you have a mental condition that has been diagnosed by a doctor including disorders such as:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {eligibleDisorders.map((disorder, idx) => (
                    <li key={idx} className="capitalize">{disorder}</li>
                  ))}
                </ul>

                <p>
                  If you are concerned about your mental health or that of a family member, the first stop should be your doctor where you can find out which therapies and treatments are available.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  How do I get a care plan?
                </h3>

                <p>
                  Your doctor will assess whether you have a mental disorder and whether you will benefit from a treatment plan. Your doctor will ask a few questions, fill in the plan and set goals together with you. When you make the booking, please ensure that you ask for a long appointment, usually 20 minutes or more is needed.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  What does the care plan cover?
                </h3>

                <p>
                  If you have a mental health care plan, you will be entitled to Medicare rebates for up to 10 individual and 10 group appointments with some allied mental health services in a year. That means for certain psychologists, occupational therapists and social workers, you are also entitled to Medicare rebates for 10 individual and support group sessions in a year.
                </p>

                <p>
                  Your doctor can also give you a referral to allied health services in your area if required.
                </p>

                <p>
                  After the first 6 appointments, you need to see your doctor again for a plan review and another referral, as you cannot have all the 10 appointments in one go. For more information about mental health care plans, please making a booking with our doctors.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#e6704a] font-bold hover:underline">
                    Contact us
                  </Link>{" "}
                  today or book online for a consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
