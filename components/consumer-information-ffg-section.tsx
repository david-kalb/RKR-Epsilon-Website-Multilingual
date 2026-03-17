type Props = {
  locale: "en" | "de"
}

export function ConsumerInformationFfgSection({ locale }: Props) {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {locale === "en" && (
            <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8 mb-10">
              <p className="m-0 text-[var(--foreground)]/80 leading-relaxed">
                Note: The legally binding wording is contained in the signed German application documents. The text below is a structured excerpt
                from the depot application and does not replace the full consumer information documents.
              </p>
            </div>
          )}

          <article>
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Bestätigung des Dokumentenerhalts (Auszug)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.1</strong> Der Kunde bestätigt den Erhalt der Informationen für Verbraucher gemäß
                Fern‑Finanzdienstleistungs‑Gesetz.
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.2</strong> Kontext im Depotantrag: Diese Bestätigung erscheint in der Liste der dem Kunden
                ausgehändigten Dokumente (neben Vertragsbedingungen, Konto-/Depotvertrag inkl. Preisblatt sowie Öffnungs- und Annahmezeiten).
              </p>
            </section>

            <section className="mb-2">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">
                2. Besondere Erklärungen zum Fernabsatzvertrag für Verbraucher (Auszug)
              </h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.1</strong> Der Kunde (Verbraucher) bestätigt den Erhalt der Informationen gemäß
                Fernfinanzdienstleistungsgesetz vor Vertragsabschluss.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.2</strong> Der Kunde (Verbraucher) erklärt sich damit einverstanden, dass mit einer Erfüllung
                dieses Vertrages vor Ablauf der Rücktrittsfrist gemäß § 8 Fernfinanzdienstleistungsgesetz begonnen wird.
              </p>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}

