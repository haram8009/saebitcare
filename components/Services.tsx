import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">서비스 안내</p>
          <h2 className="text-3xl font-bold text-[#191F28]">모든 에어컨 종류를<br />청소합니다</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {siteConfig.services.map((service) => (
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
                  <p className="text-sm font-medium text-[#374151]">
                    {service.duration ?? "별도 협의"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B7280]">가격</p>
                  <p className="text-base font-bold text-[#3182F6]">
                    {service.price !== null
                      ? `${service.price.toLocaleString()}원~`
                      : "별도 견적"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
