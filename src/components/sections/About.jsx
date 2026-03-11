import ScrollReveal from '../ui/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ScrollReveal direction="left">
            <div>
              <div className="tag mb-6">About Karo Pitch</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Bridging the gap between <span className="text-gradient">Bharat's founders</span> and investors.
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Thousands of founders across India's Tier-2 and Tier-3 cities are building remarkable businesses D2C brands, consumer startups, MSMEs, and more. But they struggle to get in front of the right investors.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Karo Pitch changes that. We created a structured, curated pitch platform that puts deserving founders directly in front of investors who are actively looking for the next big opportunity from Bharat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#C1272D]/10 to-transparent blur-xl" />
              <div className="relative card-dark rounded-3xl p-8 md:p-10">
                <p className="text-white/25 text-xs font-semibold tracking-widest uppercase mb-6">Our Mission</p>
                <blockquote className="text-white/80 text-xl md:text-2xl font-light leading-relaxed italic">
                  "Every founder from every corner of India deserves a fair shot at funding regardless of their city, network, or background."
                </blockquote>
                <div className="divider my-6" />
                <p className="text-white/40 text-sm"> Karo Pitch, by KaroStartup</p>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#C1272D]/20 to-[#E8626A]/10 blur-sm" />
                <div className="absolute bottom-6 right-8 w-6 h-6 rounded-full bg-[#C1272D]/20" />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}