import ScrollReveal from '../ui/ScrollReveal'

const categories = [
  { label: 'D2C Brands', desc: 'Consumer-facing product brands scaling direct.' },
  { label: 'Consumer Startups', desc: 'Apps and platforms with real user traction.' },
  { label: 'MSMEs', desc: 'Small and medium enterprises with growth potential.' },
  { label: 'SaaS Startups', desc: 'B2B software with recurring revenue models.' },
  { label: 'Manufacturing', desc: 'Product manufacturers with scalable operations.' },
  { label: 'Bharat Startups', desc: 'Businesses solving problems unique to India.' },
]

export default function WhoCanApply() {
  return (
    <section id="who-can-apply" className="py-24 md:py-32 bg-[#0A0A0F] noise-bg">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag inline-block mb-6">Eligibility</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who Can <span className="text-gradient">Apply?</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              We welcome early stage founders from across India especially from Tier-2, Tier-3 cities and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up" className="h-full">
              <div className="card-dark rounded-2xl p-6 flex flex-col group cursor-default h-full min-h-[90px]">
                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{cat.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="bg-[#1A1A25] border border-white/8 rounded-2xl p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Basic Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Early stage (pre seed to Series A)',
                'Based anywhere in India',
                'Have a working product or MVP',
                'Clear problem solution fit',
                'Coachable founding team',
                'Passion for solving real problems',
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="#C1272D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}