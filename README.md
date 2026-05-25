# 새빛케어 랜딩페이지

에어컨 청소 전문 서비스 새빛케어의 랜딩페이지입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Font**: Pretendard (CDN)

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 비즈니스 설정 변경

전화번호, 이메일, 사업자번호, 외부 링크 등 모든 비즈니스 정보는 **한 파일**에서 관리합니다.

```
config/site.ts
```

이 파일만 수정하면 사이트 전체에 반영됩니다.

## 프로젝트 구조

```
app/
├── layout.tsx         # 루트 레이아웃, 메타데이터, Schema.org
├── page.tsx           # 메인 페이지
├── not-found.tsx      # 404 페이지
├── robots.ts          # robots.txt 생성
└── sitemap.ts         # sitemap.xml 생성

components/
├── Navbar.tsx
├── Hero.tsx
├── Services.tsx
├── Process.tsx
├── WhyUs.tsx
├── Testimonials.tsx
├── ServiceArea.tsx
├── FAQ.tsx
├── ContactSection.tsx
└── Footer.tsx

config/
└── site.ts            # 비즈니스 설정 단일 출처
```

## 빌드 및 배포

```bash
npm run build
npm run start
```

Vercel 배포 시 main 브랜치 push만으로 자동 배포됩니다.
