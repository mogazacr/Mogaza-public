export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--mogaza-cream-bg)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: 600,
          color: "var(--mogaza-red)",
          letterSpacing: "0.08em",
          margin: "0 0 0.5rem",
          textTransform: "lowercase",
        }}
      >
        mogaza
      </h1>
      <p
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "1.25rem",
          fontStyle: "italic",
          color: "var(--mogaza-text)",
          opacity: 0.7,
          margin: "0 0 2.5rem",
        }}
      >
        panadería artesanal
      </p>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          color: "var(--mogaza-text)",
          opacity: 0.5,
          fontSize: "0.9rem",
        }}
      >
        <a href="https://instagram.com/mogaza.cr" style={{ color: "inherit", textDecoration: "none" }}>
          @mogaza.cr
        </a>
        <span>·</span>
        <a href="https://wa.me/50672635745" style={{ color: "inherit", textDecoration: "none" }}>
          7263‑5745
        </a>
      </div>
    </main>
  );
}
