import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from './ui/button'
import { LogOut, PlusCircle, BookOpen, Home } from 'lucide-react'

async function SignOutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button variant="ghost" size="sm" type="submit" className="cursor-pointer">
        <LogOut className="h-4 w-4" />
      </Button>
    </form>
  )
}

export default async function Header() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">GDG Mini Blog</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            {user && (
              <Link href="/new-post">
                <Button variant="ghost" size="sm" className="cursor-pointer">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Write
                </Button>
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <span className="hidden text-sm font-medium text-muted-foreground md:inline-block">
                  {user.email}
                </span>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="cursor-pointer">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
