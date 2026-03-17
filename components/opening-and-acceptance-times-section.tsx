type Props = {
  locale: "en" | "de"
}

export function OpeningAndAcceptanceTimesSection({ locale }: Props) {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {locale === "en" && (
            <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8 mb-10">
              <p className="m-0 text-[var(--foreground)]/80 leading-relaxed">
                Note: The legally binding wording is contained in the signed German application documents. The text below is a structured excerpt
                from the depot application.
              </p>
            </div>
          )}

          <article>
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Bestätigung des Dokumentenerhalts (Auszug)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.1</strong> Der Kunde bestätigt den Erhalt der Informationen über Öffnungs- und Annahmezeiten.
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.2</strong> Kontext im Depotantrag: Diese Bestätigung erscheint in der Liste der dem Kunden
                ausgehändigten Dokumente (neben Vertragsbedingungen, Konto-/Depotvertrag inkl. Preisblatt sowie Verbraucherinformationen).
              </p>
            </section>

            <section className="mb-2">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Inhalt der Information (Hinweis)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.1</strong> Die konkreten Öffnungs- und Annahmezeiten ergeben sich aus der ausgehändigten
                Information (separates Dokument) und können je nach Service/Annahmekanal variieren.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.2</strong> Für die jeweils gültigen Zeiten ist auf die übergebene bzw. aktuell kommunizierte
                Fassung dieser Information abzustellen.
              </p>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}

