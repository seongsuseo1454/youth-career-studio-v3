'use client';
import { useState } from 'react';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';

export default function CardApplyPage() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [contact, setContact] = useState('');
  const setApplicant = useCareerStore((s) => s.setApplicant);

  async function submit() {
    await fetch('/api/career/card', { method: 'POST', body: JSON.stringify({ name, school, grade, contact }) });
    setApplicant({ name, school, grade, contact });
  }

  const ready = !!name;

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">진로상담카드 신청</h2>
      <StepProgress />
      <div className="grid gap-2">
        <input className="border rounded px-3 py-2" placeholder="이름(필수)" value={name} onChange={e=>setName(e.target.value)} required/>
        <input className="border rounded px-3 py-2" placeholder="학교" value={school} onChange={e=>setSchool(e.target.value)} />
        <input className="border rounded px-3 py-2" placeholder="학년/반" value={grade} onChange={e=>setGrade(e.target.value)} />
        <input className="border rounded px-3 py-2" placeholder="연락처(선택)" value={contact} onChange={e=>setContact(e.target.value)} />
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={submit} disabled={!ready}>신청</button>
      </div>
      <StepNav prev="/career/greeting" next="/career/analysis" disableNext={!ready}/>
    </div>
  );
}