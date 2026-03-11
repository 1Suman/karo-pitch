import ScrollReveal from '../ui/ScrollReveal'

export default function CallToAction() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#0A0A0F] noise-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C1272D]/20 via-[#1A1A25] to-[#E8626A]/10" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C1272D]/15 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#E8626A]/10 blur-[60px]" />

            <div className="relative z-10 text-center py-16 md:py-20 px-8 md:px-16">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C1272D] pulse-dot" />
                <span className="text-white/60 text-xs font-medium tracking-wide">Applications Open - Season 1</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
                Ready to Pitch <br />
                <span className="text-gradient">Your Startup?</span>
              </h2>

              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Don't let geography limit your growth. Apply now and get the chance to pitch your startup directly to India's top investors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="mailto:business@karostartup.com" className="btn-primary px-10 py-4 rounded-2xl text-base w-full sm:w-auto">
                  Apply Now 
                </a>
                <a href="mailto:business@karostartup.com" className="btn-outline px-10 py-4 rounded-2xl text-base w-full sm:w-auto">
                  Partner With Us
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-sm">
                <a href="mailto:business@karostartup.com" className="hover:text-white/60 transition-colors">📧 business@karostartup.com</a>
                <span className="hidden sm:block">·</span>
                <a href="tel:9315194393" className="hover:text-white/60 transition-colors">📞 +91 93151 94393</a>
                <span className="hidden sm:block">·</span>
                <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noreferrer" className="hover:text-white/60 transition-colors">📱 @karopitch</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}