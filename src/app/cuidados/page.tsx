import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de cuidados — mogaza",
  description: "Cómo conservar y disfrutar tu pan artesanal mogaza.",
};

const tips = [
  {
    icon: "🛍️",
    titulo: "Guardalo bien",
    texto: "Mantené el pan en su bolsa o en una caja de pan.",
    delay: "stagger-1",
  },
  {
    icon: "📅",
    titulo: "Frescura natural",
    texto: "Se mantiene fresco de 2 a 3 días a temperatura ambiente.",
    delay: "stagger-2",
  },
  {
    icon: "🍞",
    titulo: "Rebanado",
    texto: "Podés pedirlo rebanado. Si no, rebanalo dentro de los primeros 2 días.",
    delay: "stagger-3",
  },
  {
    icon: "❄️",
    titulo: "Congelador",
    texto: "Para conservarlo más días, guardá el pan rebanado en el congelador.",
    delay: "stagger-4",
  },
  {
    icon: "🔥",
    titulo: "Reviví la crocancia",
    texto: "Calentá en hornito o air fryer por 5–7 minutos y quedará como recién horneado.",
    delay: "stagger-5",
  },
];

export default function CuidadosPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        background: "var(--mogaza-cream-bg)",
      }}
    >
      <div
        className="wave-border animate-float-in"
        style={{
          width: "100%",
          maxWidth: 420,
          background: "var(--mogaza-cream-light)",
          padding: "2.5rem 2rem 2rem",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "0.95rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--mogaza-red)",
              margin: "0 0 0.25rem",
              fontWeight: 500,
            }}
          >
            guía para disfrutar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "2.8rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--mogaza-text)",
              margin: "0 0 0.5rem",
              lineHeight: 1.1,
            }}
          >
            tu pan
          </h1>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1.6rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--mogaza-red)",
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            mogaza
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--mogaza-cream)",
            margin: "0 0 1.75rem",
          }}
        />

        {/* Tips grid — 2 cols top, 1 col last */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          {tips.slice(0, 4).map((tip) => (
            <div
              key={tip.titulo}
              className={`animate-float-in ${tip.delay}`}
              style={{
                background: "white",
                borderRadius: "0.75rem",
                padding: "1rem 0.875rem",
                border: "1px solid var(--mogaza-cream)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{tip.icon}</div>
              <p
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--mogaza-red)",
                  margin: "0 0 0.25rem",
                }}
              >
                {tip.titulo}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--mogaza-text)",
                  margin: 0,
                  lineHeight: 1.45,
                  opacity: 0.85,
                }}
              >
                {tip.texto}
              </p>
            </div>
          ))}
        </div>

        {/* 5th tip — centered */}
        <div
          className={`animate-float-in ${tips[4].delay}`}
          style={{
            background: "var(--mogaza-red)",
            borderRadius: "0.75rem",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ fontSize: "1.6rem" }}>{tips[4].icon}</span>
          <div>
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "white",
                margin: "0 0 0.2rem",
              }}
            >
              {tips[4].titulo}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.88)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              {tips[4].texto}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--mogaza-cream)",
            margin: "0 0 1.25rem",
          }}
        />

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.instagram.com/mogaza.cr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              color: "var(--mogaza-red)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @mogaza.cr
          </a>

          <span style={{ color: "var(--mogaza-cream)", fontSize: "0.7rem" }}>|</span>

          <a
            href="https://wa.me/50672635745"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              color: "var(--mogaza-red)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            7263-5745
          </a>
        </div>
      </div>
    </main>
  );
}
