// src/app/actions.ts
'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Your signOut function can remain as is
export async function signOut() {
  // ...
}

// --- ADD THIS NEW SIGN-IN ACTION ---
export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  // Use the universal server client from the latest pattern
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // On failure, DO NOT redirect. Instead, return an error object.
    // Our client-side form will catch this and display the message.
    return {
      error: error.message,
    }
  }

  // On success, the server will set the auth cookie and then redirect.
  // This redirect is what solves the navbar refresh issue.
  return redirect('/')
}