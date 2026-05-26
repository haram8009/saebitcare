const steps = [
  {
    number: "01",
    title: "방문 및 점검",
    description: "예약 시간에 맞춰 방문하여 에어컨 상태를 먼저 점검하고 작업 범위를 안내합니다.",
  },
  {
    number: "02",
    title: "완전 분해",
    description: "필터부터 열교환기, 팬까지 세척 가능한 모든 부품을 안전하게 분해합니다.",
  },
  {
    number: "03",
    title: "고압 세척",
    description: "친환경 세정제와 고압 스팀으로 곰팡이, 세균, 먼지를 완전히 제거합니다.",
  },
  {
    number: "04",
    title: "조립 및 테스트",
    description: "분해한 부품을 재조립하고 정상 작동 여부를 확인 후 청소를 완료합니다.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">청소 과정</p>
          <h2 className="text-3xl font-bold text-[#191F28]">4단계로 확실하게</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 h-px bg-gray-200 z-0" style={{ left: "3rem", width: "calc(100% - 1.5rem)" }} />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                  <span className="text-[#3182F6] font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="font-bold text-[#191F28] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
