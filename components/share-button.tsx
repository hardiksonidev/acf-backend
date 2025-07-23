"use client"

import { useState } from "react"
import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const shareLink = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url })
      } catch {}
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
          <Button variant="outline" 
        onClick={shareLink}
      >
        <Share  className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"  />
                          Share
      </Button>
    // <Button
    //   size="sm"
    //   className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
    //   onClick={shareLink}
    // >
    //   <Share className="h-4 w-4 mr-2" />
    //   <span>{copied ? "Link copied!" : "Share"}</span>
    // </Button>
  )
}
