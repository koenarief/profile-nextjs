'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function updateProfile(formData: FormData) {
  const token = cookies().get('token')?.value
  console.log([token, formData])
}

export async function postLogin(formData: FormData) {
  console.log(formData.get('email'))
  cookies().set('token', 'Delba')
  redirect('/profile')
}
