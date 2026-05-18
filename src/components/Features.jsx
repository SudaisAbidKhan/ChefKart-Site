const features = [
  {
    icon: '🛡️',
    title: 'Verified Chefs Only',
    description: 'Every chef on ChefKart goes through a strict admin verification process before they can accept any bookings. Your safety is our top priority.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Recommendations',
    description: 'Our smart AI module analyzes your preferences, past bookings, and location to suggest the most suitable chefs tailored just for you.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: '💬',
    title: 'In-App Price Negotiation',
    description: 'Propose your budget and negotiate directly with chefs inside the app — like InDrive but for home cooking. No off-platform dealing.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: '📍',
    title: 'Location-Based Search',
    description: 'Find chefs near you instantly. Enable GPS and browse available home chefs in your area with real-time distance and availability.',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: '💳',
    title: 'Secure Payments',
    description: 'Pay safely through integrated local payment gateways. Every transaction is encrypted and recorded. Payments release only after service completion.',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: '⭐',
    title: 'Ratings & Reviews',
    description: 'After every session, share honest feedback. Transparent public ratings help you choose the best chef and keep quality high across the platform.',
    color: 'from-yellow-500 to-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why ChefKart?
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Everything You Need,{' '}
            <span className="text-orange-500">All in One App</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            ChefKart brings together cutting-edge technology and human expertise to create the ultimate home chef booking experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative ${f.bg} border ${f.border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-6`}>
                {f.icon}
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
