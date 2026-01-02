"use client"

import { useEffect, useRef } from "react"

export function ApproachSection() {
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

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your unique financial situation, goals, and risk tolerance.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts develop a customized strategy aligned with your objectives and market conditions.",
    },
    {
      number: "03",
      title: "Execution",
      description: "We implement your plan with precision, leveraging our global network and market expertise.",
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous oversight and regular reviews ensure your portfolio remains optimized and on track.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#3a4455]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-white mb-8 text-center">
          Our Approach
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="fade-in-element group text-center">
              <div className="mb-6">
                <span className="font-serif text-6xl font-light text-[#c9a961]/30 group-hover:text-[#c9a961]/50 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
