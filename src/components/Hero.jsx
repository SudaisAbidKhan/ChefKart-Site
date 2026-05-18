const DRIVE_APK_LINK = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-orange-600 via-orange-500 to-amber-400 overflow-hidden flex items-center">
      {/* Background decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full" />

      {/* Floating food icons */}
      <div className="absolute top-24 right-16 text-5xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🍛</div>
      <div className="absolute top-40 left-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>👨‍🍳</div>
      <div className="absolute bottom-32 right-24 text-4xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🍱</div>
      <div className="absolute bottom-48 left-16 text-3xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🥘</div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">Now Available in Pakistan</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                Book a
                <br />
                <span className="text-white drop-shadow-lg">Home Chef</span>
                <br />
                <span className="text-navy-900" style={{ color: '#1a1f5e' }}>Instantly</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-orange-100 font-medium leading-relaxed max-w-lg">
                Connect with verified professional home chefs. Get personalized, hygienic, and delicious home-cooked meals delivered to your doorstep — on your schedule.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: '500+', label: 'Verified Chefs' },
                { value: '4.8★', label: 'Avg Rating' },
                { value: '10K+', label: 'Happy Customers' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-orange-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={DRIVE_APK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.36.74 3.18.8 1.21-.24 2.37-.94 3.67-.84 1.57.12 2.75.72 3.53 1.84-3.25 1.97-2.7 6.29.62 7.5-.58 1.56-1.35 3.1-3 3.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download APK
              </a>
              <a
                href="#howitworks"
                className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200"
              >
                See How It Works
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Verified Chefs', 'Secure Payments', 'On-Time Service', 'Easy Booking'].map(badge => (
                <span key={badge} className="flex items-center gap-1.5 text-sm text-orange-100 font-medium">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-2xl scale-110" />
              {/* Phone shell */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl w-72">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-orange-500 px-6 pt-4 pb-6">
                    <div className="flex justify-between text-white text-xs font-bold mb-4">
                      <span>9:41</span>
                      <span>● ● ▲</span>
                    </div>
                    <p className="text-orange-100 text-xs font-medium">Hello, Ali 👋</p>
                    <h3 className="text-white text-lg font-black leading-tight mt-1">Find Your Perfect<br /><span className="text-yellow-300">Chef Today!</span></h3>
                  </div>

                  {/* Search bar */}
                  <div className="px-4 -mt-3">
                    <div className="bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2 border border-gray-100">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-gray-400 text-xs">Search cuisines or chefs...</span>
                    </div>
                  </div>

                  {/* Popular cuisines */}
                  <div className="px-4 mt-4">
                    <p className="text-gray-800 text-xs font-black mb-2">Popular Cuisines</p>
                    <div className="flex gap-2 overflow-hidden">
                      {['🍛 Pakistani', '🍝 Italian', '🍖 BBQ', '🌮 Cont.'].map(c => (
                        <div key={c} className="shrink-0 bg-orange-50 border border-orange-100 rounded-xl px-2 py-1.5 text-center">
                          <span className="text-[9px] font-bold text-gray-700">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top chefs */}
                  <div className="px-4 mt-4 mb-4">
                    <p className="text-gray-800 text-xs font-black mb-2">Top Chefs</p>
                    {[
                      { name: 'Chef Ayesha Khan', rating: '4.8', price: 'Rs. 1,500', cuisine: 'Pakistani • Chinese' },
                      { name: 'Chef Usman Ali', rating: '4.7', price: 'Rs. 2,000', cuisine: 'BBQ • Italian' },
                    ].map(chef => (
                      <div key={chef.name} className="flex items-center gap-3 bg-gray-50 rounded-xl p-2.5 mb-2">
                        <div className="w-9 h-9 bg-orange-200 rounded-full flex items-center justify-center text-lg">👨‍🍳</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-black text-gray-800 truncate">{chef.name}</p>
                          <p className="text-[9px] text-gray-400">{chef.cuisine}</p>
                          <div className="flex items-center justify-between mt-0.5">
                            <span className="text-[9px] text-orange-500 font-bold">⭐ {chef.rating}</span>
                            <span className="text-[9px] font-bold text-gray-600">{chef.price}/meal</span>
                          </div>
                        </div>
                        <button className="bg-orange-500 text-white text-[8px] font-black px-2 py-1 rounded-lg">Book</button>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="border-t border-gray-100 px-6 py-3 flex justify-around">
                    {['🏠', '👨‍🍳', '📅', '💬', '👤'].map((icon, i) => (
                      <span key={i} className={`text-lg ${i === 0 ? 'opacity-100' : 'opacity-30'}`}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 20C480 40 240 80 0 40V80Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
