import ScrollReveal from '../ui/ScrollReveal'

const startups = [
  { name: 'GrainMart', category: 'D2C / AgriTech', location: 'Nagpur, Maharashtra', desc: 'Connecting farmers directly with urban consumers for fresh, traceable grains and pulses.', stage: 'Pre-Seed' },
  { name: 'FabRoots', category: 'D2C / Fashion', location: 'Surat, Gujarat', desc: "Reviving India's handloom heritage with a modern D2C brand targeting Gen-Z buyers.", stage: 'Seed' },
  { name: 'SwasthyaAI', category: 'HealthTech / SaaS', location: 'Bhopal, MP', desc: 'AI-powered diagnostics platform for rural healthcare workers and community health centres.', stage: 'Pre-Seed' },
  { name: 'KiraanaOS', category: 'MSME / SaaS', location: 'Lucknow, UP', desc: 'All-in-one operating system for kirana stores inventory, billing, and supplier management.', stage: 'Seed' },
  { name: 'CraftNest', category: 'Manufacturing', location: 'Jaipur, Rajasthan', desc: 'Aggregating artisan workshops to fulfil B2B export orders for home décor and gifting.', stage: 'Pre-Series A' },
  { name: 'MilkRoute', category: 'Consumer / Logistics', location: 'Indore, MP', desc: 'Tech-enabled fresh dairy delivery platform connecting local dairy farmers to households.', stage: 'Seed' },
]

const stageColors = {
  'Pre-Seed': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Seed': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Pre-Series A': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function FeaturedStartups() {
  return (
    <section id="startups" className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag inline-block mb-6">Example Startups</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Startups That Could Be <span className="text-gradient">Pitching Next.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Real businesses. Real founders. Real potential. Could yours be next on this list?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {startups.map((startup, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up">
              <div className="card-dark rounded-2xl p-6 flex flex-col group h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>{startup.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0 ml-2 ${stageColors[startup.stage]}`}>
                    {startup.stage}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C1272D] text-xs font-medium">{startup.category}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-white/30 text-xs">📍 {startup.location}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed flex-1">{startup.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-[#C1272D] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Pitch</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <a href="#cta" className="btn-primary px-8 py-4 rounded-2xl text-base inline-block">
              Submit Your Startup 
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}