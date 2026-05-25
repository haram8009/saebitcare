const reviews = [
  {
    name: "김○○",
    region: "서울 강남구",
    type: "벽걸이형",
    rating: 5,
    content: "3년 넘게 쓴 에어컨인데 냄새가 심해서 신청했어요. 분해하니까 내부에 곰팡이가 가득.. 청소 후엔 완전히 새 에어컨 같아졌어요.",
    date: "2024.07",
  },
  {
    name: "박○○",
    region: "경기 성남시",
    type: "스탠드형",
    rating: 5,
    content: "시간 약속도 칼같이 지키시고 작업도 깔끔하게 해주셨어요. 청소 전후 사진도 찍어주셔서 확실히 달라진 걸 볼 수 있었습니다.",
    date: "2024.08",
  },
  {
    name: "이○○",
    region: "서울 송파구",
    type: "천장형 2대",
    rating: 5,
    content: "사무실 천장형 에어컨 2대 청소했는데 직원들 반응이 완전히 달라졌어요. 냄새도 없고 바람도 훨씬 시원하게 잘 나와요.",
    date: "2024.06",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">고객 후기</p>
          <h2 className="text-3xl font-bold text-[#191F28]">실제 이용하신 분들의<br />솔직한 후기</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review.name} className="bg-[#F9FAFB] rounded-2xl p-6">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              <p className="text-sm text-[#374151] leading-relaxed mb-5">&ldquo;{review.content}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#191F28]">{review.name}</p>
                  <p className="text-xs text-[#6B7280]">{review.region} · {review.type}</p>
                </div>
                <p className="text-xs text-[#6B7280]">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
