import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Apply with your Pitch Deck',
    desc: 'Submit your startup details and pitch deck through our simple online application form.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get Shortlisted',
    desc: 'Our team at KaroStartup reviews every application and curates the best startups for investors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Pitch Live to Investors',
    desc: 'Selected founders present their businesses in a structured, closed room pitch event with active investors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Raise Funding & Scale',
    desc: 'Connect with interested investors, close your funding round, and take your startup to the next level.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#C1272D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#111118]">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="tag inline-block mb-6">Simple Process</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-gradient">Karo Pitch</span> Works
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              From application to funding a clear, transparent, and founder friendly process.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150} direction="up">
              <div className="relative card-dark rounded-2xl p-6 h-full flex flex-col group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(193,39,45,0.3), rgba(193,39,45,0.05))' }}
                  />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C1272D]/20 text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#C1272D]/10 border border-[#C1272D]/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1">{step.desc}</p>
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-[#C1272D] to-[#E8626A] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <a href="#cta" className="btn-primary px-8 py-4 rounded-2xl text-base inline-block">
              Start Your Application 
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}