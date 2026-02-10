import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IpoFactSheet } from "@/components/ipo-fact-sheet"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import iposData from "@/data/ipos.json"

type PricePhase = {
  phase: string
  price: number | null
  timing: string
  isCurrent?: boolean
}

type IpoData = {
  name: string
  slug: string
  ticker: string
  industryKey: string
  exchange: string
  expectedDate: string
  statusKey: string
  valuation: string
  priceRange: string
  sharesOfferedKey: string
  underwriters: string[]
  financials: {
    revenue: string | number
    revenueGrowth: string | number
    netIncome: string | number
    employees: string | number
  }
  highlightsCount: number
  founded: string
  headquarters: string
  ceo: string
  website: string
  pricePhases?: PricePhase[]
}

type IposDataType = Record<string, IpoData>

const ipos: IposDataType = iposData as IposDataType

type Props = {
  params: Promise<{
    locale: "en" | "de"
    name: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, name } = await params
  const ipo = ipos[name.toLowerCase()]

  if (!ipo) {
    return {
      title: "IPO Not Found | RKR Epsilon",
      description: "The requested IPO fact sheet could not be found."
    }
  }

  const title = locale === "de" 
    ? `${ipo.name} IPO Factsheet | RKR Epsilon`
    : `${ipo.name} IPO Fact Sheet | RKR Epsilon`
  
  const description = locale === "de"
    ? `IPO-Informationen und Factsheet für ${ipo.name}. Erwartete Bewertung: ${ipo.valuation}.`
    : `IPO information and fact sheet for ${ipo.name}. Expected valuation: ${ipo.valuation}.`

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
        en: `/en/ipo/${name}`,
        de: `/de/ipo/${name}`,
      },
    },
  }
}

export async function generateStaticParams() {
  const locales: ("en" | "de")[] = ["en", "de"]
  const ipoNames = Object.keys(ipos)

  const params = []
  for (const locale of locales) {
    for (const name of ipoNames) {
      params.push({
        locale,
        name,
      })
    }
  }

  return params
}

export default async function IpoPage({ params }: Props) {
  const { locale, name } = await params
  const ipo = ipos[name.toLowerCase()]

  if (!ipo) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <IpoFactSheet ipo={ipo} locale={locale} />
      <Footer />
    </main>
  )
}

