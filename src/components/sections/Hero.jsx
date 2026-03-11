import AnimatedCounter from '../ui/AnimatedCounter'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />


      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C1272D]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#E8626A]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1A1A25] border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C1272D] pulse-dot" />
          <span className="text-white/60 text-xs font-medium tracking-wide">Now Open — Season 1 Applications</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
          <span className="text-white">Pitch Your Startup</span>
          <br />
          <span className="text-gradient">to India's Top</span>
          <br />
          <span className="text-white">Investors.</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Karo Pitch is a platform where founders from Tier-2, Tier-3 cities and across Bharat can pitch their startups directly to investors and raise the funding they deserve.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#cta" className="btn-primary px-8 py-4 rounded-2xl text-base w-full sm:w-auto">
            Apply to Pitch 
          </a>
          <a href="#startups" className="btn-outline px-8 py-4 rounded-2xl text-base w-full sm:w-auto">
            Explore Startups
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <AnimatedCounter value={500} suffix="+" label="Founders Applied" />
          <AnimatedCounter value={50} suffix="+" label="Active Investors" />
          <AnimatedCounter value={10} prefix="₹" suffix="Cr+" label="Funding Facilitated" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        </div>
      </div>
    </section>
  )
}