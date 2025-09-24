import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "청소년 진로체험 스튜디오",
  description: "학교/지자체용 진로·체험 통합 플랫폼"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="border-b bg-white">
          <div className="container py-4 flex items-center justify-between">
            <div className="font-bold text-lg">청소년 진로체험 스튜디오</div>
            <nav className="text-sm space-x-4">
              <a href="/" className="hover:underline">홈</a>
              <a href="/report" className="hover:underline">리포트</a>
              <a href="/booking" className="hover:underline">예약</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t mt-16">
          <div className="container py-6 text-sm text-slate-500">
            © 2025 청소년 진로체험 스튜디오
          </div>
        </footer>
      </body>
    </html>
  );
}