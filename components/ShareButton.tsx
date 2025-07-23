'use client'
import { useState } from 'react'
import { CardContent } from './ui/card'
import { LinkIcon, Share } from 'lucide-react'
import { Button } from './ui/button'
import Link from "next/link"
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
    //   <CardContent className="grid-cols-4 sm:grid-cols-4 gap-4">
    <Button asChild variant="outline" onClick={shareLink} className="flex justify-center gap-2 transition-all duration-300 hover:scale-105 bg-gray-900 text-white hover:bg-gray-800 hover:text-white transition-all">
      <Link href='#'>
              <Share className="h-5 w-5" />
              <span>{copied ? 'Link copied!' : 'Share'}</span>
            </Link>
    </Button>
    // </CardContent>
  )
}
