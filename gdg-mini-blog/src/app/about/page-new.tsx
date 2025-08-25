'use client'

import HeroSection from './components/HeroSection'
import MissionSection from './components/MissionSection'
import FeaturesSection from './components/FeaturesSection'
import TechnologySection from './components/TechnologySection'
import CommunityValuesSection from './components/CommunityValuesSection'
import CTAAndContactSection from './components/CTAAndContactSection'

export default function AboutPage() {
  const scrollToMission = () => {
    document.getElementById('mission-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div style={{ scrollSnapType: 'y mandatory', overflowY: 'auto', height: '100vh' }}>
      <HeroSection onScrollToMission={scrollToMission} />
      <MissionSection />
      <FeaturesSection />
      <TechnologySection />
      <CommunityValuesSection />
      <CTAAndContactSection />
    </div>
  )
}
