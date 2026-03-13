import type { NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { env } = await getCloudflareContext();
  const r2 = (env as any).MY_R2;
  if (!r2) return new Response("R2 not configured", { status: 503 });

  const { key } = await params;
  const object = await r2.get(key);
  if (!object) return new Response("Not found", { status: 404 });

  const ext = key.split(".").pop()?.toLowerCase() ?? "";
  const mimeMap: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    svg: "image/svg+xml",
    gif: "image/gif",
    json: "application/json",
    pdf: "application/pdf",
  };

  // Logowanie operacji download do audytu
  console.log(`[R2 AUDIT] download | key=${key} | time=${new Date().toISOString()}`);

  return new Response(object.body as ReadableStream, {
    headers: {
      "Content-Type": mimeMap[ext] ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, stale-while-revalidate=86400, immutable",
    },
  });
}

// PRZYKŁAD: loader dla obrazów z R2
// <Suspense fallback={<Spinner />}><img src="/api/r2/blog/ai-agents.webp" alt="AI Agents" /></Suspense>
