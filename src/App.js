import Services from "./components/Services"
import IntroSection from "./components/IntroSection"
import Header from "./components/Header"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"


const App = () => {
  useEffect(() => {
    document.title = "Ambrosia Spa";
  }, []);

  return (
    <>
      <Header/>
      <IntroSection />
      <Services />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
