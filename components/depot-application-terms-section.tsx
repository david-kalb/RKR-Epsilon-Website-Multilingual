/* eslint-disable react/no-array-index-key */
"use client"

import { Info } from "lucide-react"

type Props = {
  locale: "en" | "de"
}

type NumberedItem = {
  text: string
  subpoints: string[]
}

const deClauseExtras: string[] = [
  "Dieser Abschnitt regelt, welche Dokumente für die Geschäftsbeziehung maßgeblich sind. Der Depotantrag verweist dafür insbesondere auf den Depot-/Kontorahmenvertrag, das Leistungs- und Preisblatt sowie die Allgemeinen Geschäftsbedingungen in der jeweils gültigen Fassung. Soweit weitere Bedingungen (z.B. für Electronic Banking) vereinbart sind, gelten diese ergänzend.",
  "Der Depotantrag dient der Eröffnung oder Änderung einer Depot-/Kontoverbindung. Die Depotführung ist mit einem Pluskonto als Verrechnungskonto verknüpft, über das Entgelte und Transaktionskosten abgerechnet werden können. Optional können – je nach Angebot – Fremdwährungspluskonten beantragt werden.",
  "Die Erklärung zum Handeln auf eigene oder fremde Rechnung ist als ausdrückliche Kundenbestätigung im Antrag vorgesehen. Änderungen dieser Angaben sind vom Kunden aktiv und unverzüglich bekanntzugeben, damit die Geschäftsbeziehung korrekt geführt werden kann. Diese Pflicht zur Aktualisierung ist im Antrag ausdrücklich angesprochen.",
  "Die elektronische Bereitstellung von Depotinformationen erfolgt im Rahmen des Electronic Banking. Der Depotantrag nennt dabei typische Dokumentarten (z.B. Auszüge, Abrechnungen, Anzeigen und Erklärungen) sowie die Möglichkeit, dass Informationen zum Abruf bereitgehalten werden. Welche Zustellwege konkret gelten, richtet sich nach der Vereinbarung und den Bedingungen.",
  "Im Antrag werden verschiedene Kundendaten abgefragt, die zur Identifikation und zur Führung der Depot-/Kontoverbindung benötigt werden. Dazu gehören persönliche Daten, Kontaktangaben und Ausweisdaten sowie Angaben zur Verfügungsberechtigung und zum Status (z.B. Devisenstatus, Steuerstatus). Welche Felder im Einzelfall erforderlich sind, ergibt sich aus dem Formular und den zugrunde liegenden Anforderungen.",
  "Der Depotantrag enthält eine Selbstauskunft zu überwiegend geplanten Transaktionen. Genannt werden dabei u.a. Überweisungsrelationen (EU, Drittländer, Hochrisiko-/Offshore-Konstellationen) und ggf. Bartransaktionen. Diese Angaben sind im Antrag als Auswahlmöglichkeiten vorgesehen und dienen der Einordnung des erwarteten Nutzungsprofils.",
  "Der Hinweis zum automatischen Verlustausgleich bezieht sich auf die im Antrag abgefragte steuerliche Zuordnung (Privatvermögen/Betriebsvermögen) sowie den Status als Steuerinländer/-ausländer. Der Depotantrag nennt ausdrücklich Konstellationen, in denen ein automatischer Verlustausgleich zulässig ist, und solche, in denen er nicht zulässig ist. Maßgeblich ist die Zuordnung des jeweiligen Depots und der Depotinhaberstruktur (z.B. Gemeinschaftsdepot, Treuhand).",
  "Die Fußnoten/Details zur Nutzung des Electronic Banking werden im Depotantrag ausdrücklich erwähnt. Beispielsweise ist die Aktualisierung der Handynummer als Obliegenheit genannt und ein Verrechnungskonto für Entgelte aus Electronic Banking-Leistungen vorgesehen. Details zu Verfahren und Voraussetzungen ergeben sich aus den jeweiligen Bedingungen.",
  "Der Depotantrag beschreibt das Geschäftsmodell der Marke „RKR Epsilon“ als Marke der RKR Epsilon Ltd. Genannt werden dabei insbesondere Konto-/Depotführung auf fremde Rechnung (z.B. Treuhand) sowie Mündelgeldkonten. Die konkrete Ausgestaltung folgt den Rahmenbedingungen der vereinbarten Vertragsunterlagen.",
  "Leistungen und Entgelte werden im Depotantrag über den Verweis auf das Leistungs- und Preisblatt konkretisiert. Der Antrag stellt klar, dass keine Beratungsdienstleistungen zum Depot erbracht werden. Außerdem wird festgehalten, dass Entgelte sowie Kauf- und Verkaufskosten über das Pluskonto/Verrechnungskonto abgerechnet werden.",
  "Die Zustimmung zur Aufzeichnung umfasst Telefonate und elektronische Kommunikation (z.B. Video, E-Mail) im Zusammenhang mit der Geschäftsbeziehung. Zweck ist der Nachweis der Gespräche und der erteilten Aufträge, wie im Antrag beschrieben. Der Antrag nennt zudem Bereitstellungszeiträume für Kopien der Aufzeichnungen (5 bzw. 7 Jahre in behördlich gewünschten Fällen).",
  "Wenn ein Dritter die Depot-/Kontoeröffnung vermittelt hat, können im Rahmen der Depot-/Kontoführung Provisionen an diesen Dritten gezahlt werden. Der Depotantrag nennt ausdrücklich die Möglichkeit, auf Anfrage nähere Informationen zu erhalten. Ob und in welcher Höhe Provisionen anfallen, hängt von der konkreten Vermittlungskonstellation ab.",
  "Für die Beendigung der Vertragsbeziehung verweist der Depotantrag auf die Ziffern 22 bis 24 der AGB. Damit werden Form, Ablauf und Wirkungen der Beendigung nicht im Antrag selbst detailliert, sondern in den genannten AGB-Regelungen. Für die Auslegung ist die jeweils gültige AGB-Fassung maßgeblich.",
  "Die Regelungen zu Vertretern/Zeichnungsberechtigten stellen klar, dass keine Anlageberatung erfolgt und stattdessen eine Angemessenheitsprüfung vorgesehen ist. Maßstab sind Erfahrung und Kenntnisse des Vertreters/Verfügers; bei fehlenden Voraussetzungen wird standardisiert gewarnt, der Auftrag kann dennoch erteilt werden. Diese Logik ist im Antrag ausdrücklich beschrieben und gilt entsprechend für die praktische Auftragserteilung.",
  "Für Electronic Banking (ELBA) gelten die dazugehörigen Bedingungen (Internet Banking und ELBA business). Der Depotantrag beschreibt zudem, dass bestimmte Zustellungen (z.B. Änderungen von Leistungen/Entgelten/Verträgen) über Electronic Banking erfolgen können und Depotaufstellungen in die Mailbox übermittelt werden können. Die Information über die Zustellung kann je nach Vereinbarung per Post oder per E-Mail erfolgen.",
  "Das Pluskonto wird als Verrechnungskonto ausschließlich für Wertpapierdienstleistungen beschrieben und dient grundsätzlich nicht dem allgemeinen Zahlungsverkehr. Ein- und Auszahlungen sind in den im Antrag beschriebenen Grenzen möglich. Fremdwährungspluskonten können zusätzlich beantragt werden, sofern vorgesehen.",
  "Das Referenzkonto ist im Depotantrag als zentrales Konto für Ein- und Auszahlungen auf/vom Pluskonto festgelegt. Ein- und Auszahlungen sind grundsätzlich auf dieses Referenzkonto beschränkt und erfolgen per Überweisung. Der Antrag nennt zudem Voraussetzungen an die Kontoinhaberschaft (z.B. Einzelverfügungsberechtigung) und weist auf Zustimmungserfordernisse bei Gemeinschaftskonten hin.",
  "Der Depotantrag beschreibt den kontokorrentmäßigen Abschluss des Pluskontos (mangels anderer Vereinbarung: Quartalsende) und die elektronische Bereitstellung von Umsätzen/Informationen. Außerdem wird die Verzinsung von Guthaben anhand von Zeitraum und Zinssatz (Leistungs- und Preisblatt) erläutert. Diese Parameter sind damit über die Vertragsdokumente konkretisiert.",
  "Für die Zustellung/Abrufbarkeit über Electronic Banking nennt der Antrag verschiedene Orte der Bereitstellung (Mailbox, Orderbuch, Downloadcenter, pdf-Auszüge). Es wird beschrieben, unter welchen Umständen Zustellwirkungen eintreten (gesonderte Information oder tatsächlicher Abruf) und dass bei Unternehmern spätestens nach sechs Wochen Zustellwirkungen eintreten können. Daraus folgen u.a. laufende Reklamationsfristen und Abrufobliegenheiten.",
  "Der Depotantrag verweist auf die AGB und nennt zugleich ausgenommene Ziffern sowie besondere Verweise für Änderungen. Er unterscheidet ausdrücklich zwischen Änderungen, die keine Leistungen/Entgelte betreffen, und Änderungen von Leistungen/Entgelten, für die andere AGB-Ziffern gelten. Maßgeblich sind die im Antrag genannten Verweise und die jeweils gültige AGB-Fassung.",
  "Die Zustimmung zur Ausführungspolitik bedeutet, dass Wertpapiergeschäfte nach der jeweils geltenden Ausführungspolitik ausgeführt werden. Der Antrag stellt klar, dass Anpassungen der Ausführungspolitik im Rahmen aufsichtsrechtlicher Vorgaben möglich sind. Über wesentliche Änderungen soll jeweils informiert werden.",
  "Bei Gemeinschaftsdepots mit Einzelverfügung wird die Befugnis zum Kauf/Verkauf im Rahmen der Deckung auch für den disponierenden Mitinhaber beschrieben. Die Angemessenheitsprüfung wird auf den disponierenden Depotmitinhaber abgestellt; bei fehlender Erfahrung/Angaben erfolgt eine standardisierte Warnung. Diese Struktur ist im Antrag ausdrücklich dargestellt.",
  "Die Fernabsatz-Erklärungen betreffen Verbraucher und nennen sowohl den Erhalt gesetzlicher Informationen als auch das Einverständnis zum Beginn der Vertragserfüllung vor Ablauf der Rücktrittsfrist. Diese Bestätigungen sind im Antrag als besondere Verbraucher-Erklärungen enthalten. Maßgeblich sind die im Antrag genannten gesetzlichen Bezüge.",
  "Die Einverständniserklärung zur elektronischen Zustellung umfasst verschiedene Kategorien von Erklärungen/Informationen, darunter Änderungen von Leistungen/Entgelten, AGB, Electronic Banking-Bedingungen und weiteren Rahmen-/Geschäftsbedingungen. Der Antrag beschreibt Widerrufsmöglichkeiten und die Obliegenheit, E-Mail-Adressänderungen unverzüglich bekanntzugeben. Außerdem wird geregelt, dass bei fehlender Aktualisierung Zustellungen an die zuletzt bekannte Adresse als zugegangen gelten können.",
  "Die Entbindung vom Bankgeheimnis bzw. die Offenlegung kann durch Anforderungen von Lagerstellen, Emittenten oder Überwachungsstellen ausgelöst werden, ohne dass der Grund geprüft wird. Der Antrag nennt typische Anwendungsfälle (Dividenden, Stimmrechte, Kapitalmaßnahmen, Verfahren) und mögliche negative Folgen bei fehlender Offenlegung. Diese Offenlegungspflichten können sich insbesondere aus ausländischen Gepflogenheiten oder Gesetzesbestimmungen ergeben.",
  "Der Depotantrag enthält Bestätigungen zum Erhalt verschiedener Dokumente (Vertragsbedingungen, Preisblatt, Verbraucherinformationen, Öffnungs-/Annahmezeiten). Außerdem wird die elektronische Speicherung von Unterschriften als Unterschriftsprobe und deren Verwendung für schriftliche Dispositionen beschrieben. Mit der Unterschrift werden die Vertragsbedingungen akzeptiert und – als Verbraucher – ggf. weitere Einverständnisse (z.B. vorzeitige Vertragserfüllung) erklärt.",
]

