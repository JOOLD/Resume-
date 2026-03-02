import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import SideElements from './components/SideElements'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      <ParticleNetwork />
      <div className="relative z-10">
        <Navbar />
        <SideElements />
        <main className="max-w-[1600px] mx-auto">
          <Hero />
          <About />
          <FeaturedProject />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
