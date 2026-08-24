import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Eliseo Cea - Medieval Portfolio',
  description: 'Full Stack Developer Portfolio with Medieval Fantasy Theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
