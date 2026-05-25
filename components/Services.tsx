import { Wind } from "lucide-react";

const services = [
  {
    name: "벽걸이형",
    description: "가정에서 가장 많이 사용하는 타입. 팬과 열교환기를 완전 분해 후 세척합니다.",
    price: "80,000원~",
    duration: "약 1시간",
    icon: "🌀",
  },
  {
    name: "스탠드형",
    description: "대용량 에어컨으로 내부 구조가 복잡합니다. 꼼꼼한 분해 세척으로 성능을 회복합니다.",
    price: "120,000원~",
    duration: "약 1.5시간",
    icon: "❄️",
  },
  {
    name: "천장형",
    description: "사무실·매장에 설치된 4방향 카세트 타입. 전문 장비로 안전하게 청소합니다.",
    price: "150,000원~",
    duration: "약 2시간",
    icon: "🏢",
  },
  {
    name: "시스템에어컨",
    description: "실내기 여러 대를 하나의 실외기로 운용하는 시스템. 견적 후 진행합니다.",
    price: "별도 견적",
    duration: "별도 협의",
    icon: "⚙️",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">서비스 안내</p>
          <h2 className="text-3xl font-bold text-[#191F28]">모든 에어컨 종류를<br />청소합니다</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#191F28] mb-2">{service.name}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-[#6B7280]">소요시간</p>
                  <p className="text-sm font-medium text-[#374151]">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B7280]">가격</p>
                  <p className="text-base font-bold text-[#3182F6]">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
