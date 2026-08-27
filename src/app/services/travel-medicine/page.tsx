import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Plane } from "lucide-react";
import { CLINIC_INFO, CLINIC_URLS } from "@/data/clinicData";

export const metadata = {
  title: "Travel Medicine & Vaccinations Perth | Nova Medical Centre Stirling",
  description:
    "Accredited Travel Doctor clinic in Stirling, WA. Certified Yellow Fever vaccination centre, travel kits, pre-travel health advice & immunisations.",
};

export default function TravelMedicinePage() {
  const standardVaccines = [
    "Tetanus",
    "Pertussis",
    "Measles, mumps, rubella and varicella",
    "Diphtheria",
    "Polio",
    "Influenza",
    "Pneumococcal",
    "Hepatitis B",
  ];

  const destinationVaccines = [
    "Meningococcal C",
    "Hepatitis A",
    "Typhoid",
    "Tuberculosis",
    "Rabies",
    "Japanese encephalitis",
    "Malaria",
    "Yellow fever (required by law for certain destinations)",
    "Cholera",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Banner matching reference design */}
      <div className="bg-[#7D8056] text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex items-center gap-3">
          <Plane className="w-6 h-6 shrink-0" />
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider">
            TRAVEL MEDICINE AND VACCINATIONS
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
              Nova Medical Centre Stirling Travel Doctor &amp; Travel Vaccinations In Perth
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Many infectious diseases are largely controlled in Australia through widespread vaccination and other health measures. Unfortunately, this is not the case for many other countries. Travelling overseas dramatically increases health risks and infections can be fatal in rare cases.
                </p>

                <p className="font-semibold text-slate-800">
                  This is why it is important to make sure you are vaccinated before travelling to another country.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Why Vaccinate?
                </h3>

                <p>
                  Vaccines provide protection by exposing the body to a small dose of the disease. This in turn strengthens your immune system as it develops immunity. Not vaccinating puts you at a greater risk of catching a preventable disease.
                </p>

                <p>
                  No matter where you are travelling to, it is strongly advised that your vaccinations are up to date. Some countries may even deny you entry unless you have the required vaccinations. Health risks vary from one country to another and there may be new outbreaks in certain areas. Which is why it is important to see a travel doctor in Perth before booking a trip as new vaccines may be available.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Travel Vaccinations
                </h3>

                <p>
                  Nova Medical Centre Stirling is a registered travel clinic and certified to provide the Yellow Fever vaccination. A risk assessment approach is best to clarify disease exposure and protective benefits against any concerns you may have. We provide general health counselling and can prescribe travel kits as well conduct pre-travel health screening and blood testing.
                </p>

                <p>
                  We advise on vaccinations and travel precautions to take, relative to your destination and season. The Australian Government&apos;s National Health and Medical Research Council recommends all travelers be up to date with:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {standardVaccines.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  Depending on the destination you are travelling to and your activities, we routinely recommend prophylaxis against the following:
                </p>

                <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
                  {destinationVaccines.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p>
                  There may be other infections not in this list that are unique to certain regions of the world. This is yet another reason to schedule a booking with our physicians before you travel.
                </p>

                <h3 className="text-lg font-bold text-slate-900 pt-2">
                  Make a Booking
                </h3>

                <p>
                  Now that more Australians are taking the opportunity to travel, it is more important than ever to be vaccinated. We encourage you to book your travel vaccinations with us at least 4 weeks prior to your departure date.
                </p>

                <p className="pt-2">
                  <Link href="/contact" className="text-[#E06338] font-bold hover:underline">
                    Contact us
                  </Link>{" "}
                  today to make a booking at our clinic before travelling to your next destination.
                </p>
              </div>

              {/* Right Column: Image & Book Button */}
              <div className="lg:col-span-5 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                    alt="Travel doctor consultation and vaccination guidance"
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
