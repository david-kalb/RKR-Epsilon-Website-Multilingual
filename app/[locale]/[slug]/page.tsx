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

type Props = {
  params: Promise<{
    locale: "en" | "de"
    slug: string
  }>
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
