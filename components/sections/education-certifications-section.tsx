import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function EducationCertificationsSection() {
  // const education = [
  //   {
  //     degree: "Masters in Computer Engineering",
  //     institution: "Your University Name",
  //     year: "20XX",
  //     details: "Focused on advanced web application development and software engineering principles.",
  //   },
  // ]

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "September 23, 2024",
    },
       {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "June 20, 2024",
    },
            {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "June 19, 2020",
    },
     
  ]

  return (
    <Card className="w-full h-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* <div>
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="text-lg font-medium">{edu.degree}</h4>
              <p className="text-md text-muted-foreground">
                {edu.institution} ({edu.year})
              </p>
              <p className="text-sm mt-1">{edu.details}</p>
            </div>
          ))}
        </div>
        <Separator /> */}
        <div>
          {/* <h3 className="text-xl font-semibold mb-3">Certifications</h3> */}
          {certifications.map((cert, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="text-lg font-medium">{cert.name}</h4>
              <p className="text-md text-muted-foreground">
                {cert.issuer} ({cert.year})
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
