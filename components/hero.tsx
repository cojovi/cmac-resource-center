import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to CMAC's Resource Center</h1>
        <p className="text-xl mb-8">Your one-stop hub for all company resources and information</p>
        <Button variant="secondary" size="lg">Get Started</Button>
      </div>
    </div>
  )
}

