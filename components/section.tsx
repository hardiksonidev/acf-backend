import type * as React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section id={id} className={`w-full ${className}`} {...props}>
      {children}
    </section>
  )
}
