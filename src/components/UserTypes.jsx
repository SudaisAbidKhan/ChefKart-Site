const userTypes = [
  {
    role: 'Customer',
    emoji: '🧑‍💼',
    tagline: 'Hungry for something real?',
    description: 'Browse verified home chefs, get AI-powered recommendations, negotiate prices, book sessions, and enjoy restaurant-quality home-cooked food at your convenience.',
    perks: [
      'Search chefs by location & cuisine',
      'AI-based personalized recommendations',
      'In-app price negotiation',
      'Secure payment & booking management',
      'Rate & review after every session',
      'Real-time booking notifications',
    ],
    gradient: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    border: 'border-orange-200',
    btnColor: 'bg-orange-500 hover:bg-orange-600',
    textAccent: 'text-orange-500',
  },
  {
    role: 'Home Chef',
    emoji: '👨‍🍳',
    tagline: 'Turn your passion into income.',
    description: 'Register your skills, get verified, manage your availability, negotiate with customers, and grow your home-based cooking business with zero upfront investment.',
    perks: [
      'Create a detailed chef profile',
      'Get discovered by nearby customers',
      'Accept or counter booking offers',
      'Track earnings and booking history',
      'Build a public rating & reputation',
      'Secure, on-time payment release',
    ],
    gradient: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    btnColor: 'bg-blue-600 hover:bg-blue-700',
    textAccent: 'text-blue-600',
  },
]

export default function UserTypes() {
  return (
    <section id="usertypes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Who Is It For?
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Built for <span className="text-orange-500">Everyone</span> at the Table
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Whether you're craving a home-cooked meal or want to share your culinary talent, ChefKart is your platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {userTypes.map(u => (
            <div
              key={u.role}
              className={`relative ${u.lightBg} border-2 ${u.border} rounded-3xl overflow-hidden`}
            >
              {/* Top gradient banner */}
              <div className={`bg-linear-to-r ${u.gradient} p-8 flex items-center gap-6`}>
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                  {u.emoji}
                </div>
                <div>
                  <p className="text-white/80 text-sm font-semibold">{u.tagline}</p>
                  <h3 className="text-3xl font-black text-white mt-1">{u.role}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8">{u.description}</p>

                {/* Perks list */}
                <ul className="space-y-3 mb-8">
                  {u.perks.map(perk => (
                    <li key={perk} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-linear-to-br ${u.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Admin note */}
        <div className="mt-10 bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl shrink-0">🛡️</div>
          <div className="flex-1">
            <h4 className="text-white font-black text-xl mb-1">Admin Panel</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A dedicated admin layer monitors all platform activity — verifying chefs, managing users, resolving disputes, enforcing commission rules, and ensuring ChefKart remains a safe, trustworthy marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
