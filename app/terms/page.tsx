"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Scale, AlertTriangle, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by the above, please do not use this service.",
      "These terms apply to all visitors, users, and others who access or use the service.",
    ],
  },
  {
    icon: Users,
    title: "Use License",
    content: [
      "Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.",
      "This is the grant of a license, not a transfer of title, and under this license you may not:",
      "• Modify or copy the materials",
      "• Use the materials for any commercial purpose or for any public display",
      "• Attempt to reverse engineer any software contained on the website",
      "• Remove any copyright or other proprietary notations from the materials",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer",
    content: [
      "The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      "Further, I do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
    ],
  },
  {
    icon: Scale,
    title: "Limitations",
    content: [
      "In no event shall Hardik Soni or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or my authorized representative has been notified orally or in writing of the possibility of such damage.",
      "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
    ],
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    content: [
      "Your privacy is important to me. Please review my Privacy Policy, which also governs your use of the website, to understand my practices.",
      "By using this website, you consent to the collection and use of information as outlined in the Privacy Policy.",
      "I reserve the right to modify the Privacy Policy at any time, and such modifications will be effective immediately upon posting.",
    ],
  },
]

export default function TermsPage() {
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
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using my website and services.
            </p>
            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Last updated: January 2024</span>
            </div>
          </motion.div>

          {/* Terms Sections */}
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
                      <div className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you
                  irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I reserve the right, at my sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, I will try to provide at least 30 days notice prior to any new terms taking
                  effect.
                </p>
                <p>
                  What constitutes a material change will be determined at my sole discretion. By continuing to access
                  or use my service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>If you have any questions about these Terms and Conditions, please contact me:</p>
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
