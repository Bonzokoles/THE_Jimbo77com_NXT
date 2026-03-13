import type { NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: NextRequest) {
  // Autoryzacja: wymagaj nagłówka x-admin-key lub env ADMIN_KEY
  const { env } = await getCloudflareContext();
  const adminKey = (env as any).ADMIN_KEY || process.env.ADMIN_KEY;
  if (adminKey) {
    const provided = request.headers.get("x-admin-key");
    if (provided !== adminKey) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  const r2 = (env as any).MY_R2;
  if (!r2) return new Response("R2 not configured", { status: 503 });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file) return new Response("No file provided", { status: 400 });

  // Walidacja rozszerzenia
  const allowedExts = ["jpg", "jpeg", "png", "webp", "svg", "gif", "json", "pdf", "mp4"];
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExts.includes(ext)) {
    return new Response(`File type not allowed: .${ext}`, { status: 400 });
  }

  // Walidacja rozmiaru
  if (file.size > 10 * 1024 * 1024) {
    return new Response("File too large (max 10MB)", { status: 400 });
  }

  await r2.put(file.name, file.stream(), {
    httpMetadata: { contentType: file.type },
  });

  // Logowanie operacji upload do audytu
  console.log(`[R2 AUDIT] upload | file=${file.name} | size=${file.size} | time=${new Date().toISOString()}`);

  return new Response(
    JSON.stringify({ key: file.name, url: `/api/r2/${file.name}` }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

// TEST: przykładowy upload przez fetch
// fetch("/api/r2/upload", { method: "POST", body: formData })
// formData.append("file", fileInput.files[0]);
