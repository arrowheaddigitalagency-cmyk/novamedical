import React from "react";
import { Stethoscope, HeartHandshake, ShieldCheck, Clock } from "lucide-react";
import { HIGHLIGHT_CARDS } from "@/data/clinicData";

export default function TrustHighlights() {
  return (
    <section className="py-12 bg-white relative z-10 -mt-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHT_CARDS.map((card) => (
            <div
              key={card.id}
              className="glass-box glass-box-hover p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 bg-orange-50 text-[#E06338] border-orange-200/80">
                  <Stethoscope className="w-6 h-6 text-[#E06338]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-[#E06338] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
