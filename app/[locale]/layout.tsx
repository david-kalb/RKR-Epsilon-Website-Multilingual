import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import ClientLayout from "../client-layout"

export const metadata: Metadata = {
  title: "RKR Epsilon | Strategic Investment Banking",
  description:
    "RKR Epsilon provides tailored investment banking services for discerning private and institutional clients.",
  generator: "v0.app",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
