import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ubah pathname menjadi huruf kecil
  const lowercasePathname = pathname.toLowerCase();

  // Jika pathname asli tidak sama dengan versi lowercase-nya,
  // lakukan redirect ke URL yang diubah.
  if (pathname !== lowercasePathname) {
    return NextResponse.redirect(new URL(lowercasePathname, request.url));
  }

  return NextResponse.next();
}