// src/app/page.tsx

import { createClient } from '@/lib/supabase/server'
import LoggedInDashboard from '@/components/home/LoggedInDashboard'
import LandingPage from '@/components/home/LandingPage'

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Define a variable for the profile, which might be null
  let userProfile = null;

  if (user) {
    // If the user is logged in, fetch their profile from the 'profiles' table
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name, username') // We only need these two fields
      .eq('id', user.id) // Match the profile to the logged-in user
      .single() // We expect only one result

    userProfile = profile;
  }

  return (
    <div className="flex-1">
      {user ? (
        // Pass the entire profile object to the dashboard
        <LoggedInDashboard profile={userProfile} />
      ) : (
        <LandingPage />
      )}
    </div>
  )
}