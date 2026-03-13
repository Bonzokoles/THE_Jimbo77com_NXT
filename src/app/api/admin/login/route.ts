import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// Must match ADMIN_SESSION_TOKEN in src/middleware.ts
const ADMIN_SESSION_TOKEN = 'jimbo77-r2-admin-session-v1';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { password?: string };
    const { password } = body;

    if (!password) {
      return NextResponse.json({ error: 'Hasło jest wymagane' }, { status: 400 });
    }

    // Get ADMIN_KEY from Cloudflare environment (set in wrangler.toml [vars])
    let adminKey = 'jimbo77-admin-2025';
    try {
      const { env } = await getCloudflareContext();
      const cfEnv = env as Record<string, string | undefined>;
      if (cfEnv.ADMIN_KEY) adminKey = cfEnv.ADMIN_KEY;
    } catch {
      // Running locally - use fallback
    }

    if (password !== adminKey) {
      return NextResponse.json({ error: 'Nieprawidłowe hasło' }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set('admin_session', ADMIN_SESSION_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    return response;
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}