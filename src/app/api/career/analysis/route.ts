export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const name = body?.applicant?.name
 || '학생';
  return Response.json({
    summary: `요약: ${name}님은 탐구/표현 성향이 강합니다.\n추천: 콘텐츠 제작, 디자인, 과학 탐구 진로 트랙.`,
    recommendedPaths: ['콘텐츠 크리에이터', 'UX 디자이너', '과학 커뮤니케이터'],
  }, { status: 200 });
}
