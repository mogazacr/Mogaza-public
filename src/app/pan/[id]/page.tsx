import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductoById, getRecetaByProductoId } from "@/lib/sheets";

// Icons as inline SVG components — no external icon dependency needed
function IconBag() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function IconBread() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11c0-3.3 4-6 9-6s9 2.7 9 6a4 4 0 0 1-4 4l-1 6H8l-1-6a4 4 0 0 1-4-4z"/>
    </svg>
  );
}

function IconSnowflake() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <polyline points="8,6 12,2 16,6"/>
      <polyline points="8,18 12,22 16,18"/>
      <polyline points="6,8 2,12 6,16"/>
      <polyline points="18,8 22,12 18,16"/>
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}

interface Tip {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
  delay: string;
}

const TIPS: Tip[] = [
  {
    icon: <IconBag />,
    title: "Conservá la bolsa",
    text: "Mantené el pan en su bolsa original o en una caja de pan para preservar la humedad.",
    color: "#c0564a",
    delay: "stagger-3",
  },
  {
    icon: <IconCalendar />,
    title: "2 a 3 días",
    text: "El pan se mantiene fresco a temperatura ambiente por 2 a 3 días sin problema.",
    color: "#a04038",
    delay: "stagger-4",
  },
  {
    icon: <IconBread />,
    title: "Rebanalo a tiempo",
    text: "Podés pedir tu pan rebanado. Si no lo está, se recomienda rebanarlo en los primeros 2 días.",
    color: "#c0564a",
    delay: "stagger-5",
  },
  {
    icon: <IconSnowflake />,
    title: "Congelá si sobra",
    text: "Para mantenerlo más días, guardá el pan rebanado en el congelador. Dura hasta 2 meses.",
    color: "#a04038",
    delay: "stagger-5",
  },
];

const TIP_HIGHLIGHT: Tip = {
  icon: <IconFlame />,
  title: "¡Revivilo con calor!",
  text: "Calentá en hornito o air fryer por 5–7 minutos para recuperar la crocancia como recién horneado.",
  color: "#c0564a",
  delay: "stagger-6",
};

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const producto = await getProductoById(id);
  if (!producto) return { title: "mogaza" };
  return {
    title: `${producto.nombre} — mogaza`,
    description: `Guía de cuidados para ${producto.nombre}. Panadería artesanal mogaza.`,
  };
}

export default async function PanGuidePage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const producto = await getProductoById(id);
  if (!producto) notFound();

  const receta = await getRecetaByProductoId(id);
  const descripcion = receta?.notas ?? "";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fdf6ee 0%, #faf5ef 50%, #f5e0cc 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem 3rem",
      }}
    >
      {/* Card container */}
      <div
        className="wave-border animate-float-in stagger-1"
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          padding: "3rem 2.5rem 2.5rem",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(192, 86, 74, 0.12), 0 2px 8px rgba(61,44,44,0.06)",
        }}
      >
        {/* Header */}
        <div className="animate-float-in stagger-1">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9e6a5a",
              margin: "0 0 0.25rem",
            }}
          >
            guía para disfrutar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-brand)",
              fontStyle: "italic",
              fontSize: "2.8rem",
              fontWeight: 400,
              color: "var(--mogaza-text)",
              margin: "0 0 0.1rem",
              lineHeight: 1.1,
            }}
          >
            tu pan
          </h1>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1.6rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--mogaza-red)",
              textTransform: "lowercase",
              margin: "0 0 1.5rem",
            }}
          >
            mogaza
          </p>
        </div>

        {/* Product name */}
        <div className="animate-float-in stagger-2">
          <div
            style={{
              display: "inline-block",
              background: "var(--mogaza-cream)",
              borderRadius: "100px",
              padding: "0.5rem 1.4rem",
              marginBottom: descripcion ? "0.5rem" : "1.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-brand)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--mogaza-text)",
              }}
            >
              {producto.nombre}
            </span>
          </div>
          {descripcion && (
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#9e6a5a",
                margin: "0 0 1.75rem",
                lineHeight: 1.5,
              }}
            >
              {descripcion}
            </p>
          )}
        </div>
      </div>

      {/* Tips section */}
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          marginTop: "2rem",
        }}
      >
        {/* Grid 2x2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          {TIPS.map((tip, i) => (
            <TipCard key={i} tip={tip} />
          ))}
        </div>

        {/* Highlight tip — full width */}
        <TipCard tip={TIP_HIGHLIGHT} highlight />
      </div>

      {/* Footer */}
      <footer
        className="animate-float-in stagger-6"
        style={{
          marginTop: "2.5rem",
          textAlign: "center",
          color: "#9e6a5a",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-brand)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            margin: "0 0 0.75rem",
          }}
        >
          mogaza
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem",
          }}
        >
          <a
            href="https://instagram.com/mogaza.cr"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "#9e6a5a",
              textDecoration: "none",
            }}
          >
            <IconInstagram />
            @mogaza.cr
          </a>
          <span style={{ opacity: 0.4 }}>·</span>
          <a
            href="https://wa.me/50672635745"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "#9e6a5a",
              textDecoration: "none",
            }}
          >
            <IconWhatsapp />
            7263‑5745
          </a>
        </div>
      </footer>
    </main>
  );
}

function TipCard({ tip, highlight = false }: { tip: Tip; highlight?: boolean }) {
  return (
    <div
      className={`animate-float-in ${tip.delay}`}
      style={{
        background: highlight
          ? "linear-gradient(135deg, var(--mogaza-cream) 0%, #ffe8d8 100%)"
          : "rgba(255,255,255,0.8)",
        borderRadius: "1.25rem",
        padding: highlight ? "1.25rem 1.5rem" : "1.1rem",
        boxShadow: "0 2px 12px rgba(192,86,74,0.08)",
        border: "1px solid rgba(192,86,74,0.1)",
        display: "flex",
        flexDirection: highlight ? "row" : "column",
        alignItems: highlight ? "flex-start" : "flex-start",
        gap: highlight ? "1rem" : "0.6rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(192,86,74,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(192,86,74,0.08)";
      }}
    >
      <div
        style={{
          color: tip.color,
          flexShrink: 0,
          marginTop: highlight ? "2px" : "0",
        }}
      >
        {tip.icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: highlight ? "1rem" : "0.85rem",
            fontWeight: 600,
            color: "var(--mogaza-text)",
            margin: "0 0 0.2rem",
          }}
        >
          {tip.title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "#6b5050",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {tip.text}
        </p>
      </div>
    </div>
  );
}
