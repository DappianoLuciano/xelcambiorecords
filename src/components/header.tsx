"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { GlitchText } from "./glitch-text"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8
      const shouldBeScrolled = scrollPosition > heroHeight

      // Solo activa glitch si el estado cambió
      if (shouldBeScrolled !== isScrolled) {
        setIsGlitching(true)
        setIsScrolled(shouldBeScrolled)

        // Mantén el glitch activo por 2 segundos después del cambio
        setTimeout(() => setIsGlitching(false), 2000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

  const currentText = isScrolled ? "X EL CAMBIO RECORDS" : "VIOLETA PISANI ROUBEAUD"

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,200&display=swap');

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow:
              -0.2rem -0.2rem 1rem #fff,
              0.2rem 0.2rem 1rem #fff,
              0 0 2rem #f40,
              0 0 4rem #f40,
              0 0 6rem #f40,
              0 0 8rem #f40,
              0 0 10rem #f40;
            box-shadow:
              0 0 .5rem #fff,
              inset 0 0 .5rem #fff,
              0 0 2rem #08f,
              inset 0 0 2rem #08f,
              0 0 4rem #08f,
              inset 0 0 4rem #08f;
          }
          20%, 24%, 55% {
            text-shadow: none;
            box-shadow: none;
          }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-5 bg-[#FF7600]">
        <nav className="flex items-center justify-between relative">
          <Link
            href="/archivo"
            className="font-medium tracking-wider hover:opacity-70 transition-opacity uppercase"
            style={{
              fontSize: '0.7rem',
              fontWeight: 900,
              fontStyle: 'italic',
              fontFamily: "'Exo 2', sans-serif",
              color: '#f40',
              backgroundColor: '#000',
              padding: '0.3rem 0.5rem 0.4rem',
              border: '0.04rem solid #f40',
              borderRadius: '0.2rem',
              textTransform: 'uppercase',
              animation: 'flicker 1.5s infinite alternate',
            }}
          >
            ARCHIVO FOTOGRAFICO
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2">
            <GlitchText
              text={currentText}
              className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter whitespace-nowrap"
              isActive={isGlitching}
            />
          </div>
        </nav>
      </header>
    </>
  )
}
