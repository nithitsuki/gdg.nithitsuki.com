'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

interface Profile {
  full_name: string | null
  username: string | null
}

interface BlogPost {
  id: string
  title: string
  content: string
  created_at: string
  user_id: string
  profiles: Profile | null
}

interface BlogPostsClientProps {
  initialPosts: BlogPost[]
  totalCount: number
}

// Helper functions moved inside the client component
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

export function BlogPostsClient({ 
  initialPosts, 
  totalCount
}: BlogPostsClientProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(totalCount > 2)

  const loadMorePosts = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    const supabase = createClient()
    
    const { data: newPosts, error } = await supabase
      .from('posts')
      .select(`
        *,
        profiles (
          full_name,
          username
        )
      `)
      .order('created_at', { ascending: false })
      .range(posts.length, posts.length + 5) // Load 6 more posts

    if (!error && newPosts) {
      setPosts(prev => [...prev, ...newPosts])
      setHasMore(posts.length + newPosts.length < totalCount)
    }

    setLoading(false)
  }

  const getAuthorName = (profile: Profile | null): string => {
    if (!profile) return 'Anonymous'
    return profile.full_name || profile.username || 'Anonymous'
  }

  const getAuthorInitials = (profile: Profile | null): string => {
    const name = getAuthorName(profile)
    if (name === 'Anonymous') return 'A'
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-10">
        {/* Feature Post (First Post) */}
        {posts.length > 0 && (
          <div className="relative">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 rounded-l-none">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                    {getAuthorInitials(posts[0].profiles)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardDescription className="font-medium text-gray-900 text-sm">
                      {getAuthorName(posts[0].profiles)}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(posts[0].created_at)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatReadTime(posts[0].content)}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Link href={`/blog/${posts[0].id}`}>
                  <div className="cursor-pointer group">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {posts[0].title}
                    </CardTitle>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {getExcerpt(posts[0].content, 200)}
                    </p>
                  </div>
                </Link>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Link href={`/blog/${posts[0].id}`}>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer">
                    <span className="mr-2">Continue reading</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        {posts.length > 1 && (
          <div className="space-y-6">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">More Stories</h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {posts.slice(1).map((post) => (
                <Card key={post.id} className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 group h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-xs flex-shrink-0">
                        {getAuthorInitials(post.profiles)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardDescription className="font-medium text-gray-900 text-sm truncate">
                          {getAuthorName(post.profiles)}
                        </CardDescription>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.created_at)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{formatReadTime(post.content)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 flex-grow">
                    <Link href={`/blog/${post.id}`}>
                      <div className="cursor-pointer">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {getExcerpt(post.content, 120)}
                        </p>
                      </div>
                    </Link>
                  </CardContent>
                  
                  <CardFooter className="pt-3">
                    <Link href={`/blog/${post.id}`}>
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors cursor-pointer">
                        <span className="mr-1">Read more</span>
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center pt-6">
            <Button
              onClick={loadMorePosts}
              disabled={loading}
              variant="outline"
              size="lg"
              className="cursor-pointer px-8 py-3 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              {loading ? 'Loading...' : 'Load More Stories'}
            </Button>
          </div>
        )}

        {!hasMore && posts.length > 0 && (
          <div className="text-center pt-6">
            <p className="text-gray-500 text-sm">
              You've reached the end of our stories
            </p>
          </div>
        )}
      </div>
    </div>
  )
}