import ScrollReveal from '../ui/ScrollReveal'

const testimonials = [
  {
    quote: "Karo Pitch gave me access to investors I could never have reached from Indore. Within 3 weeks of pitching, I had two term sheets on the table.",
    name: 'Aarav Verma',
    role: 'Founder, GrainMart',
    location: 'Indore, MP',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    category: 'AgriTech',
  },
  {
    quote: "As a first-gen founder from a small town, I always felt the startup ecosystem was built for people in metros. Karo Pitch changed that for me completely.",
    name: 'Meera Iyer',
    role: 'Co-Founder, FabRoots',
    location: 'Surat, Gujarat',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    category: 'D2C Fashion',
  },
  {
    quote: "The curated format was brilliant. Investors were genuinely interested, asked great questions, and two of them followed up the very next day.",
    name: 'Rohan Desai',
    role: 'Founder, KiraanaOS',
    location: 'Lucknow, UP',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    category: 'SaaS / MSME',
  },
  {
    quote: "I had pitched at 3 other platforms before Karo Pitch. None of them had the quality of investors or the structure that Karo Pitch brought to the table.",
    name: 'Sneha Kulkarni',
    role: 'Founder, SwasthyaAI',
    location: 'Bhopal, MP',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    category: 'HealthTech',
  },
  {
    quote: "Being from Jaipur, people assumed my business was 'too regional'. Karo Pitch helped me show investors that Bharat is actually the biggest market.",
    name: 'Karan Rajput',
    role: 'Founder, CraftNest',
    location: 'Jaipur, Rajasthan',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    category: 'Manufacturing',
  },
  {
    quote: "The KaroStartup team personally prepared us for the pitch. It wasn't just a platform it felt like having a mentor in your corner the whole time.",
    name: 'Divya Nair',
    role: 'Co-Founder, MilkRoute',
    location: 'Nagpur, Maharashtra',
    photo: 'https://randomuser.me/api/portraits/women/90.jpg',
    category: 'Consumer / Logistics',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F] noise-bg">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag inline-block mb-6">Founder Stories</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Founders Who <span className="text-gradient">Pitched & Won.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
               Stories from founders across Bharat who found their investors through Karo Pitch.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up" className="h-full">
              <div className="card-dark rounded-2xl p-6 flex flex-col h-full group">

                <div className="text-[#C1272D]/30 text-5xl font-serif leading-none mb-4 select-none">"</div>

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 italic">
                  {t.quote}
                </p>

                <div className="divider mb-5" />

                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-white/40 text-xs truncate">{t.role}</p>
                    <p className="text-white/25 text-xs">📍 {t.location}</p>
                  </div>
                  <span className="tag text-[10px] py-0.5 flex-shrink-0">{t.category}</span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}