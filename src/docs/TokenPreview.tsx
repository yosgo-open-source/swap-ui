import * as React from "react";
import { swapColors, swapRadius, swapShadows, swapBreakpoints, swapFontFamily } from "../theme/tokens";

/** Storybook「Design Tokens」手冊頁專用的預覽元件，不隨套件打包 */

function Swatch({ token, hex }: { token: string; hex: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      title={`點擊複製 ${hex}`}
      onClick={() => {
        void navigator.clipboard.writeText(hex).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        });
      }}
      style={{
        cursor: "pointer",
        border: "1px solid #ECECEC",
        borderRadius: 8,
        padding: 0,
        background: "#FFFFFF",
        textAlign: "left",
        overflow: "hidden",
        fontFamily: "inherit",
      }}
    >
      <div style={{ height: 48, backgroundColor: hex }} />
      <div style={{ padding: "6px 8px", fontSize: 12, lineHeight: 1.5 }}>
        <div style={{ fontWeight: 700 }}>{token}</div>
        <div style={{ color: copied ? "#00932A" : "#6F6F6F" }}>{copied ? "✓ 已複製" : hex}</div>
      </div>
    </button>
  );
}

export function ColorTokens() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {Object.entries(swapColors).map(([family, tokens]) => (
        <div key={family}>
          <div style={{ fontWeight: 700, marginBottom: 8, textTransform: "capitalize" }}>{family}</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: 8,
            }}
          >
            {Object.entries(tokens).map(([token, hex]) => (
              <Swatch key={token} token={token} hex={hex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadiusTokens() {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {Object.entries(swapRadius).map(([token, value]) => (
        <div key={token} style={{ textAlign: "center", fontSize: 12 }}>
          <div
            style={{
              width: 96,
              height: 64,
              borderRadius: value,
              border: "2px solid #1747C2",
              background: "#E6E9F8",
              marginBottom: 6,
            }}
          />
          <div style={{ fontWeight: 700 }}>swapRadius.{token}</div>
          <div style={{ color: "#6F6F6F" }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export function ShadowTokens() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", padding: "8px 0 16px" }}>
      {Object.entries(swapShadows).map(([token, value]) => (
        <div key={token} style={{ textAlign: "center", fontSize: 12 }}>
          <div
            style={{
              width: 120,
              height: 72,
              borderRadius: 8,
              background: "#FFFFFF",
              boxShadow: value,
              marginBottom: 10,
            }}
          />
          <div style={{ fontWeight: 700 }}>swapShadows.{token}</div>
          <div style={{ color: "#6F6F6F", maxWidth: 140 }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export function BreakpointTokens() {
  const cell: React.CSSProperties = { border: "1px solid #ECECEC", padding: "6px 16px", textAlign: "left" };
  return (
    <table style={{ borderCollapse: "collapse", fontSize: 14 }}>
      <thead>
        <tr>
          <th style={cell}>token</th>
          <th style={cell}>min-width</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(swapBreakpoints).map(([token, value]) => (
          <tr key={token}>
            <td style={{ ...cell, fontWeight: 700 }}>{token}</td>
            <td style={cell}>{value}px</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function FontTokens() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ fontFamily: swapFontFamily, fontSize: 20 }}>
        SWAP 自由工作者的行政後盾 — Aa Bb Cc 0123456789
      </div>
      <code style={{ fontSize: 12, color: "#6F6F6F" }}>{swapFontFamily}</code>
    </div>
  );
}
