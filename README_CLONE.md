# Special Production Agency - Sitio Clonado

## 🚀 Servidor de Desarrollo Activo

El sitio está corriendo en: **http://localhost:3000**

## 📋 Resumen del Proyecto

Este es un clon funcional del sitio web [specialproduction.agency](https://www.specialproduction.agency/) construido con:

- ⚡ **Next.js 16** (App Router)
- ⚛️ **React 19**
- 📘 **TypeScript** (modo estricto)
- 🎨 **Tailwind CSS v4** (oklch colors)
- 🧩 **shadcn/ui** components

## 🎯 Componentes Implementados

### 1. Header (Navegación)
**Ubicación:** `src/components/header.tsx`

- Posicionamiento fijo en la parte superior
- Logo "SPA" con link a home
- Links de navegación:
  - WORK → `/work`
  - SPECIAL PROJECTS → `/special-projects`
  - ABOUT → `/about`
- Email de contacto funcional
- Efectos hover suaves

### 2. Hero Section (Sección Principal)
**Ubicación:** `src/components/hero-section.tsx`

- 3 logos SVG animados (SPECIAL, PRODUCTION, AGENCY)
- Animación de entrada escalonada:
  - Delay: 0ms, 150ms, 300ms
  - Efecto: fade-in + slide-up
  - Duración: 700ms
- Responsive en todos los tamaños de pantalla

### 3. Iconos SVG
**Ubicación:** `src/components/icons.tsx`

- `<SpecialLogo />` - Wordmark "SPECIAL"
- `<ProductionLogo />` - Wordmark "PRODUCTION"
- `<AgencyLogo />` - Wordmark "AGENCY"

## 🎨 Assets Descargados

Todos los SVGs originales están en:
```
public/images/specialproduction.agency/
├── SPECIAL.svg
├── PRODUCTION.svg
└── AGENCY.svg
```

## 📂 Documentación

Toda la investigación y análisis del sitio original está en:
```
docs/research/specialproduction.agency/
├── DESIGN_TOKENS.md          # Colores, tipografía, espaciado
├── COMPONENT_INVENTORY.md    # Inventario de componentes
└── IMPLEMENTATION_SUMMARY.md # Resumen técnico completo
```

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
npm run dev
# Inicia el servidor en http://localhost:3000
```

### Producción
```bash
npm run build    # Construir para producción
npm start        # Iniciar servidor de producción
```

### Calidad de Código
```bash
npm run lint       # Ejecutar ESLint
npm run typecheck  # Verificar tipos TypeScript
npm run check      # Lint + TypeScript + Build
```

## ✨ Características Implementadas

### Animaciones
- ✅ Entrada escalonada de logos (IntersectionObserver)
- ✅ Fade + slide-up transitions
- ✅ Efectos hover en navegación
- ✅ Delays progresivos (0ms → 150ms → 300ms)

### Diseño
- ✅ Minimalista blanco y negro
- ✅ Tipografía limpia con tracking amplio
- ✅ Espaciado generoso
- ✅ Diseño centrado

### Responsive
- ✅ Mobile-first approach
- ✅ Breakpoints: mobile → tablet → desktop
- ✅ Logos escalables (h-8 → h-12 → h-16)
- ✅ Padding adaptativo

### Performance
- ✅ Build optimizado
- ✅ Sin errores TypeScript
- ✅ Componentes React optimizados
- ✅ SVGs inline (no requests adicionales)

## 🎯 Cómo Personalizar

### Cambiar Colores
Edita `src/app/globals.css`:
```css
:root {
  --background: oklch(1 0 0);        /* Blanco */
  --foreground: oklch(0.145 0 0);    /* Negro */
  /* Modifica estos valores oklch */
}
```

### Modificar Animaciones
Edita `src/components/hero-section.tsx`:
```typescript
// Cambiar delays
createObserver(specialRef.current, 0)      // Primer logo
createObserver(productionRef.current, 150) // Segundo logo (150ms delay)
createObserver(agencyRef.current, 300)     // Tercer logo (300ms delay)

// Cambiar duración
className="transition-all duration-700"    // 700ms
```

### Agregar Nuevas Páginas
Crea archivos en `src/app/`:
```
src/app/
├── work/
│   └── page.tsx           # http://localhost:3000/work
├── special-projects/
│   └── page.tsx           # http://localhost:3000/special-projects
└── about/
    └── page.tsx           # http://localhost:3000/about
```

### Crear Nuevos Componentes
```typescript
// src/components/mi-componente.tsx
export function MiComponente() {
  return (
    <div className="p-4">
      {/* Tu contenido */}
    </div>
  )
}
```

## 📱 Vista Responsive

### Mobile (< 768px)
- Logos: altura 32px (h-8)
- Padding: 24px (px-6, py-6)
- Gaps: 32px (gap-8)

### Tablet (768px - 1024px)
- Logos: altura 48px (h-12)
- Padding: 48px (px-12, py-12)
- Gaps: 48px (gap-12)

### Desktop (> 1024px)
- Logos: altura 64px (h-16)
- Padding: 48px
- Gaps: 48px

## 🔍 Próximos Pasos Sugeridos

### Para Completar el Clon:

1. **Inspección Manual del Sitio Original**
   - Abre DevTools en https://www.specialproduction.agency/
   - Copia valores exactos de CSS computed styles
   - Captura animaciones adicionales

2. **Crear Páginas Faltantes**
   - `/work` - Portfolio de proyectos
   - `/special-projects` - Proyectos especiales
   - `/about` - Información de la agencia

3. **Componentes Adicionales**
   - Footer (si existe)
   - Menú móvil hamburguesa
   - Galerías de proyectos
   - Formularios de contacto

4. **Mejorar Animaciones**
   - Parallax scroll effects
   - Hover effects en logos
   - Transiciones entre páginas
   - Micro-interacciones

5. **Optimizaciones**
   - Lazy loading de imágenes
   - Preload de fonts críticos
   - Optimización de animaciones
   - SEO metadata completo

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Verifica que estás en el directorio correcto
cd "C:\Users\ludap\OneDrive\Desktop\PAGINA VIOLE\ai-website-cloner-template"

# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install

# Inicia el servidor
npm run dev
```

### Errores de TypeScript
```bash
# Verifica tipos
npm run typecheck

# Si hay errores, revisa los archivos mencionados
```

### Puerto 3000 ocupado
```bash
# Usa otro puerto
PORT=3001 npm run dev
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)

## 📄 Licencia

Este es un template para aprendizaje/migración. El diseño original pertenece a Special Production Agency.

---

**Creado con:** AI Website Cloner Template  
**Sitio Original:** https://www.specialproduction.agency/  
**Fecha de Clonación:** Junio 2026
