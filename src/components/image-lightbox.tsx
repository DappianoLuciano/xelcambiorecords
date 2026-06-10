"use client"

import { useEffect } from "react"

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white text-5xl font-light hover:text-[#FF5A1F] transition-colors duration-300 z-10"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>

      <div
        className="relative max-w-[70vw] max-h-[80vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  )
}
