export function Footer() {
  return (
    <footer className="bg-[#FF7600] px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        <h3 className="text-black text-5xl mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-bebas)' }}>FUENTES</h3>
        <div className="space-y-3 text-black text-sm leading-relaxed">
          <p>
            Gobierno de la Ciudad Autónoma de Buenos Aires. (s.f.). Distrito Tecnológico. Recuperado de{" "}
            <a
              href="https://buenosaires.gob.ar/desarrolloeconomico/distritos-economicos/distrito-tecnologico"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              https://buenosaires.gob.ar/desarrolloeconomico/distritos-economicos/distrito-tecnologico
            </a>
          </p>
          <p>
            Gobierno de la Ciudad Autónoma de Buenos Aires. (s.f.). Parque Patricios. Recuperado de{" "}
            <a
              href="https://buenosaires.gob.ar/barrios/parque-patricios"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              https://buenosaires.gob.ar/barrios/parque-patricios
            </a>
          </p>
          <p>
            X el Cambio Records. (s.f.). Sitio oficial. Recuperado de{" "}
            <a
              href="https://porelcambiorecords.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              https://porelcambiorecords.com.ar
            </a>
          </p>
          <p>Robert, M. (2026). Entrevista personal.</p>
          <p>Road, M. (2026). Entrevista personal.</p>
        </div>
      </div>
    </footer>
  )
}
