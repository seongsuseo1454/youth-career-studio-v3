'use client';
import StepProgress from '@/components/StepProgress';
import StepNav from '@/components/StepNav';
import { useCareerStore } from '../_store';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const exp = useCareerStore((s) => s.experience);
  const setResult = useCareerStore((s) => s.setResult);
  const [qr, setQr] = useState<string>('');
  const [share, setShare] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/career/result', { method: 'POST', body: JSON.stringify({ url: exp?.artifactUrl }) });
      const data = await res.json();
      setQr(data.qrUrl); setShare(data.shareUrl);
      setResult({ qrUrl: data.qrUrl, shareUrl: data.shareUrl });
    })();
  }, [exp?.artifactUrl, setResult]);

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold">결과물 제공</h2>
      <StepProgress />
      {qr ? (
        <div className="space-y-2">
          <div className="text-sm text-gray-600">QR로 결과물을 전달하세요.</div>
          <img src={qr} alt="QR" className="w-48 h-48 border rounded"/>
          <div className="text-sm">공유 링크: <a className="underline break-all" href={share} target="_blank">{share}</a></div>
        </div>
      ) : (
        <div className="p-3 border rounded text-sm">발급 중…</div>
      )}
      <StepNav prev="/career/experience" next="/career" />
    </div>
  );
}