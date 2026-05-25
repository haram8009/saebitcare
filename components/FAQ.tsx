"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "청소 전에 준비할 게 있나요?",
    answer: "별도로 준비하실 것은 없습니다. 방문 전 에어컨 전원만 꺼두시면 됩니다. 청소 도구와 세정제는 모두 저희가 지참합니다.",
  },
  {
    question: "아이나 반려동물이 있어도 괜찮나요?",
    answer: "네, 안전합니다. 저희가 사용하는 세정제는 인체·동물에 무해한 친환경 제품입니다. 다만 세척 직후 1~2시간 환기를 권장합니다.",
  },
  {
    question: "청소 후 냄새는 언제 없어지나요?",
    answer: "세정제 특유의 향이 청소 직후 잠깐 날 수 있습니다. 창문을 열고 1~2시간 환기하시면 완전히 사라집니다.",
  },
  {
    question: "비용은 언제 어떻게 결제하나요?",
    answer: "작업이 완전히 끝난 후 현장에서 결제하시면 됩니다. 선불은 없습니다. 현금·계좌이체·카드 모두 가능합니다.",
  },
  {
    question: "청소 후 문제가 생기면 어떻게 하나요?",
    answer: "청소 완료 후 14일 이내에 문제가 발생하면 무상으로 재방문합니다. 예약 시 받으시는 연락처로 연락주시면 바로 처리해드립니다.",
  },
  {
    question: "예약 취소나 일정 변경이 가능한가요?",
    answer: "방문 예정일 하루 전까지는 무료로 취소·변경 가능합니다. 당일 취소는 상황에 따라 다를 수 있으니 미리 연락 부탁드립니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">자주 묻는 질문</p>
          <h2 className="text-3xl font-bold text-[#191F28]">궁금한 점을<br />미리 확인하세요</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#191F28] pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#6B7280] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
