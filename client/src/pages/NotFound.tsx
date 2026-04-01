export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "var(--background)" }}>
      <div className="text-center">
        <h1 className="display-font text-6xl mb-4" style={{ color: "var(--phycap-forest)" }}>404</h1>
        <p style={{ color: "var(--muted-foreground)" }}>Page not found.</p>
        <a href="/" className="mt-4 inline-block underline" style={{ color: "var(--phycap-gold)" }}>
          Return to Brand HQ
        </a>
      </div>
    </div>
  );
}
