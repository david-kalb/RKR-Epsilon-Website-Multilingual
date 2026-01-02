export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background%281%29-qnJ5WjtqMgo7iGLYTPJE12x30WJJBg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-[#2a3240]/90 via-[#3a4455]/85 to-[#4a5465]/90" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(42,50,64,0.5)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#f8f7f4] mb-6 tracking-tight text-balance drop-shadow-2xl">
          About <span className="text-[#c9a961]">RKR Epsilon</span>
        </h1>

        <p className="text-lg md:text-xl text-[#f8f7f4]/95 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-lg">
          Building lasting partnerships through strategic investment and expert financial guidance
        </p>
      </div>
    </section>
  )
}
