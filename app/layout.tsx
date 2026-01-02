import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RKR Epsilon | Strategic Investment Banking',
  description: 'RKR Epsilon provides tailored investment banking services for discerning private and institutional clients.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
