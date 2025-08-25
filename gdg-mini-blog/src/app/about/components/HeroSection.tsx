'use client'

import { Badge } from '@/components/ui/badge'
import { ChevronDown, Users } from 'lucide-react'

interface HeroSectionProps {
  onScrollToMission: () => void
}

export default function HeroSection({ onScrollToMission }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4" style={{ scrollSnapAlign: 'start' }}>
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Users className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Google Developer Group
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building the future of technology together through community, learning, and innovation
        </p>
        
        {/* Scroll indicator */}
        <div className="relative">
          <button
            onClick={onScrollToMission}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Discover Our Mission
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
