import { ImageResponse } from "next/og";

export const alt =
  "Yatharth Verma — Senior Software Engineer. Topo (YC W24), Artisan AI (YC W24), LeadSquared.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090A",
          color: "#F2F4F6",
          padding: "64px 72px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#1D4ED8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            YV
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Yatharth Verma
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 920,
            }}
          >
            <div>I build the systems</div>
            <div style={{ color: "#7B848F" }}>behind the product.</div>
          </div>
          <div style={{ fontSize: 26, color: "#A8B0B8", maxWidth: 820, lineHeight: 1.4 }}>
            Full-stack. Currently at Topo (YC W24). Previously Artisan AI (YC W24) and LeadSquared.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 22, color: "#A8B0B8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            Topo
            <span
              style={{
                fontSize: 16,
                color: "#60A5FA",
                border: "1px solid #1E3A8A",
                borderRadius: 999,
                padding: "4px 10px",
              }}
            >
              YC W24
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            Artisan AI
            <span
              style={{
                fontSize: 16,
                color: "#60A5FA",
                border: "1px solid #1E3A8A",
                borderRadius: 999,
                padding: "4px 10px",
              }}
            >
              YC W24
            </span>
          </div>
          <div>LeadSquared</div>
        </div>
      </div>
    ),
    size
  );
}
