import { useState, useRef, useCallback, useEffect } from "react";

// ─── assets ──────────────────────────────────────────────────────────────────
const BASE = "/images/vinylcomponent";

const BG_IMG   = `${BASE}/bg.jpg`;
const LOGO_IMG = "/images/descarga.png";

const DISC_IMGS: string[] = [
  `${BASE}/1.jpg`,
  `${BASE}/4.jpg`,
  `${BASE}/6.jpg`,
  `${BASE}/7.jpg`,
  `${BASE}/8.jpg`,
  `${BASE}/9.jpg`,
  `${BASE}/12.jpg`,
  `${BASE}/13.jpg`,
  `${BASE}/17.jpg`,
  `${BASE}/20.jpg`,
  `${BASE}/21.jpg`,
  `${BASE}/22.jpg`,
  `${BASE}/23.jpg`,
  `${BASE}/25.jpg`,
  `${BASE}/27.jpg`,
  `${BASE}/28.jpg`,
  `${BASE}/29.jpg`,
  `${BASE}/30.jpg`,
  `${BASE}/32.jpg`,
  `${BASE}/33.jpg`,
  `${BASE}/35.jpg`,
  `${BASE}/37.jpg`,
  `${BASE}/38.jpg`,
  `${BASE}/39.jpg`,
  `${BASE}/41.jpg`,
  `${BASE}/42.jpg`,
  `${BASE}/43.jpg`,
];

// ─── posiciones (% de 1920×1080) + rotación ──────────────────────────────────
interface Pos {
  left: number;
  top:  number;
  rot:  number;
}

const POS: Pos[] = [
  { left: 30,  top: 8,   rot: 3.9   },
  { left: 38,  top: 10,  rot: -3.5  },
  { left: 46,  top: 6,   rot: -12.0 },
  { left: 54,  top: 9,   rot: -10.6 },
  { left: 60,  top: 15,  rot: -9.8  },
  { left: 35,  top: 18,  rot: 11.6  },
  { left: 50,  top: 16,  rot: 12.4  },
  { left: 58,  top: 22,  rot: -5.5  },
  { left: 26,  top: 25,  rot: -5.0  },
  { left: 42,  top: 28,  rot: 2.1   },
  { left: 50,  top: 30,  rot: 1.2   },
  { left: 62,  top: 28,  rot: -7.6  },
  { left: 34,  top: 35,  rot: -4.8  },
  { left: 46,  top: 38,  rot: -5.2  },
  { left: 56,  top: 40,  rot: -6.7  },
  { left: 38,  top: 45,  rot: 9.8   },
  { left: 48,  top: 48,  rot: 12.5  },
  { left: 54,  top: 50,  rot: 6.7   },
  { left: 42,  top: 52,  rot: -12.0 },
  { left: 32,  top: 50,  rot: 1.9   },
  { left: 60,  top: 48,  rot: 5.1   },
  { left: 28,  top: 40,  rot: -1.1  },
  { left: 64,  top: 35,  rot: -0.7  },
  { left: 40,  top: 12,  rot: 5.2   },
  { left: 52,  top: 24,  rot: 8.4   },
  { left: 44,  top: 42,  rot: 4.4   },
  { left: 36,  top: 32,  rot: -8.6  },
];

interface DiscState {
  top:  number;
  left: number;
}

