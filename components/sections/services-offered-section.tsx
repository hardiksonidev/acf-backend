import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesOfferedSection() {
  const services = [
    "Full-Stack Web Development (WordPress, .NET Core, Angular, Node.js)",
    "Custom WordPress Development (ACF, ACF PRO, Themes, Plugins)",
    "API Integrations & Development",
    "UI/UX Development & Responsive Design",
    "E-commerce Solutions & Payment Gateway Integration",
    "Database Design & Optimization (MS SQL Server, MySQL)",
    "Code Audits & Refactoring",
    "Alexa Custom Skill Development",
    "Data Visualization (Power BI Dashboards)",
    "Website Migration & Optimization",
    "Ongoing Technical Support & Maintenance",
  ]

  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Services I Offer</CardTitle>
        <CardDescription>Comprehensive web development solutions tailored to your needs.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2 text-md">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
