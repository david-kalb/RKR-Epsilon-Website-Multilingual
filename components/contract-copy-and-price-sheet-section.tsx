type Props = {
  locale: "en" | "de"
}

export function ContractCopyAndPriceSheetSection({ locale }: Props) {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {locale === "en" && (
            <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8 mb-10">
              <p className="m-0 text-[var(--foreground)]/80 leading-relaxed">
                Note: The legal wording in the signed German application documents is controlling. The text below is presented as a structured
                excerpt from the depot application.
              </p>
            </div>
          )}

          <article>
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">1. Dokumentenbestätigung (Auszug)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.1</strong> Der Kunde bestätigt den Erhalt folgender Dokumente:
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.2</strong> der Geschäftsbedingungen (Allgemeine Geschäftsbedingungen einschließlich
                Gerichtsstand gemäß Z 21 AGB, Besondere Bedingungen für Debitkarten, Bedingungen für Electronic-Banking Leistungen, zusammen
                „Vertragsbedingungen“).
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.3</strong> einer Ausfertigung dieses Konto-/Depotvertrages einschließlich des
                Preisblattes.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.4</strong> der Informationen für Verbraucher gemäß Fern-Finanzdienstleistungs-Gesetz.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">1.5</strong> der Informationen über Öffnungs- und Annahmezeiten.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">2. Unterschriftsprobe & schriftliche Dispositionen (Auszug)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.1</strong> Die Unterschrift des/der Depot-/Kontoinhaber(s) sowie des/der Zeichnungsberechtigten
                auf dem/den Ausweis(en) (Kopie) wird/werden elektronisch gespeichert und als Unterschriftsprobe verwendet.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">2.2</strong> Schriftliche Dispositionen im Rahmen der Konto-/Depotverbindung werden nur aufgrund
                der solcherart hinterlegten Unterschriften zugelassen.
              </p>
            </section>

            <section className="mb-2">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">3. Akzeptanz der Vertragsbedingungen (Auszug)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">3.1</strong> Mit der Unterschrift akzeptiert der Kunde die vorstehenden Vertragsbedingungen.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">3.2</strong> Weiters stimmt der Kunde der Vertragserfüllung bereits vor Ablauf der ihm zustehenden
                Rücktrittsfrist (siehe Informationen für Verbraucher gemäß Fern-Finanzdienstleistungs-Gesetz) zu.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">4. Preisblatt (Hinweis)</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">4.1</strong> Das Preisblatt ist im Depotantrag als Bestandteil der Vertragsunterlagen genannt
                („… einschließlich des Preisblattes“) und dient der transparenten Darstellung der für die Depot-/Kontoführung und Wertpapiertransaktionen
                anfallenden Entgelte.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">4.2</strong> Das Preisblatt enthält typischerweise eine Übersicht über Leistungen und Entgelte
                (z.B. Depot-/Kontoführung, Transaktionsentgelte, Fremdspesen) sowie – soweit einschlägig – Regelungen zu Zinssätzen/Verzinsung im
                Zusammenhang mit dem Verrechnungskonto (Pluskonto).
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">4.3</strong> Welche konkreten Positionen im Einzelfall gelten, ergibt sich aus dem jeweils
                übergebenen/vereinbarten Preisblatt in der gültigen Fassung; dieses ist zusammen mit dem Konto-/Depotvertrag und den
                Vertragsbedingungen heranzuziehen.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                <strong className="text-[var(--navy-dark)]">4.4</strong> Soweit Entgelte oder Kauf-/Verkaufskosten aus Wertpapiertransaktionen anfallen,
                werden diese nach den Vertragsunterlagen über das Verrechnungskonto (Pluskonto) abgerechnet.
              </p>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}

