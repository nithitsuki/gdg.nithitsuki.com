import { createClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import EditPostForm from '@/components/EditPostForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function EditPostPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect('/sign-in')
  }

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) {
    notFound()
  }

  if (post.user_id !== user.id) {
    redirect('/blog')
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary cursor-pointer"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Post
        </Link>
      </div>
      <EditPostForm post={post} />
    </div>
  )
}