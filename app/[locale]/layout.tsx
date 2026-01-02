import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Cormorant_Garamond } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"
import ClientLayout from "../client-layout"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

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
    <html lang={locale} className="scroll-smooth">
      <body className={`${GeistSans.className} ${cormorant.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
