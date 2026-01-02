"use client"

import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  const t = useTranslations("faq")

  // Get the FAQ items array
  const faqItems = t.raw("items") as Array<{ question: string; answer: string }>

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[var(--navy-dark)] to-[var(--navy-primary)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--gold-accent)]/10 mb-6">
            <HelpCircle className="w-8 h-8 text-[var(--gold-accent)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--off-white)] mb-4">{t("title")}</h2>
          <p className="text-lg text-[var(--silver-accent)] max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[var(--navy-light)] rounded-lg bg-[var(--navy-primary)]/50 backdrop-blur-sm px-6 transition-all duration-300 hover:border-[var(--gold-accent)]/50 hover:shadow-lg hover:shadow-[var(--gold-accent)]/10"
            >
              <AccordionTrigger className="text-left text-[var(--off-white)] hover:text-[var(--gold-accent)] transition-colors duration-300 py-6 text-lg font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--silver-accent)] leading-relaxed pb-6 pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--silver-accent)] mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--gold-accent)] text-[var(--navy-dark)] font-semibold rounded-lg hover:bg-[var(--gold-muted)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-accent)]/30"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
