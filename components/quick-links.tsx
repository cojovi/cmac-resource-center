import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const quickLinks = [
  "Submit Time Off Request",
  "Access Learning Portal",
  "View Pay Stub",
  "Update Personal Info",
  "Book a Meeting Room",
]

export default function QuickLinks() {
  return (
    <Card className="w-full lg:w-64">
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          {quickLinks.map((link, index) => (
            <Button key={index} variant="ghost" className="justify-start">
              {link}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

