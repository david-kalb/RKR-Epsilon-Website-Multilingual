"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { 
  Building2, 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe, 
  Briefcase,
  Target,
  CheckCircle,
  ArrowUpRight,
  BarChart3,
  Landmark
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

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
  industry: string
  exchange: string
  expectedDate: string
  status: string
  valuation: string
  priceRange: string
  sharesOffered: string
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
  ipo: IpoData
  locale: "en" | "de"
}

// Format price in European format: XXX.XXX,XX €
const formatPrice = (price: number | null): string => {
  if (price === null || price === undefined) {
    return 'TBD'
  }
  return price.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' €'
}

// Format price for chart display without thousand separators and decimals
const formatChartPrice = (price: number | null): string => {
  if (price === null || price === undefined) {
    return 'TBD'
  }
  return Math.round(price) + ' €'
}

// Format currency values (revenue, net income) with Mrd./Mio. abbreviations
const formatCurrency = (value: string | number): string => {
  if (typeof value === 'string') return value
  
  const absValue = Math.abs(value)
  
  if (absValue >= 1_000_000_000) {
    // Milliarden (Billions)
    const mrd = value / 1_000_000_000
    return mrd.toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' Mrd. €'
  } else if (absValue >= 1_000_000) {
    // Millionen (Millions)
    const mio = value / 1_000_000
    return mio.toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' Mio. €'
  } else {
    return value.toLocaleString('de-DE') + ' €'
  }
}

// Format percentage values
const formatPercentage = (value: string | number): string => {
  if (typeof value === 'string') return value
  return value.toLocaleString('de-DE') + '%'
}

// Format number with thousand separators (for employees, etc.)
const formatNumber = (value: string | number): string => {
  if (typeof value === 'string') return value
  return value.toLocaleString('de-DE')
}

