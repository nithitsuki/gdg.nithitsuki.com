import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DeleteButton from '@/components/DeleteButton'
import { ArrowLeft, Edit, Calendar, Clock } from 'lucide-react'

export const revalidate = 0

function formatReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return `${readTime} min read`
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !post) {
    notFound()
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const isAuthor = user && user.id === post.user_id

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary cursor-pointer"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <article className="prose prose-gray dark:prose-invert max-w-none">
        <header className="not-prose mb-8 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{formatReadTime(post.content)}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="prose-lg text-center">
          {post.content.split('\n').map((paragraph: string, index: number) => (
            <p key={index} className="mb-4 leading-relaxed text-left">
              {paragraph}
            </p>
          ))}
        </div>

        {isAuthor && (
          <footer className="not-prose mt-12 pt-8 border-t text-center">
            <div className="flex items-center justify-center gap-4">
              <Link href={`/blog/${post.id}/edit`}>
                <Button variant="outline" className="cursor-pointer">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Post
                </Button>
              </Link>
              <DeleteButton postId={post.id} />
            </div>
          </footer>
        )}
      </article>
    </div>
  )
}