'use client';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';

export default function ConsultantPage() {
  const mark = useCareerStore((s) => s.mark);
  // 진입 시 스텝 완료 표시
  mark('consultant', true);

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">AI 청소년 진로상담사</h2>
      <p className="text-sm text-gray-600">다음 단계로 이동하면 상담사 인사멘트를 생성합니다.</p>
      <StepProgress />
      <StepNav prev="/career" next="/career/greeting" />
    </div>
  );
}
