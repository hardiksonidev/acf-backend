"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, FileText, MessageCircle, Lightbulb, Settings, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import ShareButton from "./share-button"
import FilloutPopup from "./fillout-popup"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  // { href: "/about", label: "About", icon: User },
  // { href: "/freelancer", label: "Freelancer", icon: Code },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/projects", label: "Projects", icon: Briefcase },
  // { href: "/resume", label: "Resume", icon: FileText },
  // { href: "/blog", label: "Blog", icon: Lightbulb },
  { href: "/contact", label: "Contact", icon: MessageCircle },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-mono font-bold text-xl gradient-text">
              HS
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 text-sm ${
                      pathname === item.href ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <FilloutPopup />
                            <ShareButton />
              <ThemeToggle />

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
                         {/* <FilloutPopup />
                            <ShareButton /> */}
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-64 glass-effect p-6"
            >
              <div className="flex flex-col space-y-4 mt-16">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                        pathname === item.href ? "text-blue-500 bg-blue-500/10" : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
