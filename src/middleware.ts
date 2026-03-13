import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Session token - must match the value set in /api/admin/login/route.ts
const ADMIN_SESSION_TOKEN = 'jimbo77-r2-admin-session-v1';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip auth for the login page itself
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get('admin_session');
  if (!sessionCookie || sessionCookie.value !== ADMIN_SESSION_TOKEN) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};