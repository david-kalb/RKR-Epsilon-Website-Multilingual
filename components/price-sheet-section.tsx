type Props = {
  locale: "en" | "de"
}

type FeeRow = {
  service: string
  price: string
  notes?: string
}

const de = {
  intro:
    "Dieses Preisblatt ist eine strukturierte Darstellung typischer Preisblatt-Positionen für Depot-/Kontoführung und Wertpapierdienstleistungen. Die nachstehenden Beträge sind fiktive Beispielwerte zur Darstellung (nicht verbindlich). Verbindlich sind ausschließlich die vertraglich vereinbarten Entgelte gemäß Preisblatt in der jeweils gültigen Fassung.",
  updatedLabel: "Stand",
  updatedValue: "02/2026 (Beispiel)",
  sections: [
    {
      title: "A. Depot-/Kontoführung",
      rows: [
        { service: "Depotführung (laufend)", price: "9,90 € / Monat", notes: "Beispiel; abhängig vom Depotmodell" },
        { service: "Kontoführung Pluskonto (Verrechnungskonto)", price: "0,00 €", notes: "Beispiel; sofern nicht gesondert bepreist" },
        { service: "Konto-/Depotauszüge (elektronisch)", price: "0,00 €", notes: "Mailbox/Electronic Banking (Beispiel)" },
        { service: "Konto-/Depotauszüge (postalisch)", price: "2,50 € / Auszug", notes: "Beispiel; falls angeboten/vereinbart" },
      ],
    },
    {
      title: "B. Wertpapiertransaktionen",
      rows: [
        {
          service: "Kauf / Verkauf (Orderentgelt)",
          price: "0,25% (min. 14,90 € / max. 99,00 €)",
          notes: "Beispiel; zzgl. Fremdspesen/Börsengebühren, falls anwendbar",
        },
        { service: "Depotübertrag (ein-/ausgehend)", price: "49,00 € / Position", notes: "Beispiel; je nach Umfang/Markt" },
        { service: "Kapitalmaßnahmen (z.B. Splits, Dividendenabwicklung)", price: "9,90 € / Vorgang", notes: "Beispiel; soweit bepreist" },
      ],
    },
    {
      title: "C. Zahlungsverkehr rund ums Pluskonto",
      rows: [
        { service: "Einzahlung (Überweisung vom Referenzkonto)", price: "0,00 €", notes: "Beispiel; i.d.R. per Überweisung" },
        { service: "Auszahlung (Überweisung auf Referenzkonto)", price: "0,00 €", notes: "Beispiel; Beschränkung auf Referenzkonto gemäß Antrag" },
        { service: "Fremdwährung (falls beantragt/geführt)", price: "0,50% FX-Entgelt", notes: "Beispiel; FX-Spread/Entgelt, sofern im Preisblatt" },
      ],
    },
    {
      title: "D. Sonstiges / Kommunikation",
      rows: [
        { service: "Electronic Banking (Zugang/Entgelte)", price: "0,00 €", notes: "Beispiel; sofern im Preisblatt vorgesehen" },
        { service: "Telefonservice (sofern angeboten)", price: "4,90 € / Monat", notes: "Beispiel; abhängig von Produktumfang" },
      ],
    },
  ] as { title: string; rows: FeeRow[] }[],
  table: {
    service: "Leistung",
    price: "Preis",
    notes: "Hinweis",
  },
  disclaimer:
    "Wichtiger Hinweis: Alle hier dargestellten Beträge sind fiktive Beispielpreise zur Illustration und stellen kein Angebot dar. Verbindlich sind ausschließlich die vertraglich vereinbarten Entgelte gemäß Preisblatt in der jeweils gültigen Fassung.",
}

const en = {
  intro:
    "This page is a structured representation of typical price sheet items for custody/account maintenance and securities services. The amounts shown below are fictional example values for presentation only (non-binding). Only the contractually agreed fees in the applicable price sheet are binding.",
  updatedLabel: "Effective date",
  updatedValue: "02/2026 (example)",
  sections: [
    {
      title: "A. Custody / Account maintenance",
      rows: [
        { service: "Custody fee (ongoing)", price: "€9.90 / month", notes: "Example; model-dependent" },
        { service: "Settlement account (Pluskonto) maintenance", price: "€0.00", notes: "Example; if not priced separately" },
        { service: "Statements (electronic)", price: "€0.00", notes: "Mailbox / online banking (example)" },
        { service: "Statements (postal)", price: "€2.50 / statement", notes: "Example; if offered/agreed" },
      ],
    },
    {
      title: "B. Securities transactions",
      rows: [
        { service: "Buy / Sell (order fee)", price: "0.25% (min €14.90 / max €99.00)", notes: "Example; plus external fees if applicable" },
        { service: "Portfolio transfer (in/out)", price: "€49.00 / position", notes: "Example; depends on scope/market" },
        { service: "Corporate actions", price: "€9.90 / event", notes: "Example; if priced" },
      ],
    },
    {
      title: "C. Payments around the settlement account",
      rows: [
        { service: "Deposit (transfer from reference account)", price: "€0.00", notes: "Example; typically via bank transfer" },
        { service: "Withdrawal (transfer to reference account)", price: "€0.00", notes: "Example; restricted to reference account per application" },
        { service: "Foreign currency (if applicable)", price: "0.50% FX fee", notes: "Example; FX fee/spread if listed" },
      ],
    },
    {
      title: "D. Misc / communication",
      rows: [
        { service: "Online banking (access/fees)", price: "€0.00", notes: "Example; if applicable" },
        { service: "Phone service (if offered)", price: "€4.90 / month", notes: "Example; product-dependent" },
      ],
    },
  ] as { title: string; rows: FeeRow[] }[],
  table: {
    service: "Service",
    price: "Price",
    notes: "Notes",
  },
  disclaimer:
    "Important: All amounts shown are fictional example prices for illustration only and do not constitute an offer. Only the contractually agreed fees in the applicable price sheet are binding.",
}

export function PriceSheetSection({ locale }: Props) {
  const c = locale === "de" ? de : en

  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-10">
          <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">{c.intro}</p>

          <p className="text-[var(--foreground)]/70 text-sm">
            <strong className="text-[var(--navy-dark)]">{c.updatedLabel}:</strong> {c.updatedValue}
          </p>

          {c.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">{section.title}</h2>
              <div className="overflow-x-auto rounded-lg border border-[var(--navy-dark)]/10 bg-white/50">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--navy-dark)]/5">
                      <th className="text-left px-4 py-3 text-sm font-semibold text-[var(--navy-dark)]">{c.table.service}</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-[var(--navy-dark)]">{c.table.price}</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-[var(--navy-dark)]">{c.table.notes}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row.service} className="border-t border-[var(--navy-dark)]/10">
                        <td className="px-4 py-3 text-sm text-[var(--foreground)]/80">{row.service}</td>
                        <td className="px-4 py-3 text-sm text-[var(--foreground)]/80 whitespace-nowrap">{row.price}</td>
                        <td className="px-4 py-3 text-sm text-[var(--foreground)]/70">{row.notes || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8">
            <p className="m-0 text-[var(--foreground)]/80 leading-relaxed">{c.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

