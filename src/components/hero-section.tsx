"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const specialRef = useRef<HTMLDivElement>(null)
  const productionRef = useRef<HTMLDivElement>(null)
  const agencyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const createObserver = (element: HTMLElement | null, delay: number) => {
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                element.classList.add("opacity-100", "translate-y-0")
                element.classList.remove("opacity-0", "translate-y-8")
              }, delay)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(element)
      observers.push(observer)
    }

    createObserver(specialRef.current, 0)
    createObserver(productionRef.current, 150)
    createObserver(agencyRef.current, 300)

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-[#FF7600] overflow-hidden">
      <div className="flex flex-col items-center justify-center -space-y-4 md:-space-y-8 lg:-space-y-12 w-full">
        <div
          ref={specialRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out w-full"
        >
          <h1 className="text-[13vw] md:text-[14vw] lg:text-[15vw] font-black tracking-tighter leading-none text-center whitespace-nowrap">
            X EL CAMBIO
          </h1>
        </div>

        <div
          ref={agencyRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out w-full"
        >
          <h1 className="text-[13vw] md:text-[14vw] lg:text-[15vw] font-black tracking-[0.12em] leading-none text-center whitespace-nowrap">
            RECORDS
          </h1>
        </div>
      </div>
    </section>
  )
}
