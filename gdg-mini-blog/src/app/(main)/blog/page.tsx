import { createClient } from '@/lib/supabase/server'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle, BookOpen, Calendar, Clock } from 'lucide-react'

export const revalidate = 60

function formatReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return `${readTime} min read`
}

export default async function BlogPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
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
    <div className="container max-w-screen-2xl px-4 py-8 pl-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>
          <p className="text-muted-foreground">
            Discover insights and knowledge from our community
          </p>
        </div>
        {user && (
          <Link href="/new-post">
            <Button className="cursor-pointer">
              <PlusCircle className="mr-2 h-4 w-4" />
              Write Post
            </Button>
          </Link>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatReadTime(post.content)}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 text-xl leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {post.content}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}