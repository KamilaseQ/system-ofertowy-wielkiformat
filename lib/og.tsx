import { ImageResponse } from "next/og";

export const ogAlt = "Oferta — Wielki Format | Koszyk nośników i zapytania";
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Wspólny obraz podglądu linku (OG + Twitter / WhatsApp / SMS): korona na granacie. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 50% 0%, #1a2a52 0%, #0a0f1f 70%)",
          color: "#eef2fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 120, lineHeight: 1 }}>👑</div>
        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Wielki Format
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            color: "#f5c451",
            fontWeight: 600,
          }}
        >
          Koszyk nośników i zapytania o wycenę
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
