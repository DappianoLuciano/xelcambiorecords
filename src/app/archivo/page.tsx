"use client"

import VinylGallery from "@/components/vinyl-gallery"
import Link from "next/link"

export default function ArchivoPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,900&display=swap');

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

      <main className="w-screen h-screen bg-[#111] overflow-hidden">
        <Link
          href="/"
          className="uppercase"
          style={{
            position: 'fixed',
            top: '1.5rem',
            left: '1.5rem',
            zIndex: 200,
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
            textDecoration: 'none',
          }}
        >
          Volver
        </Link>
        <VinylGallery />
      </main>
    </>
  )
}
