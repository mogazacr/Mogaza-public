import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de cuidados — mogaza",
  description: "Cómo conservar y disfrutar tu pan artesanal mogaza.",
};

/* ═══════════════════════════════════════════════════════
   LINE-ART ICONS
═══════════════════════════════════════════════════════ */

function IconBag() {
  return (
    <svg viewBox="0 0 72 78" width="72" height="78" fill="none"
      stroke="#c0564a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* bag body */}
      <path d="M14,34 L9,70 L63,70 L58,34Z"/>
      <line x1="14" y1="34" x2="58" y2="34"/>
      {/* handle arcs */}
      <path d="M27,34 C27,20 45,20 45,34"/>
      {/* bread sitting in bag */}
      <ellipse cx="36" cy="27" rx="13" ry="8"/>
      <path d="M23,30 Q36,38 49,30"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 72 78" width="72" height="78" fill="none"
      stroke="#c0564a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* frame */}
      <rect x="6" y="13" width="60" height="58" rx="3"/>
      {/* header bar */}
      <line x1="6" y1="27" x2="66" y2="27"/>
      {/* ring pegs */}
      <line x1="24" y1="6" x2="24" y2="20"/>
      <line x1="48" y1="6" x2="48" y2="20"/>
      {/* horizontal grid lines */}
      <line x1="6" y1="41" x2="66" y2="41"/>
      <line x1="6" y1="55" x2="66" y2="55"/>
      {/* vertical divider */}
      <line x1="36" y1="27" x2="36" y2="71"/>
      {/* "2 a 3 días" label */}
      <text x="36" y="37" textAnchor="middle" fontSize="7" fill="#c0564a"
        stroke="none" fontFamily="serif" fontStyle="italic">2 a 3 días</text>
      {/* bread in lower half */}
      <ellipse cx="36" cy="61" rx="12" ry="7"/>
      <path d="M24,61 Q36,69 48,61"/>
    </svg>
  );
}

function IconBreadSlices() {
  return (
    <svg viewBox="0 0 72 74" width="72" height="74" fill="none"
      stroke="#c0564a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* 4 slices fanned left-to-right, each offset 9px right, arch rises */}
      <path d="M8,66  L8,38  Q22,18 36,38  L36,66Z"/>
      <path d="M17,67 L17,34 Q31,14 45,34 L45,67Z"/>
      <path d="M26,68 L26,30 Q40,10 54,30 L54,68Z"/>
      <path d="M35,69 L35,26 Q49,6  63,26 L63,69Z"/>
    </svg>
  );
}

function IconFridge() {
  return (
    <svg viewBox="0 0 56 82" width="56" height="82" fill="none"
      stroke="#c0564a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* body */}
      <rect x="9" y="5" width="38" height="70" rx="5"/>
      {/* freezer/fridge divider */}
      <line x1="9" y1="28" x2="47" y2="28"/>
      {/* freezer handle */}
      <line x1="35" y1="11" x2="35" y2="22"/>
      {/* fridge handle */}
      <line x1="35" y1="34" x2="35" y2="66"/>
      {/* snowflake (left of freezer section) */}
      <line x1="21" y1="11" x2="21" y2="23"/>
      <line x1="15" y1="14" x2="27" y2="20"/>
      <line x1="15" y1="20" x2="27" y2="14"/>
    </svg>
  );
}

function IconOven() {
  return (
    <svg viewBox="0 0 84 70" width="84" height="70" fill="none"
      stroke="#c0564a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* body */}
      <rect x="6" y="12" width="72" height="52" rx="5"/>
      {/* control panel divider */}
      <line x1="6" y1="28" x2="78" y2="28"/>
      {/* knobs */}
      <circle cx="19" cy="20" r="5"/>
      <circle cx="34" cy="20" r="5"/>
      <circle cx="51" cy="20" r="5"/>
      <circle cx="67" cy="20" r="4"/>
      {/* oven window */}
      <rect x="17" y="35" width="50" height="23" rx="3"/>
      {/* window gleam */}
      <path d="M22,39 Q35,36 50,39"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TIP CARD
═══════════════════════════════════════════════════════ */

function TipCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{ marginBottom: "0.65rem" }}>{icon}</div>
      <p style={{
        fontSize: "0.83rem",
        color: "#c0564a",
        margin: 0,
        lineHeight: 1.6,
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
      {/* Wavy-border SVG filter */}
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
          maxWidth: 420,
          position: "relative",
          background: "#fdf6ee",
          padding: "3rem 2.25rem 2rem",
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
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <p style={{
              fontFamily: "var(--font-brand)",
              fontSize: "0.75rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#c0564a",
              margin: "0 0 0.3rem",
              fontWeight: 500,
            }}>
              guía para disfrutar tu pan
            </p>
            <h1 style={{
              fontFamily: "var(--font-brand)",
              fontSize: "clamp(3rem, 15vw, 5.5rem)",
              fontWeight: 700,
              color: "#c0564a",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "0.03em",
            }}>
              mogaza
            </h1>
          </div>

          {/* ── Divider ── */}
          <hr style={{ border: "none", borderTop: "1px solid #f5e0cc", margin: "0 0 2rem" }}/>

          {/* ── 2×2 grid ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem 1.5rem",
            marginBottom: "2rem",
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
              icon={<IconBreadSlices/>}
              text="Podés pedir tu pan rebanado. Si no lo está, rebanalo dentro de los primeros 2 días."
            />
            <TipCard
              icon={<IconFridge/>}
              text="Si querés mantenerlo por más días, guardá el pan rebanado en el congelador."
            />
          </div>

          {/* ── 5th tip (centered, single column) ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <div style={{ maxWidth: 210 }}>
              <TipCard
                icon={<IconOven/>}
                text="Para revivir la crocancia del pan, calentá en hornito o air fryer por 5–7 minutos."
              />
            </div>
          </div>

          {/* ── Divider ── */}
          <hr style={{ border: "none", borderTop: "1px solid #f5e0cc", margin: "0 0 1.25rem" }}/>

          {/* ── Footer ── */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.45rem",
            flexWrap: "wrap",
            color: "#c0564a",
          }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@mogaza.cr" target="_blank" rel="noopener noreferrer"
              aria-label="TikTok" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.28a8.18 8.18 0 0 0 4.79 1.53V7.36a4.85 4.85 0 0 1-1.02-.67z"/>
              </svg>
            </a>

            <span style={{
              fontFamily: "var(--font-brand)",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}>mogaza.cr</span>

            <span style={{ opacity: 0.45, fontSize: "0.8rem" }}>|</span>

            {/* WhatsApp */}
            <a href="https://wa.me/50672635745" target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp" style={{ color: "#c0564a", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>

            <span style={{
              fontFamily: "var(--font-brand)",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}>7263-5745</span>
          </div>

        </div>
      </main>
    </>
  );
}
