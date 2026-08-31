import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "STD & STI Testing Clinic Perth | Nova Medical Centre Stirling",
  description:
    "Confidential STI & STD screening, testing, treatment, and specialized sexual health services at Nova Medical Centre Stirling.",
};

export default function SexualHealthPage() {
  const commonStis = [
    "Chlamydia",
    "Gonorrhoea",
    "Genital herpes",
    "HIV/AIDS",
    "Syphilis",
    "Viral Hepatitis",
  ];

  const stiSymptoms = [
    "unusual discharge from the penis, vagina or anus",
    "pain during sex or urination",
    "sores, blisters, ulcers, rashes or lumps in the genital area",
    "itchiness or irritation in the genital area",
    "persistent diarrhoea",
    "fever or flu-like symptoms",
    "abnormal or unusual vaginal bleeding, especially after having sex",
    "pain in the scrotum or testicles",
    "lumps and bumps on the genitals",
  ];

  const specialisedServices = [
    "Pregnancy screening, counselling, and management",
    "Women's health counselling services including fertility counselling",
    "Contraceptive procedures including hormonal subcutaneous implant/removal and intrauterine device (IUD) or Mirena insertion",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#e6704a] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Heart className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            SEXUAL HEALTH
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
              STD &amp; STI Testing Clinic
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  An active sex life plays an important role in healthy relationships but it also carries risks. Engaging in any sexual activity without protection can result in sexually transmitted infections (STI) or unintended pregnancies. Sexual health encompasses these issues as well as counselling and other preventative measures.
                </p>

                <p>
                  Northbridge Medical Centre is a modern practice based in Perth. We are committed to providing high standards of care in a friendly environment. Our services are easily accessible with provision of care focused around each of our patients.
                </p>

                <p>
                  Sexual health is just as important as physical and mental health. Ignoring any symptoms can considerably impact quality of life. We offer a multidisciplinary service to screen, test, and treat patients with sexually transmitted diseases/infections (STDs/STIs).
                </p>

                <p className="font-semibold text-slate-800">
                  Some of the more common STIs are:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {commonStis.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  STDs are mostly serious conditions that require immediate treatment and therefore unprotected sex is best avoided until both you and your partner have been screened. Prevention is better than cure. Some such as HIV cannot be cured and are deadly but some can be treated with antibiotics or antivirals. Symptoms can vary and can often be silent.
                </p>

                <p className="font-semibold text-slate-800">
                  Generally, the symptoms of STIs can include:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  {stiSymptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>

                <p>
                  If you have started a new sexual relationship or think you may have an STI then it is important to schedule appointment for STD testing.
                </p>

                <p>
                  Contact us to make an appointment at our STD clinic in Perth.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Specialised Sexual Health Services
                </h3>

                <p>
                  At Nova Medical Centre Stirling, we offer much more than testing and treatments for STDs. Other specialised services we offer at our practice include:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {specialisedServices.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  We are able to arrange non-invasive screening procedures conducted during pregnancy to identify health problems which could affect you or your baby. We also offer counselling for couples coping with infertility and contraceptive procedures for various types of birth control.
                </p>

                <p>
                  Treatments to prevent infections in people exposed to sexual diseases and contact tracing are also available. If necessary, we can refer our patients to a Clinical Psychologist, Social Worker, Counsellor or Women&apos;s Health Physiotherapist.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#e6704a] font-bold hover:underline">
                    Contact us
                  </Link>{" "}
                  today for assistance or book an appointment at our practice with our online system.
                </p>
              </div>

              {/* Right Column: Image & Book Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="/images/services/sexual-health.jpg"
                    alt="Couple smiling on grass - Healthy Relationships and Sexual Health"
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
