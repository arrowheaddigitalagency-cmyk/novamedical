import React from "react";
import { Stethoscope, HeartHandshake, ShieldCheck, Clock } from "lucide-react";
import { HIGHLIGHT_CARDS } from "@/data/clinicData";

export default function TrustHighlights() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-[#18893B]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#29A84A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#19BFC4]" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-[#7856D8]" />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#18893B]" />;
    }
  };

  const getBgColor = (accent: string) => {
    switch (accent) {
      case "green":
        return "bg-emerald-50 text-[#18893B] border-emerald-200/80";
      case "mint":
        return "bg-teal-50 text-[#29A84A] border-teal-200/80";
      case "teal":
        return "bg-cyan-50 text-[#19BFC4] border-cyan-200/80";
      case "cyan":
        return "bg-purple-50 text-[#7856D8] border-purple-200/80";
      default:
        return "bg-emerald-50 text-[#18893B] border-emerald-200/80";
    }
  };

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
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${getBgColor(
                    card.accent
                  )}`}
                >
                  {getIcon(card.icon)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-[#18893B] transition-colors">
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
