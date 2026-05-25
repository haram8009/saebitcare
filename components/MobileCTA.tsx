"use client";

import { useEffect, useState } from "react";
import { Phone, ClipboardList } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-sentinel");
    const contact = document.getElementById("contact");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero sentinel이 화면에서 사라지면 CTA 표시
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        // Contact 섹션이 보이면 CTA 숨김
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.2 }
    );

    if (hero) observer.observe(hero);
    if (contact) contactObserver.observe(contact);

    return () => {
      observer.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-stretch h-16">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-1 items-center justify-center gap-2 bg-[#3182F6] text-white font-semibold text-sm"
        >
          <Phone size={17} />
          지금 전화하기
        </a>
        <div className="w-px bg-blue-400" />
        <a
          href={siteConfig.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-white text-[#3182F6] font-semibold text-sm"
        >
          <ClipboardList size={17} />
          온라인 문의
        </a>
      </div>
      {/* 아이폰 홈바 영역 여백 */}
      <div className="h-safe-area-inset-bottom bg-white" style={{ height: "env(safe-area-inset-bottom)" }} />
    </div>
  );
}
