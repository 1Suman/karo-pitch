import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'

const investorTypes = [
  { type: 'Angel Investors', desc: 'High net worth individuals investing in early stage startups.' },
  { type: 'Venture Capitalists', desc: 'VC firms actively seeking the next unicorn from Bharat.' },
  { type: 'Family Offices', desc: 'Family run investment offices exploring startup opportunities.' },
  { type: 'Strategic Partners', desc: 'Corporates and industry leaders looking to invest and collaborate.' },
]

export default function Investors() {
  return (
    <section id="investors" className="py-24 md:py-32 bg-[#111118]">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag inline-block mb-6">The Room</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Investors Looking for the <span className="text-gradient">Next Big Startup.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              At every Karo Pitch event, we bring together a curated group of investors angels, VCs, family offices who are actively writing cheques and looking for exactly what you're building.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {investorTypes.map((inv, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up">
              <div className="card-dark rounded-2xl p-6 flex flex-col gap-1">
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{inv.type}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{inv.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="bg-[#1A1A25] border border-white/8 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#C1272D]/20 border-2 border-[#C1272D]/30 flex items-center justify-center">
                <AnimatedCounter value={50} suffix="+" />
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              Investor List Revealed Closer to Event
            </h3>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
              We carefully curate our investor panel for each season to ensure the best match for the startups applying. Stay tuned for Season 1 announcements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#cta" className="btn-primary px-7 py-3.5 rounded-xl text-sm">Apply as a Startup</a>
              <a href="mailto:business@karostartup.com" className="btn-outline px-7 py-3.5 rounded-xl text-sm">Join as Investor</a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}