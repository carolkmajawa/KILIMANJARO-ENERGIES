import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import ContactPage from "./components/ContactPage";

export default function Home(){
  return(
    <div className="min-h-screen">
      <Hero/>
      <HowItWorks/>
      <Services/>
      <Testimonials/>
      <ContactPage/>
    </div>
  )
}