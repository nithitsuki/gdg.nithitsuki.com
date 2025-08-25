// src/app/sign-out/page.tsx

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// This is a Server Component, so we can make it async
export default async function SignOutPage() {
  const supabase = await createClient()

  // 1. Call the Supabase signOut method
  // This will clear the user's session cookie
  await supabase.auth.signOut()

  // 2. Redirect the user to the homepage
  // The user is now logged out
  return redirect('/')
}