"use client"

import { useEffect, useRef } from "react"

export function ServicesHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background%281%29-qnJ5WjtqMgo7iGLYTPJE12x30WJJBg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a4455]/80 via-[#3a4455]/70 to-[#3a4455]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#f8f7f4] mb-6 drop-shadow-lg">
          Our <span className="text-[#c9a961]">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#f8f7f4]/90 font-light leading-relaxed">
          Tailored financial solutions for discerning clients
        </p>
      </div>
    </section>
  )
}
