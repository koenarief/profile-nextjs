'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { UserProfile } from './models'

export async function postRegister(formData: FormData) {
  const response = await fetch(process.env.BASE_API_URL + '/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email": formData.get('email'),
      "username": formData.get('username'),
      "password": formData.get('password'),
    })
  })
  if (response.ok) {
    redirect('/login')
  }
}

export async function postLogin(formData: FormData) {
  const response = await fetch(process.env.BASE_API_URL + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email": formData.get('email'),
      "username": formData.get('username'),
      "password": formData.get('password'),
    })
  })
  if (response.ok) {
    const json = await response.json()
    cookies().set('token', JSON.stringify(json))
    redirect('/profile')
  }
}

function getAccessToken() {
  const token = cookies().get('token')?.value
  const tokenJson = JSON.parse(token ?? '{}')
  return tokenJson.access_token
}

export async function getProfile(): Promise<UserProfile> {
  const response = await fetch(process.env.BASE_API_URL + '/api/getProfile', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-access-token': getAccessToken() },
  })
  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
  }
  const json = await response.json()
  return json as UserProfile
}

export async function createProfile(formData: FormData) {
  const response = await fetch(process.env.BASE_API_URL + '/api/createProfile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-access-token': getAccessToken() },
    body: JSON.stringify({
      name: formData.get("name"),
      birthday: formData.get("birthday"),
      height: parseInt(formData.get("height") as string),
      weight: parseInt(formData.get("weight") as string),
      interests: [
        "sport", "music"
      ]
    })
  })
  console.log(response.json())
}

export async function updateProfile(formData: FormData) {

  const rawFormData = Object.fromEntries(formData.entries())
  const body = {
    ...rawFormData,
    height: parseInt(rawFormData.height as string),
    weight: parseInt(rawFormData.weight as string),
    interests: ["sport", "music"]
  }
  console.log(body)

  const response = await fetch(process.env.BASE_API_URL + '/api/updateProfile', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'x-access-token': getAccessToken() },
    body: JSON.stringify(body)
  })
  if (response.ok) {
    console.log(await response.json())
    redirect('/profile')
  }
}