const deNumbered: NumberedItem[] = [
  {
    text: "Geltung und Dokumentenbezug.",
    subpoints: [
      "Die nachstehenden Bestimmungen sind dem Depotantrag (Kontoantrag Wertpapiere – private Personen) entnommen und dienen der Information.",
      "Maßgeblich ist die jeweils unterzeichnete und gültige Fassung des Depot-/Kontorahmenvertrags inklusive Leistungs- und Preisblatt sowie die Allgemeinen Geschäftsbedingungen (AGB) der RKR Epsilon Ltd.",
      "Diese Seite stellt keine Rechtsberatung dar; bei Abweichungen gilt die Vertragsdokumentation.",
      "Soweit der Depotantrag auf weitere Bedingungen (z.B. Electronic Banking-Leistungen) verweist, gelten diese gemäß Vereinbarung als Bestandteil bzw. ergänzende Regelung.",
    ],
  },
  {
    text: "Gegenstand des Antrags (Eröffnung/Änderung).",
    subpoints: [
      "Eröffnung bzw. Änderung eines Wertpapierdepots.",
      "Inklusive Pluskonto (Wertpapierverrechnungskonto) in EUR.",
      "Ein Fremdwährungspluskonto kann – je nach Auswahl/Verfügbarkeit – zusätzlich beantragt werden.",
      "Das Pluskonto wird im Depotantrag als Verrechnungskonto für depotbezogene Leistungen/Entgelte beschrieben.",
    ],
  },
  {
    text: "Handeln auf eigene oder fremde Rechnung.",
    subpoints: [
      "Der Kunde bestätigt ausdrücklich, auf eigene Rechnung oder fremde Rechnung zu handeln.",
      "Änderungen dieser Angaben sind unverzüglich bekanntzugeben.",
      "Die Erklärung bezieht sich auf die Geschäftsbeziehung im Rahmen des Depot-/Kontorahmenvertrags und ist im Antrag ausdrücklich vorgesehen.",
    ],
  },
  {
    text: "Depotpost / elektronische Zustellung (Auszug).",
    subpoints: [
      "Depotpost kann elektronisch im Electronic Banking bereitgestellt werden.",
      "Dies betrifft insbesondere: Kontoauszüge, Depotauszüge, Gutschrift- und Belastungsanzeigen, Wertpapierabrechnungen.",
      "Ebenfalls umfasst: Erklärungen zu über Electronic Banking abgeschlossenen Geschäften sowie Avisobelege zu Kapitalmaßnahmen.",
      "Die konkrete Art der Zustellung (z.B. Mailbox-Abruf, gesonderte Information per Post/E-Mail) richtet sich nach der Vereinbarung im Depotantrag/den Bedingungen.",
    ],
  },
  {
    text: "Kundendaten und Legitimation (Formular – Auszug).",
    subpoints: [
      "Kunde: Titel, Vorname, Nachname; Anschrift und ggf. Zustelladresse.",
      "Geburtsdaten, Geburtsort, Staatsbürgerschaft, Familienstand; Kontakt: Telefon/Handy, E-Mail.",
      "Legitimation: Reisepass-/Personalausweisnummer, Ausstellungsbehörde und -datum.",
      "Weitere Angaben: Verfügungsberechtigung (z.B. Einzelverfügung), Devisenstatus, Beruf, Steuerstatus; Zuordnung Privatvermögen/Betriebsvermögen.",
      "Die im Formular abgefragten Angaben dienen u.a. der Vertragsdurchführung sowie der Erfüllung regulatorischer/organisatorischer Anforderungen im Rahmen der Geschäftsbeziehung.",
    ],
  },
  {
    text: "Geplante Transaktionen (Auswahl).",
    subpoints: [
      "Überweisungen von und nach Luxemburg + EU.",
      "Überweisungen von und in Drittländer, Hochrisikoländer, Offshore-Länder.",
      "Barein- und Barauszahlungen (sofern vorgesehen).",
      "EU 15 (Beispiel-Aufzählung im Formular): Österreich, Belgien, Deutschland, Dänemark, Spanien, Finnland, Frankreich, Griechenland, Irland, Italien, Luxemburg, Niederlande, Portugal, Schweden.",
      "Die Auswahl dient als Selbstauskunft im Antrag und kann je nach Geschäftsmodell/Anforderungen für die Abwicklung und Compliance relevant sein.",
    ],
  },
  {
    text: "Steuerstatus und automatischer Verlustausgleich (Hinweis).",
    subpoints: [
      "Privatvermögen von Steuerinländern (unbeschränkt Steuerpflichtigen): automatischer Verlustausgleich durch die depotführende RKR Epsilon Ltd. gemäß § 93 Abs 6 EStG 1988.",
      "Kein automatischer Verlustausgleich u.a. bei: Privatvermögen von Steuerausländern (beschränkt Steuerpflichtigen), Betriebsvermögen, Treuhanddepots (auf fremde Rechnung), Gemeinschaftsdepots (mehr als ein Depotinhaber).",
      "Die Zuordnung (Privatvermögen/Betriebsvermögen, In-/Ausland) wird im Antrag abgefragt und ist für die Anwendung der genannten Regelung maßgeblich.",
    ],
  },
  {
    text: "Electronic Banking – Fußnoten/Verfügbarkeit (Auszug).",
    subpoints: [
      "Eine Änderung der Handynummer ist der RKR Epsilon umgehend bekanntzugeben.",
      "Ein Verrechnungskonto kann für Entgelte aus Electronic Banking-Leistungen vorgesehen sein.",
      "TAN-/Benachrichtigungsverfahren (z.B. SMS) können – sofern vereinbart – Teil der Electronic Banking-Nutzung sein und hängen von den Produktbedingungen ab.",
    ],
  },
  {
    text: "Geschäftsmodell „RKR Epsilon“ (Auszug).",
    subpoints: [
      "„RKR Epsilon“ ist eine Marke der RKR Epsilon Ltd.",
      "Bei diesem Modell wird u.a. eine Konto-/Depotführung auf fremde Rechnung angeboten (insbesondere Treuhandkonten/-depots).",
      "Zusätzlich kann die Führung von Mündelgeldkonten angeboten werden.",
      "Die konkrete Ausgestaltung der Konto-/Depotführung und etwaige Rollen (Depot-/Kontoinhaber, Vertreter) ergeben sich aus dem Rahmenvertrag und den Bedingungen.",
    ],
  },
  {
    text: "Leistungen, Entgelte und Belastungskonto.",
    subpoints: [
      "Leistungen und Entgelte ergeben sich aus dem Depot-/Kontorahmenvertrag samt Leistungs- und Preisblatt.",
      "Von der RKR Epsilon werden keine Beratungsdienstleistungen zum Depot erbracht.",
      "Entgelte sowie Kauf- und Verkaufskosten aus Wertpapiertransaktionen werden dem Verrechnungskonto angelastet.",
      "Das Leistungs- und Preisblatt ist als Bestandteil des Depot-/Kontorahmenvertrags im Antrag ausdrücklich genannt.",
    ],
  },
  {
    text: "Aufzeichnung von Telefonaten/elektronischer Kommunikation.",
    subpoints: [
      "Zustimmung zur Aufzeichnung von Telefongesprächen und elektronischer Kommunikation (z.B. Video, E-Mail).",
      "Zweck: Nachweis der geführten Gespräche sowie erteilter Aufträge.",
      "Widerruf jederzeit mit Wirkung für zukünftige Aufzeichnungen möglich.",
      "Kopien auf Anfrage: fünf Jahre (bzw. sieben Jahre, sofern behördlich gewünscht).",
      "Die Zustimmung bezieht sich auf Kommunikationswege, die im Zusammenhang mit der Auftragserteilung bzw. Vertragsdurchführung stehen.",
    ],
  },
  {
    text: "Vermittlung durch Dritte (Provisionen).",
    subpoints: [
      "Wurde die Konto-/Depotverbindung durch einen Dritten vermittelt, können Provisionen an den vermittelnden Dritten gezahlt werden.",
      "Auf Anfrage können nähere Informationen zu diesen Provisionen erteilt werden.",
      "Die Provisionszahlung ist im Depotantrag als mögliches Element der Depot-/Kontoführung beschrieben, sofern eine Vermittlung stattgefunden hat.",
    ],
  },
  {
    text: "Vertragsbeendigung.",
    subpoints: [
      "Vertragsbeendigung erfolgt gemäß Z 22 bis 24 der AGB der RKR Epsilon.",
      "Für Details (Form, Fristen, Wirkungen) ist auf die genannten AGB-Ziffern in der jeweils gültigen Fassung abzustellen.",
    ],
  },
  {
    text: "Zeichnungsberechtigung, Vertreter und Angemessenheitsprüfung (Auszug).",
    subpoints: [
      "Die Zeichnungsberechtigung umfasst auch die Befugnis, Wertpapiere im Rahmen der vorhandenen Deckung zu kaufen und zu verkaufen.",
      "Es erfolgt keine Anlageberatung; geprüft wird grundsätzlich lediglich die Angemessenheit (Erfahrung und Kenntnisse) des Vertreters/Verfügers.",
      "Bei fehlender Erfahrung/Angaben erfolgt eine standardisierte Warnung; der Auftrag kann dennoch erteilt werden.",
      "Bei der Beurteilung von Erfahrung und Kenntnissen wird im Depotantrag ausdrücklich auf den Vertreter/Verfüger abgestellt.",
    ],
  },
  {
    text: "Electronic Banking (ELBA) – Bedingungen und Zustellung (Auszug).",
    subpoints: [
      "Es gelten die Bedingungen für Electronic Banking-Leistungen (Internet Banking und ELBA business).",
      "Änderungen von Leistungen, Entgelten, Rahmenverträgen und Geschäftsbedingungen können – je nach Vereinbarung – über Electronic Banking zugestellt werden.",
      "Vierteljährliche Depotaufstellungen können in die Electronic Banking-Mailbox übermittelt werden; über die Zustellung wird gesondert informiert (per Post oder – sofern vereinbart – per E-Mail).",
      "Bei über Electronic Banking bzw. Telefonservice erteilten Wertpapieraufträgen erfolgt gemäß Antrag keine Beratungsleistung.",
    ],
  },
  {
    text: "Pluskonto (Verrechnungskonto) – Zweck und Grundprinzip.",
    subpoints: [
      "Mit Eröffnung des Depots wird gleichzeitig ein in EUR geführtes Pluskonto eröffnet.",
      "Fremdwährungspluskonten können zusätzlich beantragt werden.",
      "Das Pluskonto dient ausschließlich der Verrechnung von Wertpapierdienstleistungen und nicht dem allgemeinen Zahlungsverkehr (ausgenommen Ein- und Auszahlungen wie beschrieben).",
      "Das Pluskonto ist im Antrag als Wertpapierverrechnungskonto ausgestaltet und wird für belastete/vergütete depotbezogene Vorgänge genutzt.",
    ],
  },
  {
    text: "Referenzkonto – Ein- und Auszahlungen.",
    subpoints: [
      "Einzahlungen auf das Pluskonto sind nur vom im Rahmenvertrag angegebenen Referenzkonto möglich (Überweisungen).",
      "Auszahlungen vom Pluskonto können nur auf das angegebene Referenzkonto erfolgen.",
      "Das Referenzkonto muss auf den/die Kontoinhaber lauten.",
      "Als Referenzkonten dürfen nur Konten angegeben werden, bei denen der Kunde einzelverfügungsberechtigter Konto(mit)inhaber ist; ein Nachweis kann verlangt werden.",
      "Bei Gemeinschaftskonten kann eine Änderung des Referenzkontos die schriftliche Zustimmung aller Kontoinhaber erfordern.",
      "Damit ist der Zahlungsfluss für Ein- und Auszahlungen auf das Pluskonto im Antrag ausdrücklich auf das Referenzkonto beschränkt.",
    ],
  },
  {
    text: "Pluskonto – Abschluss und Verzinsung (Auszug).",
    subpoints: [
      "Kontokorrentmäßiger Abschluss zu den Abschlussterminen (mangels anderer Vereinbarung: jeweils Quartalsende).",
      "Kontoumsätze und Kontoinformationen werden elektronisch im Electronic Banking bereitgestellt.",
      "Verzinsung von Geldbeträgen am Pluskonto: vom Tag des Eingangs bis einschließlich des der Auszahlung vorangehenden Kalendertages zum vereinbarten Zinssatz; Zinsberechnung kalendermäßig.",
      "Der Zinssatz ergibt sich aus dem Leistungs- und Preisblatt, auf das der Depotantrag ausdrücklich verweist.",
    ],
  },
  {
    text: "Abrufbarkeit und Zustellung über Electronic Banking (Auszug).",
    subpoints: [
      "Informationen und Erklärungen können im Electronic Banking zum Abruf bereitgehalten werden (z.B. Mailbox, Orderbuch, Belegdownloadcenter, pdf-Auszüge).",
      "Je nach Vereinbarung gilt eine Zustellung mit Zugang einer gesonderten Information bzw. mit tatsächlichem Abruf.",
      "Bei Unternehmern treten Zustellwirkungen jedenfalls spätestens mit Ablauf von sechs Wochen nach Bereitstellung ein; damit beginnen allfällige Reklamationsfristen zu laufen.",
      "Unternehmer trifft die Obliegenheit der regelmäßigen Abrufung vereinbarter Depotinformationen.",
      "Nicht elektronisch übermittelte Beilagen können – je nach Vereinbarung – hinterlegt oder zugesandt werden (Auszug aus der Zustelllogik im Antrag).",
    ],
  },
  {
    text: "Geschäftsbedingungen (AGB) – Verweis und Änderungsmechanismen (Auszug).",
    subpoints: [
      "Es gelten die AGB der RKR Epsilon in der jeweils gültigen Fassung mit den im Depotantrag genannten Ausnahmen.",
      "Für Änderungen des Depot-/Kontorahmenvertrags (soweit nicht Leistungen/Entgelte betreffend) gilt insbesondere Z 2 Abs 1, 2, 3, 4 und 6.",
      "Für Änderungen von Leistungen und Entgelten gelten – soweit nicht individuell vereinbart – die Z 43 bis 47a der AGB.",
      "Der Depotantrag differenziert damit zwischen Änderungen „ohne Leistungs-/Entgeltbezug“ und Änderungen von Leistungen/Entgelten mit jeweils unterschiedlichen AGB-Verweisen.",
    ],
  },
  {
    text: "Zustimmung zur Ausführungspolitik (Auszug).",
    subpoints: [
      "Wertpapiergeschäfte werden nach der jeweils geltenden Ausführungspolitik der RKR ausgeführt.",
      "Änderungen der Ausführungspolitik sind gemäß aufsichtsrechtlichen Vorgaben möglich; über wesentliche Änderungen wird informiert.",
      "Die Ausführungspolitik kann demnach aktualisiert werden, sofern dies regulatorisch geboten/zulässig ist; die Kundeninformation erfolgt bei wesentlichen Änderungen.",
    ],
  },
  {
    text: "Gemeinschaftsdepot (Einzelverfügung) – Angemessenheitsprüfung (Auszug).",
    subpoints: [
      "Befugnis des disponierenden Depotmitinhabers umfasst u.a. Kauf/Verkauf im Rahmen der Deckung.",
      "Keine Anlageberatung; Angemessenheitsprüfung wird auf den disponierenden Depotmitinhaber abgestellt.",
      "Bei fehlender Erfahrung/Angaben erfolgt eine standardisierte Warnung; der Auftrag kann dennoch erteilt werden.",
      "Für die praktische Abwicklung bedeutet dies, dass die Eignungs-/Angemessenheitswarnung an den tatsächlich disponierenden Mitinhaber adressiert wird.",
    ],
  },
  {
    text: "Fernabsatzvertrag (Verbraucher) – Bestätigungen (Auszug).",
    subpoints: [
      "Bestätigung des Erhalts der Informationen gemäß Fernfinanzdienstleistungsgesetz vor Vertragsabschluss.",
      "Einverständnis, dass mit der Erfüllung des Vertrages vor Ablauf der Rücktrittsfrist gemäß § 8 Fernfinanzdienstleistungsgesetz begonnen wird.",
      "Diese Erklärung ist im Depotantrag als besondere Verbraucherbestätigung zum Fernabsatz aufgenommen.",
    ],
  },
  {
    text: "Einverständniserklärung zur Zustellung elektronischer Post (Auszug).",
    subpoints: [
      "Einverständnis zur Zustellung von Erklärungen/Informationen an die angegebene E-Mail-Adresse.",
      "Umfasst u.a. Änderungen der Leistungen/Entgelte gemäß Z 43 bis 47a AGB, Änderungen der AGB gemäß Z 2, Änderungen der Electronic Banking-Bedingungen sowie Änderungen weiterer Geschäftsbedingungen/Rahmenverträge und der Einverständniserklärung.",
      "Widerruf jederzeit möglich; Änderungen der E-Mail-Adresse sind unverzüglich bekanntzugeben.",
      "Bei unterlassener Bekanntgabe gelten Sendungen an die zuletzt bekanntgegebene Adresse als zugegangen; Mitteilungen/Widerruf können per E-Mail an office@rkr-epsilon.com erfolgen.",
      "Die Regelung erfasst sowohl rechtsgeschäftliche Erklärungen als auch vertraglich vereinbarte bzw. gesetzlich vorgeschriebene Informationen, soweit im Antrag genannt.",
    ],
  },
  {
    text: "Entbindung vom Bankgeheimnis / Offenlegung (Auszug).",
    subpoints: [
      "Lagerstellen, Emittenten, Handelsüberwachungsstellen oder deren Beauftragte können die Offenlegung von Identitäten (Wertpapierinhaber, Auftraggeber, wirtschaftliche Eigentümer) verlangen; der Grund wird nicht geprüft.",
      "Offenlegung kann z.B. für Dividenden, Stimmrechte, Kapitalmaßnahmen oder Behördenverfahren notwendig sein.",
      "Fehlende Offenlegung kann negative Folgen haben (z.B. Ablehnung von Aufträgen, Sperren, Verkaufs-/Übertragungsverbote, Ausschluss von Dividendenzahlung oder Stimmrechten).",
      "Die Offenlegungspflichten können sich aus ausländischen Kapitalmarktgepflogenheiten oder ausländischen Gesetzesbestimmungen ergeben (Auszug).",
    ],
  },
  {
    text: "Kundenbestätigungen (Auszug).",
    subpoints: [
      "Bestätigung des Erhalts der Vertragsbedingungen (u.a. AGB inkl. Gerichtsstand, Bedingungen für Debitkarten, Bedingungen für Electronic Banking).",
      "Bestätigung des Erhalts einer Ausfertigung des Konto-/Depotvertrags inkl. Preisblatt sowie der Informationen für Verbraucher und zu Öffnungs-/Annahmezeiten.",
      "Unterschriften können elektronisch gespeichert und als Unterschriftsprobe verwendet werden; schriftliche Dispositionen werden nur auf Basis der hinterlegten Unterschriften zugelassen.",
      "Mit Unterschrift werden die Vertragsbedingungen akzeptiert und – als Verbraucher – der Vertragserfüllung vor Ablauf der Rücktrittsfrist zugestimmt.",
      "Die Bestätigungen beziehen sich auf den dokumentierten Erhalt mehrerer Unterlagen, die im Antrag ausdrücklich als übergeben angeführt sind.",
    ],
  },
]

