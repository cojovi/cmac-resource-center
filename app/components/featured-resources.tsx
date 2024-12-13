'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const featuredResources = [
  { title: "New Onboarding Process", description: "Learn about our streamlined onboarding for new hires" },
  { title: "Quarterly Town Hall", description: "Watch the recording of our latest company-wide meeting" },
  { title: "Wellness Program Launch", description: "Discover our new initiatives for employee well-being" },
]

export default function FeaturedResources() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Featured Resources</h2>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {featuredResources.map((resource, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

