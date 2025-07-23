"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, Mail, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting me through forms or email",
      "Technical information such as IP address, browser type, and device information",
      "Usage data including pages visited and time spent on the website",
      "Cookies and similar tracking technologies for website functionality",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To respond to your inquiries and provide requested information",
      "To improve website functionality and user experience",
      "To analyze website usage and optimize content",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: [
      "We implement appropriate security measures to protect your personal information",
      "Data is encrypted during transmission using SSL/TLS protocols",
      "Access to personal information is restricted to authorized personnel only",
      "Regular security assessments are conducted to maintain data integrity",
    ],
  },
  {
    icon: Mail,
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties",
      "Information may be shared with service providers who assist in website operations",
      "We may disclose information when required by law or to protect our rights",
      "Anonymous, aggregated data may be used for analytical purposes",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your privacy is important to me. This policy explains how I collect, use, and protect your information
              when you visit my website.
            </p>
            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Last updated: January 2024</span>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  This website uses cookies and similar tracking technologies to enhance your browsing experience.
                  Cookies are small text files stored on your device that help us understand how you use our website.
                </p>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling cookies may
                  affect the functionality of certain features on this website.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  You have the right to access, update, or delete your personal information. If you have any concerns
                  about how your data is handled, please contact me using the information provided below.
                </p>
                <p>
                  You may also opt out of certain communications or data collection practices by contacting me directly.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I may update this privacy policy from time to time to reflect changes in my practices or for other
                  operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated
                  revision date.
                </p>
                <p>
                  I encourage you to review this policy periodically to stay informed about how I protect your
                  information.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  If you have any questions about this privacy policy or how your information is handled, please contact
                  me:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> hardik100nis@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8238321218
                  </p>
                  <p>
                    <strong>Location:</strong> Vadodara, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
