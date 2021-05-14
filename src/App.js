import Services from "./pages/Services"
import IntroSection from "./pages/IntroSection"
import Header from "./components/Header"
import Testimonial from "./pages/Testimonial"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

const App = () => {
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
