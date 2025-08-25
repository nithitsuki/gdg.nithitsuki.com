import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from './ui/button'
import { LogOut, PlusCircle, BookOpen, Home, Info } from 'lucide-react'

async function SignOutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button variant="ghost" size="sm" type="submit" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-red-600">
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
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            <span className="font-semibold text-xl text-gray-900">GDG Mini Blog</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" size="sm" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium">
                <Info className="h-4 w-4 mr-2" />
                About
              </Button>
            </Link>
            {user && (
              <Link href="/new-post">
                <Button variant="ghost" size="sm" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Write
                </Button>
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <span className="hidden text-sm font-medium text-gray-600 md:inline-block">
                  {user.email}
                </span>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm">
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
