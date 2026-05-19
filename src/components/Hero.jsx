import appScreenshot from "../appScreenshots/2.jpeg";

const DRIVE_APK_LINK =
  "https://drive.google.com/uc?export=download&id=1qZVSBlNSGihSghpFF2ZZq4FQwBmQNEr1";

export default function Hero() {
  const handleDownload = () => {
    // Add &confirm=t to bypass Google Drive preview on mobile
    console.log("clicked");
    const url =
      "https://drive.google.com/uc?export=download&id=1qZVSBlNSGihSghpFF2ZZq4FQwBmQNEr1&confirm=t";
    window.location.href = url;
  };

  return (
    <section className="relative min-h-screen bg-linear-to-br from-orange-600 via-orange-500 to-amber-400 overflow-hidden flex items-center">
      {/* Background decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full" />

      {/* Floating food icons */}
      <div
        className="absolute top-24 right-16 text-5xl animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🍛
      </div>
      <div
        className="absolute top-40 left-10 text-4xl animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
      >
        👨‍🍳
      </div>
      <div
        className="absolute bottom-32 right-24 text-4xl animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3.5s" }}
      >
        🍱
      </div>
      <div
        className="absolute bottom-48 left-16 text-3xl animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
      >
        🥘
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">
                Now Available in Pakistan
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight">
                Book a
                <br />
                <span className="text-white drop-shadow-lg">Home Chef</span>
                <br />
                <span className="text-navy-900" style={{ color: "#1a1f5e" }}>
                  Instantly
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-orange-100 font-medium leading-relaxed max-w-lg">
                Connect with verified professional home chefs. Get personalized,
                hygienic, and delicious home-cooked meals delivered to your
                doorstep — on your schedule.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8">
              {[
                { value: "500+", label: "Verified Chefs" },
                { value: "4.8★", label: "Avg Rating" },
                { value: "10K+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-orange-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                href="#howitworks"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-4 rounded-2xl hover:bg-white/10 transition-all duration-200"
              >
                See How It Works
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                "Verified Chefs",
                "Secure Payments",
                "On-Time Service",
                "Easy Booking",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-orange-100 font-medium"
                >
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — App Screenshot */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-2xl scale-110" />
              {/* Phone shell */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl w-72">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src={appScreenshot}
                    alt="ChefKart App"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80H1440V40C1200 80 960 0 720 20C480 40 240 80 0 40V80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
