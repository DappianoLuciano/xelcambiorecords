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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 bg-[#FF7600]">
      <nav className="flex items-center justify-between relative">
        <Link
          href="/"
          className="text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
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
  )
}
