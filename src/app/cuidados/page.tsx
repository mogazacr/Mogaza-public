import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de cuidados — mogaza",
  description: "Cómo conservar y disfrutar tu pan artesanal mogaza.",
};

/* ═══════════════════════════════════════════════════════
   LUCIDE ICONS — stroke-based, viewBox 0 0 24 24
   Source: lucide.dev (ISC license, free)
═══════════════════════════════════════════════════════ */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#c0564a",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 72,
  height: 72,
};

function IconBag() {
  return (
    <svg {...iconProps}>
      <path d="M16 10a4 4 0 0 1-8 0" />
      <path d="M3.103 6.034h17.794" />
      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg {...iconProps}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function IconBread() {
  return (
    <svg {...iconProps}>
      <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
      <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
      <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
      <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
      <rect width="20" height="4" x="2" y="11" rx="1" />
    </svg>
  );
}

function IconFridge() {
  return (
    <svg {...iconProps}>
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v6" />
    </svg>
  );
}

function IconOven() {
  return (
    <svg {...iconProps}>
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TIP CARD
═══════════════════════════════════════════════════════ */

function TipCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{ marginBottom: "0.9rem" }}>{icon}</div>
      <p style={{
        fontSize: "0.85rem",
        color: "#c0564a",
        margin: 0,
        lineHeight: 1.65,
        fontFamily: "var(--font-brand)",
        fontWeight: 500,
      }}>
        {text}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */

export default function CuidadosPage() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
        <defs>
          <filter id="squiggle" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="turbulence" baseFrequency="0.018 0.018"
              numOctaves="1" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise"
              scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      <main style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        background: "var(--mogaza-cream-bg)",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 440,
          position: "relative",
          background: "#fdf6ee",
          padding: "3.5rem 2.5rem 2.25rem",
        }}>

          {/* ── Wavy red border ── */}
          <div aria-hidden="true" style={{
            position: "absolute",
            inset: "14px",
            border: "2.5px solid #c0564a",
            pointerEvents: "none",
            filter: "url(#squiggle)",
          }}/>

          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p style={{
              fontFamily: "var(--font-brand)",
              fontSize: "0.72rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#c0564a",
              margin: "0 0 0.2rem",
              fontWeight: 500,
            }}>
              guía para disfrutar tu pan
            </p>
            <h1 style={{
              fontFamily: "var(--font-display, var(--font-brand))",
              fontSize: "clamp(3.5rem, 16vw, 6rem)",
              fontWeight: 700,
              color: "#c0564a",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "0.01em",
            }}>
              mogaza
            </h1>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e8d5c0", margin: "0 0 2.25rem" }}/>

          {/* ── 2×2 grid ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.25rem 1.5rem",
            marginBottom: "2.25rem",
          }}>
            <TipCard
              icon={<IconBag/>}
              text="Mantené el pan en su bolsa o en una caja de pan."
            />
            <TipCard
              icon={<IconCalendar/>}
              text="El pan se mantendrá fresco de 2 a 3 días a temperatura ambiente."
            />
            <TipCard
              icon={<IconBread/>}
              text="Podés pedir tu pan rebanado. Si no lo está, rebanalo dentro de los primeros 2 días."
            />
            <TipCard
              icon={<IconFridge/>}
              text="Si querés mantenerlo por más días, guardá el pan rebanado en el congelador."
            />
          </div>

          {/* ── 5th tip centered ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.25rem" }}>
            <div style={{ maxWidth: 220 }}>
              <TipCard
                icon={<IconOven/>}
                text="Para revivir la crocancia del pan, calentá en hornito o air fryer por 5–7 minutos."
              />
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e8d5c0", margin: "0 0 1.5rem" }}/>

          {/* ── Footer ── */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            color: "#c0564a",
          }}>
            <a href="https://www.facebook.com/mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="TikTok" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.28a8.18 8.18 0 0 0 4.79 1.53V7.36a4.85 4.85 0 0 1-1.02-.67z"/>
              </svg>
            </a>
            <span style={{ fontFamily: "var(--font-brand)", fontSize: "0.92rem", fontWeight: 600 }}>
              mogaza.cr
            </span>
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="https://wa.me/50672635745" target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
            <span style={{ fontFamily: "var(--font-brand)", fontSize: "0.92rem", fontWeight: 600 }}>
              7263-5745
            </span>
          </div>

        </div>
      </main>
    </>
  );
}
