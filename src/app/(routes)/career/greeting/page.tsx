'use client';
import { useState } from 'react';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';

export default function GreetingPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>('');
  const setGreeting = useCareerStore((s) => s.setGreeting);

  async function generateGreeting() {
    setLoading(true);
    try {
      const res = await fetch('/api/career/greeting', { method: 'POST' });
      const data = await res.json();
      setMsg(data.message
 || '안녕하세요. 진로 여정을 함께해요!');
      setGreeting(data.message
);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">상담사 인사멘트</h2>
      <StepProgress />
      <button className="px-3 py-2 border rounded" onClick={generateGreeting} disabled={loading}>
        {loading ? '생성 중…' : '인사멘트 생성'}
      </button>
      {msg && <div className="p-3 border rounded bg-gray-50 text-sm">{msg}</div>}
      <StepNav prev="/career/consultant" next="/career/card-apply" disableNext={!msg} />
    </div>
  );
}
