'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const featuredResources = [
  { 
    title: "BB Living BuilderLynx Zoom", 
    description: "BB Living Builder Lynx Trade Partner Training, New Vendor Portal Informavtion.  Zoom Meeting ID: 818 6647 4897",
    url: "https://bblivingresidential.zoom.us/j/81866474897"
  },
  { 
    title: "NetSuite Kick Off Zoom", 
    description: "Kick Off Zoom Call for ERP and FSM, and the strategies for efficient implementation",
    url: "https://www.example.com"
  },
  { 
    title: "NetSuite Field Service Management", 
    description: "Hosted by Marianne Ma, our LEAD Technical POC at NetSuite",
    url: "https://oracle.zoom.us/j/3646455233?pwd=d0tSWFdDR1NXZWJob01LbFdQRTlFQT09&omn=93953692813"
  },
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
                  <Button variant="outline" className="w-full">Click Here</Button>
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

