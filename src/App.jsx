import Navbar from './components/common/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Training from './sections/Training'
import Certifications from './sections/Certifications'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certifications />
      </main>
    </div>
  )
}

export default App