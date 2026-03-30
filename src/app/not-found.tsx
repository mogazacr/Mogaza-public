import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fdf6ee 0%, #faf5ef 50%, #f5e0cc 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-brand)",
          fontStyle: "italic",
          fontSize: "1.5rem",
          color: "var(--mogaza-red)",
          margin: "0 0 0.5rem",
        }}
      >
        mogaza
      </p>
      <h1
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "1.4rem",
          fontWeight: 600,
          color: "var(--mogaza-text)",
          margin: "0 0 0.75rem",
        }}
      >
        Este pan no existe (todavía 🍞)
      </h1>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#9e6a5a",
          maxWidth: "280px",
          lineHeight: 1.6,
          margin: "0 0 2rem",
        }}
      >
        El QR puede estar desactualizado. Escribinos para más info.
      </p>
      <Link
        href="https://wa.me/50672635745"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--mogaza-red)",
          color: "white",
          padding: "0.65rem 1.5rem",
          borderRadius: "100px",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        Escribinos por WhatsApp
      </Link>
    </main>
  );
}
