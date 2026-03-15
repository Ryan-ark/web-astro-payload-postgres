import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'CMS',
  description: 'Payload CMS backend for the Astro sample project.',
}

type MarketingLayoutProps = {
  children: ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
