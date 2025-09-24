'use client';
import { usePathname } from 'next/navigation';
const steps = [
  { slug: '/career', label: '시작' },
  { slug: '/career/consultant', label: '상담사' },
  { slug: '/career/greeting', label: '인사' },
  { slug: '/career/card-apply', label: '카드' },
  { slug: '/career/analysis', label: '분석' },
  { slug: '/career/experience', label: '체험' },
  { slug: '/career/result', label: '결과' },
];
export default function StepProgress() {
  const pathname = usePathname();
  return (
    <ol className="flex flex-wrap gap-2 text-xs">
      {steps.map((s, i) => {
        const active = pathname === s.slug;
        return (
          <li key={s.slug} className={`px-2 py-1 rounded border ${active ? 'bg-black text-white' : 'bg-white'}`}>
            {i + 1}. {s.label}
          </li>
        );
      })}
    </ol>
  );
}