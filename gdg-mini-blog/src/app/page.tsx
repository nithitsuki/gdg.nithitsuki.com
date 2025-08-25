import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Edit, BookOpen, Users, Zap, Globe, Code, Heart, Lightbulb, TrendingUp, Shield, Star } from 'lucide-react'

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex-1 overflow-hidden">
      {user ? (
        // LOGGED-IN VIEW - Enhanced Dashboard
        <div className="container max-w-screen-2xl px-4 py-8">
          {/* Hero Section for Logged In Users */}
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
            <div className="relative z-10 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome back, Creator!
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to share your knowledge with the GDG community? Your expertise matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/new-post">
                  <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-md">
                    <Edit className="mr-2 h-5 w-5" />
                    Write New Post
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="cursor-pointer border-gray-300 hover:bg-gray-50">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Browse Community Posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Growing Community</h3>
                <p className="text-sm text-gray-600 mt-2">Join thousands of developers</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Knowledge Sharing</h3>
                <p className="text-sm text-gray-600 mt-2">Learn and teach together</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Quality Content</h3>
                <p className="text-sm text-gray-600 mt-2">Curated by experts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        // LOGGED-OUT VIEW - Enhanced Landing Page
        <div className="relative">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10"></div>
            <div className="relative z-10 container max-w-screen-xl px-4 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Code className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                  Share Knowledge with the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    GDG Community
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of developers sharing insights, tutorials, and experiences. 
                  Build your network, learn together, and shape the future of technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/sign-up">
                    <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="cursor-pointer border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse delay-500"></div>
          </section>

          {/* Features Section */}
          <section className="py-24 bg-white">
            <div className="container max-w-screen-xl px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GDG Mini Blog?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Built for developers, by developers. Experience the best platform for tech knowledge sharing.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Global Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connect with developers from around the world. Share experiences and learn from diverse perspectives.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Knowledge Sharing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Share tutorials, insights, and best practices. Help others while growing your own expertise.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Modern Platform</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Built with cutting-edge technology for a fast, responsive, and delightful writing experience.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Secure & Reliable</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your content is protected with enterprise-grade security and reliable infrastructure.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Rich Content</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create beautiful posts with rich formatting, code highlighting, and multimedia support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Global Reach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your ideas reach a global audience. Make an impact on developers worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="container max-w-screen-xl px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Sharing?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our community of passionate developers and start making an impact today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up">
                  <Button size="lg" variant="secondary" className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                    Create Account <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="cursor-pointer border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                    Explore Posts
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}