export function IpoFactSheet({ ipo, locale }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("ipo")

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
              <span className="w-2 h-2 bg-[var(--gold-accent)] rounded-full animate-pulse" />
              <span className="text-[var(--gold-accent)] text-sm font-medium tracking-wide uppercase">
                {ipo.status}
              </span>
            </div>
            
            <h1 className="fade-in-element font-serif text-5xl md:text-7xl font-light text-white mb-4">
              {ipo.name}
            </h1>
            
            <p className="fade-in-element text-xl md:text-2xl text-white/60 font-light mb-8">
              {t("title")}
            </p>
            
            <div className="fade-in-element w-24 h-0.5 bg-[var(--gold-accent)] mx-auto mb-12" />
            
            {/* Key Stats Grid */}
            <div className="fade-in-element grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <p className="text-[var(--gold-accent)] text-sm uppercase tracking-wider mb-2">{t("valuation")}</p>
                <p className="text-white text-2xl md:text-3xl font-light">{ipo.valuation}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <p className="text-[var(--gold-accent)] text-sm uppercase tracking-wider mb-2">{t("exchange")}</p>
                <p className="text-white text-2xl md:text-3xl font-light">{ipo.exchange}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <p className="text-[var(--gold-accent)] text-sm uppercase tracking-wider mb-2">{t("priceRange")}</p>
                <p className="text-white text-2xl md:text-3xl font-light">{ipo.priceRange}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <p className="text-[var(--gold-accent)] text-sm uppercase tracking-wider mb-2">{t("expectedDate")}</p>
                <p className="text-white text-2xl md:text-3xl font-light">{ipo.expectedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="py-20 bg-[var(--off-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="fade-in-element font-serif text-3xl md:text-4xl font-light text-[var(--navy-dark)] mb-6">
                {t("overview")}
              </h2>
              <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mb-8" />
              <p className="fade-in-element text-lg text-[var(--navy-primary)]/80 leading-relaxed">
                {t(`${ipo.slug}.description`)}
              </p>
              
              {/* Highlights */}
              <div className="mt-10">
                <h3 className="fade-in-element font-serif text-2xl text-[var(--navy-dark)] mb-6">
                  {t("highlights")}
                </h3>
                <ul className="space-y-4">
                  {Array.from({ length: ipo.highlightsCount }, (_, index) => (
                    <li key={index} className="fade-in-element flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--gold-accent)] flex-shrink-0 mt-1" />
                      <span className="text-[var(--navy-primary)]/80">{t(`${ipo.slug}.highlights.${index + 1}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="fade-in-element">
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-[var(--navy-primary)]/10">
                <div className="bg-[var(--navy-dark)] p-6">
                  <h3 className="font-serif text-xl text-white">{t("companyInfo")}</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[var(--navy-dark)]/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[var(--navy-dark)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--navy-primary)]/60">{t("ticker")}</p>
                      <p className="font-medium text-[var(--navy-dark)]">{ipo.ticker}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[var(--navy-dark)]/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[var(--navy-dark)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--navy-primary)]/60">{t("industry")}</p>
                      <p className="font-medium text-[var(--navy-dark)]">{ipo.industry}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[var(--navy-dark)]/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[var(--navy-dark)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--navy-primary)]/60">{t("founded")}</p>
                      <p className="font-medium text-[var(--navy-dark)]">{ipo.founded}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[var(--navy-dark)]/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[var(--navy-dark)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--navy-primary)]/60">{t("headquarters")}</p>
                      <p className="font-medium text-[var(--navy-dark)]">{ipo.headquarters}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[var(--navy-dark)]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[var(--navy-dark)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--navy-primary)]/60">CEO</p>
                      <p className="font-medium text-[var(--navy-dark)]">{ipo.ceo}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-[var(--navy-primary)]/10">
                    <a 
                      href={`https://${ipo.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--gold-accent)] hover:text-[var(--navy-dark)] transition-colors"
                    >
                      <span>{ipo.website}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-in-element font-serif text-3xl md:text-4xl font-light text-[var(--navy-dark)] mb-6">
              {t("financials")}
            </h2>
            <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="fade-in-element bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-primary)] p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-[var(--gold-accent)]" />
              </div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{t("revenue")}</p>
              <p className="text-white text-3xl font-light">{formatCurrency(ipo.financials.revenue)}</p>
            </div>
            
            <div className="fade-in-element bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-primary)] p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-[var(--gold-accent)]" />
              </div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{t("revenueGrowth")}</p>
              <p className="text-white text-3xl font-light">{formatPercentage(ipo.financials.revenueGrowth)}</p>
            </div>
            
            <div className="fade-in-element bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-primary)] p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-[var(--gold-accent)]" />
              </div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{t("netIncome")}</p>
              <p className="text-white text-3xl font-light">{formatCurrency(ipo.financials.netIncome)}</p>
            </div>
            
            <div className="fade-in-element bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-primary)] p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-[var(--gold-accent)]" />
              </div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{t("employees")}</p>
              <p className="text-white text-3xl font-light">{formatNumber(ipo.financials.employees)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Projection Chart Section */}
      {ipo.pricePhases && ipo.pricePhases.length > 0 && (() => {
        const currentIndex = ipo.pricePhases.findIndex(p => p.isCurrent)
        const getPhaseStatus = (index: number) => {
          if (ipo.pricePhases![index].isCurrent) return 'current'
          if (currentIndex === -1) return 'upcoming'
          return index < currentIndex ? 'closed' : 'upcoming'
        }
        
        return (
        <div className="py-20 bg-[var(--off-white)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in-element font-serif text-3xl md:text-4xl font-light text-[var(--navy-dark)] mb-6">
                {t("priceProjection")}
              </h2>
              <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mx-auto mb-6" />
              <p className="fade-in-element text-[var(--navy-primary)]/70">
                {t("priceProjectionSubtitle")}
              </p>
            </div>

            <div className="fade-in-element bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-[var(--navy-primary)]/10">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={ipo.pricePhases}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A962" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#C9A962" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="#1B2B4B" 
                      strokeOpacity={0.1} 
                      vertical={false}
                    />
                    <XAxis 
                      dataKey="phase" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1B2B4B', fontSize: 12, opacity: 0.7 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1B2B4B', fontSize: 12, opacity: 0.7 }}
                      tickFormatter={(value) => formatChartPrice(value)}
                      dx={-10}
                      domain={[0, 'auto']}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as PricePhase
                          const idx = ipo.pricePhases!.findIndex(p => p.phase === data.phase)
                          const status = getPhaseStatus(idx)
                          return (
                            <div className="bg-[var(--navy-dark)] text-white p-4 rounded-xl shadow-xl border border-[var(--gold-accent)]/20">
                              <div className="flex items-center gap-2 mb-2">
                                <p className="text-[var(--gold-accent)] text-sm font-medium">
                                  {data.phase}
                                </p>
                                {status === 'current' && (
                                  <span className="px-2 py-0.5 bg-[var(--gold-accent)] text-[var(--navy-dark)] text-xs font-medium rounded">
                                    {t("currentPhase")}
                                  </span>
                                )}
                                {status === 'closed' && (
                                  <span className="px-2 py-0.5 bg-white/30 text-white/90 text-xs font-medium rounded">
                                    {t("closed")}
                                  </span>
                                )}
                                {status === 'upcoming' && (
                                  <span className="px-2 py-0.5 bg-white/20 text-white/80 text-xs font-medium rounded">
                                    {t("upcoming")}
                                  </span>
                                )}
                              </div>
                              <p className="text-2xl font-light">
                                {formatChartPrice(data.price)}
                              </p>
                              <p className="text-white/60 text-sm mt-1">
                                {data.timing}
                              </p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#C9A962"
                      strokeWidth={3}
                      fill="url(#currentGradient)"
                      dot={(props) => {
                        const { cx, cy, payload, index } = props
                        const data = payload as PricePhase
                        const status = getPhaseStatus(index)
                        
                        if (status === 'current') {
                          return (
                            <g key={`dot-${index}`}>
                              <circle cx={cx} cy={cy} r={14} fill="#C9A962" fillOpacity={0.2} />
                              <circle cx={cx} cy={cy} r={9} fill="#C9A962" stroke="#1B2B4B" strokeWidth={2} />
                            </g>
                          )
                        }
                        if (status === 'closed') {
                          return (
                            <circle
                              key={`dot-${index}`}
                              cx={cx}
                              cy={cy}
                              r={6}
                              fill="#6B7280"
                              stroke="#9CA3AF"
                              strokeWidth={2}
                            />
                          )
                        }
                        return (
                          <circle
                            key={`dot-${index}`}
                            cx={cx}
                            cy={cy}
                            r={6}
                            fill="#1B2B4B"
                            stroke="#C9A962"
                            strokeWidth={2}
                            strokeDasharray="4 2"
                          />
                        )
                      }}
                      activeDot={{
                        fill: '#C9A962',
                        stroke: '#1B2B4B',
                        strokeWidth: 2,
                        r: 10,
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Phase Legend */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {ipo.pricePhases.map((item, index) => {
                  const status = getPhaseStatus(index)
                  return (
                  <div 
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                      status === 'current'
                        ? 'bg-[var(--gold-accent)]/10 border-[var(--gold-accent)]' 
                        : status === 'closed'
                        ? 'bg-gray-100 border-gray-300'
                        : 'bg-[var(--navy-dark)]/5 border-transparent'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${
                      status === 'current'
                        ? 'bg-[var(--gold-accent)]' 
                        : status === 'closed'
                        ? 'bg-gray-400'
                        : 'bg-[var(--navy-dark)]/40 border-2 border-dashed border-[var(--navy-dark)]/60'
                    }`} />
<span className={`text-sm ${status === 'closed' ? 'text-gray-500' : 'text-[var(--navy-dark)]'}`}>
                                      <span className="font-medium">{item.phase}:</span> {formatChartPrice(item.price)}
                                    </span>
                    {status === 'current' && (
                      <span className="text-xs px-2 py-0.5 bg-[var(--gold-accent)] text-[var(--navy-dark)] font-medium rounded">
                        {t("current")}
                      </span>
                    )}
                    {status === 'closed' && (
                      <span className="text-xs text-gray-500">
                        ({t("closed")})
                      </span>
                    )}
                    {status === 'upcoming' && (
                      <span className="text-xs text-[var(--navy-primary)]/60">
                        ({t("upcoming")})
                      </span>
                    )}
                  </div>
                )})}
              </div>
            </div>
          </div>
        </div>
        )
      })()}

      {/* Offering Details Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-in-element font-serif text-3xl md:text-4xl font-light text-[var(--navy-dark)] mb-6">
              {t("offeringDetails")}
            </h2>
            <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Offering Info */}
            <div className="fade-in-element bg-[var(--off-white)] shadow-lg rounded-2xl p-8 border border-[var(--navy-primary)]/10">
              <h3 className="font-serif text-2xl text-[var(--navy-dark)] mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-[var(--gold-accent)]" />
                {t("ipoTerms")}
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[var(--navy-primary)]/10">
                  <span className="text-[var(--navy-primary)]/70">{t("expectedDate")}</span>
                  <span className="font-medium text-[var(--navy-dark)]">{ipo.expectedDate}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[var(--navy-primary)]/10">
                  <span className="text-[var(--navy-primary)]/70">{t("priceRange")}</span>
                  <span className="font-medium text-[var(--navy-dark)]">{ipo.priceRange}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[var(--navy-primary)]/10">
                  <span className="text-[var(--navy-primary)]/70">{t("sharesOffered")}</span>
                  <span className="font-medium text-[var(--navy-dark)]">{ipo.sharesOffered}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[var(--navy-primary)]/10">
                  <span className="text-[var(--navy-primary)]/70">{t("valuation")}</span>
                  <span className="font-medium text-[var(--navy-dark)]">{ipo.valuation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--navy-primary)]/70">{t("exchange")}</span>
                  <span className="font-medium text-[var(--navy-dark)]">{ipo.exchange}</span>
                </div>
              </div>
            </div>

            {/* Underwriters */}
            <div className="fade-in-element bg-[var(--off-white)] shadow-lg rounded-2xl p-8 border border-[var(--navy-primary)]/10">
              <h3 className="font-serif text-2xl text-[var(--navy-dark)] mb-6 flex items-center gap-3">
                <Landmark className="w-6 h-6 text-[var(--gold-accent)]" />
                {t("underwriters")}
              </h3>
              <div className="space-y-4">
                {ipo.underwriters.map((underwriter, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[var(--navy-primary)]/10"
                  >
                    <div className="w-10 h-10 bg-[var(--navy-dark)] rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">{index + 1}</span>
                    </div>
                    <span className="text-[var(--navy-dark)] font-medium">{underwriter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

