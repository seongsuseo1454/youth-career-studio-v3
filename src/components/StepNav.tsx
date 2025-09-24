'use client';
import Link from 'next/link';

export default function StepNav({ prev, next, disableNext }: { prev?: string; next?: string; disableNext?: boolean }) {
  return (
    <div className="flex gap-2">
      {prev && <Link className="px-3 py-2 border rounded" href={prev}>이전</Link>}
      {next && (
        <Link
          className={`px-3 py-2 border rounded ${disableNext ? 'pointer-events-none opacity-40' : ''}`}
          href={disableNext ? '#' : next}
          aria-disabled={disableNext}
        >
          다음
        </Link>
      )}
    </div>
  );
}