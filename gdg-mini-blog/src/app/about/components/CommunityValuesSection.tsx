import { Card } from '@/components/ui/card'

export default function CommunityValuesSection() {
  return (
    <section className="min-h-screen flex items-center" style={{ scrollSnapAlign: 'start' }}>
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-to-br from-card via-card to-muted/20">
          <div className="space-y-10">
            <h2 className="text-4xl font-bold text-center">Our Community Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 rounded-lg bg-background/50">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">🤝</span>
                  <span>Inclusivity</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome developers of all skill levels, backgrounds, and experiences. Everyone has
                  something valuable to contribute to our community.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg bg-background/50">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">🚀</span>
                  <span>Innovation</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage creative thinking, experimentation, and pushing the boundaries of what's possible in technology.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg bg-background/50">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">🎓</span>
                  <span>Learning</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuous learning is at our core. We support each other's growth and celebrate knowledge sharing at every level.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg bg-background/50">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">🌍</span>
                  <span>Impact</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe technology should make the world better, and we're committed to creating positive global impact through our work.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
