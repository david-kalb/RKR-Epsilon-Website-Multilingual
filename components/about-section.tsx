"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#3a4455] mb-8 text-center">
          About Us
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-12" />

        <div className="space-y-6 text-[#3a4455]/80 leading-relaxed text-center">
          <p className="fade-in-element text-lg md:text-xl">
            Founded on principles of discretion, excellence, and unwavering commitment to our clients, RKR Epsilon has
            established itself as a trusted partner in the world of investment banking.
          </p>

          <p className="fade-in-element text-base md:text-lg">
            Our heritage is built on decades of experience navigating complex financial landscapes. We serve a select
            clientele of private individuals and institutional investors who demand the highest standards of service and
            expertise.
          </p>

          <p className="fade-in-element text-base md:text-lg">
            At RKR Epsilon, we believe that true wealth is preserved and grown through disciplined strategy, deep market
            insight, and a long-term perspective. Our approach combines traditional values with modern financial
            innovation, ensuring our clients benefit from both time-tested wisdom and cutting-edge opportunities.
          </p>

          <p className="fade-in-element text-base md:text-lg">
            We maintain the highest standards of confidentiality and professionalism, treating each client relationship
            as a sacred trust. Our mission is not merely to manage assets, but to build enduring partnerships that span
            generations.
          </p>
        </div>
      </div>
    </section>
  )
}
