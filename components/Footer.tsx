import Image from "next/image";
import { Building2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#191F28] text-gray-400 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Image src="/logo-symbol.svg" width={28} height={28} alt="새빛케어 로고" unoptimized />
          <span className="font-bold text-white text-base">새빛케어</span>
        </div>

        <div className="text-sm leading-relaxed space-y-1 mb-6">
          <p>상호명: {siteConfig.name} &nbsp;|&nbsp; 대표: {siteConfig.representative}</p>
          <p>연락처: {siteConfig.phone} &nbsp;|&nbsp; 이메일: {siteConfig.email}</p>
          <p>운영시간: 평일 {siteConfig.hours.open} ~ {siteConfig.hours.close} (주말·공휴일 휴무)</p>
        </div>

        {/* 사업자등록증 뱃지 */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
            <Building2 size={15} className="text-[#3182F6]" />
            <div>
              <p className="text-xs text-gray-500 leading-none mb-0.5">사업자등록번호</p>
              <p className="text-sm font-medium text-white leading-none">{siteConfig.businessRegNo}</p>
            </div>
          </div>
          <a
            href={`https://www.ftc.go.kr/bizCommPop.do?wrkr_no=${siteConfig.businessRegNo.replace(/-/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ExternalLink size={12} />
            사업자 정보 공정위 확인
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} 새빛케어. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
