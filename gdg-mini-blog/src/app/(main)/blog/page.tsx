// src/app/blog/page.tsx

import { createClient } from '@/lib/supabase/server'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle, BookOpen, Calendar, Clock, User } from 'lucide-react'
import { BlogPostsClient } from './BlogPostsClient'

export const revalidate = 60

// Helper functions (these are great, no changes needed)
function formatReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return `${readTime} min read`
}

function getExcerpt(content: string, maxLength: number = 150): string {
  const stripped = content.replace(/[#*`_~]/g, '').trim()
  if (stripped.length <= maxLength) return stripped
  return stripped.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + '...'
}

export default async function BlogPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Fetch initial 2 posts with author profiles
  const { data: initialPosts, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (
        full_name,
        username
      )
    `)
    .order('created_at', { ascending: false })
    .range(0, 1) // Get first 2 posts (0-indexed)

  // Get total count for pagination
  const { count: totalCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })

  if (error) {
    return (
      <div className="container max-w-screen-2xl px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-destructive">Error loading posts. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }

  if (!initialPosts || initialPosts.length === 0) {
    return (
      <div className="container max-w-screen-2xl px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-4 bg-muted rounded-full">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">No posts yet</h2>
            <p className="text-muted-foreground max-w-md">
              Be the first to share your knowledge with the community.
            </p>
          </div>
          {user && (
            <Link href="/new-post">
              <Button className="cursor-pointer">
                <PlusCircle className="mr-2 h-4 w-4" />
                Write your first post
              </Button>
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              GDG Community Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover insights, tutorials, and experiences from developers around the world
            </p>
            {user && (
              <div className="pt-4">
                <Link href="/new-post">
                  <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-8 py-3">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Write a Story
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Posts Section with Client Component for Pagination */}
      <BlogPostsClient 
        initialPosts={initialPosts} 
        totalCount={totalCount || 0}
      />
    </div>
  )
}
