import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const forms = [
  { title: "Material Shorts Form", description: "Request material shorts for your project", link: "https://forms.gle/QuXcJPL1ggWnEpas8" },
  { title: "Backcharge Request Form", description: "Submit a backcharge request for project costs", link: "https://forms.gle/LPGqtdh5pCkNm1JM8" },
  { title: "IT Request Form", description: "Submit your IT support or equipment requests", link: "https://forms.google.com/it-request" },
  { title: "Builder Detail Form", description: "Provide details for builder-related information", link: "https://forms.gle/7UcKHLzmHvRaKMAR9" },
  { title: "Austin Field Update Form", description: "Update field status and progress in Austin projects", link: "https://forms.gle/1EmxpE1xC1xdytNp8" },
  { title: "Austin Community Outlook Form", description: "Share insights and outlook for Austin community projects", link: "https://forms.gle/euZycmUFH9HgwEeK6" },
  { title: "New Email Request Form", description: "Request a new company email account", link: "https://forms.gle/48X1YiQBSiEoj4MF6" },
  { title: "Time Off Request", description: "Submit your time off requests", link: "https://forms.google.com/timeoff" },
]

export default function CMACForms() {
  return (
    <div className="min-h-screen bg-background p-6">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Resource Center
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">CMAC Forms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{form.title}</CardTitle>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href={form.link} target="_blank" rel="noopener noreferrer">
                  Open Form
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

