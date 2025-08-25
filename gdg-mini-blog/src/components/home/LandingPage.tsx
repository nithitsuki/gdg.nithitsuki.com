'use client'

import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import CTASection from './CTASection'

export default function LandingPage() {
  return (
    <div className="overflow-hidden -mt-14" style={{ scrollSnapType: 'y mandatory', overflowY: 'auto', height: '100vh' }}>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
