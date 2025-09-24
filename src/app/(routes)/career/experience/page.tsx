'use client';
import { useState } from 'react';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';

export default function ExperiencePage() {
  const [title, setTitle] = useState('웹툰 작가 체험');
  const [artifact, setArtifact] = useState<string | undefined>();
  const setExperience = useCareerStore((s) => s.setExperience);

  async function runExperience() {
    const res = await fetch('/api/career/experience', { method: 'POST', body: JSON.stringify({ title }) });
    const data = await res.json();
    setArtifact(data.artifactUrl);
    setExperience({ title, artifactUrl: data.artifactUrl });
  }

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">진로 직업 체험</h2>
      <StepProgress />
      <div className="grid gap-2">
        <input className="border rounded px-3 py-2" value={title} onChange={e=>setTitle(e.target.value)} />
        <button className="px-3 py-2 border rounded" onClick={runExperience}>체험 생성</button>
      </div>
      {artifact && <div className="p-3 border rounded bg-gray-50 text-sm">체험 산출물: <a className="underline" href={artifact} target="_blank">보기</a></div>}
      <StepNav prev="/career/analysis" next="/career/result" disableNext={!artifact}/>
    </div>
  );
}
