
import './App.css'
import { Chart } from './Components/Chart'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { Intro } from './Components/Intro'
import { Navbar } from './Components/Navbar'
import { Section } from './Components/Section'
import { Testimonials } from './Components/Testimonials'
import { User } from './Components/User'


function App() {
  
  return (
    <>
   <Navbar />
   <Intro />
   <Section />
   <Hero />
   <Chart />
   <User />
   <Testimonials />
   <Footer />
    </>
  )
}

export default App
