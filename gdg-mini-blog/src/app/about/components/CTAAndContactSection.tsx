import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

export default function CTAAndContactSection() {
  return (
    <section className="py-20" style={{ scrollSnapAlign: 'start' }}>
      <div className="container max-w-6xl mx-auto px-4 space-y-20">
        {/* CTA Section - Reduced height */}
        <div className="text-center space-y-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Become part of our growing community and start sharing your knowledge today.
              Together, we can build something amazing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="px-8 py-4 text-lg">
                Get Started <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Explore Posts
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Section - Reduced height */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you!
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" className="p-4">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="lg" className="p-4">
              <Twitter className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="lg" className="p-4">
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
