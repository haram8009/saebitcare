"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    id: "wall",
    label: "벽걸이형",
    description: "팬·열교환기 내부 곰팡이 제거",
    before: "/gallery/wall-before.jpg",
    after: "/gallery/wall-after.jpg",
  },
  {
    id: "stand",
    label: "스탠드형",
    description: "드레인팬·팬 슬라임 완전 제거",
    before: "/gallery/stand-before.jpg",
    after: "/gallery/stand-after.jpg",
  },
  {
    id: "ceiling",
    label: "천장형",
    description: "4방향 카세트 내부 세척",
    before: "/gallery/ceiling-before.jpg",
    after: "/gallery/ceiling-after.jpg",
  },
];

function ImageSlot({ src, label }: { src: string; label: "청소 전" | "청소 후" }) {
  const isBefore = label === "청소 전";
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        onError={(e) => {
          // 이미지 없으면 placeholder 표시
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {/* 이미지 없을 때 placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 text-sm gap-2">
        <span className="text-3xl">{isBefore ? "📷" : "✨"}</span>
        <span className="font-medium">{label} 사진</span>
        <span className="text-xs text-gray-300">준비 중</span>
      </div>
      <div
        className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
          isBefore
            ? "bg-gray-800/70 text-white"
            : "bg-[#3182F6]/90 text-white"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: (typeof items)[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* 모바일: 토글 방식 */}
      <div className="md:hidden">
        <ImageSlot
          src={showAfter ? item.after : item.before}
          label={showAfter ? "청소 후" : "청소 전"}
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-bold text-[#191F28]">{item.label}</p>
              <p className="text-xs text-[#6B7280] mt-0.5">{item.description}</p>
            </div>
            <button
              onClick={() => setShowAfter((v) => !v)}
              className="flex items-center gap-1.5 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#374151] text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              {showAfter ? "← 청소 전" : "청소 후 →"}
            </button>
          </div>
        </div>
      </div>

      {/* 데스크탑: 좌우 나란히 */}
      <div className="hidden md:block p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <ImageSlot src={item.before} label="청소 전" />
          <ImageSlot src={item.after} label="청소 후" />
        </div>
        <div>
          <p className="font-bold text-[#191F28]">{item.label}</p>
          <p className="text-sm text-[#6B7280] mt-0.5">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#3182F6] font-semibold text-sm mb-2">청소 전후 사진</p>
          <h2 className="text-3xl font-bold text-[#191F28]">직접 찍은<br />실제 청소 결과입니다</h2>
          <p className="text-[#6B7280] mt-3 text-base">
            필터링 없이 실제 작업 현장을 그대로 보여드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        <p className="text-xs text-[#6B7280] mt-6 text-center">
          * 사진은 실제 고객 동의 후 촬영한 사진입니다.
        </p>
      </div>
    </section>
  );
}
