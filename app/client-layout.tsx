"use client"

import type React from "react"

import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CookieBanner } from "@/components/cookie-banner"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
      <CookieBanner />
    </>
  )
}
