import { Phone, MessageCircle, ClipboardList } from "lucide-react";

// TODO: Google Form을 만든 후 아래 URL을 실제 URL로 교체하세요
// Google Forms → 보내기 → 링크 복사
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-5 bg-[#3182F6]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-200 font-semibold text-sm mb-2">무료 견적 신청</p>
          <h2 className="text-3xl font-bold text-white">지금 바로 견적을<br />받아보세요</h2>
          <p className="text-blue-100 mt-3 text-base">방문 전 무료 견적 안내해드립니다. 부담 없이 문의하세요.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <ClipboardList size={20} className="text-[#3182F6]" />
            </div>
            <div>
              <p className="font-bold text-[#191F28] mb-1">온라인 신청서</p>
              <p className="text-sm text-[#6B7280]">구글폼 작성 후 제출하시면 당일 내 연락드립니다.</p>
            </div>
            <span className="text-[#3182F6] font-semibold text-sm mt-auto">신청서 작성하기 →</span>
          </a>

          <a
            href="tel:010-0000-0000"
            className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Phone size={20} className="text-[#3182F6]" />
            </div>
            <div>
              <p className="font-bold text-[#191F28] mb-1">전화 상담</p>
              <p className="text-sm text-[#6B7280]">010-0000-0000<br />평일 09:00 ~ 18:00</p>
            </div>
            <span className="text-[#3182F6] font-semibold text-sm mt-auto">전화하기 →</span>
          </a>

          <a
            href="https://open.kakao.com/YOUR_KAKAO_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-11 h-11 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
              <MessageCircle size={20} className="text-yellow-500" />
            </div>
            <div>
              <p className="font-bold text-[#191F28] mb-1">카카오톡 문의</p>
              <p className="text-sm text-[#6B7280]">카카오 오픈채팅으로 빠르게 문의하세요.</p>
            </div>
            <span className="text-yellow-600 font-semibold text-sm mt-auto">카카오로 문의 →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
