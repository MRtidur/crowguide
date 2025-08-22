import { StrictMode } from "react"
import { HeroSection } from "./components/hero-section"
import { Navbar } from "./components/navbar"
import { Header } from "./components/header"
import { Features } from "./components/features-section"
import { Testimonials } from "./components/testimonial"
import { createRoot } from "react-dom/client"
import { PricingSection } from "./components/pricing-section"
import { CommunitySection } from "./components/community-section"
import { Footer } from "./components/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./components/loginPage"
import { Signup } from "./components/signupPage"
import "./index.css"

const basename = process.env.NODE_ENV === 'production' ? '/crowguide' : '';
function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100">
        <section id="home">
          <Header />
          <HeroSection />
        </section>

        <section id="Features" className="flex items-center justify-center">
          <Features />
        </section>

        <section id="Testimonials" className="flex items-center justify-center">
          <Testimonials />
        </section>

        <section id="Pricing" className="items-center justify-center">
          <PricingSection />
        </section>

        <section id="Community" className="items-center justify-center">
          <CommunitySection />
        </section>
      </main>
      <Footer />
    </>
  )
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)