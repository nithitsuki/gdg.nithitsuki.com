// src/components/DeleteButton.tsx
'use client'

import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "./ui/button"

export default function DeleteButton({ postId }: { postId: number }) {
    const router = useRouter()
    const supabase = createClient()

    const handleDelete = async () => {
        // Ask for confirmation before deleting
        if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
            return
        }

        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', postId)

        if (error) {
            alert('Error deleting post: ' + error.message)
        } else {
            // On success, redirect to the main blog page
            router.push('/blog')
            router.refresh() // Force a refresh to show the updated post list
        }
    }

    return (
        <Button variant="destructive" onClick={handleDelete}>
            Delete Post
        </Button>
    )
}