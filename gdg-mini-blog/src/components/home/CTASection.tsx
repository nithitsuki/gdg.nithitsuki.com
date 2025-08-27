import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section 
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 relative overflow-hidden" 
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-200/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-200/40 rounded-full blur-xl"></div>
      </div>
      
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          Ready to Start Sharing?
        </h2>
        
        {/* Description */}
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Join our community of passionate developers and start making an impact today.
          Your knowledge could be exactly what someone needs to solve their next challenge.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Create Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/blog">
            <Button 
              size="lg" 
              variant="secondary"
              className="cursor-pointer bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-4 text-lg font-semibold shadow-md hover:shadow-lg"
            >
              Explore Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
