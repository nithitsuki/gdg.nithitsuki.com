import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Code, Globe } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="min-h-screen flex items-center" style={{ scrollSnapAlign: 'start' }}>
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">What We Offer</h2>
            <p className="text-muted-foreground">
              Everything you need to share knowledge and connect with fellow developers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Share Your Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Write detailed tutorials, share coding tips, and document your development journey
                  to help others learn and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Connect & Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Build meaningful connections with developers worldwide, collaborate on projects,
                  and grow your professional network.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Join a diverse, global community of developers passionate about technology,
                  innovation, and continuous learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
