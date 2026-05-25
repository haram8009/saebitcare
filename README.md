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
├── Gallery.tsx        # 청소 전후 비교 갤러리 (토글/좌우 방식)
├── WhyUs.tsx
├── Testimonials.tsx
├── ServiceArea.tsx
├── FAQ.tsx
├── ContactSection.tsx
├── Footer.tsx
└── MobileCTA.tsx      # 모바일 전용 고정 하단 CTA 바

config/
└── site.ts            # 비즈니스 설정 단일 출처
```

## 갤러리 사진 추가

`public/gallery/` 폴더에 아래 파일명으로 사진을 넣으면 자동 반영됩니다.

```
public/gallery/
├── wall-before.jpg     # 벽걸이형 청소 전
├── wall-after.jpg      # 벽걸이형 청소 후
├── stand-before.jpg    # 스탠드형 청소 전
├── stand-after.jpg     # 스탠드형 청소 후
├── ceiling-before.jpg  # 천장형 청소 전
└── ceiling-after.jpg   # 천장형 청소 후
```

사진이 없으면 "사진 준비 중" placeholder가 자동으로 표시됩니다.

## 빌드 및 배포

```bash
npm run build
npm run start
```

Vercel 배포 시 main 브랜치 push만으로 자동 배포됩니다.
