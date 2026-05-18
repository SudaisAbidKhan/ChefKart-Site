import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UserTypes from './components/UserTypes'
import AppScreenshots from './components/AppScreenshots'
import Testimonials from './components/Testimonials'
// import DownloadCTA from './components/DownloadCTA'
// import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UserTypes />
      <AppScreenshots />
      <Testimonials />
      {/* <DownloadCTA />
      <Footer /> */}
    </div>
  )
}