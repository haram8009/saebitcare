import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3182F6] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#3182F6] rounded-full"></span>
            전문 분해 청소 서비스
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#191F28] leading-tight mb-5">
            에어컨 냄새, 이제<br />
            <span className="text-[#3182F6]">제대로 없앨 수 있어요</span>
          </h1>

          <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
            단순 필터 청소가 아닌 완전 분해 후 고압 세척으로
            내부 곰팡이와 세균을 99% 제거합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href="#contact"
              className="bg-[#3182F6] text-white font-semibold text-base px-7 py-4 rounded-2xl hover:bg-[#1C6EE8] transition-colors text-center"
            >
              온라인 무료 견적 신청
            </a>
            <a
              href="tel:010-0000-0000"
              className="flex items-center justify-center gap-2 bg-gray-100 text-[#191F28] font-semibold text-base px-7 py-4 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <Phone size={18} />
              전화로 바로 상담
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold text-[#191F28]">1,000건+</p>
              <p className="text-sm text-[#6B7280] mt-0.5">누적 청소 건수</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-2xl font-bold text-[#191F28]">98%</p>
              <p className="text-sm text-[#6B7280] mt-0.5">고객 만족도</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-2xl font-bold text-[#191F28]">10년+</p>
              <p className="text-sm text-[#6B7280] mt-0.5">청소 전문 경력</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
