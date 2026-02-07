import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: '選ばれる理由', href: '#reasons' },
    { label: '内定実績', href: '#success' },
    { label: '無料相談', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">CAREER</span>
            <span className="text-xl font-bold text-gold-400">AGENT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-navy-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              無料相談に申し込む
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy-200 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-center px-5 py-3 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                無料相談に申し込む
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
