"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { 
  TrendingUp, 
  Calendar, 
  Building2,
  ArrowRight,
  Sparkles
} from "lucide-react"

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

type Props = {
  ipos: Record<string, IpoData>
  locale: "en" | "de"
}

// Format currency values with Mrd./Mio. abbreviations
const formatCurrency = (value: string | number): string => {
  if (typeof value === 'string') return value
  
  const absValue = Math.abs(value)
  
  if (absValue >= 1_000_000_000) {
    const mrd = value / 1_000_000_000
    return mrd.toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' Mrd. €'
  } else if (absValue >= 1_000_000) {
    const mio = value / 1_000_000
    return mio.toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' Mio. €'
  } else {
    return value.toLocaleString('de-DE') + ' €'
  }
}

// Get current price from price phases
const getCurrentPrice = (pricePhases?: PricePhase[]): number | null => {
  if (!pricePhases) return null
  const current = pricePhases.find(p => p.isCurrent)
  return current?.price ?? null
}

// Format price
const formatPrice = (price: number | null): string => {
  if (price === null) return 'TBD'
  return price.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' €'
}

export function IpoOverview({ ipos, locale }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("ipo")
  const tPage = useTranslations("ipoPage")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const ipoList = Object.entries(ipos)

  return (
    <section ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy-primary)] to-[var(--navy-dark)] py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="fade-in-element inline-flex items-center gap-2 bg-[var(--gold-accent)]/20 border border-[var(--gold-accent)]/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--gold-accent)]" />
              <span className="text-[var(--gold-accent)] text-sm font-medium tracking-wide uppercase">
                {tPage("badge")}
              </span>
            </div>
            
            <h1 className="fade-in-element font-serif text-5xl md:text-7xl font-light text-white mb-6">
              {tPage("title")}
            </h1>
            
            <div className="fade-in-element w-24 h-0.5 bg-[var(--gold-accent)] mx-auto mb-8" />
            
            <p className="fade-in-element text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {tPage("description")}
            </p>
          </div>
        </div>
      </div>

      {/* IPO Grid Section */}
      <div className="py-20 bg-[var(--off-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-in-element font-serif text-3xl md:text-4xl font-light text-[var(--navy-dark)] mb-6">
              {tPage("availableTitle")}
            </h2>
            <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mx-auto mb-6" />
            <p className="fade-in-element text-[var(--navy-primary)]/70 max-w-2xl mx-auto">
              {tPage("availableSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ipoList.map(([key, ipo]) => {
              const currentPrice = getCurrentPrice(ipo.pricePhases)
              
              return (
                <Link
                  key={key}
                  href={`/${locale}/ipo/${key}`}
                  className="fade-in-element group"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-[var(--navy-primary)]/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[var(--gold-accent)]/30 h-full flex flex-col">
                    {/* Card Header */}
                    <div className="bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-primary)] p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-2xl text-white group-hover:text-[var(--gold-accent)] transition-colors">
                            {ipo.name}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">{ipo.ticker} · {ipo.exchange}</p>
                        </div>
                        <div className="bg-[var(--gold-accent)]/20 border border-[var(--gold-accent)]/30 px-3 py-1 rounded-full">
                          <span className="text-[var(--gold-accent)] text-xs font-medium">
                            {t(ipo.statusKey)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Building2 className="w-4 h-4" />
                        <span>{t(ipo.industryKey)}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-grow">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-[var(--navy-primary)]/60 text-xs uppercase tracking-wider mb-1">
                            {t("valuation")}
                          </p>
                          <p className="text-[var(--navy-dark)] font-medium">
                            {ipo.valuation}
                          </p>
                        </div>
                        <div>
                          <p className="text-[var(--navy-primary)]/60 text-xs uppercase tracking-wider mb-1">
                            {tPage("currentPrice")}
                          </p>
                          <p className="text-[var(--navy-dark)] font-medium">
                            {formatPrice(currentPrice)}
                          </p>
                        </div>
                        <div>
                          <p className="text-[var(--navy-primary)]/60 text-xs uppercase tracking-wider mb-1">
                            {t("expectedDate")}
                          </p>
                          <p className="text-[var(--navy-dark)] font-medium flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {ipo.expectedDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-[var(--navy-primary)]/60 text-xs uppercase tracking-wider mb-1">
                            {t("revenue")}
                          </p>
                          <p className="text-[var(--navy-dark)] font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-green-600" />
                            {formatCurrency(ipo.financials.revenue)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--navy-primary)]/10">
                        <span className="text-[var(--gold-accent)] font-medium text-sm group-hover:text-[var(--navy-dark)] transition-colors">
                          {tPage("viewDetails")}
                        </span>
                        <ArrowRight className="w-5 h-5 text-[var(--gold-accent)] group-hover:text-[var(--navy-dark)] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="fade-in-element font-serif text-2xl md:text-3xl text-[var(--navy-dark)] mb-4">
            {tPage("ctaTitle")}
          </h3>
          <p className="fade-in-element text-[var(--navy-primary)]/70 mb-8">
            {tPage("ctaDescription")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="fade-in-element inline-flex items-center gap-2 bg-[var(--navy-dark)] text-white px-8 py-4 rounded-lg hover:bg-[var(--gold-accent)] hover:text-[var(--navy-dark)] transition-all font-medium"
          >
            {tPage("ctaButton")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-12 bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-white/50 text-sm text-center leading-relaxed">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </section>
  )
}
