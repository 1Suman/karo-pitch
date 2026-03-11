import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

const faqs = [
  {
    q: 'Who can apply to Karo Pitch?',
    a: 'Any early stage founder from India can apply especially those from Tier-2 and Tier-3 cities. We welcome D2C brands, consumer startups, MSMEs, SaaS, manufacturing businesses, and any Bharat-focused startup with a working product or MVP.',
  },
  {
    q: 'Is there a fee to apply?',
    a: 'No, applying to Karo Pitch is completely free. Our mission is to make funding accessible to every founder across Bharat, regardless of their financial background.',
  },
  {
    q: 'What stage should my startup be at?',
    a: 'We typically accept startups from pre-seed to Series A. You should have a working product or MVP, some early traction or validation, and a clear vision for how you will use the funding.',
  },
  {
    q: 'How are startups selected?',
    a: 'Our team at KaroStartup reviews every application carefully. We evaluate the problem being solved, the founding team, market opportunity, and traction. Shortlisted founders are notified within 2 weeks of applying.',
  },
  {
    q: 'What happens after I pitch?',
    a: 'After your pitch, interested investors will reach out directly to continue conversations. KaroStartup also provides mentorship and guidance to help you close your funding round successfully.',
  },
  {
    q: 'Can investors also participate?',
    a: 'Absolutely! If you are an investor looking to discover high-potential startups from across India, reach out to us at business@karostartup.com or DM us on Instagram @karopitch.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`card-dark rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#C1272D]/30' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: 'Syne, sans-serif' }}>
          {question}
        </span>
        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${
          isOpen
            ? 'bg-[#C1272D] border-[#C1272D] rotate-45'
            : 'border-white/20 bg-white/5'
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <p className="text-white/50 text-sm leading-relaxed px-6 pb-6">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#111118]">
      <div className="max-w-3xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="tag inline-block mb-6">Got Questions?</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Everything you need to know about Karo Pitch. Can't find your answer? Reach out to us directly.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <FAQItem
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <p className="text-white/30 text-sm mb-4">Still have questions?</p>
            <a
              href="mailto:business@karostartup.com"
              className="btn-outline px-7 py-3 rounded-xl text-sm inline-block"
            >
              Contact Us 
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}