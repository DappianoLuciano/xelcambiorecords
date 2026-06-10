"use client"

import { useEffect, useRef, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  isActive?: boolean
}

export function GlitchText({ text, className = "", isActive = false }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isBlended, setIsBlended] = useState(false)
  const clip1Ref = useRef<HTMLDivElement>(null)
  const clip2Ref = useRef<HTMLDivElement>(null)
  const clip3Ref = useRef<HTMLDivElement>(null)
  const frameIdRef = useRef<NodeJS.Timeout | null>(null)

  const textAlt = [
    text.toUpperCase(),
    text.split("").map(() => String.fromCharCode(33 + Math.random() * 94)).join(""),
    text.split("").map(() => String.fromCharCode(33 + Math.random() * 94)).join(""),
  ]

  const randDouble = (d: number) => Math.random() * d - d / 2
  const randInt = (n: number) => Math.floor(Math.random() * n)

  const randText = () => {
    const txt = Array.from(text)
    for (let i = 0; i < 8; i++) {
      const ind = randInt(text.length)
      txt[ind] = textAlt[randInt(textAlt.length)][ind]
    }
    return txt.join("")
  }

  const addClipCSS = () => {
    const clips = [clip1Ref.current, clip2Ref.current, clip3Ref.current]
    const clip1 = randDouble(0.1)
    const clip2 = randDouble(0.1)

    if (clips[0]) {
      clips[0].style.transform = `translate(${randDouble(0.3)}em, 0.02em)`
      clips[0].style.clipPath = `inset(0 0 ${0.6 + clip1}em 0)`
    }
    if (clips[1]) {
      clips[1].style.clipPath = `inset(${0.4 - clip1}em 0 ${0.3 - clip2}em 0)`
    }
    if (clips[2]) {
      clips[2].style.transform = `translate(${randDouble(0.3)}em, -0.02em)`
      clips[2].style.clipPath = `inset(${0.7 + clip2}em 0 0 0)`
    }
  }

  const removeClipCSS = () => {
    const clips = [clip1Ref.current, clip2Ref.current, clip3Ref.current]
    clips.forEach((el) => {
      if (el) {
        el.style.clipPath = ""
        el.style.transform = ""
      }
    })
  }

  const glitch = () => {
    addClipCSS()
    setDisplayText(randText())
    setIsBlended(true)
  }

  const unglitch = () => {
    removeClipCSS()
    setDisplayText(text)
    setIsBlended(false)
  }

  const frame = () => {
    glitch()
    setTimeout(unglitch, 50 + Math.random() * 200)
    frameIdRef.current = setTimeout(frame, 250 + Math.random() * 500)
  }

  useEffect(() => {
    if (isActive) {
      frame()
      return () => {
        if (frameIdRef.current) {
          clearTimeout(frameIdRef.current)
        }
        unglitch()
      }
    } else {
      if (frameIdRef.current) {
        clearTimeout(frameIdRef.current)
      }
      unglitch()
    }
  }, [isActive, text])

  return (
    <div className={`TextGlitch ${isBlended ? "TextGlitch-blended" : ""} ${className}`}>
      <div className="TextGlitch-clip" ref={clip1Ref}>
        <div className="TextGlitch-word">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendA">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendB">{displayText}</div>
      </div>
      <div className="TextGlitch-clip" ref={clip2Ref}>
        <div className="TextGlitch-word">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendA">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendB">{displayText}</div>
      </div>
      <div className="TextGlitch-clip" ref={clip3Ref}>
        <div className="TextGlitch-word">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendA">{displayText}</div>
        <div className="TextGlitch-word TextGlitch-blend TextGlitch-blendB">{displayText}</div>
      </div>
    </div>
  )
}
