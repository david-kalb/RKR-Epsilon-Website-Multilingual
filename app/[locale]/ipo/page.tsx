import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IpoOverview } from "@/components/ipo-overview"
import type { Metadata } from "next"
import iposData from "@/data/ipos.json"

type IposDataType = Record<string, any>

const ipos: IposDataType = iposData as IposDataType

type Props = {
  params: Promise<{
    locale: "en" | "de"
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const title = locale === "de" 
    ? "Pre-IPO Investmentmöglichkeiten | RKR Epsilon"
    : "Pre-IPO Investment Opportunities | RKR Epsilon"
  
  const description = locale === "de"
    ? "Entdecken Sie exklusive Pre-IPO Investmentmöglichkeiten. Zugang zu führenden Unternehmen vor dem Börsengang."
    : "Discover exclusive Pre-IPO investment opportunities. Access leading companies before their public listing."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      languages: {
        en: `/en/ipo`,
        de: `/de/ipo`,
      },
    },
  }
}

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "de" },
  ]
}

export default async function IpoOverviewPage({ params }: Props) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      <Navigation />
      <IpoOverview ipos={ipos} locale={locale} />
      <Footer />
    </main>
  )
}
