import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ServicesSection } from "@/components/services-section"
import { ParallaxSection } from "@/components/parallax-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { PrivacySection } from "@/components/privacy-section"
import { TermsSection } from "@/components/terms-section"
import { ImprintSection } from "@/components/imprint-section"
import { ServicesPageHero } from "@/components/services-page-hero"
import { ServicesDetailSection } from "@/components/services-detail-section"
import { AboutPageHero } from "@/components/about-page-hero"
import { ContactPageHero } from "@/components/contact-page-hero"
import { AboutDetailSection } from "@/components/about-detail-section"
import { PrivacyPageHero } from "@/components/privacy-page-hero"
import { TermsPageHero } from "@/components/terms-page-hero"
import { ImprintPageHero } from "@/components/imprint-page-hero"
import { getPageKeyFromSlug, slugMap, type PageKey } from "@/config/slugs"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{
    locale: "en" | "de"
    slug: string
  }>
}

// Page metadata configuration
const pageMetadata: Record<PageKey, { title: Record<"en" | "de", string>; description: Record<"en" | "de", string> }> = {
  home: {
    title: { en: "RKR Epsilon | Strategic Investment Banking", de: "RKR Epsilon | Strategisches Investmentbanking" },
    description: { 
      en: "RKR Epsilon provides tailored investment banking services for discerning private and institutional clients.",
      de: "RKR Epsilon bietet maßgeschneiderte Investment-Banking-Dienstleistungen für anspruchsvolle private und institutionelle Kunden."
    }
  },
  about: {
    title: { en: "About Us | RKR Epsilon", de: "Über uns | RKR Epsilon" },
    description: { 
      en: "Learn about RKR Epsilon's mission, values, and commitment to excellence in investment banking.",
      de: "Erfahren Sie mehr über die Mission, Werte und das Engagement von RKR Epsilon für Exzellenz im Investment Banking."
    }
  },
  services: {
    title: { en: "Our Services | RKR Epsilon", de: "Unsere Dienstleistungen | RKR Epsilon" },
    description: { 
      en: "Discover our comprehensive range of investment banking services tailored to your needs.",
      de: "Entdecken Sie unser umfassendes Angebot an Investment-Banking-Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind."
    }
  },
  contact: {
    title: { en: "Contact Us | RKR Epsilon", de: "Kontakt | RKR Epsilon" },
    description: { 
      en: "Get in touch with RKR Epsilon for personalized investment banking solutions.",
      de: "Kontaktieren Sie RKR Epsilon für personalisierte Investment-Banking-Lösungen."
    }
  },
  privacy: {
    title: { en: "Privacy Policy | RKR Epsilon", de: "Datenschutz | RKR Epsilon" },
    description: { 
      en: "Learn about how RKR Epsilon protects your privacy and handles your data.",
      de: "Erfahren Sie, wie RKR Epsilon Ihre Privatsphäre schützt und Ihre Daten verarbeitet."
    }
  },
  terms: {
    title: { en: "Terms of Service | RKR Epsilon", de: "Nutzungsbedingungen | RKR Epsilon" },
    description: { 
      en: "Read the terms and conditions for using RKR Epsilon services.",
      de: "Lesen Sie die Geschäftsbedingungen für die Nutzung der Dienstleistungen von RKR Epsilon."
    }
  },
  imprint: {
    title: { en: "Disclosures | RKR Epsilon", de: "Impressum | RKR Epsilon" },
    description: { 
      en: "Legal information and disclosures for RKR Epsilon.",
      de: "Rechtliche Informationen und Impressum von RKR Epsilon."
    }
  },
  faq: {
    title: { en: "FAQ | RKR Epsilon", de: "Häufige Fragen | RKR Epsilon" },
    description: { 
      en: "Frequently asked questions about RKR Epsilon and our services.",
      de: "Häufig gestellte Fragen zu RKR Epsilon und unseren Dienstleistungen."
    }
  },
  "coming-soon": {
    title: { en: "Coming Soon | RKR Epsilon", de: "Bald verfügbar | RKR Epsilon" },
    description: { 
      en: "Stay tuned for new features and services from RKR Epsilon.",
      de: "Bleiben Sie gespannt auf neue Funktionen und Dienstleistungen von RKR Epsilon."
    }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const pageKey = getPageKeyFromSlug(slug, locale)

  if (!pageKey) {
    return {
      title: "Page Not Found | RKR Epsilon",
      description: "The requested page could not be found."
    }
  }

  const meta = pageMetadata[pageKey]
  const title = meta.title[locale]
  const description = meta.description[locale]

  // Add noindex for imprint/disclosure pages
  const metadata: Metadata = {
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
        en: `/en/${slugMap[pageKey].en}`,
        de: `/de/${slugMap[pageKey].de}`,
      },
    },
  }

  // Make imprint page noindex
  if (pageKey === "imprint") {
    metadata.robots = {
      index: false,
      follow: false,
    }
  }

  return metadata
}

export async function generateStaticParams() {
  const locales: ("en" | "de")[] = ["en", "de"]
  const pages: PageKey[] = ["home", "about", "services", "contact", "privacy", "terms", "imprint", "faq", "coming-soon"]

  const params = []
  for (const locale of locales) {
    for (const page of pages) {
      params.push({
        locale,
        slug: slugMap[page][locale],
      })
    }
  }

  return params
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const pageKey = getPageKeyFromSlug(slug, locale)

  if (!pageKey) {
    notFound()
  }

  if (pageKey === "services") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <ServicesPageHero />
        <ServicesDetailSection />
        <ParallaxSection namespace="parallaxServices" />
        <ContactSection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "about") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <AboutPageHero />
        <AboutDetailSection />
        <IntroSection />
        <PhilosophySection />
        <ParallaxSection namespace="parallaxAbout" />
        <ContactSection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "contact") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <ContactPageHero />
        <ContactSection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "privacy") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <PrivacyPageHero />
        <PrivacySection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "terms") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <TermsPageHero />
        <TermsSection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "imprint") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <ImprintPageHero />
        <ImprintSection />
        <Footer />
      </main>
    )
  }

  if (pageKey === "faq") {
    return (
      <main className="min-h-screen">
        <Navigation />
        <FaqSection />
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ParallaxSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
