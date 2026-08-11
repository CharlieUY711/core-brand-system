import type { Metadata } from "next";
import BrandSection from "@/components/brand/BrandSection";
import SymbolStage from "@/components/brand/SymbolStage";
import ReductionRow from "@/components/brand/ReductionRow";
import Swatch from "@/components/brand/Swatch";
import TokenTable from "@/components/brand/TokenTable";
import MisuseGrid from "@/components/brand/MisuseGrid";
import CoreSymbol from "@/components/brand/CoreSymbol";
import CoreOrbit from "@/components/brand/CoreOrbit";
import CorporateModel from "@/components/architecture/CorporateModel";
import { primary, neutrals, semantic } from "@/lib/content/palette";
import { uiTokens } from "@/lib/content/tokens";
import { verticals } from "@/lib/content/verticals";
import s from "./guidelines-content.module.css";

export const metadata: Metadata = { title: "Brand Guidelines" };

export default function BrandGuidelinesPage() {
  return (
    <>
      <div className={s.hero}>
        <span className={s.eyebrow}>CORE Group — Brand Guidelines · v1.0</span>
        <h1 className={s.h1}>The nucleus that connects and orchestrates a system.</h1>
        <p className={s.thesis}>
          CORE is not a circle. It is not a stylized O. It is not a dot with decoration
          around it. It is a <b>dominant nucleus</b> holding a <b>subordinate system</b> —
          the same reading its geometry, brand architecture and visual language repeat in
          every application.
        </p>
      </div>

      {/* 01 CONCEPT */}
      <BrandSection id="concept" number="01" title="Concept">
        <div className={s.grid2}>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-success)" }}>Correct reading</div>
            <p>
              CORE is the <strong>nucleus</strong> that connects and orchestrates a{" "}
              <strong>system</strong>. The outer ring dominates because it is identity; the
              inner ring is subordinate because it is relation, connection, circulation —
              it never competes with the nucleus, it accompanies it.
            </p>
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-error)" }}>Readings to avoid</div>
            <p style={{ color: "var(--core-muted)" }}>
              &quot;CORE is a circle.&quot; — loses the nucleus/orbit hierarchy.
              <br />
              &quot;CORE is a stylized O.&quot; — reduces it to a variation of ODDY.
              <br />
              &quot;CORE is a dot with decoration.&quot; — inverts the weight: the nucleus
              stops dominating.
            </p>
          </div>
        </div>
      </BrandSection>

      {/* 02 SYMBOL */}
      <BrandSection
        id="symbol"
        number="02"
        title="Symbol D3-C — CORE Symbol Master"
        lede="Master asset. Every later application in this document derives from this single source — it is never redrawn by hand."
      >
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
          <SymbolStage />
          <table className={s.spec}>
            <caption>Symbol facts</caption>
            <tbody>
              <tr><td>Asset name</td><td className={s.value}>CORE SYMBOL MASTER</td></tr>
              <tr><td>Variant</td><td className={s.value}>D3-C · N0/R0</td></tr>
              <tr><td>Concept</td><td className={s.value}>dominant nucleus + inner orbit</td></tr>
              <tr><td>Status</td><td className={s.value}>frozen — 41/50 in comparative validation</td></tr>
              <tr><td>Geometric origin</td><td className={s.value}>ODDY&apos;s ring DNA, reinterpreted</td></tr>
            </tbody>
          </table>
        </div>
      </BrandSection>

      {/* 03 CONSTRUCTION */}
      <BrandSection
        id="construction"
        number="03"
        title="Construction"
        lede="Technical specification faithful to the master. Reproduce these exact values — do not eyeball it."
      >
        <div className={s.grid2}>
          <table className={s.spec}>
            <caption>Nucleus (outer ring)</caption>
            <thead><tr><th colSpan={2}>Nucleus (outer ring)</th></tr></thead>
            <tbody>
              <tr><td>Outer radius</td><td className={s.value}>rx 86 · ry 52</td></tr>
              <tr><td>Inner cut</td><td className={s.value}>rx 64 · ry 34</td></tr>
              <tr><td>Cut offset</td><td className={s.value}>+6 / -4 from center</td></tr>
              <tr><td>Resulting thickness</td><td className={s.value}>22 / 18 (≈25% of radius)</td></tr>
            </tbody>
          </table>
          <table className={s.spec}>
            <caption>Inner orbit</caption>
            <thead><tr><th colSpan={2}>Inner orbit</th></tr></thead>
            <tbody>
              <tr><td>Outer radius</td><td className={s.value}>rx 50 · ry 27</td></tr>
              <tr><td>Inner cut</td><td className={s.value}>rx 44 · ry 22</td></tr>
              <tr><td>Cut offset</td><td className={s.value}>+2 / -1 from center</td></tr>
              <tr><td>Gap from nucleus</td><td className={s.value}>14 / 7</td></tr>
            </tbody>
          </table>
        </div>
        <table className={s.spec} style={{ marginTop: 20 }}>
          <caption>Reference box</caption>
          <tbody>
            <tr><td>Reference box</td><td className={s.value}>viewBox 200 × 200, center 100,100</td></tr>
            <tr><td>Incline</td><td className={s.value}>-20°, applied equally to both layers</td></tr>
            <tr><td>Test color in this document</td><td className={s.value}>#152238 — see § 06 Palette</td></tr>
          </tbody>
        </table>
      </BrandSection>

      {/* 04 CLEAR SPACE */}
      <BrandSection id="clear-space" number="04" title="Clear space" lede="A unit derived from the symbol itself — never an arbitrary pixel value.">
        <div className={s.grid2} style={{ alignItems: "center" }}>
          <div className={s.clearSpaceBox}>
            <CoreSymbol size={110} className="" title="CORE" />
            <span className={s.xlabel} style={{ top: 12, left: "50%", transform: "translateX(-50%)" }}>X</span>
            <span className={s.xlabel} style={{ left: 12, top: "50%", transform: "translateY(-50%) rotate(-90deg)" }}>X</span>
          </div>
          <div>
            <p><strong>X = total symbol height ÷ 4.</strong></p>
            <p style={{ color: "var(--core-muted)", fontSize: 13.5 }}>
              No foreign element (text, container border, another logo) may invade a margin
              smaller than 1X around the symbol. The <strong>CORE</strong> wordmark and the{" "}
              <strong>CORE Group</strong> lockup inherit the same X unit, calculated on the
              symbol&apos;s height within each lockup — not on the full composition.
            </p>
          </div>
        </div>
      </BrandSection>

      {/* 05 MINIMUM SIZES */}
      <BrandSection id="minimum-sizes" number="05" title="Minimum sizes" lede="Three distinct criteria — not interchangeable.">
        <table className={s.spec}>
          <caption>Minimum sizes</caption>
          <thead>
            <tr><th>Element</th><th>Minimum digital</th><th>Minimum print</th><th>Minimum comfortable</th></tr>
          </thead>
          <tbody>
            <tr><td>Isolated symbol</td><td className={s.value}>16 px</td><td className={s.value}>6 mm</td><td className={s.value}>24 px / 10 mm</td></tr>
            <tr><td>CORE wordmark</td><td className={s.value}>24 px height</td><td className={s.value}>8 mm height</td><td className={s.value}>32 px / 12 mm</td></tr>
            <tr><td>CORE Group</td><td className={s.value}>28 px height</td><td className={s.value}>10 mm height</td><td className={s.value}>36 px / 14 mm</td></tr>
          </tbody>
        </table>
      </BrandSection>

      {/* 06 PALETTE */}
      <BrandSection
        id="palette"
        number="06"
        title="Palette"
        lede="Color was defined by what it needed to communicate, not the other way around. CORE needed real distance from ODDY — not just a different hue, a different register: where ODDY is vivid, luminous blue (operating brand, energy), CORE is a deep, almost graphite blue (platform, system, institutional sobriety). Same chromatic lineage, opposite roles."
      >
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 28 }}>
          {primary.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>Neutrals</h3>
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 28 }}>
          {neutrals.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>Semantic</h3>
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {semantic.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
      </BrandSection>

      {/* 07 TYPOGRAPHY */}
      <BrandSection
        id="typography"
        number="07"
        title="Typography"
        lede="IBM Plex — one super-family covering display, text, UI and data without fragmenting the system."
      >
        <div className={s.grid3}>
          <div className={s.card}>
            <div style={{ fontSize: 46, fontWeight: 700, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>Display — Plex Sans 700/600</div>
          </div>
          <div className={s.card}>
            <div style={{ fontSize: 46, fontWeight: 400, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>Text — Plex Sans 400/500</div>
          </div>
          <div className={s.card}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 40, fontWeight: 500, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>UI / Data — Plex Mono</div>
          </div>
        </div>
      </BrandSection>

      {/* 08 WORDMARK */}
      <BrandSection id="wordmark" number="08" title="Wordmark" lede="The symbol never competes with the word. Primary configuration: horizontal, symbol on the left.">
        <div className={s.grid3}>
          <div className={s.card}>
            <div className={s.lockupRow}>
              <CoreSymbol size={34} title="CORE" />
              <span className={s.wordmark} style={{ fontSize: 26 }}>CORE</span>
            </div>
            <p className={s.note}>Primary — horizontal, symbol + word</p>
          </div>
          <div className={s.card} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <CoreSymbol size={34} title="CORE" />
            <span className={s.wordmark} style={{ fontSize: 22, marginTop: 8 }}>CORE</span>
            <p className={s.note}>Secondary — stacked, for square formats</p>
          </div>
          <div className={s.card}>
            <CoreSymbol size={40} title="CORE" />
            <p className={s.note}>Isolated symbol — favicon, avatar, app icon</p>
          </div>
        </div>
      </BrandSection>

      {/* 09 CORE GROUP */}
      <BrandSection id="core-group" number="09" title="CORE Group" lede="Superior corporate expression. Not a different company — the same symbol with a smaller second line of hierarchy.">
        <div className={s.card} style={{ display: "inline-flex" }}>
          <div className={s.lockupRow}>
            <CoreSymbol size={44} title="CORE Group" />
            <span className={s.wordmark} style={{ fontSize: 30 }}>
              CORE<small>Group</small>
            </span>
          </div>
        </div>
        <p className={s.note} style={{ marginTop: 14, maxWidth: "60ch" }}>
          &quot;Group&quot; never exceeds 40% of &quot;CORE&quot;&apos;s size and never
          competes in visual weight — it is corporate structure endorsement, not a second
          brand name.
        </p>
      </BrandSection>

      {/* 10 ARCHITECTURE */}
      <BrandSection id="architecture" number="10" title="Brand architecture" lede="Four levels. Each answers a different question.">
        <div className={s.card}>
          {[
            ["1", "ODDY", "Corporate brand / origin. External identity, immutable — CORE does not replace or reinterpret it."],
            ["2", "CORE", "Platform / system. The technology layer that orchestrates the ecosystem — the D3-C symbol lives at this level."],
            ["3", "CORE Group", "Corporate structure of the ecosystem, when context requires it (manuals, institutional communication)."],
            ["4", "Verticals / products", "CORE Logistics, CORE Rep, CORE Market, CORE Intelligence, CORE Finance — subordinate extensions, never independent brands. CORE Logistics is the technology layer for OnDemand; CORE Market is the technology layer for COMITA; CORE Rep, CORE Intelligence and CORE Finance are transversal capabilities of the platform, not tied to a single operator. CORE provides the system — it does not operate logistics or commerce. See § 19."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: "flex", gap: 20, padding: "18px 0", borderBottom: n !== "4" ? "1px solid var(--core-line)" : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, color: "#fff", background: "var(--core-ink)", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{n}</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{t}</div>
                <div style={{ fontSize: 12.5, color: "var(--core-muted)", marginTop: 3, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "36px 0 6px" }}>Operational model: who does what</h3>
        <p className={s.note} style={{ marginBottom: 24 }}>This relationship is functional, not a second brand hierarchy — it does not replace the four levels above.</p>
        <CorporateModel />
        <div className={s.card} style={{ border: "1.5px solid var(--core-signal)", background: "rgba(14,138,130,.06)", textAlign: "center", marginTop: 26, maxWidth: 640 }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, margin: 0 }}>
            Charlie defines. CORE orchestrates and executes. OnDemand operates
            logistics. COMITA develops commerce. ODDY is a brand and ecosystem
            entity within the system — never a parent of CORE.
          </p>
        </div>
      </BrandSection>

      {/* 11 ODDY */}
      <BrandSection
        id="oddy"
        number="11"
        title="Relationship with ODDY"
        lede="Three ways of coexisting, resolved by hierarchy, space and typography — never by graphic fusion. ODDY is represented here only as a position reference: the official brand file must replace this placeholder in production."
      >
        <div className={s.grid3}>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>EXAMPLE A — PEERS</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
              <div className={s.oddyPlaceholder}><span className={s.oddyDot} />ODDY</div>
              <div style={{ width: 1, height: 28, background: "var(--core-line)" }} />
              <div className={s.lockupRow}><CoreSymbol size={22} title="CORE" /><span className={s.wordmark} style={{ fontSize: 16 }}>CORE</span></div>
            </div>
            <p className={s.note}>Both as equivalent corporate units. Use: institutional footer, joint presentation closing, B2B materials between peers.</p>
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>EXAMPLE B — ENDORSEMENT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div className={s.lockupRow}><CoreSymbol size={26} title="CORE" /><span className={s.wordmark} style={{ fontSize: 19 }}>CORE</span></div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)", paddingLeft: 38 }}>by <span style={{ color: "#1D5FD6", fontWeight: 600 }}>ODDY</span></div>
            </div>
            <p className={s.note}>CORE dominates, ODDY backs it in smaller type. Use: product, login, dashboard — where the user interacts with CORE.</p>
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>EXAMPLE C — STRUCTURE</div>
            <div className={s.lockupRow}><CoreSymbol size={26} title="CORE Group" /><span className={s.wordmark} style={{ fontSize: 19 }}>CORE<small>Group</small></span></div>
            <div className={s.oddyPlaceholder} style={{ marginTop: 10, fontSize: 11, padding: "5px 11px" }}><span className={s.oddyDot} style={{ width: 6, height: 6 }} />ODDY — corporate ecosystem</div>
            <p className={s.note}>CORE Group as the umbrella, ODDY listed as an operating unit. Use: manual, org chart, institutional documentation.</p>
          </div>
        </div>
        <div className={s.immutable}>
          <div className={s.immutableTag}>ODDY BRAND ASSET — IMMUTABLE</div>
          <p>
            ODDY&apos;s logotype, symbol, construction, proportions, colors and typography
            are not modified, redesigned, reinterpreted or fused with CORE anywhere in this
            document. Every &quot;ODDY&quot; element shown above is a position placeholder —
            not a brand reproduction.
          </p>
        </div>
      </BrandSection>

      {/* 12 ORBIT */}
      <BrandSection id="orbit" number="12" title="CORE Orbit">
        <div className={s.card} style={{ background: "var(--core-bg-elev)", marginBottom: 20 }}>
          <div className={s.immutableTag} style={{ color: "var(--core-redline)" }}>Compositional resource, not part of the symbol</div>
          <p style={{ fontSize: 12.5, lineHeight: 1.55, marginTop: 8 }}>
            The Orbit guide is an institutional communication tool — covers, presentations,
            motion. The D3-C symbol (§ 02) works complete without it. They are never
            combined into a single logo asset.
          </p>
        </div>
        <CoreOrbit />
      </BrandSection>

      {/* 13 REDUCTION */}
      <BrandSection
        id="reduction"
        number="13"
        title="Reduction system"
        lede="No technical adaptation is necessary — the master was already validated at 16px in the prior micro-test round. Same geometry, no exception, across all five scales."
      >
        <ReductionRow />
      </BrandSection>

      {/* 14 FAVICON */}
      <BrandSection id="favicon" number="14" title="Favicon" lede="16px, geometry identical to the master.">
        <div className={s.browserChrome} style={{ maxWidth: 340, borderRadius: 8 }}>
          <div className={s.uiDot} /><div className={s.uiDot} /><div className={s.uiDot} />
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--core-surface)", border: "1px solid var(--core-line)", borderRadius: 5, padding: "3px 8px 3px 6px", marginLeft: 6 }}>
            <CoreSymbol size={13} title="Favicon" />
            <span style={{ fontSize: 9, color: "var(--core-muted)" }}>core.com.uy</span>
          </div>
        </div>
      </BrandSection>

      {/* 15 APP ICON */}
      <BrandSection id="app-icon" number="15" title="App icon" lede="32px and above. The symbol works with generous margin — it does not need a color background to hold up.">
        <div style={{ display: "flex", gap: 20, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--core-surface)", border: "1px solid var(--core-line)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={20} title="" /></div>
          <div style={{ width: 48, height: 48, borderRadius: 11, background: "var(--core-surface)", border: "1px solid var(--core-line)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={30} title="" /></div>
          <div style={{ width: 64, height: 64, borderRadius: 15, background: "var(--core-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={40} className="" title="" /></div>
        </div>
      </BrandSection>

      {/* 16 VERSIONS */}
      <BrandSection id="versions" number="16" title="Versions" lede="Positive, negative, monochrome. D3-C geometry with no exception across the three.">
        <div className={s.grid3}>
          <div className={s.card} style={{ textAlign: "center" }}>
            <CoreSymbol size={70} title="Positive" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)", marginTop: 12 }}>Positive — light ground</div>
          </div>
          <div className={s.card} style={{ textAlign: "center", background: "var(--core-ink)" }}>
            <CoreSymbol size={70} className="" title="Negative" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#B7BFD6", marginTop: 12 }}>Negative — dark ground</div>
          </div>
          <div className={s.card} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <CoreSymbol size={56} title="Black" />
              <div style={{ width: 56, height: 56, background: "#000", borderRadius: 6, padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CoreSymbol size={40} title="White" />
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)", marginTop: 12 }}>Monochrome — black / white</div>
          </div>
        </div>
      </BrandSection>

      {/* 17 MISUSE */}
      <BrandSection id="misuse" number="17" title="Incorrect uses" lede="Illustrated only to document the error — none of these examples is a valid variant.">
        <MisuseGrid />
        <div className={s.immutable} style={{ marginTop: 20 }}>
          <div className={s.immutableTag}>ODDY BRAND ASSET — IMMUTABLE</div>
          <p>Do not modify ODDY to solve any problem in this section. If CORE clashes with ODDY in an application, the fix happens on CORE&apos;s side and in the composition — never on ODDY&apos;s asset.</p>
        </div>
      </BrandSection>

      {/* 18 UI TOKENS */}
      <BrandSection id="ui-tokens" number="18" title="UI color system" lede="Products consume tokens, not loose hex values. All of them derive from the CORE architecture — there are no isolated per-application palettes.">
        <div className={s.grid2}>
          <TokenTable tokens={uiTokens} />
          <div className={s.uiMock}>
            <div className={s.uiMockChrome}><div className={s.uiDot} /><div className={s.uiDot} /><div className={s.uiDot} /></div>
            <div className={s.uiMockBody}>
              <div className={s.uiMockSidebar}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", marginBottom: 10 }}>
                  <CoreSymbol size={16} className="" title="" />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11 }}>CORE</span>
                </div>
                <div className={`${s.uiMockSidebarItem} ${s.active}`}>Dashboard</div>
                <div className={s.uiMockSidebarItem}>Logistics</div>
                <div className={s.uiMockSidebarItem}>Market</div>
                <div className={s.uiMockSidebarItem}>Finance</div>
              </div>
              <div className={s.uiMockContent}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 13, margin: "0 0 10px" }}>Active shipments</h4>
                <div className={s.pillRow}>
                  <span className={`${s.pill} ${s.pillSuccess}`}>delivered</span>
                  <span className={`${s.pill} ${s.pillInfo}`}>in transit</span>
                  <span className={`${s.pill} ${s.pillWarning}`}>delayed</span>
                  <span className={`${s.pill} ${s.pillError}`}>failed</span>
                </div>
                <div className={s.miniCard}>142 shipments processed today</div>
                <div style={{ marginTop: 10 }}><span className={s.btnPrimary}>New order</span></div>
              </div>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* 19 VERTICALS */}
      <BrandSection id="verticals" number="19" title="Verticals" lede="Extensions of the CORE system, not independent brands: same symbol, same wordmark, one identifying tint per vertical, always in the same saturation/lightness band.">
        <div className={s.vertRow}>
          {verticals.map((v) => (
            <div className={s.vertChip} key={v.slug}>
              <span className={s.vertDot} style={{ background: v.color }} />
              <span className={s.vertName}>{v.name}<small>{v.short}</small></span>
            </div>
          ))}
        </div>
      </BrandSection>

      {/* 20 APPLICATIONS */}
      <BrandSection id="applications" number="20" title="Applications">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>Digital</h3>
        <div className={s.grid3} style={{ marginBottom: 32 }}>
          <div className={s.appFrame}>
            <div style={{ padding: 30, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--core-paper)" }}>
              <div className={s.card} style={{ width: "100%", maxWidth: 220, textAlign: "center" }}>
                <CoreSymbol size={36} title="" />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, margin: "14px 0" }}>Sign in to CORE</div>
                <div style={{ border: "1px solid var(--core-line)", borderRadius: 6, padding: "7px 10px", fontSize: 10, color: "var(--core-muted)", marginBottom: 7, textAlign: "left" }}>user@company.com</div>
                <div style={{ border: "1px solid var(--core-line)", borderRadius: 6, padding: "7px 10px", fontSize: 10, color: "var(--core-muted)", marginBottom: 10, textAlign: "left" }}>••••••••</div>
                <div className={s.btnPrimary} style={{ textAlign: "center" }}>Continue</div>
              </div>
            </div>
            <div className={s.appFrameLabel}>login</div>
          </div>
          <div className={s.appFrame}>
            <div style={{ padding: 16, background: "var(--core-ink)", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", gap: 8 }}>
              <CoreSymbol size={16} className="" title="" />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "#fff" }}>CORE</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 9, color: "#B7BFD6" }}>v1.0</span>
            </div>
            <div style={{ padding: 14, fontSize: 10.5, color: "var(--core-muted)" }}>Dashboard · Shipments · Billing</div>
            <div className={s.appFrameLabel}>navbar</div>
          </div>
          <div className={s.appFrame}>
            <div style={{ padding: 14, background: "var(--core-paper)" }}>
              <div style={{ width: 150, border: "6px solid var(--core-ink)", borderRadius: 26, overflow: "hidden", margin: "0 auto", background: "var(--core-surface)" }}>
                <div style={{ height: 16, background: "var(--core-ink)" }} />
                <div style={{ padding: "14px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--core-line)" }}>
                  <CoreSymbol size={16} title="" />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11 }}>CORE</span>
                </div>
                <div style={{ padding: 12 }}>
                  <div className={s.miniCard} style={{ marginBottom: 8 }}>Mobile dashboard</div>
                  <div className={s.miniCard}>3 new alerts</div>
                </div>
              </div>
            </div>
            <div className={s.appFrameLabel}>mobile header</div>
          </div>
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>Corporate</h3>
        <div className={s.grid3}>
          <div className={s.appFrame}>
            <div className={s.slideCover}>
              <CoreSymbol size={40} className="" title="" />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#fff", marginTop: 14 }}>CORE Group</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#8A93B5", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 6 }}>Business proposal · 2026</div>
            </div>
            <div className={s.appFrameLabel}>presentation cover</div>
          </div>
          <div className={s.appFrame}>
            <div className={s.bizCard}>
              <CoreSymbol size={26} className="" title="" />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>Full Name</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#8A93B5", marginTop: 2 }}>CORE — Platform</div>
              </div>
            </div>
            <div className={s.appFrameLabel}>business card</div>
          </div>
          <div className={s.appFrame}>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, borderBottom: "2px solid var(--core-ink)", paddingBottom: 10, marginBottom: 12 }}>
                <CoreSymbol size={18} title="" />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>CORE</span>
              </div>
              <div style={{ fontSize: 10, color: "var(--core-muted)", lineHeight: 1.7 }}>Technical proposal<br />Ref. CORE-2026-014</div>
            </div>
            <div className={s.appFrameLabel}>document header</div>
          </div>
        </div>
      </BrandSection>

      {/* 21 RULES */}
      <BrandSection id="rules" number="21" title="Master rules — summary">
        <div className={s.ruleGrid} style={{ marginBottom: 28 }}>
          {[
            "D3-C is frozen.",
            "ODDY is frozen.",
            "No D4.",
            "No redesigning ODDY.",
            "No fusing ODDY + CORE.",
            "CORE must have its own identity.",
            "CORE Orbit is a graphic resource, not part of the logo.",
            "Verticals are extensions of the CORE system, not independent brands.",
            "Geometry stays identical across all applications.",
            "The priority is building a system, not a pretty logo.",
          ].map((r, i) => (
            <div className={s.ruleCard} key={r}>
              <div className={s.ruleId}>RULE {String(i + 1).padStart(2, "0")}</div>
              <div className={s.ruleText}>{r}</div>
            </div>
          ))}
        </div>

        <div className={s.finalCheck}>
          <div className={s.finalQ}>Was the ODDY logo modified in any way?</div>
          <div className={s.finalA}>NO.</div>
          <div className={s.finalQ} style={{ marginTop: 14 }}>Was the D3-C geometry modified in any way?</div>
          <div className={s.finalA}>NO.</div>
        </div>

        <p className={s.note} style={{ marginTop: 24, maxWidth: "74ch" }}>
          This document stands as the base for <strong>CORE Brand Guidelines v1.0</strong> and
          the starting point for real production: SVG/PNG export of the master symbol,
          favicon and app icon generation, UI components on the tokens defined in § 18, and
          corporate pieces on the lockups in § 08–09.
        </p>
      </BrandSection>
    </>
  );
}
