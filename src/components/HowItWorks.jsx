const steps = [
  {
    step: '01',
    title: 'Register & Login',
    description: 'Sign up with your email or phone number. Firebase-secured authentication keeps your account safe from day one.',
    icon: '📱',
    color: 'bg-orange-500',
  },
  {
    step: '02',
    title: 'Search Nearby Chefs',
    description: 'Enable location or enter your area to browse verified home chefs. Filter by cuisine, rating, price, and availability.',
    icon: '🔍',
    color: 'bg-blue-500',
  },
  {
    step: '03',
    title: 'Get AI Recommendations',
    description: 'Our AI engine analyzes your taste profile, previous bookings, and chef ratings to suggest your perfect match.',
    icon: '🤖',
    color: 'bg-purple-500',
  },
  {
    step: '04',
    title: 'Negotiate & Book',
    description: 'Propose your price, negotiate with the chef in-app, agree on a date and time slot, and confirm your booking instantly.',
    icon: '🤝',
    color: 'bg-green-500',
  },
  {
    step: '05',
    title: 'Pay Securely',
    description: 'Complete payment through our trusted local payment gateway. Funds are held safely and released after service completion.',
    icon: '💳',
    color: 'bg-teal-500',
  },
  {
    step: '06',
    title: 'Enjoy & Review',
    description: 'Enjoy a delicious home-cooked meal. After the session, leave a rating and review to help the community.',
    icon: '⭐',
    color: 'bg-yellow-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            How <span className="text-orange-500">ChefKart</span> Works
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            From registration to a delicious meal — the entire journey in six simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line (desktop) */}
              {i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gray-200 z-10 -translate-y-0.5" />
              )}

              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${s.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md`}>
                    {s.icon}
                  </div>
                  <span className="text-5xl font-black text-gray-100 leading-none">{s.step}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-orange-500 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl shadow-orange-200 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
            <span>Start Booking in Minutes</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
