type Props = {
  locale: "en" | "de"
}

const copy: Record<Props["locale"], { title: string; description: string }> = {
  de: {
    title: "Konto-/Depotvertrag & Preisblatt",
    description:
      "Bestätigung über den Erhalt einer Ausfertigung des Konto-/Depotvertrages einschließlich des Preisblattes (Auszug aus dem Depotantrag).",
  },
  en: {
    title: "Account/Securities Agreement & Price Sheet",
    description:
      "Confirmation of receipt of a copy of the account/securities agreement including the price sheet (excerpt from the depot application).",
  },
}

export function ContractCopyAndPriceSheetPageHero({ locale }: Props) {
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

