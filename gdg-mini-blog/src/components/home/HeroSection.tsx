'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById('features-section')?.scrollIntoView({
      behavior: 'smooth' 
    })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 relative overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-52 right-20 w-12 h-12 bg-green-400/10 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse delay-500 hidden lg:block"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Code className="w-10 h-10 text-white" />
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
          Share Knowledge with the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            GDG Community
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Join thousands of developers sharing insights, tutorials, and experiences. 
          Build your network, learn together, and shape the future of technology.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-medium"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button 
              size="lg" 
              variant="outline" 
              className="cursor-pointer border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg font-medium"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToFeatures}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll to features"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  )
}
