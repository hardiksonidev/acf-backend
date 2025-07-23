import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutMeSection() {
  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">About Me & Expertise</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-md leading-relaxed">
          I am always excited to learn more and more about web application development. Have a huge interest in web
          application, blog, portfolio development using WordPress, ACF, ACF PRO, Asp.Net CORE C#, Asp.Net c#, Asp.Net
          MVC C#, Microsoft SQL Server Programming, Ajax, JSON, Node.js, Angular, CSS, HTML, jQuery, and PHP, Javascript
          library/frameworks, Knockout, TypeScript.
        </p>
        <ul className="list-disc list-inside space-y-2 text-md leading-relaxed">
          <li>
            With more than 7 years of experience in web Application development with strong knowledge of Asp .net Core,
            asp.net MVC, PHP and Object-Oriented concepts I want to enhance my skills in web development.
          </li>
          <li>
            Completed Masters in computer engineering with lots of skills to enhance further in the field of software
            development.
          </li>
          <li>I am experienced in all aspects of web development from writing to designing to programming.</li>
          <li>I possess the work ethic and determination needed to focus and accomplish the task at hand.</li>
          <li>I have the ability to work as part of a team to meet a common goal.</li>
          <li>I have a great capacity for learning and implementing new types of programming.</li>
        </ul>
      </CardContent>
    </Card>
  )
}
