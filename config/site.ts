// 사이트 전체에서 참조하는 비즈니스 설정 파일
// 전화번호·지역·가격 등을 수정할 때 이 파일 하나만 변경하면 됩니다

export const siteConfig = {
  name: "새빛케어",
  url: "https://saebitcare.com",
  phone: "010-7554-7114",
  email: "contact@saebitcare.com",
  representative: "김효경",
  businessRegNo: "466-29-01893",
  address: "경기도 고양시 덕양구 내유길 153 (내유동)",

  // 서비스 지역 (실제 지역으로 교체하세요)
  areas: ["서울", "경기", "은평", "고양", "덕양", "일산", "파주"],

  // 영업시간
  hours: { open: "09:00", close: "24:00" },

  warrantyDays: 14,
  gaId: "G-2P1VY2YC6J",
  features: ["친환경 세정제", "당일 예약 가능", "사업자등록 업체"],
  seoKeywords: [
    "에어컨청소", "에어컨 분해청소", "에어컨 곰팡이",
    "벽걸이 에어컨청소", "스탠드 에어컨청소", "천장형 에어컨청소",
    "에어컨 냄새제거",
  ],

  // 외부 링크
  googleFormUrl: "https://forms.gle/gjMqgsWXMEnHGaJt9",
  kakaoUrl: "https://open.kakao.com/me/saebitcare",

  // 서비스 목록 (Services 컴포넌트 & Schema.org에서 참조 / price: null이면 별도 견적)
  services: [
    {
      name: "벽걸이형",
      koreanName: "벽걸이형 에어컨 청소",
      description: "가정에서 가장 많이 사용하는 타입. 팬과 열교환기를 완전 분해 후 세척합니다.",
      icon: "🌀",
      price: 60000,
      duration: "약 1.5시간",
    },
    {
      name: "스탠드형",
      koreanName: "스탠드형 에어컨 청소",
      description: "대용량 에어컨으로 내부 구조가 복잡합니다. 꼼꼼한 분해 세척으로 성능을 회복합니다.",
      icon: "❄️",
      price: 120000,
      duration: "약 3시간",
    },
    {
      name: "천장형",
      koreanName: "천장형 에어컨 청소",
      description: "사무실·매장에 설치된 4방향 카세트 타입. 전문 장비로 안전하게 청소합니다.",
      icon: "🏢",
      price: 100000,
      duration: "약 2시간",
    },
    {
      name: "시스템에어컨",
      koreanName: "시스템에어컨 청소",
      description: "실내기 여러 대를 하나의 실외기로 운용하는 시스템. 견적 후 진행합니다.",
      icon: "⚙️",
      price: null,
      duration: null,
    },
  ],
} as const;
