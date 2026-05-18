const testimonials = [
  {
    name: 'Ayesha Raza',
    role: 'Customer, Karachi',
    avatar: '👩',
    rating: 5,
    text: 'ChefKart completely changed how I eat at home. I found an amazing chef who makes the best nihari I have ever tasted — and I negotiated the price to fit my budget perfectly!',
    cuisine: 'Pakistani Cuisine',
  },
  {
    name: 'Muhammad Usman',
    role: 'Home Chef, Lahore',
    avatar: '👨‍🍳',
    rating: 5,
    text: 'As a home chef, I was struggling to find clients. ChefKart verified my profile and within a week I had 5 bookings. The platform is transparent and payments are always on time.',
    cuisine: 'BBQ & Grills',
  },
  {
    name: 'Sara Malik',
    role: 'Customer, Islamabad',
    avatar: '👩‍💼',
    rating: 5,
    text: 'The AI recommendation feature is brilliant — it suggested a chef who specializes in exactly the cuisine I love. Booking took less than 3 minutes. Absolutely impressed!',
    cuisine: 'Continental Food',
  },
  {
    name: 'Ali Hassan',
    role: 'Home Chef, Peshawar',
    avatar: '🧑‍🍳',
    rating: 5,
    text: 'I love how the negotiation feature works. Customers propose a price, I counter, and we meet in the middle. It feels fair for everyone. ChefKart gave me a real business.',
    cuisine: 'Desi & Traditional',
  },
  {
    name: 'Fatima Khan',
    role: 'Customer, Rawalpindi',
    avatar: '👧',
    rating: 5,
    text: 'Hosting a dinner party used to be stressful. Now I just open ChefKart, pick a chef, agree on a menu, and everything is handled. My guests always ask who cooked the food!',
    cuisine: 'Mughal Cuisine',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'Customer, Karachi',
    avatar: '🧔',
    rating: 5,
    text: 'Secure payments gave me so much confidence. The fact that money is only released after service completion means I always get what I paid for. Highly recommend ChefKart.',
    cuisine: 'Italian & Pasta',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Real Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            What Our <span className="text-orange-500">Community</span> Says
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Thousands of customers and chefs are already transforming how food is made and enjoyed at home.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${i === 0 ? 'lg:col-span-1' : ''}`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-5xl text-orange-100 font-black select-none leading-none">"</div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="mt-4 text-gray-600 leading-relaxed text-sm relative z-10">"{t.text}"</p>

              {/* Cuisine tag */}
              <span className="inline-block mt-4 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                {t.cuisine}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '500+', label: 'Verified Chefs' },
            { value: '4.8 / 5', label: 'Average Rating' },
            { value: '50+', label: 'Cuisine Types' },
          ].map(stat => (
            <div key={stat.label} className="bg-gradient-to-br from-orange-500 to-amber-400 rounded-3xl p-8 text-center text-white">
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
