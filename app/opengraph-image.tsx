import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} | 에어컨 청소 전문`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const areasStr = siteConfig.areas.slice(0, 4).join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 50%, #EFF6FF 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 배경 장식 원 */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.06)",
          }}
        />

        {/* 메인 카드 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "56px 80px",
            background: "white",
            borderRadius: 24,
            boxShadow: "0 4px 40px rgba(59, 130, 246, 0.12)",
            maxWidth: 880,
            width: "80%",
          }}
        >
          {/* 브랜드명 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                color: "white",
              }}
            >
              ❄
            </div>
            <span style={{ fontSize: 48, fontWeight: 800, color: "#1E3A5F", letterSpacing: -1 }}>
              {siteConfig.name}
            </span>
          </div>

          {/* 슬로건 */}
          <div style={{ fontSize: 26, color: "#374151", fontWeight: 600, textAlign: "center" }}>
            에어컨 분해 청소 전문업체
          </div>

          {/* 지역 뱃지들 */}
          <div style={{ display: "flex", gap: 10 }}>
            {siteConfig.areas.slice(0, 5).map((area) => (
              <div
                key={area}
                style={{
                  padding: "8px 16px",
                  background: "#EFF6FF",
                  color: "#1D4ED8",
                  borderRadius: 999,
                  fontSize: 18,
                  fontWeight: 600,
                  border: "1.5px solid #BFDBFE",
                }}
              >
                {area}
              </div>
            ))}
          </div>

          {/* 가격 정보 */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 8,
            }}
          >
            {siteConfig.services.filter((s) => s.price !== null).map((s) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px 20px",
                  background: "#F8FAFF",
                  borderRadius: 12,
                  border: "1px solid #E0EAFF",
                }}
              >
                <span style={{ fontSize: 15, color: "#6B7280" }}>{s.name}</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#1E3A5F" }}>
                  {s.price!.toLocaleString()}원~
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 URL */}
        <div style={{ marginTop: 24, fontSize: 18, color: "#6B7280" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
