import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-5 text-center">
      <p className="text-[#3182F6] font-semibold text-sm mb-2">404</p>
      <h1 className="text-3xl font-bold text-[#191F28] mb-3">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-[#6B7280] text-sm mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        href="/"
        className="bg-[#3182F6] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#1a6fe0] transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
