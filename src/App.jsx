import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Product from './components/Product'
import Applications from './components/Applications'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Product />
        <Applications />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
