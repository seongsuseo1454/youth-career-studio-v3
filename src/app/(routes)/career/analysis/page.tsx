'use client';
import { useState } from 'react';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';

export default function AnalysisPage() {
  const setAnalysis = useCareerStore((s) => s.setAnalysis);
  const applicant = useCareerStore((s) => s.applicant);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');

  async function runAnalysis() {
    setLoading(true);
    try {
      const res = await fetch('/api/career/analysis', { method: 'POST', body: JSON.stringify({ applicant }) });
      const data = await res.json();
      setSummary(data.summary);
      setAnalysis({ summary: data.summary, recommendedPaths: data.recommendedPaths || [] });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">진로상담 분석</h2>
      <StepProgress />
      <button className="px-3 py-2 border rounded" onClick={runAnalysis} disabled={loading || !applicant}>
        {loading ? '분석 중…' : '분석 실행'}
      </button>
      {summary && <div className="p-3 border rounded bg-gray-50 text-sm whitespace-pre-wrap">{summary}</div>}
      <StepNav prev="/career/card-apply" next="/career/experience" disableNext={!summary}/>
    </div>
  );
}
