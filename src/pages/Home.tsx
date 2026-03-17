// src/pages/Home.tsx
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import CTA from "../components/CTA"
import About from "../components/About"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
    </>
  )
}