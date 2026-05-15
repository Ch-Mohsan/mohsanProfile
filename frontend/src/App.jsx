
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1018] text-[#e9edf5] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  )
}

export default App