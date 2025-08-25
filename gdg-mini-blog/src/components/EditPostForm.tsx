'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Save } from 'lucide-react'

type Post = {
  id: number
  title: string
  content: string
}

export default function EditPostForm({ post }: { post: Post }) {
  const router = useRouter()
  const supabase = createClient()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const { error: updateError } = await supabase
      .from('posts')
      .update({ title, content })
      .eq('id', post.id)

    if (updateError) {
      setError(updateError.message)
    } else {
      router.push(`/blog/${post.id}`)
      router.refresh()
    }
    setIsSubmitting(false)
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Edit Post</CardTitle>
        <CardDescription>
          Make changes to your post and save them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-lg"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="min-h-[400px] text-base leading-relaxed"
              disabled={isSubmitting}
            />
          </div>
          
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}
          
          <div className="flex justify-center">
            <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
              {isSubmitting ? (
                'Saving...'
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}