'use client';
import Link from 'next/link';
import StepProgress from '@/components/StepProgress';

export default function CareerHome() {
  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">청소년 진로체험</h1>
      <p className="text-gray-600 text-sm">시작을 누르면 AI 상담사가 안내합니다.</p>
      <StepProgress />
      <Link href="/career/consultant" className="px-4 py-2 rounded bg-black text-white inline-block">시작</Link>
    </div>
  );
}