const enIntro = {
  note: "Note: The depot application terms are provided in German. The German wording in the signed application documents and applicable contractual documents is controlling.",
  summaryTitle: "Structured overview (English)",
  summaryBlocks: [
    "This page presents a structured excerpt of the German depot application conditions.",
    "Use the search and table of contents to navigate; expand/collapse sections as needed.",
    "Where the depot application references other documents (AGB, price sheet, Electronic Banking conditions), those documents apply as stated in the German text.",
  ],
}

export function DepotApplicationTermsSection({ locale }: Props) {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {locale === "en" && (
            <div className="space-y-6">
              <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
                  <p className="text-[var(--foreground)]/80 leading-relaxed">{enIntro.note}</p>
                </div>
              </div>
              <div className="border border-[var(--navy-dark)]/10 rounded-lg p-8">
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">{enIntro.summaryTitle}</h2>
                <ul className="list-disc pl-5 space-y-2 text-[var(--foreground)]/80 leading-relaxed">
                  {enIntro.summaryBlocks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <article>
              {deNumbered.map((item, idx) => {
                const clauseNumber = idx + 1
                const extra = deClauseExtras[idx]
                return (
                  <section key={idx} className="mb-10">
                    <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-4">
                      {clauseNumber}. {item.text}
                    </h2>

                    <div>
                      {item.subpoints.map((sp, spIdx) => {
                        const subNumber = `${clauseNumber}.${spIdx + 1}`
                        return (
                          <p key={spIdx} className="text-[var(--foreground)]/80 leading-relaxed text-justify mb-3">
                            <strong className="text-[var(--navy-dark)]">{subNumber}</strong> {sp}
                          </p>
                        )
                      })}
                    </div>

                    {extra && (
                      <p className="text-[var(--foreground)]/80 leading-relaxed text-justify mt-4">
                        <strong className="text-[var(--navy-dark)]">Ergänzung:</strong> {extra}
                      </p>
                    )}
                  </section>
                )
              })}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