export default function VinylGallery() {
  const W = 1366;
  const H = 768;
  const DISC = 110;

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [discPositions, setDiscPositions] = useState<DiscState[]>(() =>
    POS.map((p) => ({
      top:  Math.min((p.top / 100) * 768, 768 - 110 - 4),
      left: Math.min((p.left / 100) * 1366, 1366 - 110 - 4),
    }))
  );

  // Ajustar posiciones SOLO para viewport 1728×1117
  useEffect(() => {
    if (window.innerWidth === 1728 && window.innerHeight === 1117) {
      const offsetLeft = 18;
      const offsetTop = 18;
      setDiscPositions(
        POS.map((p) => ({
          top:  Math.min(((p.top + offsetTop) / 100) * H, H - DISC - 4),
          left: Math.min(((p.left + offsetLeft) / 100) * W, W - DISC - 4),
        }))
      );
    }
  }, []);

  const tX          = useRef(0);
  const tY          = useRef(0);
  const trX         = useRef(0);
  const trY         = useRef(0);
  const rafRef      = useRef<number | null>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const panelImgRef = useRef<HTMLDivElement>(null);
  const isDragTilt  = useRef(false);
  const tiltLast    = useRef({ x: 0, y: 0 });

  const lbLoop = useCallback(() => {
    trX.current += (tX.current - trX.current) * 0.1;
    trY.current += (tY.current - trY.current) * 0.1;
    if (panelRef.current) {
      panelRef.current.style.transform =
        `translate(-50%,-50%) scale(1) perspective(900px) rotateX(${trX.current}deg) rotateY(${trY.current}deg)`;
    }
    rafRef.current = requestAnimationFrame(lbLoop);
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(lbLoop);
  }, [lbLoop]);

  const stopLoop = useCallback(() => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
  }, []);

  useEffect(() => () => stopLoop(), [stopLoop]);

  const openDisc = useCallback((idx: number) => {
    tX.current = 0; tY.current = 0; trX.current = 0; trY.current = 0;
    if (panelRef.current)
      panelRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    setActiveIdx(idx);
    startLoop();
  }, [startLoop]);

  const closeDisc = useCallback(() => {
    setActiveIdx(null);
    stopLoop();
  }, [stopLoop]);

  const onTableMouseMove = useCallback((e: React.MouseEvent) => {
    if (activeIdx === null || isDragTilt.current || !panelRef.current) return;
    const r  = panelRef.current.getBoundingClientRect();
    tX.current = -((e.clientY - (r.top  + r.height / 2)) / (r.height / 2)) * 10;
    tY.current =  ((e.clientX - (r.left + r.width  / 2)) / (r.width  / 2)) * 10;
  }, [activeIdx]);

  const onTableMouseLeave = useCallback(() => { tX.current = 0; tY.current = 0; }, []);

  const onPanelImgMouseDown = useCallback((e: React.MouseEvent) => {
    isDragTilt.current = true;
    tiltLast.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragTilt.current) return;
      tY.current = Math.max(-22, Math.min(22, tY.current + (e.clientX - tiltLast.current.x) * 0.5));
      tX.current = Math.max(-16, Math.min(16, tX.current - (e.clientY - tiltLast.current.y) * 0.35));
      tiltLast.current = { x: e.clientX, y: e.clientY };
    };
    const onUp = () => {
      if (isDragTilt.current) { isDragTilt.current = false; tX.current = 0; tY.current = 0; }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
    };
  }, []);

  const onDiscMouseDown = useCallback(
    (e: React.MouseEvent, idx: number) => {
      if (activeIdx !== null) return;
      e.preventDefault();
      const startX    = e.clientX;
      const startY    = e.clientY;
      const startTop  = discPositions[idx].top;
      const startLeft = discPositions[idx].left;
      let moved = false;

      const onMove = (ev: MouseEvent) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
        if (!moved) return;
        const nt = Math.max(0, Math.min(H - DISC, startTop  + dy));
        const nl = Math.max(0, Math.min(W - DISC, startLeft + dx));
        setDiscPositions((prev) => {
          const next = [...prev];
          next[idx] = { top: nt, left: nl };
          return next;
        });
      };

      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup",   onUp);
        if (!moved) openDisc(idx);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup",   onUp);
    },
    [activeIdx, discPositions, openDisc]
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        userSelect: "none",
        backgroundImage: `url(${BG_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Mono', monospace",
      }}
      onMouseMove={onTableMouseMove}
      onMouseLeave={onTableMouseLeave}
    >
      {/* vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)",
      }} />

      {/* dimmer */}
      <div onClick={closeDisc} style={{
        position: "absolute", inset: 0,
        background: activeIdx !== null ? "rgba(0,0,0,0.68)" : "rgba(0,0,0,0)",
        transition: "background .4s",
        pointerEvents: activeIdx !== null ? "all" : "none",
        zIndex: 52,
      }} />

      {/* discos */}
      {DISC_IMGS.map((src, i) => {
        const p        = POS[i];
        const pos      = discPositions[i];
        const isActive = activeIdx === i;
        const isDimmed = activeIdx !== null && !isActive;
        return (
          <div
            key={i}
            onMouseDown={(e) => onDiscMouseDown(e, i)}
            style={{
              position: "absolute",
              width: DISC, height: DISC,
              top: pos.top, left: pos.left,
              zIndex: isDimmed ? 2 : isActive ? 120 : DISC_IMGS.length - i + 2,
              transform: `rotate(${p.rot}deg)`,
              cursor: activeIdx !== null ? "default" : "grab",
              pointerEvents: isDimmed ? "none" : "auto",
              filter: isDimmed ? "brightness(0.28) saturate(0.3)" : "none",
              transition: "box-shadow .2s, transform .2s, filter .35s",
              boxShadow: "4px 8px 22px rgba(0,0,0,.75), 0 2px 8px rgba(0,0,0,.5)",
              borderRadius: 2,
            }}
          >
            <img
              src={src} alt={`foto ${i + 1}`} draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 2, pointerEvents: "none" }}
            />
            {/* gloss vinilo */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: 2, pointerEvents: "none",
              background: `conic-gradient(from 220deg,
                rgba(255,255,255,0) 0deg,   rgba(255,255,255,.10) 28deg,
                rgba(255,255,255,.28) 42deg, rgba(255,255,255,.10) 62deg,
                rgba(255,255,255,0) 85deg,  rgba(255,255,255,0) 195deg,
                rgba(255,255,255,.07) 215deg,rgba(255,255,255,.16) 228deg,
                rgba(255,255,255,.07) 248deg,rgba(255,255,255,0) 268deg)`,
              mixBlendMode: "screen",
            }} />
          </div>
        );
      })}

      {/* panel ampliado */}
      <div ref={panelRef} style={{
        position: "absolute", left: "50%", top: "50%",
        transform: activeIdx !== null
          ? "translate(-50%,-50%) scale(1)"
          : "translate(-50%,-50%) scale(0.9)",
        zIndex: 150,
        opacity: activeIdx !== null ? 1 : 0,
        pointerEvents: activeIdx !== null ? "all" : "none",
        transition: "opacity .35s, transform .42s cubic-bezier(.34,1.15,.64,1)",
        willChange: "transform, opacity",
      }}>
        <div
          ref={panelImgRef}
          onMouseDown={onPanelImgMouseDown}
          style={{
            width: 520, height: 520, borderRadius: 3, overflow: "hidden",
            boxShadow: "0 32px 90px rgba(0,0,0,.95), 0 10px 28px rgba(0,0,0,.7)",
            position: "relative", cursor: "grab",
          }}
        >
          <div style={{
            position: "absolute", top: 0, right: 0, width: 8, height: "100%",
            background: "rgba(0,0,0,.3)", pointerEvents: "none",
          }} />
          {activeIdx !== null && (
            <img
              src={DISC_IMGS[activeIdx]} alt={`foto ${activeIdx + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 3,
            background: `
              conic-gradient(from 220deg,
                rgba(255,255,255,0) 0deg,    rgba(255,255,255,.10) 25deg,
                rgba(255,255,255,.32) 40deg, rgba(255,255,255,.10) 62deg,
                rgba(255,255,255,0) 90deg,   rgba(255,255,255,0) 195deg,
                rgba(255,255,255,.07) 215deg,rgba(255,255,255,.20) 232deg,
                rgba(255,255,255,.07) 252deg,rgba(255,255,255,0) 270deg),
              linear-gradient(135deg,
                rgba(255,255,255,.08) 0%,
                rgba(255,255,255,0) 50%,
                rgba(255,255,255,.04) 100%)`,
            mixBlendMode: "screen",
          }} />
        </div>

        <img
          src={LOGO_IMG} alt="Xelcambio Records"
          style={{
            position: "absolute", bottom: 12, right: 12,
            width: 90, zIndex: 10, pointerEvents: "none",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,.8))",
          }}
        />
      </div>

      {/* texto lateral derecho */}
      <div style={{
        position: "absolute",
        right: "3%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        pointerEvents: "none",
        textAlign: "right",
        maxWidth: "400px",
      }}>
        <div style={{
          fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          fontWeight: 900,
          color: "#FF7600",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 0.95,
          fontFamily: "system-ui, -apple-system, sans-serif",
          whiteSpace: "nowrap",
        }}>
          VENÍ A<br/>BUSCAR<br/>TU VINILO
        </div>
      </div>

      {/* cerrar */}
      {activeIdx !== null && (
        <button onClick={closeDisc} style={{
          position: "absolute", top: 14, right: 14, zIndex: 160,
          background: "rgba(0,0,0,.55)",
          border: ".5px solid rgba(255,255,255,.22)",
          borderRadius: 6, color: "rgba(255,255,255,.6)",
          cursor: "pointer", padding: "6px 14px",
          fontFamily: "'Space Mono', monospace",
          fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="1" y1="1" x2="9" y2="9" />
            <line x1="9" y1="1" x2="1" y2="9" />
          </svg>
          cerrar
        </button>
      )}
    </div>
  );
}
