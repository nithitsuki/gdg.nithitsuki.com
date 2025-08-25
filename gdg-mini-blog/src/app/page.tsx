import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Edit, BookOpen, Users, Zap, Globe } from 'lucide-react'

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex-1">
      {user ? (
        // LOGGED-IN VIEW
        <div className="container max-w-screen-2xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Welcome back
              </h1>
              <p className="text-xl text-primary font-semibold">
                {user.email}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to share your knowledge with the community? Start writing your next post or explore what others have shared.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/new-post">
                <Button size="lg" className="cursor-pointer">
                  <Edit className="mr-2 h-5 w-5" />
                  Create New Post
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // LOGGED-OUT VIEW
        <div className="container max-w-screen-2xl px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-8">
            <div className="space-y-8 lg:pl-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Share Knowledge with the{' '}
                  <span className="text-primary">GDG Community</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Join thousands of developers sharing insights, tutorials, and experiences. 
                  Build your network and grow together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="cursor-pointer">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button size="lg" variant="outline" className="cursor-pointer">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-col space-y-6">
              <div className="grid grid-cols-1 gap-6 max-w-lg">
                <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base">Community Driven</h3>
                    <p className="text-sm text-muted-foreground">Connect with developers worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base">Fast & Modern</h3>
                    <p className="text-sm text-muted-foreground">Built with the latest web technologies</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">Share your voice with the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}