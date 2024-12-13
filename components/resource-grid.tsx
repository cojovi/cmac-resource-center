import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Users, Calendar, HelpCircle } from 'lucide-react'

const resources = [
  { title: "Employee Handbook", description: "Essential guidelines and policies", icon: BookOpen, link: "https://texastrustedroofing.com/Employee-handbook.pdf" },
  { title: "CMAC Processes", description: "Step-by-step guides for company processes", icon: FileText, link: "https://texastrustedroofing.com/process_procedure_combined.pdf" },
  { title: "Team Directory", description: "Connect with your colleagues", icon: Users, link: "/team-directory" },
  { title: "CMAC Forms", description: "Custom forms created to streamline your work", icon: FileText, link: "/cmac-forms" },
  { title: "Company Calendar", description: "Stay updated with important dates and events", icon: Calendar, link: "/company-calendar" },
  { title: "IT Support", description: "Get help with technical issues", icon: HelpCircle },
]

export default function ResourceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {resources.map((resource, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              {<resource.icon className="mr-2 h-6 w-4" />}
              {resource.title}
            </CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {resource.link ? (
              <Button className="w-full" asChild>
                <a href={resource.link} target={resource.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                  Access Resource
                </a>
              </Button>
            ) : (
              <Button className="w-full">Access Resource</Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

