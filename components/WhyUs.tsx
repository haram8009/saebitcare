import { ShieldCheck, Leaf, BadgeCheck, Clock } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "전문 자격 보유",
    description: "가전제품 청소 전문가 자격증을 보유한 기술자가 직접 방문합니다.",
  },
  {
    icon: Leaf,
    title: "친환경 세정제",
    description: "어린이·반려동물에게 안전한 친환경 세정제만 사용합니다.",
  },
  {
    icon: BadgeCheck,
    title: "AS 보증",
    description: "청소 완료 후 14일 이내 문제 발생 시 무상으로 재방문합니다. 기간과 조건을 명확히 약속합니다.",
  },
  {
    icon: Clock,
    title: "당일 예약 가능",
    description: "빠른 배정 시스템으로 원하시는 날 당일 방문도 가능합니다.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">새빛케어를 선택하는 이유</p>
          <h2 className="text-3xl font-bold text-[#191F28]">믿고 맡길 수 있는<br />이유가 있습니다</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex-shrink-0 flex items-center justify-center">
                  <Icon size={20} className="text-[#3182F6]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#191F28] mb-1.5">{reason.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
