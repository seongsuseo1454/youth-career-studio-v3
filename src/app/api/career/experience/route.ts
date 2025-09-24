export async function POST(req: Request) {
  const { title } = await req.json().catch(()=>({ title: '체험' }));
  // 산출물(모의): 공개 이미지/문서 링크 대체
  const artifactUrl = `https://example.com/artifacts/${encodeURIComponent(title)}.pdf`;
  return Response.json({ artifactUrl }, { status: 200 });
}
