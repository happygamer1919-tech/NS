import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Veronica Miron, nail artist em Linda-a-Velha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#faf6f1", color: "#2a2421" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#5e6b5a" }}>NAIL ARTIST · LINDA-A-VELHA</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 20 }}>{site.business.owner}</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#6b5f58" }}>Manicure, pedicure sem água, verniz gel e unhas de gel</div>
        <div style={{ display: "flex", marginTop: 50 }}>
          <div style={{ background: "#8e4b3a", color: "white", fontSize: 34, padding: "18px 40px", borderRadius: 999 }}>Marcar por WhatsApp</div>
        </div>
      </div>
    ),
    size,
  );
}
