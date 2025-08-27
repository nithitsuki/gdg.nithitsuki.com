import { createClient } from '@/lib/supabase/server'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, LogOut, PlusCircle, BookOpen, Home, Info } from "lucide-react";

async function SignOutButton() {
  return (
  <form action="/sign-out" method="post">
    <Button variant="outline" size="sm" type="submit" className="cursor-pointer hover:text-red-600">
    <LogOut className="h-4 w-4" />
    </Button>
  </form>
  )
}

export default async function Navbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Blogs", icon: BookOpen },
    { href: "/about", label: "About", icon: Info },
    ...(user ? [{ href: "/new-post", label: "Write", icon: PlusCircle }] : []),
  ];

  return (
    <header className="border-b bg-transparent backdrop-blur-md supports-[backdrop-filter]:bg-background/40 sticky top-0 z-50 shadow-sm">
      <nav className="flex h-16 items-center justify-between w-full px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          <span className="font-semibold text-lg hidden sm:block">GDG Mini Blog</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200 flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-3 pr-0">
          {user ? (
            <>
              <span className="hidden text-sm font-medium text-muted-foreground md:inline-block">
                {user.email}
              </span>
              <SignOutButton />
            </>
          ) : (
            <>
              <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader className="text-left pb-4">
                <SheetTitle className="text-xl">Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the blog
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                {!user && (
                  <>
                    <Link
                      href="/sign-in"
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}