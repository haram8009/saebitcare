// TODO: 아래 areas 배열을 실제 서비스 지역으로 수정하세요
const areas = [
  "강남구", "서초구", "송파구", "강동구",
  "성동구", "광진구", "마포구", "용산구",
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">서비스 지역</p>
          <h2 className="text-3xl font-bold text-[#191F28]">담당 지역 전문으로<br />더 빠르고 책임감 있게</h2>
          <p className="text-[#6B7280] mt-3 text-base">
            넓은 지역보다 담당 지역에 집중해 당일 방문과 빠른 AS가 가능합니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white border border-gray-200 text-[#374151] font-medium text-sm px-4 py-2 rounded-xl shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>

        <p className="text-sm text-[#6B7280]">
          위 지역 외에도 인근 지역은 문의 시 안내해드립니다.{" "}
          <a href="tel:010-0000-0000" className="text-[#3182F6] font-semibold hover:underline">
            전화 문의 →
          </a>
        </p>
      </div>
    </section>
  );
}
