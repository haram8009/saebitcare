// 사이트 전체에서 참조하는 비즈니스 설정 파일
// 전화번호·지역·가격 등을 수정할 때 이 파일 하나만 변경하면 됩니다

export const siteConfig = {
  name: "새빛케어",
  url: "https://saebitcare.com",
  phone: "010-0000-0000",
  email: "info@saebitcare.kr",
  representative: "홍길동",
  businessRegNo: "000-00-00000",

  // 서비스 지역 (실제 지역으로 교체하세요)
  areas: ["강남구", "서초구", "송파구", "강동구", "성동구", "광진구", "마포구", "용산구"],

  // 영업시간
  hours: { open: "09:00", close: "18:00" },

  // 외부 링크 (실제 URL로 교체하세요)
  googleFormUrl: "https://forms.gle/YOUR_FORM_ID",
  kakaoUrl: "https://open.kakao.com/YOUR_KAKAO_LINK",

  // 서비스 가격 (Schema.org & Services 컴포넌트에서 참조)
  services: [
    { name: "벽걸이형", koreanName: "벽걸이형 에어컨 청소", price: 80000, duration: "약 1시간" },
    { name: "스탠드형", koreanName: "스탠드형 에어컨 청소", price: 120000, duration: "약 1.5시간" },
    { name: "천장형", koreanName: "천장형 에어컨 청소", price: 150000, duration: "약 2시간" },
  ],
} as const;
