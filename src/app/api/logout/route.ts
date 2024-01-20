import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  cookies().delete('token')
  redirect('/')
}