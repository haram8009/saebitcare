import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "새빛케어 — 전문 에어컨 청소",
  description: "새빛케어의 전문 에어컨 분해 청소 서비스. 냄새와 세균을 완벽히 제거합니다. 벽걸이, 스탠드, 천장형, 시스템에어컨 전문.",
  openGraph: {
    title: "새빛케어 — 전문 에어컨 청소",
    description: "새빛케어의 전문 에어컨 분해 청소 서비스",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
