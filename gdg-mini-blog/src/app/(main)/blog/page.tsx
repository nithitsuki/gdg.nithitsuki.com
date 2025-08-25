// src/app/blog/page.tsx

import { createClient } from '@/lib/supabase/server'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle, BookOpen, Calendar, Clock, User } from 'lucide-react'

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
  // --- CHANGE 1: Removed 'await' ---
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Fetch posts with author profiles
  const { data: posts, error } = await supabase
    .from('posts')
    // --- THIS IS THE ONLY LINE THAT NEEDS TO BE FIXED ---
    .select(`
      *,
      profiles (
        full_name,
        username
      )
    `)
    .order('created_at', { ascending: false })
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

  if (!posts || posts.length === 0) {
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

      {/* Posts Section */}
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {posts.map((post, index) => {
            // --- This logic will now work correctly ---
            const author = post.profiles
            const authorName = author?.full_name || author?.username || 'Anonymous'
            const isFeaturePost = index === 0 // Make first post larger
            
            return (
              <article 
                key={post.id} 
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                  isFeaturePost ? 'border-l-4 border-blue-500' : ''
                }`}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className={`p-8 ${isFeaturePost ? 'pb-6' : 'pb-6'}`}>
                    {/* Author & Meta Info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="font-medium text-gray-900 truncate">
                            {authorName}
                          </span>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{formatReadTime(post.content)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className={`font-bold text-gray-900 leading-tight mb-4 hover:text-blue-600 transition-colors ${
                      isFeaturePost ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                    }`}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className={`text-gray-600 leading-relaxed ${
                      isFeaturePost ? 'text-lg mb-6' : 'text-base mb-4'
                    }`}>
                      {getExcerpt(post.content, isFeaturePost ? 200 : 150)}
                    </p>

                    {/* Tags or Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Technology
                        </span>
                      </div>
                      <span className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Want to see more stories?</p>
          <Button variant="outline" size="lg" className="cursor-pointer">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}