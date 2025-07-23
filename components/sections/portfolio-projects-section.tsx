import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function PortfolioProjectsSection() {
  const projects = [

    {
      title: "Divi Theme | Membership | ACF",
      description:
        "Optimize Divi theme's membership listing page by integrating Advanced Custom Fields for improved functionality and data presentation,Made adjustments to the membership listing page within the Divi theme, utilizing Advanced Custom Fields data.",
      images: [
        "/portfolio-images/membership-listings- devlivery.png?height=300&width=500&text=WordPress+1"
      ],
        points: [
    "Optimized membership listing page in Divi theme using ACF for dynamic data.",
    "Enhanced data presentation and admin flexibility with custom ACF fields."
  ],
  skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
      link: "#",
    },
    {
  title: "Package Selection Dropdown | ACF",
  description:
    "Created an interactive webpage for selecting service packages with multi-dropdowns and dynamic package details. Enhanced user experience and presentation for service packages.",
  images: [
    "/portfolio-images/Package Selection Dropdown  ACF.png?height=300&width=500&text=Package+Dropdown"
  ],
  points: [
    "Implemented multi-select dropdowns for package customization.",
    "Displayed dynamic package details for user selections.",
    "Responsive design for seamless experience across devices."
  ],
  skills: ["WordPress", "ACF", "JavaScript", "CSS", "UX/UI"],
  link: "#",
},
{
  title: "ACF Fields and URL Resolution",
  description:
    "Resolved issues with Advanced Custom Fields visibility and improved URL redirection for a smoother user experience and better data presentation.",
  images: [
    "/portfolio-images/We want the whole article to show without logging in.png?height=300&width=500&text=ACF+URL+Fix"
  ],
  points: [
    "Fixed ACF field invisibility issues.",
    "Enhanced URL redirection logic for better navigation."
  ],
  skills: ["WordPress", "ACF", "PHP", "URL Routing"],
  link: "#",
},
{
  title: "WooCommerce Product Description Enhancement",
  description:
    "Added an extra product description section before the hero block in WooCommerce, providing customers with detailed product info for better purchase decisions.",
  images: [
    "/portfolio-images/Product-description-frontend-acf-hardik39945.png?height=300&width=500&text=WooCommerce+Desc"
  ],
  points: [
    "Inserted additional product description before hero block.",
    "Improved product presentation and user engagement."
  ],
  skills: ["WooCommerce", "WordPress", "PHP", "ACF"],
  link: "#",
},
{
  title: "Divi Theme Customization by ACF",
  description:
    "Customized Divi theme using a child theme and integrated new ACF data for tailored design and dynamic content presentation.",
  images: [
    "/portfolio-images/Divi Theme Customization by ACF-acf-hardik39945.jpg?height=300&width=500&text=Divi+ACF"
  ],
  points: [
    "Implemented custom design changes in Divi child theme.",
    "Expanded content options using ACF and filters."
  ],
  skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  link: "#",
},
{
  title: "Front-End User Form Edit (Gravity Forms)",
  description:
    "Enabled logged-in users to edit their own form submissions via a secure, user-friendly front-end interface, improving data management and user engagement.",
  images: [
    "/portfolio-images/Front-End User Form Edit GRAVITY-acf-hardik39945.png?height=300&width=500&text=Gravity+Edit"
  ],
  points: [
    "Developed front-end edit form for user submissions.",
    "Ensured secure access and data integrity."
  ],
  skills: ["WordPress", "Gravity Forms", "PHP", "JavaScript"],
  link: "#",
},
{
  title: "Google Maps API Autocomplete Fix",
  description:
    "Resolved issues with Google Maps API autocomplete, ensuring accurate and seamless location search for improved user navigation.",
  images: [
    "/portfolio-images/Google Maps API Autocomplete Fix- moving-from-acf-hardik39945.jpg?height=300&width=500&text=Maps+Autocomplete"
  ],
  points: [
    "Fixed Google Maps API autocomplete functionality.",
    "Enhanced location search experience."
  ],
  skills: ["JavaScript", "Google Maps API", "Debugging"],
  link: "#",
},
{
  title: "ACF PRO Filter Configuration Fix",
  description:
    "Fixed configuration issues with Advanced Custom Fields by implementing optimized filters for improved data management and content presentation.",
  images: [
    "/portfolio-images/ACF PRO Filter Configuration Fix-acf-hardik39945.jpg?height=300&width=500&text=ACF+Filter"
  ],
  points: [
    "Identified and resolved ACF filter configuration problems.",
    "Optimized field usage for better functionality."
  ],
  skills: ["WordPress", "ACF", "PHP"],
  link: "#",
},
{
  title: "Homepage and Single Post Edits",
  description:
    "Enhanced homepage and single post templates with ACF sections for latest videos, pulse briefs, must reads, and author Gravatar images.",
  images: [
    "/portfolio-images/Homepage and Single Post Edits-acf-hardik39945.png?height=300&width=500&text=Homepage+Edits"
  ],
  points: [
    "Added ACF sections for dynamic content on homepage.",
    "Improved author representation with Gravatar images."
  ],
  skills: ["WordPress", "ACF", "PHP", "CSS"],
  link: "#",
},
{
  title: "ACF PRO Advent Calendar Setup",
  description:
    "Established an interactive Advent calendar using ACF fields for easy content management and daily updates.",
  images: [
    "/portfolio-images/ACF PRO Advent Calendar Setup-acf-hardik39945.png?height=300&width=500&text=Advent+Calendar"
  ],
  points: [
    "Implemented dynamic Advent calendar with ACF.",
    "Enabled daily content scheduling and presentation."
  ],
  skills: ["WordPress", "ACF", "PHP", "JavaScript"],
  link: "#",
},
{
  title: "ACF Pro Checkboxes Alignment Fix",
  description:
    "Resolved frontend and backend alignment issues with ACF Pro checkboxes for a polished and consistent user interface.",
  images: [
    "/portfolio-images/ACF Pro Checkboxes Alignment Fix-acf-hardik39945.png?height=300&width=500&text=Checkbox+Fix"
  ],
  points: [
    "Fixed checkbox alignment issues across interfaces.",
    "Enhanced visual consistency and user experience."
  ],
  skills: ["WordPress", "ACF", "CSS"],
  link: "#",
},
{
  title: "WordPress Social Feed Integration",
  description:
    "Integrated Facebook and Twitter feeds into WordPress for real-time updates and improved social media engagement.",
  images: [
    "/portfolio-images/WordPres Social Feed Integration-acf-hardik39945.png?height=300&width=500&text=Social+Feed"
  ],
  points: [
    "Connected Facebook and Twitter feeds to WordPress.",
    "Enabled dynamic social content display."
  ],
  skills: ["WordPress", "Social Media APIs", "PHP"],
  link: "#",
},
{
  title: "Single Page Filter by Angular",
  description:
    "Created a single-page filter system using Angular, HTML, and CSS for dynamic and user-friendly content sorting.",
  images: [
    "/portfolio-images/Single Page Filter by ANGULAR - filetr-page-acf-hardik39945.png?height=300&width=500&text=Angular+Filter"
  ],
  points: [
    "Developed real-time filter with Angular.",
    "Enhanced content sorting and user experience."
  ],
  skills: ["Angular", "HTML", "CSS", "JavaScript"],
  link: "#",
},
{
  title: "CSV Import/Export Checkbox & ACF",
  description:
    "Implemented CSV import/export for user data, checkboxes, and ACF metadata to streamline data management.",
  images: [
    "/portfolio-images/CSV ImportExport Checkbox and ACF-acf-hardik39945.png?height=300&width=500&text=CSV+ACF"
  ],
  points: [
    "Enabled seamless import/export of user and ACF data.",
    "Simplified data handling and portability."
  ],
  skills: ["WordPress", "ACF", "PHP", "CSV"],
  link: "#",
},
{
  title: "ACF Pro Fields Migration",
  description:
    "Migrated all ACF fields and configurations from staging to production, ensuring data consistency and feature continuity.",
  images: [
    "/portfolio-images/ACF Pro Fields Migration-acf-hardik39945.png?height=300&width=500&text=ACF+Migration"
  ],
  points: [
    "Transferred ACF fields and settings to production.",
    "Maintained data integrity and seamless transition."
  ],
  skills: ["WordPress", "ACF", "PHP"],
  link: "#",
},
{
  title: "Users Checkbox Based Redirection",
  description:
    "Integrated ACF checkboxes in user profiles and implemented redirection logic using Elementor buttons for personalized user experiences.",
  images: [
    "/portfolio-images/Users Checkbox based Redirection-acf-hardik39945.png?height=300&width=500&text=Checkbox+Redirect"
  ],
  points: [
    "Configured ACF checkboxes for user preferences.",
    "Implemented dynamic redirection based on selections."
  ],
  skills: ["WordPress", "ACF", "Elementor", "PHP"],
  link: "#",
},
{
  title: "ACF Forms History Data Display",
  description:
    "Extended ACF Forms to include history tracking and display, providing users with a clear overview of past changes in a structured table format.",
  images: [
    "/portfolio-images/ACF Forms History Data Display-History-Data-front-end-acf-hardik39945.png?height=300&width=500&text=ACF+History"
  ],
  points: [
    "Developed history feature for ACF Forms.",
    "Presented historical data in organized tables."
  ],
  skills: ["WordPress", "ACF", "PHP", "JavaScript"],
  link: "#",
},
{
  title: "ACF with WCFM Fields Integration",
  description:
    "Configured ACF for seamless integration with WCFM fields, optimizing data management and compatibility.",
  images: [
    "/portfolio-images/ACF with WCFM fields Integration-wcfm-acf-hardik39945.jpg?height=300&width=500&text=ACF+WCFM"
  ],
  points: [
    "Aligned ACF settings for WCFM compatibility.",
    "Streamlined data flow and management."
  ],
  skills: ["WordPress", "ACF", "WCFM", "PHP"],
  link: "#",
},
{
  title: "JSON to PHP Array Conversion",
  description:
    "Converted complex JSON data from ACF API into PHP arrays for easier data handling and integration.",
  images: [
    "/portfolio-images/JSON to PHP Array Conversion-acf-hardik39945.png?height=300&width=500&text=JSON+PHP"
  ],
  points: [
    "Parsed and restructured JSON to PHP arrays.",
    "Simplified data manipulation and usage."
  ],
  skills: ["PHP", "ACF", "JSON"],
  link: "#",
},
{
  title: ".NET CORE MultiFilter Dropdown",
  description:
    "Implemented dynamic multi-filter dropdowns for data tables in ASP.NET CORE using RAZOR syntax, enhancing search and data presentation.",
  images: [
    "/portfolio-images/ASP NET CORE MultiFilter Dropdown-acf-hardik39945.png?height=300&width=500&text=MultiFilter+Dropdown"
  ],
  points: [
    "Developed multiple dropdown filters for data tables.",
    "Enabled complex and tailored searches."
  ],
  skills: [".NET CORE", "Razor", "C#", "JavaScript"],
  link: "#",
},
{
  title: "Synchroniz Highchart Integration",
  description:
    "Integrated synchronized Highcharts with custom data feeds for unified and enhanced data visualization on HTML webpages.",
  images: [
    "/portfolio-images/Synchroniz Highchart Integration-acf-hardik39945.jpg?height=300&width=500&text=Highcharts"
  ],
  points: [
    "Added synchronized Highcharts for unified data display.",
    "Established custom data feeds for dynamic charts."
  ],
  skills: ["JavaScript", "Highcharts", "HTML", "Data Visualization"],
  link: "#",
},
{
  title: "Oodaloop - New Home Page",
  description:
    "Developed a new home page with optimized performance, responsive design, and seamless navigation, showcasing technical and design expertise.",
  images: [
    "/portfolio-images/New-Home-Page-OODA-Loop-hardik39945.png?height=300&width=500&text=Oodaloop+Home"
  ],
  points: [
    "Crafted a visually appealing and functional landing page.",
    "Integrated modern technologies for swift user experience."
  ],
  skills: ["React", "Next.js", "CSS", "UI/UX"],
  link: "#",
},
{
  title: "ACF Pro and Elementor Integration",
  description:
    "Created a loop grid in Elementor with dynamic featured images and popups displaying ACF galleries for enhanced content interaction.",
  images: [
    "/portfolio-images/hardik39945-acf-hardik-lightbox-wordpress-php-html-css-acf-gallery.jpg?height=300&width=500&text=ACF+Elementor"
  ],
  points: [
    "Built dynamic loop grid with Elementor and ACF.",
    "Enabled gallery popups for interactive content."
  ],
  skills: ["WordPress", "ACF", "Elementor", "PHP", "JavaScript"],
  link: "#",
},
  //   {
  //     title: "Blog & Portfolio Site",
  //     description:
  //       "Created a dynamic blog and portfolio website with advanced custom fields for content management and a responsive design.",
  //     images: [
  //       "/placeholder.svg?height=300&width=500&text=Blog+1",
  //       "/placeholder.svg?height=300&width=500&text=Blog+2",
  //       "/placeholder.svg?height=300&width=500&text=Blog+3",
  //     ],
  //             points: [
  //   "Optimized membership listing page in Divi theme using ACF for dynamic data.",
  //   "Enhanced data presentation and admin flexibility with custom ACF fields."
  // ],
  // skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  //     link: "#",
  //   },
  //   {
  //     title: "Mobile App Backend",
  //     description:
  //       "Built a scalable backend for a mobile application using Node.js and SQL Server, handling user authentication and data storage.",
  //     images: [
  //       "/placeholder.svg?height=300&width=500&text=Mobile+Backend+1",
  //       "/placeholder.svg?height=300&width=500&text=Mobile+Backend+2",
  //     ],
  //             points: [
  //   "Optimized membership listing page in Divi theme using ACF for dynamic data.",
  //   "Enhanced data presentation and admin flexibility with custom ACF fields."
  // ],
  // skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  //     link: "#",
  //   },
  //   {
  //     title: "Alexa Custom Skill",
  //     description:
  //       "Developed a custom audio skill for Amazon Echo Spot, integrating with external APIs for dynamic content.",
  //     images: [
  //       "/placeholder.svg?height=300&width=500&text=Alexa+1",
  //       "/placeholder.svg?height=300&width=500&text=Alexa+2",
  //     ],
  //     link: "#",
  //   },
  //   {
  //     title: "Power BI Dashboards",
  //     description:
  //       "Created interactive Power BI dashboards for data visualization and business intelligence reporting.",
  //     images: [
  //       "/placeholder.svg?height=300&width=500&text=PowerBI+1",
  //       "/placeholder.svg?height=300&width=500&text=PowerBI+2",
  //       "/placeholder.svg?height=300&width=500&text=PowerBI+3",
  //     ],
  //             points: [
  //   "Optimized membership listing page in Divi theme using ACF for dynamic data.",
  //   "Enhanced data presentation and admin flexibility with custom ACF fields."
  // ],
  // skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  //     link: "#",
  //   },
  //   {
  //     title: "Custom Web Application",
  //     description:
  //       "Developed a bespoke web application for a client, focusing on unique business logic and user experience.",
  //     images: [
  //       "/placeholder.svg?height=300&width=500&text=Web+App+1",
  //       "/placeholder.svg?height=300&width=500&text=Web+App+2",
  //     ],
  //             points: [
  //   "Optimized membership listing page in Divi theme using ACF for dynamic data.",
  //   "Enhanced data presentation and admin flexibility with custom ACF fields."
  // ],
  // skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  //     link: "#",
  //   },
  //   {
  //     title: "API Development & Integration",
  //     description:
  //       "Built and integrated RESTful APIs for various client projects, ensuring seamless data flow and security.",
  //     images: ["/placeholder.svg?height=300&width=500&text=API+1", "/placeholder.svg?height=300&width=500&text=API+2"],
  //             points: [
  //   "Optimized membership listing page in Divi theme using ACF for dynamic data.",
  //   "Enhanced data presentation and admin flexibility with custom ACF fields."
  // ],
  // skills: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  //     link: "#",
  //   },
  ]

  return (

    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
  <CardHeader>
    <CardTitle className="text-2xl font-bold">Portfolio Projects</CardTitle>
  </CardHeader>
  <CardContent className="p-6 pt-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
 
  {/* <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"> */}
    {projects?.map((project, index) => (
      <Card
        key={index}
        className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <ImageCarousel
          images={project.images}
          altPrefix={project.title}
          width={500}
          height={300}
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

          {/* Description points */}
          <ul className="text-sm text-muted-foreground mb-4 list-disc list-inside space-y-1 flex-grow">
            {project?.points?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.skills?.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* View button */}
          {/* <Button
            asChild
            variant="outline"
            className="mt-auto bg-black text-white transition-all duration-300 hover:scale-105"
          >
            <Link href={project.link}>View Project</Link>
          </Button> */}
        </div>
      </Card>
    ))}
  </CardContent>
</Card>

    // <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
    //   <CardHeader>
    //     <CardTitle className="text-2xl font-bold">Portfolio Projects</CardTitle>
    //   </CardHeader>
    //   <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
    //     {projects.map((project, index) => (
    //       <Card
    //         key={index}
    //         className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    //       >
    //         <ImageCarousel images={project.images} altPrefix={project.title} width={500} height={300} />
    //         <div className="p-4 flex flex-col flex-grow">
    //           <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    //           <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
    //           <Button
    //             asChild
    //             variant="outline"
    //             className="mt-auto bg-black text-white transition-all duration-300 hover:scale-105"
    //           >
    //             <Link href={project.link}>View Project</Link>
    //           </Button>
    //         </div>
    //       </Card>
    //     ))}
    //   </CardContent>
    // </Card>
  )
}
