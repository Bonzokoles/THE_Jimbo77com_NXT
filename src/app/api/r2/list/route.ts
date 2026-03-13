import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET() {
  const { env } = await getCloudflareContext();
  const r2 = (env as any).MY_R2;
  if (!r2) return new Response("R2 not configured", { status: 503 });

  const list = await r2.list();
  const files = list.objects.map((obj: { key: string; size: number; uploaded: string }) => ({
    key: obj.key,
    size: obj.size,
    uploaded: obj.uploaded,
    url: `/api/r2/${obj.key}`,
  }));

  return new Response(JSON.stringify(files), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
}

// TEST: fetch("/api/r2/list").then(res => res.json()).then(files => console.log(files));
