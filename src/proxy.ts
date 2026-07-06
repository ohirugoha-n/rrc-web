import { type NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  const pathname = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  if (pathname === '/favicon.ico' || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // localhostで開発中のページに飛ばせるようにすると便利(ここではroot)
  if (host.startsWith('localhost')) {
    url.pathname = `/root${pathname}`;
    return NextResponse.rewrite(url);
  }

  const subdomain = host.split('.')[0];
  if (subdomain === 'rrcsangi') {
    url.pathname = `/root${pathname}`;
    return NextResponse.rewrite(url);
  }

  url.pathname = `/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}
