import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Code, Globe, Heart, Target } from 'lucide-react'

export default function MissionSection() {
  return (
    <section id="mission-section" className="min-h-screen flex items-center" style={{ scrollSnapAlign: 'start' }}>
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To create a vibrant, inclusive space where developers from all backgrounds can share their
                insights, learn from each other, and build meaningful connections. We're committed to
                fostering innovation and knowledge exchange within the global developer community.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1">Community First</Badge>
              <Badge variant="secondary" className="px-3 py-1">Open Source</Badge>
              <Badge variant="secondary" className="px-3 py-1">Knowledge Sharing</Badge>
              <Badge variant="secondary" className="px-3 py-1">Global Impact</Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">1000+</div>
              <div className="text-xs text-muted-foreground font-medium">Active Members</div>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-xs text-muted-foreground font-medium">Posts Shared</div>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-xs text-muted-foreground font-medium">Countries</div>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">∞</div>
              <div className="text-xs text-muted-foreground font-medium">Passion</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
