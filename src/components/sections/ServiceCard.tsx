"use client";

import React from "react";
import {
  Users,
  Baby,
  Brain,
  Plane,
  Briefcase,
  Sun,
  Activity,
  HeartPulse,
  FlaskConical,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Service } from "@/data/clinicData";

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const getIcon = () => {
    switch (service.iconName) {
      case "Users":
        return <Users className="w-5 h-5" />;
      case "Baby":
        return <Baby className="w-5 h-5" />;
      case "Brain":
        return <Brain className="w-5 h-5" />;
      case "Plane":
        return <Plane className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      case "Sun":
        return <Sun className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const getAccentStyles = () => {
    switch (service.accentColor) {
      case "blue":
        return { bg: "bg-blue-50 text-blue-600 border-blue-200/80" };
      case "pink":
        return { bg: "bg-pink-50 text-pink-600 border-pink-200/80" };
      case "purple":
        return { bg: "bg-purple-50 text-purple-600 border-purple-200/80" };
      case "teal":
        return { bg: "bg-teal-50 text-teal-600 border-teal-200/80" };
      case "orange":
        return { bg: "bg-orange-50 text-orange-600 border-orange-200/80" };
      case "yellow":
        return { bg: "bg-amber-50 text-amber-600 border-amber-200/80" };
      default:
        return { bg: "bg-emerald-50 text-emerald-600 border-emerald-200/80" };
    }
  };

  const styles = getAccentStyles();

  return (
    <div
      onClick={() => onSelect(service)}
      className="glass-box glass-box-hover p-6 rounded-3xl flex flex-col justify-between cursor-pointer group"
    >
      <div className="space-y-4">
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 ${styles.bg}`}
        >
          {getIcon()}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-[#18893B] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="pt-4 flex items-center gap-1 text-xs font-semibold group-hover:translate-x-1 transition-all text-[#18893B]">
        <span>Learn More</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
