"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const t = useTranslations("hero")

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

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background%281%29-qnJ5WjtqMgo7iGLYTPJE12x30WJJBg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-[#2a3240]/85 via-[#3a4455]/80 to-[#4a5465]/85" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(42,50,64,0.4)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="fade-in-element font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#f8f7f4] mb-8 tracking-tight text-balance drop-shadow-2xl">
          {t("title")}
          <br />
          <span className="text-[#c9a961] drop-shadow-lg">{t("titleAccent")}</span>
        </h1>

        <p className="fade-in-element text-lg md:text-xl text-[#f8f7f4]/95 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-lg">
          {t("description")}
        </p>

        <Button
          onClick={scrollToAbout}
          size="lg"
          className="fade-in-element bg-[#c9a961] hover:bg-[#b89a55] text-[#2a3240] font-medium px-10 py-7 text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[0_8px_30px_rgba(201,169,97,0.6)] hover:scale-110 hover:-translate-y-1 cursor-pointer active:scale-105 active:translate-y-0"
        >
          {t("cta")}
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#c9a961] rounded-full flex items-start justify-center p-2 shadow-lg">
          <div className="w-1 h-2 bg-[#c9a961] rounded-full" />
        </div>
      </div>
    </section>
  )
}
