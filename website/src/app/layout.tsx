import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ezmate.ai - AI Automation for Australian SMBs',
  description: 'Stop losing leads while you sleep. Download the FREE AI Profit Blueprint and discover how Australian SMBs are saving 20+ hours/week with AI automation.',
  keywords: 'AI automation, chatbot, Australian SMB, business automation, AI agency',
  openGraph: {
    title: 'Free AI Profit Blueprint | ezmate.ai',
    description: 'Discover how Australian SMBs are saving 20+ hours/week with AI automation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
