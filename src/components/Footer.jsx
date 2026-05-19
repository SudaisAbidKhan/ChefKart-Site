const DRIVE_APK_LINK = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'

const navLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#howitworks' },
      { label: 'For Customers', href: '#usertypes' },
      { label: 'For Chefs', href: '#usertypes' },
      { label: 'App Gallery', href: '#screenshots' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About ChefKart', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Chef Verification', href: '#' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-900/40">
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path d="M4 15 Q5 12 8 12 H30 Q33 12 34 15 L36 28 Q37 32 34 32 H6 Q3 32 4 28 Z" fill="white" opacity="0.9"/>
                  <circle cx="10" cy="35" r="2.5" fill="white"/>
                  <circle cx="28" cy="35" r="2.5" fill="white"/>
                  <path d="M34 12 L36 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="16" cy="22" r="5" stroke="white" strokeWidth="1.5"/>
                  <path d="M13 22 L15 24 L20 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight">
                  CHEF <span className="text-orange-500">KART</span>
                </span>
                <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400 leading-none">
                  Cooking Company
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              ChefKart is Pakistan's first AI-powered on-demand home chef booking platform. Connecting customers with verified, talented home chefs — one delicious meal at a time.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { icon: '📧', text: 'support@chefkart.pk' },
                { icon: '📞', text: '+92 300 000 0000' },
                { icon: '📍', text: 'Peshawar, Pakistan' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navLinks.map(col => (
            <div key={col.heading}>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download banner */}
        <div className="mt-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-2xl leading-tight">
              Ready to Book Your First Chef?
            </h3>
            <p className="text-orange-100 text-sm mt-1">
              Download ChefKart for free and get started in minutes.
            </p>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1qZVSBlNSGihSghpFF2ZZq4FQwBmQNEr1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-white text-orange-600 font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.36.74 3.18.8 1.21-.24 2.37-.94 3.67-.84 1.57.12 2.75.72 3.53 1.84-3.25 1.97-2.7 6.29.62 7.5-.58 1.56-1.35 3.1-3 3.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Download APK Free
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {year} ChefKart Cooking Company. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <span className="text-orange-500">❤️</span>
            <span>in Pakistan</span>
            <span className="mx-2">•</span>
            <span>Developed by</span>
            <span className="text-orange-400 font-semibold ml-1">Ishtiaq & Suliman</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
