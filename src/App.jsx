import Navbar from './components/common/Navbar'
import Home from './sections/Home'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App