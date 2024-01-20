import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('Pathname: ' + request.nextUrl.pathname)

  if(!request.cookies.has('token')) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    return response
  }

}

export const config = {
  matcher: ['/profile', '/dashboard'],
}
