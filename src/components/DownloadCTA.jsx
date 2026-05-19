const DRIVE_APK_LINK = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'

const features = [
  { icon: '🛡️', text: 'Verified & Safe Chefs' },
  { icon: '🤖', text: 'AI-Powered Matching' },
  { icon: '💬', text: 'In-App Negotiation' },
  { icon: '💳', text: 'Secure Payments' },
  { icon: '📍', text: 'Location-Based Search' },
  { icon: '⭐', text: 'Ratings & Reviews' },
]

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-200">
          {/* Background decorations */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-800/20 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />

          {/* Floating emojis */}
          <div className="absolute top-8 right-32 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🍛</div>
          <div className="absolute bottom-8 right-16 text-4xl opacity-20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>🥘</div>
          <div className="absolute top-16 left-1/2 text-3xl opacity-10 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🍱</div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            {/* Left content */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Free to Download — No Subscription</span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-4xl lg:text-6xl font-black leading-none tracking-tight">
                  Your Perfect
                  <br />
                  <span className="text-white drop-shadow">Home Chef</span>
                  <br />
                  <span style={{ color: '#1a1f5e' }}>Awaits You</span>
                </h2>
                <p className="mt-5 text-orange-100 text-lg leading-relaxed max-w-lg">
                  Download ChefKart now and connect with verified home chefs in your area. Delicious, hygienic, personalized meals — just a few taps away.
                </p>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3">
                {features.map(f => (
                  <span
                    key={f.text}
                    className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    <span>{f.icon}</span>
                    {f.text}
                  </span>
                ))}
              </div>

              {/* Download Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={DRIVE_APK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 bg-white text-orange-600 font-black text-lg px-8 py-5 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  {/* Android icon */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.36.74 3.18.8 1.21-.24 2.37-.94 3.67-.84 1.57.12 2.75.72 3.53 1.84-3.25 1.97-2.7 6.29.62 7.5-.58 1.56-1.35 3.1-3 3.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium text-orange-400 leading-none mb-0.5">Download for Android</div>
                    <div className="text-xl font-black leading-none">Get the APK</div>
                  </div>
                  {/* Download arrow */}
                  <svg className="w-5 h-5 ml-1 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>

                {/* Info note */}
                <div className="flex items-center gap-2 text-orange-100 text-sm font-medium">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Enable "Install from unknown sources" on your Android device to install the APK.</span>
                </div>
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { icon: '🔒', text: 'Safe & Secure' },
                  { icon: '✅', text: 'No Sign-up Fee' },
                  { icon: '📦', text: 'Lightweight App' },
                ].map(t => (
                  <div key={t.text} className="flex items-center gap-1.5 text-orange-100 text-sm font-medium">
                    <span>{t.icon}</span>
                    {t.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-white/30 rounded-[3rem] blur-2xl scale-110" />

                {/* Phone outer shell */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl w-64">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-6 pt-5 pb-8">
                      <div className="flex justify-between text-white text-xs font-bold mb-5 opacity-80">
                        <span>9:41</span>
                        <span>●●▲</span>
                      </div>
                      <p className="text-orange-100 text-xs font-semibold">Ready to cook for you!</p>
                      <h3 className="text-white text-xl font-black leading-tight mt-1">
                        Find Your Perfect<br />
                        <span className="text-yellow-300">Chef Today!</span>
                      </h3>
                    </div>

                    {/* Search */}
                    <div className="px-4 -mt-4">
                      <div className="bg-white rounded-full px-4 py-3 shadow-xl flex items-center gap-2 border border-gray-100">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-gray-400 text-xs">Search cuisines or chefs...</span>
                        <div className="ml-auto w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Cuisine chips */}
                    <div className="px-4 mt-4">
                      <p className="text-gray-800 text-xs font-black mb-2">Popular Cuisines</p>
                      <div className="flex gap-2 overflow-hidden">
                        {['🍛 Pakistani', '🍝 Italian', '🍖 BBQ'].map(c => (
                          <div key={c} className="flex-shrink-0 bg-orange-50 border border-orange-100 rounded-xl px-2.5 py-1.5">
                            <span className="text-[9px] font-bold text-gray-700">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chef cards */}
                    <div className="px-4 mt-4 mb-4">
                      <p className="text-gray-800 text-xs font-black mb-2">Top Chefs Near You</p>
                      {[
                        { name: 'Chef Ayesha Khan', rating: '4.8', price: 'Rs. 1,500', emoji: '👩‍🍳' },
                        { name: 'Chef Usman Ali', rating: '4.7', price: 'Rs. 2,000', emoji: '👨‍🍳' },
                      ].map(chef => (
                        <div key={chef.name} className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-2.5 mb-2 border border-gray-100">
                          <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                            {chef.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-black text-gray-800 truncate">{chef.name}</p>
                            <div className="flex items-center justify-between mt-0.5">
                              <span className="text-[9px] text-yellow-500 font-bold">⭐ {chef.rating}</span>
                              <span className="text-[9px] font-bold text-gray-500">{chef.price}</span>
                            </div>
                          </div>
                          <button className="bg-orange-500 text-white text-[8px] font-black px-2 py-1.5 rounded-lg flex-shrink-0">
                            Book
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Bottom nav */}
                    <div className="border-t border-gray-100 px-6 py-3 flex justify-around">
                      {['🏠', '👨‍🍳', '📅', '💬', '👤'].map((icon, i) => (
                        <span key={i} className={`text-base ${i === 0 ? 'opacity-100' : 'opacity-25'}`}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">✅</div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Chef Verified</p>
                    <p className="text-xs font-black text-gray-800">Ready to cook!</p>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-lg">⭐</div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Avg Rating</p>
                    <p className="text-xs font-black text-gray-800">4.8 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary info cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: '📲',
              title: 'Android Only (For Now)',
              desc: 'ChefKart APK is currently available for Android devices. iOS version coming soon.',
              bg: 'bg-white',
            },
            {
              icon: '🚀',
              title: 'Instant Setup',
              desc: 'Download, install, register, and book your first chef — all in under 5 minutes.',
              bg: 'bg-white',
            },
            {
              icon: '🆓',
              title: 'Completely Free',
              desc: 'No subscription, no hidden charges. ChefKart only earns a small commission on completed bookings.',
              bg: 'bg-white',
            },
          ].map(card => (
            <div key={card.title} className={`${card.bg} border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-200 text-center`}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h4 className="text-gray-900 font-black text-lg mb-2">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
