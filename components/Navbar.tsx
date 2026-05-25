"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3182F6] rounded-xl flex items-center justify-center">
            <span className="text-white text-xs font-bold">새빛</span>
          </div>
          <span className="font-bold text-[#191F28] text-lg">새빛케어</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#374151]"
          >
            <Phone size={15} className="text-[#3182F6]" />
            {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="bg-[#3182F6] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#1C6EE8] transition-colors"
          >
            무료 견적 받기
          </a>
        </div>
      </div>
    </nav>
  );
}
