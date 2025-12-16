export async function GET() {
  const payload = {
    service: "backend",
    status: "ok",
    message: "Backend API responding from /api/backend",
    time: new Date().toISOString(),
  };

  return Response.json(payload);
}
