import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 5, suffix: '+', label: 'Years of Storytelling' },
  { value: 10000, suffix: '+', label: 'Startup Stories Published' },
  { value: 1, prefix: '', suffix: 'M+', label: 'Founders Inspired' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
]

export default function AboutKaroStartup() {
  return (
    <section className="py-24 md:py-32 bg-[#111118]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ScrollReveal direction="left">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#E8626A]/8 to-transparent blur-xl" />
              <div className="relative bg-[#1A1A25] border border-white/8 rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-[#22222F] rounded-2xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix || ''}
                        label={stat.label}
                      />
                    </div>
                  ))}
                </div>
                <div className="divider mb-6" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C1272D] to-[#E8626A] flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    K
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">KaroStartup</p>
                    <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noreferrer" className="text-[#C1272D]/70 text-xs hover:text-[#C1272D] transition-colors">
                      @karopitch on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="order-1 lg:order-2">
              <div className="tag mb-6">Powered By</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Built on 5 years of <span className="text-gradient">startup storytelling.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                KaroStartup is one of India's largest startup media platforms. Over the past five years, we've documented thousands of founder journeys from first generation entrepreneurs in small towns to funded startups making national headlines.
              </p>
              <p className="text-white/50 leading-relaxed mb-4">
                We've built a deep, trusted community of founders, mentors, and investors across the country. Karo Pitch is the natural next step turning that community into real funding opportunities.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                When you pitch through Karo Pitch, you're not just pitching to investors you're backed by the credibility and reach of a platform that millions of founders trust.
              </p>
              <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noreferrer" className="btn-outline px-6 py-3 rounded-xl text-sm inline-block">
                Follow @karopitch
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}