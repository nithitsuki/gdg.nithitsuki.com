
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Edit, BookOpen, Users, TrendingUp, Heart, Star } from 'lucide-react'

// --- 1. DEFINE THE NEW PROPS INTERFACE ---
// The profile can be null if it hasn't been created yet
interface Profile {
  full_name: string | null;
  username: string | null;
}

interface LoggedInDashboardProps {
  profile: Profile | null;
}

export default function LoggedInDashboard({ profile }: LoggedInDashboardProps) {
  // --- 2. CREATE A DYNAMIC GREETING ---
  // Prioritize full_name, fall back to username, then to a generic greeting.
  const greetingName = profile?.full_name?.split(' ').at(0) || profile?.username || 'Creator';

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section for Logged In Users */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-12 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
        <div className="relative z-10 text-center space-y-6"> {/* Adjusted spacing */}
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div>
            {/* --- 3. USE THE DYNAMIC GREETING --- */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Welcome back, {greetingName}!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to share your knowledge with the GDG community? Your expertise matters and helps developers worldwide.
            </p>
            {/* --- 4. (BONUS) DISPLAY THE USERNAME --- */}
            {profile?.username && (
              <p className="text-md text-gray-500 mt-2">
                Your public profile is @{profile.username}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4"> {/* Added padding top */}
            <Link href="/new-post">
              <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-4 font-semibold">
                <Edit className="mr-2 h-5 w-5" />
                Write New Post
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="cursor-pointer border-gray-300 hover:bg-gray-50 px-8 py-4 font-semibold">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Community Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-3">Growing Community</h3>
            <p className="text-gray-600 leading-relaxed">Join thousands of developers sharing knowledge and building the future together</p>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-3">Knowledge Sharing</h3>
            <p className="text-gray-600 leading-relaxed">Learn from others and teach what you know. Every contribution makes a difference</p>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-3">Quality Content</h3>
            <p className="text-gray-600 leading-relaxed">Curated by experts and reviewed by the community for maximum impact</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
