import { Metadata } from 'next'
import Hero from '@/components/hero'
import ResourceGrid from '@/components/resource-grid'
import FeaturedResources from '@/components/featured-resources'
import QuickLinks from '@/components/quick-links'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Company Resource Center',
  description: 'Your one-stop hub for all company resources and information',
}

export default function ResourceCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            <ResourceGrid />
            <FeaturedResources />
          </main>
          <QuickLinks />
        </div>
      </div>
      <Footer />
    </div>
  )
}

