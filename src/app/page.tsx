import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NoteSection } from "@/components/note-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <HeroSection />
        <NoteSection />
        <Footer />
      </main>
    </>
  )
}
