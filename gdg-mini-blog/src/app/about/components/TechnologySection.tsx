import { Card } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

export default function TechnologySection() {
  return (
    <section className="min-h-screen flex items-center" style={{ scrollSnapAlign: 'start' }}>
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="text-4xl font-bold">Built with Modern Tech</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Powered by cutting-edge technologies for the best developer experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-6">
                <i className="devicon-nextjs-plain colored text-6xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-lg">Next.js 14</div>
                <div className="text-sm text-muted-foreground">React Framework</div>
              </div>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-6">
                <i className="devicon-typescript-plain text-6xl group-hover:scale-110 transition-transform duration-300" style={{color: '#3178c6'}}></i>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-lg">TypeScript</div>
                <div className="text-sm text-muted-foreground">Type Safety</div>
              </div>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-6">
                <i className="devicon-supabase-plain text-6xl group-hover:scale-110 transition-transform duration-300" style={{color: '#3ecf8e'}}></i>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-lg">Supabase</div>
                <div className="text-sm text-muted-foreground">Backend Platform</div>
              </div>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-6">
                <i className="devicon-tailwindcss-original text-6xl group-hover:scale-110 transition-transform duration-300" style={{color: '#06b6d4'}}></i>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-lg">Tailwind CSS</div>
                <div className="text-sm text-muted-foreground">Styling</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
