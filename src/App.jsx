import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
        <footer className="bg-black/90 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} WayneLabs AI — All rights reserved.</p>
            <div className="text-white/60 text-sm">
              Built with love by humans + machines.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
