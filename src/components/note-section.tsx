"use client"

import { useState, useEffect, useRef } from "react"
import { ImageLightbox } from "./image-lightbox"
import { GlitchText } from "./glitch-text"

export function NoteSection() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const activatedSections = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionsRef.current.forEach((section, index) => {
        if (!section || activatedSections.current.has(index)) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          activatedSections.current.add(index)
          setActiveSection(index)

          setTimeout(() => {
            setActiveSection(null)
          }, 5000)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt })
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <section className="min-h-screen bg-white px-6 py-20 md:px-12 md:py-32 pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1700px] mx-auto space-y-32">
        {/* Primera sección: Cultura del Ruido */}
        <div ref={(el) => { sectionsRef.current[0] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="CULTURA" isActive={activeSection === 0} />
            <GlitchText text="DEL" isActive={activeSection === 0} />
            <GlitchText text="RUIDO" isActive={activeSection === 0} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
          <p>
            Frente a la ex Cárcel de Caseros, una de las construcciones más emblemáticas de Parque Patricios, resulta difícil imaginar que detrás de uno de los portones cercanos funcione uno de los proyectos culturales independientes más singulares de la ciudad 'X el Cambio Records' construido por Mariano Urrutia y Melanie Robert. Abandonado desde principios de los años 2000, la ex cárcel sigue formando parte de la identidad visual e histórica del barrio.
          </p>

          <p>
            En una zona marcada por galpones, depósitos y edificios industriales, nada parece anticipar lo que sucede en el interior de 'X el Cambio Records'. Al atravesar la entrada aparece un enorme galpón ocupado por amplificadores, baterías, teclados, estructuras para recitales y equipos de sonido. Todo parece hablar de logística, producción y trabajo. Durante algunos segundos resulta difícil asociar ese espacio con una disquería o una concept store.
          </p>

          <p>
            Al lado, una escalera de paredes blancas intervenidas con afiches, cuadros y referencias a la historia del proyecto guía el recorrido hacia el piso superior, funcionando como una transición entre dos atmósferas. Con cada escalón, el ambiente industrial queda atrás y comienzan a aparecer pequeñas señales de lo que espera al final del recorrido: un cartel luminoso que anuncia <i>"Discos"</i>, imágenes vinculadas a la escena musical y una iluminación más cálida que anticipa el cambio de clima.
          </p>

          <p>
            Al atravesar la puerta, el contraste es inmediato: una espacialidad pregnantemente naranja. Vinilos, CDs, cassettes, libros, fanzines, ilustraciones, remeras y objetos cuidadosamente seleccionados ocupan cada rincón del espacio. Una mesa comunitaria, un living destinado a escuchar música y personas conversando sin apuro, terminan de construir una atmósfera que se parece más a una casa habitada que a una tienda convencional.
          </p>

          <p>
            María Road, quien trabaja en el espacio, lo describe como <i>"un paraíso alternativo"</i>. Y quizás esa definición permite comprender algo fundamental sobre <i>'X el Cambio Records'</i>: <i>"más que un lugar de consumo, parece un espacio pensado para permanecer"</i>.
          </p>

          <p>
            La pregunta aparece casi de forma inevitable: ¿cómo logra sostenerse un proyecto basado en los objetos, la música y el encuentro cara a cara en uno de los barrios más asociados a la innovación tech de Buenos Aires?
          </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_0454.jpg.jpeg"
              alt="Ex Cárcel de Caseros, Parque Patricios"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0454.jpg.jpeg", "Ex Cárcel de Caseros, Parque Patricios")}
            />
            <img
              src="/images/IMG_9409.jpg.jpeg"
              alt='X el Cambio Records'
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_9409.jpg.jpeg", 'X el Cambio Records')}
            />
          </div>
        </div>

        {/* Segunda sección: Un barrio construido alrededor del trabajo */}
        <div ref={(el) => { sectionsRef.current[1] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="UN BARRIO" isActive={activeSection === 1} />
            <GlitchText text="CONSTRUIDO" isActive={activeSection === 1} />
            <GlitchText text="ALREDEDOR" isActive={activeSection === 1} />
            <GlitchText text="DEL TRABAJO" isActive={activeSection === 1} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              Para comprender el significado de <i>'X el Cambio Records'</i> resulta necesario comprender también el territorio en el que se inserta.
            </p>

            <p>
              Parque Patricios es un barrio históricamente asociado al trabajo y la producción. Durante gran parte del siglo XX, fábricas, talleres, depósitos y hospitales construyeron una identidad vinculada al hacer cotidiano y al esfuerzo colectivo. Aunque en las últimas décadas el barrio experimentó profundas transformaciones a partir de la creación del Distrito Tecnológico y la llegada de empresas vinculadas a la innovación y la economía del conocimiento, todavía es posible encontrar rastros de esa memoria productiva en sus calles y edificios.
            </p>

            <p>
              Lejos de desaparecer, la cultura del trabajo parece haberse transformado.
            </p>

            <p>
              Hoy conviven dos formas de producción que, a primera vista, podrían parecer opuestas. Por un lado, las nuevas industrias tecnológicas que impulsan gran parte del desarrollo económico de la zona. Por otro, espacios como <i>'X el Cambio Records'</i>, donde el trabajo continúa ocupando un lugar central, aunque orientado hacia la producción cultural.
            </p>

            <p>
              La ubicación del proyecto no resulta casual. Frente a las transformaciones que redefinieron la identidad del barrio, <i>'X el Cambio Records'</i> recupera valores históricamente asociados a Parque Patricios: el oficio, la autogestión, la perseverancia y la construcción colectiva. La diferencia es que hoy aquello que se produce es cultura.
            </p>
          </div>

          {/* Columna 3: Imagen a la derecha (centrada verticalmente) */}
          <div className="hidden lg:block self-center">
            <img
              src="/images/IMG_9491.jpg.jpeg"
              alt="Parque Patricios - Trabajo y producción"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_9491.jpg.jpeg", "Parque Patricios - Trabajo y producción")}
            />
          </div>
        </div>

        {/* Tercera sección: Una historia construida desde el hacer */}
        <div ref={(el) => { sectionsRef.current[2] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="UNA HISTORIA" isActive={activeSection === 2} />
            <GlitchText text="CONSTRUIDA" isActive={activeSection === 2} />
            <GlitchText text="DESDE" isActive={activeSection === 2} />
            <GlitchText text="EL HACER" isActive={activeSection === 2} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              La historia de 'X el Cambio Records' comenzó en 1998, cuando Mariano Urrutia decidió editar de manera independiente los materiales de su banda. En aquel momento, publicar un disco parecía una posibilidad reservada para quienes lograban acceder a una compañía discográfica. Sin embargo, comenzaba a abrirse una alternativa.
            </p>

            <p>
              Como recuerda Melanie Robert, <i>"se empezaba a colar la idea de que si ibas a la fábrica donde hacían los CDs o los cassettes con tu máster y lo pagabas, te lo fabricaban, entonces te lo podías hacer vos"</i>.
            </p>

            <p>
              Lo que para muchos músicos aparecía como una barrera, Mariano lo entendió como una oportunidad. Los primeros cassettes dieron lugar a nuevas ediciones, luego llegaron otras bandas de la escena y, con el tiempo, una red de vínculos que fue creciendo de manera orgánica. El proyecto se expandió hacia la distribución, la producción cultural y la organización de eventos, hasta convertirse en el espacio que hoy ocupa en Parque Patricios.
            </p>

            <p>
              Más de veinticinco años después, continúa creciendo de la mano de Mariano y Melanie. Aunque Mariano fundó el sello, gran parte de la identidad actual del espacio lleva la impronta de Melanie. Su mirada atraviesa transversalmente el proyecto aportando corazón y alma.
            </p>
          </div>

          {/* Columna 3: Imagen a la derecha (centrada verticalmente) */}
          <div className="hidden lg:block self-center">
            <img
              src="/images/ChatGPT Image 10 jun 2026, 12_04_21 a.m..png"
              alt="Por el Cambio Records - Historia"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/ChatGPT Image 10 jun 2026, 12_04_21 a.m..png", "Por el Cambio Records - Historia")}
            />
          </div>
        </div>

        {/* Cuarta sección: La cultura del trabajo como filosofía */}
        <div ref={(el) => { sectionsRef.current[3] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="LA CULTURA" isActive={activeSection === 3} />
            <GlitchText text="DEL TRABAJO" isActive={activeSection === 3} />
            <GlitchText text="COMO" isActive={activeSection === 3} />
            <GlitchText text="FILOSOFÍA" isActive={activeSection === 3} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              Entre los valores que atraviesan a 'X el Cambio Records', el trabajo ocupa un lugar central. Más que una actividad necesaria para sostener el proyecto, se presenta como una forma de entender la vida cotidiana y de relacionarse con el mundo. La producción de discos, la organización de recitales, la gestión del sello, la curaduría de la tienda, la creación del merch y las tareas que hacen posible el funcionamiento del espacio forman parte de una misma filosofía basada en la construcción constante.
            </p>

            <p>
              Esta mirada aparece de manera explícita en las palabras de Melanie: <i>"Para nosotros es un elemento constitutivo de nuestras vidas y de nuestras personas y de nuestra esencia porque realmente creemos que el trabajo te constituye como humano"</i>. La afirmación trasciende el plano laboral para convertirse en una definición sobre la identidad del proyecto.
            </p>

            <p>
              En este sentido, <i>'X el Cambio Records'</i> no se construye únicamente alrededor de la música o de los objetos culturales que ofrece. También se construye alrededor de una ética del hacer. Una forma de entender que aquello que se considera valioso requiere tiempo, dedicación y compromiso para existir.
            </p>

            <p>
              Cuando Melanie afirma que <i>"esto para nosotros es un trabajo, por ende es eso que nos pone en eje y nos constituye como personas"</i>, vuelve a aparecer la misma idea. El trabajo no ocupa un lugar secundario dentro del proyecto. Es uno de los pilares sobre los que se sostiene.
            </p>

            <p>
              Quizás por eso resulte posible establecer un paralelismo con la historia de Parque Patricios. Así como el barrio construyó gran parte de su identidad alrededor de la producción y el trabajo, <i>'X el Cambio Records'</i> continúa defendiendo esos valores desde otro lugar. La diferencia es que hoy aquello que se produce no son bienes industriales, sino cultura.
            </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_9422.jpg.jpeg"
              alt="La cultura del trabajo"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_9422.jpg.jpeg", "La cultura del trabajo")}
            />
            <img
              src="/images/IMG_0444.jpg.jpeg"
              alt="La cultura del trabajo"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0444.jpg.jpeg", "La cultura del trabajo")}
            />
          </div>
        </div>

        {/* Quinta sección: La habitación hecha espacio */}
        <div ref={(el) => { sectionsRef.current[4] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="HABITACIÓN" isActive={activeSection === 4} />
            <GlitchText text="HECHA" isActive={activeSection === 4} />
            <GlitchText text="ESPACIO" isActive={activeSection === 4} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              Si el trabajo constituye uno de los valores centrales de 'X el Cambio Records', la concept store permite comprender cómo esa forma de entender el mundo se traduce en el espacio.
            </p>

            <p>
              Al describir el local, Melanie utiliza una frase que resume gran parte de su identidad: <i>"Esto es medio como si fuera mi pieza"</i>.
            </p>

            <p>
              Más que una descripción física, la frase expresa una manera de entender el lugar. Los libros presentes en las estanterías son libros que ella misma leería. Los artistas exhibidos son artistas que admira. Los fanzines, las ilustraciones y muchos de los objetos que forman parte de la tienda responden a intereses personales antes que a tendencias pasajeras. Como ella misma explica: <i>"Todos los que están acá son libros que yo leería"</i>.
            </p>

            <p>
              La lógica de la curaduría parece responder a la misma idea. Cuando se le pregunta cómo selecciona aquello que forma parte del espacio, <i>"El diseño curatorial es que es Melanilandia. Es lo que a mí me gusta, lo pongo"</i>. La misma lógica aparece incluso en la elección del color predominante del local: <i>"el lugar es todo de color naranja porque es mi color preferido"</i>.
            </p>

            <p>
              La particularidad de esta selección no reside únicamente en los objetos elegidos, sino en los valores que atraviesan esa elección. Detrás de cada libro, ilustración o fanzine aparecen experiencias, referencias culturales, intereses y convicciones personales. La tienda no se organiza a partir de una lógica impersonal ni de criterios definidos exclusivamente por el mercado, sino a partir de una mirada cercana que influye directamente en aquello que se decide compartir.
            </p>

            <p>
              En este sentido, <i>'X el Cambio Records'</i> funciona menos como una concept store tradicional y más como un espacio donde los gustos, las inquietudes y los valores de quienes lo sostienen adquieren una forma material. Más que una selección de productos, el lugar parece construir una selección de referencias culturales que sus creadores consideran valiosas y dignas de ser compartidas.
            </p>

            <p>
              Esa misma búsqueda aparece cuando Melanie afirma: <i>"Necesito estar en un lugar cálido"</i>, donde la mesa compartida, el living destinado a escuchar música y la manera en que las personas ocupan el espacio contribuyen a construir una atmósfera que se acerca más a la de una casa que a la de una tienda.
            </p>

            <p>
              Quizás allí resida una de las particularidades más interesantes de <i>'X el Cambio Records'</i>: En un contexto donde muchos espacios culturales tienden a volverse cada vez más homogéneos, el proyecto conserva una fuerte impronta personal y cálida. Una identidad construida a partir de las personas, sus valores y aquello que consideran importante compartir con los demás.
            </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_0462.jpg.jpeg"
              alt="La habitación hecha espacio"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0462.jpg.jpeg", "La habitación hecha espacio")}
            />
            <img
              src="/images/IMG_0422.jpg.jpeg"
              alt="La habitación hecha espacio"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0422.jpg.jpeg", "La habitación hecha espacio")}
            />
          </div>
        </div>

        {/* Sexta sección: Objetos para cuidar en un mundo efímero */}
        <div ref={(el) => { sectionsRef.current[5] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="OBJETOS" isActive={activeSection === 5} />
            <GlitchText text="PARA CUIDAR" isActive={activeSection === 5} />
            <GlitchText text="EN UN MUNDO" isActive={activeSection === 5} />
            <GlitchText text="EFÍMERO" isActive={activeSection === 5} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              Entre las muchas ideas que atraviesan a 'X el Cambio Records', hay una que aparece de manera especialmente significativa: el valor de los objetos.
            </p>

            <p>
              En un contexto donde gran parte de las experiencias culturales circulan de manera digital, instantánea y muchas veces intangible, Melanie reivindica la importancia de conservar una relación material con las cosas. <i>"En un mundo donde todo es tan intangible es muy necesario tener objetos a los que cuidar"</i>, sostiene.
            </p>

            <p>
              Habla del cuidado. De la permanencia. Del vínculo que las personas construyen con determinados objetos a lo largo del tiempo. Los discos, los libros y los fanzines presentes en la tienda no aparecen allí únicamente por lo que contienen. También aparecen por lo que representan.
            </p>

            <p>
              María Road aporta una mirada complementaria cuando afirma que <i>"la experiencia de Spotify no reemplaza el hecho de tener el disco como objeto de culto"</i>.
            </p>

            <p>
              La diferencia no radica únicamente en el formato.
            </p>

            <p>
              Lo que está en juego es la experiencia de descubrir, conservar y relacionarse con aquello que se escucha o se lee.
            </p>

            <p>
              Quizás por eso María describe a <i>'X el Cambio Records'</i> como <i>"un paraíso alternativo"</i> y asegura que <i>"se nota que hay amor por lo que se difunde"</i>.
            </p>

            <p>
              En este sentido, el espacio puede leerse como una expresión de una sensibilidad que atraviesa actualmente a Parque Patricios: la revalorización de lo material, lo artesanal y lo comunitario dentro de un territorio cada vez más asociado a la innovación tecnológica.
            </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_0402.jpg.jpeg"
              alt="Objetos para cuidar en un mundo efímero"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0402.jpg.jpeg", "Objetos para cuidar en un mundo efímero")}
            />
            <img
              src="/images/IMG_0425.jpg.jpeg"
              alt="Objetos para cuidar en un mundo efímero"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0425.jpg.jpeg", "Objetos para cuidar en un mundo efímero")}
            />
          </div>
        </div>

        {/* Séptima sección: Comunidad antes que audiencia */}
        <div ref={(el) => { sectionsRef.current[6] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="COMUNIDAD" isActive={activeSection === 6} />
            <GlitchText text="ANTES QUE" isActive={activeSection === 6} />
            <GlitchText text="AUDIENCIA" isActive={activeSection === 6} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              A diferencia de muchos proyectos culturales contemporáneos, el crecimiento de <i>'X el Cambio Records'</i> no parece haberse construido a partir de estrategias de exposición o búsqueda constante de visibilidad.
            </p>

            <p>
              Cuando Melanie habla sobre cómo el proyecto llegó hasta donde está hoy, la respuesta aparece rápidamente: <i>"El boca en boca es fundamental"</i>.
            </p>

            <p>
              La frase resume una lógica que atraviesa gran parte de la historia del espacio. Muchas de las personas que llegan a <i>'X el Cambio Records'</i>, lo hacen porque alguien les habló del lugar, porque siguen a una banda del sello, porque asistieron a un recital o porque forman parte de una misma red de afinidades culturales. El crecimiento del proyecto parece haberse apoyado más en los vínculos construidos a lo largo del tiempo que en campañas destinadas a ampliar su alcance.
            </p>

            <p>
              Más que hablar de un público específico, Melanie suele referirse a las personas que rodean al proyecto como una comunidad construida a lo largo de los años. Músicos, coleccionistas, artistas, lectores, vecinos y seguidores del sello conviven en un mismo espacio, unidos menos por una característica demográfica que por una sensibilidad compartida. Son, en cierto modo, <i>"la gente de X el Cambio"</i>: personas que encuentran en el proyecto una forma particular de relacionarse con la música, los objetos y la cultura.
            </p>

            <p>
              Como señala Melanie, se trata de una comunidad diversa, donde conviven personas de distintas edades, desde jóvenes de veinte años hasta adultos que acompañan al proyecto desde hace décadas.
            </p>

            <p>
              Esta postura también se refleja en la relación que mantienen con las redes sociales y la exposición pública. Melanie explica que <i>"jamás hicimos una campaña para conseguir seguidores"</i> y agrega una frase que resulta especialmente significativa: <i>"Nunca nos interesó figurar"</i>.
            </p>

            <p>
              Lejos de expresar un rechazo hacia la difusión, estas afirmaciones parecen revelar una escala de prioridades, una red de personas unidas por intereses, valores y referencias culturales compartidas. Una comunidad que creció de manera orgánica y que continúa sosteniendo al proyecto más de veinticinco años después.
            </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_0430.jpg.jpeg"
              alt="Comunidad antes que audiencia"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0430.jpg.jpeg", "Comunidad antes que audiencia")}
            />
            <img
              src="/images/60D353C0-1CDA-4A80-9226-48D1AB4B6AF7.jpg.jpeg"
              alt="Comunidad antes que audiencia"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/60D353C0-1CDA-4A80-9226-48D1AB4B6AF7.jpg.jpeg", "Comunidad antes que audiencia")}
            />
          </div>
        </div>

        {/* Octava sección: Resistencia silenciosa */}
        <div ref={(el) => { sectionsRef.current[7] = el }} className="grid grid-cols-1 xl:grid-cols-[240px_minmax(450px,600px)_240px] 2xl:grid-cols-[320px_minmax(550px,800px)_320px] gap-8 xl:gap-12 2xl:gap-20 items-start justify-center">
          {/* Columna 1: Título brutalist editorial */}
          <div className="block uppercase text-[#FF5A1F] self-start xl:-ml-12 mb-8 xl:mb-0" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: '0.82',
            letterSpacing: '-0.03em',
            fontWeight: 400
          }}>
            <GlitchText text="RESISTENCIA" isActive={activeSection === 7} />
            <GlitchText text="SILENCIOSA" isActive={activeSection === 7} />
          </div>

          {/* Columna 2: Texto del párrafo */}
          <div className="space-y-6 leading-relaxed tracking-normal text-black" style={{ fontFamily: '"Neue Montreal", sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
            <p>
              Después de recorrer el espacio, escuchar sus historias y observar su funcionamiento cotidiano, resulta a poco definir a <i>'X el Cambio Records'</i> como una disquería, una concept store o un sello independiente.
            </p>

            <p>
              Sin embargo, ninguna de esas definiciones resulta completamente suficiente.
            </p>

            <p>
              Lo que sostiene al proyecto es algo más difícil de nombrar.
            </p>

            <p>
              Es una forma de entender el trabajo.
            </p>

            <p>
              Una forma de relacionarse con los objetos.
            </p>

            <p>
              Una forma de construir comunidad.
            </p>

            <p>
              En una época atravesada por la velocidad, la exposición permanente y la lógica de lo descartable, <i>'X el Cambio Records'</i> continúa apostando por prácticas que requieren tiempo, presencia y cuidado.
            </p>

            <p>
              Más que oponerse a las transformaciones del barrio, 'X el Cambio Records' parece sostenerse precisamente porque se resiste a abandonar aquello que considera valioso: los objetos, la comunidad, el trabajo y el encuentro cara a cara.
            </p>

            <p>
              Quizás por eso la imagen que mejor resume al proyecto no sea un espacio lleno de discos ni una estantería repleta de libros.
            </p>

            <p>
              Quizás sea aquella primera escalera.
            </p>

            <p>
              La que conecta el galpón del trabajo cotidiano con un espacio construido para compartir música, objetos e historias.
            </p>

            <p>
              Una escalera que, de alguna manera, une dos mundos que suelen pensarse como opuestos: la producción y la cultura.
            </p>

            <p>
              Y allí reside la singularidad de <i>'X el Cambio Records'</i>.
            </p>

            <p>
              En demostrar que algunas cosas todavía merecen ser construidas lentamente.
            </p>

            <p>
              No solamente los discos, los libros o los objetos que habitan el espacio, sino también los valores, el amor al arte, vínculos, las comunidades y las formas de compartir aquello que se considera valioso.
            </p>

            <p>
              Y que, en tiempos de inmediatez, seguir apostando por ello también puede ser una forma de resistencia.
            </p>
          </div>

          {/* Columna 3: Dos imágenes apiladas verticalmente (centradas) */}
          <div className="hidden lg:flex flex-col gap-8 self-center">
            <img
              src="/images/IMG_0453.jpg.jpeg"
              alt="Resistencia silenciosa"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0453.jpg.jpeg", "Resistencia silenciosa")}
            />
            <img
              src="/images/IMG_0458-2.jpg.jpeg"
              alt="Resistencia silenciosa"
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => openLightbox("/images/IMG_0458-2.jpg.jpeg", "Resistencia silenciosa")}
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
      />
    </section>
  )
}
