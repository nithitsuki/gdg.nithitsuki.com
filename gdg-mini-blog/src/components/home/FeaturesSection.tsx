import { Card, CardContent } from '@/components/ui/card'
import { Users, Lightbulb, Shield } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Global Community',
    description: 'Connect with developers from around the world. Share experiences and learn from diverse perspectives.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Knowledge Sharing',
    description: 'Share tutorials, insights, and best practices. Help others while growing your own expertise.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your content is protected with enterprise-grade security and reliable infrastructure.',
    color: 'from-red-500 to-red-600'
  }
]

export default function FeaturesSection() {
  return (
    <section 
      id="features-section" 
      className="min-h-screen flex items-center bg-white py-16" 
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GDG Mini Blog?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Built for developers, by developers. Experience the best platform for tech knowledge sharing.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-102 w-full max-w-sm"
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
