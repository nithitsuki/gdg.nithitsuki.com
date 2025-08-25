import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50/80">
      <div className="container max-w-screen-2xl px-4 md:px-8 py-4">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-center text-sm text-gray-600 md:text-left">
            © {new Date().getFullYear()} GDG Mini Blog. Empowering developers to share knowledge.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
