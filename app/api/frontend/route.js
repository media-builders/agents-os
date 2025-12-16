export async function GET() {
  const payload = {
    service: "frontend",
    status: "ok",
    message: "Frontend API responding from /api/frontend",
    time: new Date().toISOString(),
  };

  return Response.json(payload);
}
