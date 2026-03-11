import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Karo Pitch" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              India's most accessible startup discovery and funding platform for Bharat entrepreneurs. Powered by KaroStartup.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Platform</h4>
            <ul className="space-y-3">
              {['About Karo Pitch', 'How It Works', 'Who Can Apply', 'Featured Startups', 'Investors'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:business@karostartup.com" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">
                  business@karostartup.com
                </a>
              </li>
              <li>
                <a href="tel:9315194393" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">
                  +91 93151 94393
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">
                  @karopitch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 KaroStartup · All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Designed by <span className="text-white/40 font-medium">Suman Shrestha</span> for KaroStartup Internship 2026
          </p>
        </div>
      </div>
    </footer>
  )
}