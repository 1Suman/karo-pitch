import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import HowItWorks from './components/sections/HowItWorks'
import WhoCanApply from './components/sections/WhoCanApply'
import Investors from './components/sections/Investors'
import FeaturedStartups from './components/sections/FeaturedStartups'
import AboutKaroStartup from './components/sections/AboutKaroStartup'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CallToAction from './components/sections/CallToAction'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <FeaturedStartups />
        <AboutKaroStartup />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}