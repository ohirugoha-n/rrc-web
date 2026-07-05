import { type NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  const pathname = req.nextUrl.pathname;

  const url = req.nextUrl.clone();

  // localhostで開発中のページに飛ばせるようにすると便利(ここではroot)
  if (host.startsWith('localhost')) {
    url.pathname = `/root${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (host.startsWith('rrcsangi.')) {
    url.pathname = `/root${pathname}`;
    return NextResponse.rewrite(url);
  }
  if (host.startsWith('sub.rrcsangi.')) {
    url.pathname = `/sub${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
