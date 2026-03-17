import type { ReactNode } from "react"

type Props = {
  locale: "en" | "de"
}

const copy: Record<Props["locale"], { title: ReactNode; description: ReactNode }> = {
  de: {
    title: "AGB Depotantrag",
    description: "Allgemeine Bedingungen für die Eröffnung und Führung eines Wertpapierdepots inkl. Pluskonto (Verrechnungskonto).",
  },
  en: {
    title: "Depot Application – Terms",
    description: "General conditions for opening and maintaining a securities account incl. a settlement account (Pluskonto).",
  },
}

export function DepotApplicationTermsPageHero({ locale }: Props) {
  const c = copy[locale]

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-light)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/modern-corporate-office.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--off-white)] mb-6">{c.title}</h1>
        <div className="w-24 h-1 bg-[var(--gold-accent)] mx-auto mb-6" />
        <p className="text-xl text-[var(--off-white)]/90 leading-relaxed">{c.description}</p>
      </div>
    </section>
  )
}

