import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Ticker from './Ticker'

export default function Hero() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/cmac_logo.png"
              alt="CMAC Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to CMAC's Resource Center</h1>
          <p className="text-xl mb-8">Your one-stop hub for all company resources and information</p>
          <Button variant="secondary" size="lg">Get Started</Button>
        </div>
      </div>
      <Ticker />
    </div>
  )
}

