import screen1 from "../appScreenshots/1.jpeg";
import screen2 from "../appScreenshots/2.jpeg";
import screen3 from "../appScreenshots/3.jpeg";
import screen4 from "../appScreenshots/4.jpeg";
import screen5 from "../appScreenshots/5.jpeg";
import screen6 from "../appScreenshots/6.jpeg";

const screens = [
  {
    title: "Customer Location",
    desc: "Browse verified chefs near you with detailed profiles, cuisine specialties, ratings, and live availability.",
    color: "from-orange-400 to-orange-600",
    emoji: "🔍",
    image: screen1,
    items: [
      "Chef Ayesha Khan ⭐4.8",
      "Chef Usman Ali ⭐4.7",
      "Chef Sara Malik ⭐4.9",
    ],
  },
  {
    title: "Login",
    desc: "Sign in securely with your email and password to access your personalized dashboard and saved preferences.",
    color: "from-purple-500 to-indigo-600",
    emoji: "🤖",
    image: screen2,
    items: ["Based on your taste", "Nearby & available", "Highest rated match"],
  },
  {
    title: "Sign Up",
    desc: "Create your account in seconds. Set up your profile, preferences, and location to start discovering amazing chefs.",
    color: "from-green-400 to-teal-600",
    emoji: "💬",
    image: screen3,
    items: [
      "You offered: Rs. 1,200",
      "Chef counter: Rs. 1,400",
      "Deal confirmed ✅",
    ],
  },
  {
    title: "Price Negotiation",
    desc: "Propose your budget, receive counter-offers, and agree on the perfect price — all inside the app.",
    color: "from-blue-400 to-blue-600",
    emoji: "📅",
    image: screen4,
    items: [
      "Active booking: Today 2PM",
      "Upcoming: Saturday 7PM",
      "Completed: 12 sessions",
    ],
  },
  {
    title: "Secure Payments",
    desc: "Pay safely through local payment gateways. Funds are held until your session is completed.",
    color: "from-teal-400 to-cyan-600",
    emoji: "💳",
    image: screen5,
    items: ["JazzCash / EasyPaisa", "Card payment", "Transaction receipt"],
  },
  {
    title: "Ratings & Reviews",
    desc: "After every session, rate your chef and share feedback that helps the whole community.",
    color: "from-yellow-400 to-orange-500",
    emoji: "⭐",
    image: screen6,
    items: ["Rate your experience", "Write a review", "Public chef ratings"],
  },
];

function MockScreen({ screen }) {
  return (
    <div className="bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl w-52 mx-auto">
      <div className="bg-white rounded-[1.5rem] overflow-hidden">
        {/* Image */}
        <div className="relative w-full bg-gray-200">
          <img
            src={screen.image}
            alt={screen.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom nav */}
        <div className="border-t border-gray-100 px-4 py-2 flex justify-around mb-1">
          {["🏠", "👨‍🍳", "📅", "💬", "👤"].map((icon, i) => (
            <span
              key={i}
              className={`text-sm ${i === 0 ? "opacity-100" : "opacity-25"}`}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AppScreenshots() {
  return (
    <section id="screenshots" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            App Gallery
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            A Peek Inside <span className="text-orange-500">ChefKart</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Clean, intuitive, and delightful to use — every screen designed with
            you in mind.
          </p>
        </div>

        {/* Screens grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {screens.map((screen) => (
            <div key={screen.title} className="group">
              {/* Phone mockup */}
              <div className="transform group-hover:-translate-y-2 transition-all duration-300 mb-6">
                <MockScreen screen={screen} />
              </div>

              {/* Text */}
              <div className="text-center px-4">
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {screen.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
