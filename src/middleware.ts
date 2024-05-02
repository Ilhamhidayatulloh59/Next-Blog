import { NextResponse, NextRequest } from 'next/server';

const protectedPages = ['/profile', '/blog/create'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  if (protectedPages.includes(request.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
}