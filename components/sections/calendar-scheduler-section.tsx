import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, CheckCircle, Section } from "lucide-react"
import Link from "next/link"
import ServicesOfferedSection from "./services-offered-section"
import FilloutEmbed from "../FilloutEmbed"
import { useState } from "react";
import { FilloutPopupEmbed } from "@fillout/react";

export default function CalendarSchedulerSection() {
    const services = [
    "Custom WordPress Development (ACF, ACF PRO,Elementor, Themes, Plugins)",
    "UI/UX Development & Responsive Design (Plugin & Theme customization)",
    "Full-Stack Web Development (WordPress, .NET Core, Angular, Node.js)",
    "Database Design & Optimization (MS SQL Server, MySQL)",
    "E-commerce Solutions & Payment Gateway Integration",
    "Data Visualization (Power BI Dashboards)",
    "Ongoing Technical Support & Maintenance",
    "Website Migration & Optimization",
    "API Integrations & Development",
    "Alexa Custom Skill Development",
    "Code Audits & Refactoring",
  ]
  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
      <CardHeader className="p-6 pb-0">
        <CardTitle className="text-2xl font-bold">Schedule a Meeting With Me </CardTitle>
        <CardDescription>Find a convenient time to discuss your project or ask questions and Comprehensive web development solutions tailored to your needs.</CardDescription>
      </CardHeader>

             <CardContent className="space-y-3 pt-6">
        <ul className="grid grid-cols-0 gap-x-4 gap-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2 text-md">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
 
      <CardContent className="space-y-4 p-6 pt-4 text-center flex flex-col h-full justify-between">
        <FilloutEmbed />
      </CardContent>
    </Card>
  )
}
