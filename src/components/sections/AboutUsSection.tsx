import React from "react";
import { Building2, Heart, Users, Sparkles, Tag } from "lucide-react";

export default function AboutUsSection() {
  const seoKeywords = [
    "Nova Medical centre Stirling",
    "Medical Clinic",
    "Medical Doctor",
    "Medical centre",
    "Stirling Medical Centre",
    "Balcatta Medical Centre",
    "Stirling Doctors",
    "Nova Clinic",
    "Cedric street medical clinic",
    "Cedric street GP",
    "Doctor near me",
    "medical centre near me",
    "Vaccination Clinic",
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E06338]">
            GET TO KNOW US
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            about <span className="text-[#E06338]">us</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            At Nova Medical Centres, we view quality service and patient health care as one.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-slate-800">
                At Nova Medical Centres, we view quality service and patient health care as one. Which is why we strive for excellence in patient care, service quality &amp; have a focus on preventive care. You can expect an unmatched level of care from our physicians and staff.
              </p>

              <p>
                As a modern family practice we endeavour to provide quality health care services in a safe, friendly and professional environment.
              </p>

              <p>
                Our first clinic opened in <span className="text-[#E06338] font-semibold">Northbridge</span> in <span className="text-[#E06338] font-semibold">2012</span>, followed by our second &amp; third clinic in <span className="text-[#E06338] font-semibold">Stirling &amp; Manning</span> and we proudly announce that our fourth clinic in <span className="text-[#E06338] font-semibold">Greenwood</span> is opening in January 2023. We look forward to bringing medical centres in other areas in the near future .
              </p>
            </div>

            {/* In-House Specialist Highlight Box */}
            <div className="bg-orange-50/80 p-5 rounded-2xl border border-orange-200/80 space-y-2">
              <div className="flex items-center gap-2 text-[#E06338] font-bold text-sm sm:text-base">
                <Sparkles className="w-5 h-5 text-[#E06338]" />
                <span>Specialist Care On-Site</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                We also have in house <span className="text-[#E06338]">Consultant Paediatrician</span>, <span className="text-[#E06338]">Consultant Psychiatrist</span> &amp; <span className="text-[#E06338]">Clinical Psychologist</span>.
              </p>
            </div>
          </div>

          {/* Right Highlights & Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#10182D] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-[#18893B] text-white rounded-2xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Our Practice Journey</h3>
                  <p className="text-xs text-slate-400">Serving Western Australia since 2012</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="px-2.5 py-1 bg-[#18893B] text-white font-bold rounded-lg text-xs shrink-0 mt-0.5">2012</span>
                  <div>
                    <strong className="text-white block">Northbridge Clinic</strong>
                    <span className="text-slate-300">Our very first medical centre launched</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2.5 py-1 bg-[#19BFC4] text-slate-900 font-bold rounded-lg text-xs shrink-0 mt-0.5">Expansion</span>
                  <div>
                    <strong className="text-white block">Stirling &amp; Manning Clinics</strong>
                    <span className="text-slate-300">Established to serve local Stirling community</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2.5 py-1 bg-amber-500 text-slate-900 font-bold rounded-lg text-xs shrink-0 mt-0.5">2023</span>
                  <div>
                    <strong className="text-white block">Greenwood Clinic</strong>
                    <span className="text-slate-300">Fourth clinic opened in January 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Footer Bar (Preserving original search visibility keywords) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-4 h-4 text-[#18893B]" />
            <span>Search &amp; Location Keywords</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {seoKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-slate-100/80 hover:bg-emerald-50 text-slate-700 hover:text-[#18893B] text-xs font-medium rounded-xl border border-slate-200/60 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
