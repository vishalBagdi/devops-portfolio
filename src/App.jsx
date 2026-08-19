import { LazyMotion, domAnimation } from 'motion/react'
import About from './components/About'
import Architecture from './components/Architecture'
import AWSExpertise from './components/AWSExpertise'
import CICD from './components/CICD'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="app-frame">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,154,60,0.16),transparent_55%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%)]" />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <AWSExpertise />
          <Architecture />
          <Projects />
          <CICD />
          <Experience />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
