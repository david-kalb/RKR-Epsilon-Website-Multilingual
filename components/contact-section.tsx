"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in-element space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#3a4455] mb-4">{t("subtitle")}</h3>
              <p className="text-[#3a4455]/70 leading-relaxed mb-6">{t("description")}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[#3a4455] mb-2">{t("address.title")}</h4>
                <p className="text-[#3a4455]/70">
                  {t("address.line1")}
                  <br />
                  {t("address.line2")}
                  <br />
                  {t("address.line3")}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-[#3a4455] mb-2">{t("hours.title")}</h4>
                <p className="text-[#3a4455]/70">
                  {t("hours.line1")}
                  <br />
                  {t("hours.line2")}
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-element">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#3a4455] mb-2">
                  {t("form.name")} {t("form.required")}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-[#3a4455]/20 focus:border-[#c9a961] text-[#3a4455]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3a4455] mb-2">
                  {t("form.email")} {t("form.required")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-[#3a4455]/20 focus:border-[#c9a961] text-[#3a4455]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#3a4455] mb-2">
                  {t("form.phone")} {t("form.required")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border-[#3a4455]/20 focus:border-[#c9a961] text-[#3a4455]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3a4455] mb-2">
                  {t("form.message")} {t("form.required")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white border-[#3a4455]/20 focus:border-[#c9a961] text-[#3a4455] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#3a4455] hover:bg-[#2a3240] text-[#f8f7f4] font-medium py-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(58,68,85,0.4)] hover:scale-105 hover:-translate-y-1 cursor-pointer active:scale-100 active:translate-y-0"
              >
                {t("form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
