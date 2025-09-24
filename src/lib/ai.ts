// lib/ai.ts
export function buildImageUrl(prompt: string) {
  // 자체 프록시가 있으면 환경변수만 넣어서 사용
  const base = process.env.NEXT_PUBLIC_IMAGE_BASE;
  if (base) return `${base}?prompt=${encodeURIComponent(prompt)}`;

  // 데모/프리뷰용(바로 동작) — 나중에 위 프록시로 교체 가능
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
}