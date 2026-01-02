"use client"

import type React from "react"

import { Suspense } from "react"
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
      <CookieBanner />
    </>
  )
}
