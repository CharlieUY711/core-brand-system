"use client";

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
import { useLocale } from "@/lib/i18n/LocaleContext";
import s from "./guidelines-content.module.css";

/** Renders a dictionary string that carries inline <strong>/<b>/<br />.
 * Safe by construction: the only inputs are authored constants in
 * lib/i18n/dictionaries — never user input, never remote content. Used
 * sparingly, only where the manual's emphasis is part of the sentence. */
function Rich({ html, className, style }: { html: string; className?: string; style?: React.CSSProperties }) {
  return <p className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function GuidelinesContent() {
  const { t, dict } = useLocale();

  return (
    <>
      <div className={s.hero}>
        <span className={s.eyebrow}>{t("guidelines.heroEyebrow")}</span>
        <h1 className={s.h1}>{t("guidelines.heroTitle")}</h1>
        <Rich className={s.thesis} html={t("guidelines.heroThesisRich")} />
      </div>

      {/* 01 CONCEPT */}
      <BrandSection id="concept" number="01" title={t("guidelines.s01Title")}>
        <div className={s.grid2}>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-success)" }}>{t("guidelines.s01CorrectHead")}</div>
            <Rich html={t("guidelines.s01CorrectRich")} />
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-error)" }}>{t("guidelines.s01AvoidHead")}</div>
            <Rich style={{ color: "var(--core-muted)" }} html={t("guidelines.s01AvoidRich")} />
          </div>
        </div>
      </BrandSection>

      {/* 02 SYMBOL */}
      <BrandSection id="symbol" number="02" title={t("guidelines.s02Title")} lede={t("guidelines.s02Lede")}>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
          <SymbolStage />
          <table className={s.spec}>
            <caption>{t("guidelines.s02Caption")}</caption>
            <tbody>
              <tr><td>{t("guidelines.s02AssetName")}</td><td className={s.value}>CORE SYMBOL MASTER</td></tr>
              <tr><td>{t("guidelines.s02Variant")}</td><td className={s.value}>D3-C · N0/R0</td></tr>
              <tr><td>{t("guidelines.s02Concept")}</td><td className={s.value}>{t("guidelines.s02ConceptValue")}</td></tr>
              <tr><td>{t("guidelines.s02Status")}</td><td className={s.value}>{t("guidelines.s02StatusValue")}</td></tr>
              <tr><td>{t("guidelines.s02Origin")}</td><td className={s.value}>{t("guidelines.s02OriginValue")}</td></tr>
            </tbody>
          </table>
        </div>
      </BrandSection>

      {/* 03 CONSTRUCTION */}
      <BrandSection id="construction" number="03" title={t("guidelines.s03Title")} lede={t("guidelines.s03Lede")}>
        <div className={s.grid2}>
          <table className={s.spec}>
            <caption>{t("guidelines.s03Nucleus")}</caption>
            <thead><tr><th colSpan={2}>{t("guidelines.s03Nucleus")}</th></tr></thead>
            <tbody>
              <tr><td>{t("guidelines.s03OuterRadius")}</td><td className={s.value}>rx 86 · ry 52</td></tr>
              <tr><td>{t("guidelines.s03InnerCut")}</td><td className={s.value}>rx 64 · ry 34</td></tr>
              <tr><td>{t("guidelines.s03CutOffset")}</td><td className={s.value}>+6 / -4 {t("guidelines.s03CutOffsetFrom")}</td></tr>
              <tr><td>{t("guidelines.s03Thickness")}</td><td className={s.value}>{t("guidelines.s03ThicknessValue")}</td></tr>
            </tbody>
          </table>
          <table className={s.spec}>
            <caption>{t("guidelines.s03Orbit")}</caption>
            <thead><tr><th colSpan={2}>{t("guidelines.s03Orbit")}</th></tr></thead>
            <tbody>
              <tr><td>{t("guidelines.s03OuterRadius")}</td><td className={s.value}>rx 50 · ry 27</td></tr>
              <tr><td>{t("guidelines.s03InnerCut")}</td><td className={s.value}>rx 44 · ry 22</td></tr>
              <tr><td>{t("guidelines.s03CutOffset")}</td><td className={s.value}>+2 / -1 {t("guidelines.s03CutOffsetFrom")}</td></tr>
              <tr><td>{t("guidelines.s03Gap")}</td><td className={s.value}>14 / 7</td></tr>
            </tbody>
          </table>
        </div>
        <table className={s.spec} style={{ marginTop: 20 }}>
          <caption>{t("guidelines.s03RefBox")}</caption>
          <tbody>
            <tr><td>{t("guidelines.s03RefBox")}</td><td className={s.value}>{t("guidelines.s03RefBoxValue")}</td></tr>
            <tr><td>{t("guidelines.s03Incline")}</td><td className={s.value}>{t("guidelines.s03InclineValue")}</td></tr>
            <tr><td>{t("guidelines.s03TestColor")}</td><td className={s.value}>{t("guidelines.s03TestColorValue")}</td></tr>
          </tbody>
        </table>
      </BrandSection>

      {/* 04 CLEAR SPACE */}
      <BrandSection id="clear-space" number="04" title={t("guidelines.s04Title")} lede={t("guidelines.s04Lede")}>
        <div className={s.grid2} style={{ alignItems: "center" }}>
          <div className={s.clearSpaceBox}>
            <CoreSymbol size={110} className="" title="CORE" />
            <span className={s.xlabel} style={{ top: 12, left: "50%", transform: "translateX(-50%)" }}>X</span>
            <span className={s.xlabel} style={{ left: 12, top: "50%", transform: "translateY(-50%) rotate(-90deg)" }}>X</span>
          </div>
          <div>
            <Rich html={t("guidelines.s04FormulaRich")} />
            <Rich style={{ color: "var(--core-muted)", fontSize: 13.5 }} html={t("guidelines.s04TextRich")} />
          </div>
        </div>
      </BrandSection>

      {/* 05 MINIMUM SIZES */}
      <BrandSection id="minimum-sizes" number="05" title={t("guidelines.s05Title")} lede={t("guidelines.s05Lede")}>
        <table className={s.spec}>
          <caption>{t("guidelines.s05Title")}</caption>
          <thead>
            <tr>
              <th>{t("guidelines.s05ColElement")}</th>
              <th>{t("guidelines.s05ColDigital")}</th>
              <th>{t("guidelines.s05ColPrint")}</th>
              <th>{t("guidelines.s05ColComfort")}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{t("guidelines.s05RowSymbol")}</td><td className={s.value}>16 px</td><td className={s.value}>6 mm</td><td className={s.value}>24 px / 10 mm</td></tr>
            <tr><td>{t("guidelines.s05RowWordmark")}</td><td className={s.value}>24 px {t("guidelines.s05Height")}</td><td className={s.value}>8 mm {t("guidelines.s05Height")}</td><td className={s.value}>32 px / 12 mm</td></tr>
            <tr><td>CORE Group</td><td className={s.value}>28 px {t("guidelines.s05Height")}</td><td className={s.value}>10 mm {t("guidelines.s05Height")}</td><td className={s.value}>36 px / 14 mm</td></tr>
          </tbody>
        </table>
      </BrandSection>

      {/* 06 PALETTE */}
      <BrandSection id="palette" number="06" title={t("guidelines.s06Title")} lede={t("guidelines.s06Lede")}>
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 28 }}>
          {primary.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>{t("guidelines.s06Neutrals")}</h3>
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 28 }}>
          {neutrals.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>{t("guidelines.s06Semantic")}</h3>
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {semantic.map((c) => <Swatch swatch={c} key={c.name} />)}
        </div>
      </BrandSection>

      {/* 07 TYPOGRAPHY */}
      <BrandSection id="typography" number="07" title={t("guidelines.s07Title")} lede={t("guidelines.s07Lede")}>
        <div className={s.grid3}>
          <div className={s.card}>
            <div style={{ fontSize: 46, fontWeight: 700, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>{t("guidelines.s07Display")}</div>
          </div>
          <div className={s.card}>
            <div style={{ fontSize: 46, fontWeight: 400, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>{t("guidelines.s07Text")}</div>
          </div>
          <div className={s.card}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 40, fontWeight: 500, lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginTop: 14 }}>{t("guidelines.s07Data")}</div>
          </div>
        </div>
      </BrandSection>

      {/* 08 WORDMARK */}
      <BrandSection id="wordmark" number="08" title={t("guidelines.s08Title")} lede={t("guidelines.s08Lede")}>
        <div className={s.grid3}>
          <div className={s.card}>
            <div className={s.lockupRow}>
              <CoreSymbol size={34} title="CORE" />
              <span className={s.wordmark} style={{ fontSize: 26 }}>CORE</span>
            </div>
            <p className={s.note}>{t("guidelines.s08Primary")}</p>
          </div>
          <div className={s.card} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <CoreSymbol size={34} title="CORE" />
            <span className={s.wordmark} style={{ fontSize: 22, marginTop: 8 }}>CORE</span>
            <p className={s.note}>{t("guidelines.s08Secondary")}</p>
          </div>
          <div className={s.card}>
            <CoreSymbol size={40} title="CORE" />
            <p className={s.note}>{t("guidelines.s08Isolated")}</p>
          </div>
        </div>
      </BrandSection>

      {/* 09 CORE GROUP */}
      <BrandSection id="core-group" number="09" title={t("guidelines.s09Title")} lede={t("guidelines.s09Lede")}>
        <div className={s.card} style={{ display: "inline-flex" }}>
          <div className={s.lockupRow}>
            <CoreSymbol size={44} title="CORE Group" />
            <span className={s.wordmark} style={{ fontSize: 30 }}>
              CORE<small>Group</small>
            </span>
          </div>
        </div>
        <p className={s.note} style={{ marginTop: 14, maxWidth: "60ch" }}>{t("guidelines.s09Note")}</p>
      </BrandSection>

      {/* 10 ARCHITECTURE */}
      <BrandSection id="architecture" number="10" title={t("guidelines.s10Title")} lede={t("guidelines.s10Lede")}>
        <div className={s.card}>
          {[
            ["1", "ODDY", t("guidelines.s10L1")],
            ["2", "CORE", t("guidelines.s10L2")],
            ["3", "CORE Group", t("guidelines.s10L3")],
            ["4", t("guidelines.s10L4Name"), t("guidelines.s10L4")],
          ].map(([n, name, d]) => (
            <div key={n} style={{ display: "flex", gap: 20, padding: "18px 0", borderBottom: n !== "4" ? "1px solid var(--core-line)" : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, color: "#fff", background: "var(--core-ink)", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{n}</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{name}</div>
                <div style={{ fontSize: 12.5, color: "var(--core-muted)", marginTop: 3, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "36px 0 6px" }}>{t("guidelines.s10ModelTitle")}</h3>
        <p className={s.note} style={{ marginBottom: 24 }}>{t("guidelines.s10ModelNote")}</p>
        {/* No longer pinned to English: the manual now follows the reader's language. */}
        <CorporateModel />
        <div className={s.card} style={{ border: "1.5px solid var(--core-signal)", background: "rgba(14,138,130,.06)", textAlign: "center", marginTop: 26, maxWidth: 640 }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, margin: 0 }}>{t("guidelines.s10Rule")}</p>
        </div>
      </BrandSection>

      {/* 11 ODDY */}
      <BrandSection id="oddy" number="11" title={t("guidelines.s11Title")} lede={t("guidelines.s11Lede")}>
        <div className={s.grid3}>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>{t("guidelines.s11AHead")}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/oddy/official/logo-1024.png" alt="ODDY" style={{ height: 20, width: "auto" }} />
              <div style={{ width: 1, height: 28, background: "var(--core-line)" }} />
              <div className={s.lockupRow}><CoreSymbol size={22} title="CORE" /><span className={s.wordmark} style={{ fontSize: 16 }}>CORE</span></div>
            </div>
            <p className={s.note}>{t("guidelines.s11ANote")}</p>
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>{t("guidelines.s11BHead")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/oddy/official/logo-1024.png" alt="ODDY" style={{ height: 24, width: "auto" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)" }}>
                {t("guidelines.s11BParent")} <span style={{ color: "#0169F5", fontWeight: 600 }}>OnDemand by ODDY</span>
              </div>
            </div>
            <p className={s.note}>{t("guidelines.s11BNote")}</p>
          </div>
          <div className={s.card}>
            <div className={s.cardHead} style={{ color: "var(--core-signal)" }}>{t("guidelines.s11CHead")}</div>
            <div className={s.lockupRow}><CoreSymbol size={26} title="CORE Group" /><span className={s.wordmark} style={{ fontSize: 19 }}>CORE<small>Group</small></span></div>
            <div style={{ marginTop: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/oddy/official/logo-1024.png" alt="ODDY" style={{ height: 16, width: "auto" }} />
            </div>
            <p className={s.note}>{t("guidelines.s11CNote")}</p>
          </div>
        </div>
        <div className={s.immutable}>
          <div className={s.immutableTag}>{t("guidelines.s11ImmutableTag")}</div>
          <p>{t("guidelines.s11Immutable")}</p>
        </div>
      </BrandSection>

      {/* 12 ORBIT */}
      <BrandSection id="orbit" number="12" title={t("guidelines.s12Title")}>
        <div className={s.card} style={{ background: "var(--core-bg-elev)", marginBottom: 20 }}>
          <div className={s.immutableTag} style={{ color: "var(--core-redline)" }}>{t("guidelines.s12Tag")}</div>
          <p style={{ fontSize: 12.5, lineHeight: 1.55, marginTop: 8 }}>{t("guidelines.s12Text")}</p>
        </div>
        <CoreOrbit />
      </BrandSection>

      {/* 13 REDUCTION */}
      <BrandSection id="reduction" number="13" title={t("guidelines.s13Title")} lede={t("guidelines.s13Lede")}>
        <ReductionRow />
      </BrandSection>

      {/* 14 FAVICON */}
      <BrandSection id="favicon" number="14" title={t("guidelines.s14Title")} lede={t("guidelines.s14Lede")}>
        <div className={s.browserChrome} style={{ maxWidth: 340, borderRadius: 8 }}>
          <div className={s.uiDot} /><div className={s.uiDot} /><div className={s.uiDot} />
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--core-surface)", border: "1px solid var(--core-line)", borderRadius: 5, padding: "3px 8px 3px 6px", marginLeft: 6 }}>
            <CoreSymbol size={13} title="Favicon" />
            <span style={{ fontSize: 9, color: "var(--core-muted)" }}>core.com.uy</span>
          </div>
        </div>
      </BrandSection>

      {/* 15 APP ICON */}
      <BrandSection id="app-icon" number="15" title={t("guidelines.s15Title")} lede={t("guidelines.s15Lede")}>
        <div style={{ display: "flex", gap: 20, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--core-surface)", border: "1px solid var(--core-line)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={20} title="" /></div>
          <div style={{ width: 48, height: 48, borderRadius: 11, background: "var(--core-surface)", border: "1px solid var(--core-line)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={30} title="" /></div>
          <div style={{ width: 64, height: 64, borderRadius: 15, background: "var(--core-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}><CoreSymbol size={40} className="" title="" /></div>
        </div>
      </BrandSection>

      {/* 16 VERSIONS */}
      <BrandSection id="versions" number="16" title={t("guidelines.s16Title")} lede={t("guidelines.s16Lede")}>
        <div className={s.grid3}>
          <div className={s.card} style={{ textAlign: "center" }}>
            <CoreSymbol size={70} title="Positive" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)", marginTop: 12 }}>{t("guidelines.s16Positive")}</div>
          </div>
          <div className={s.card} style={{ textAlign: "center", background: "var(--core-ink)" }}>
            <CoreSymbol size={70} className="" title="Negative" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#B7BFD6", marginTop: 12 }}>{t("guidelines.s16Negative")}</div>
          </div>
          <div className={s.card} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <CoreSymbol size={56} title="Black" />
              <div style={{ width: 56, height: 56, background: "#000", borderRadius: 6, padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CoreSymbol size={40} title="White" />
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--core-muted)", marginTop: 12 }}>{t("guidelines.s16Mono")}</div>
          </div>
        </div>
      </BrandSection>

      {/* 17 MISUSE */}
      <BrandSection id="misuse" number="17" title={t("guidelines.s17Title")} lede={t("guidelines.s17Lede")}>
        <MisuseGrid />
        <div className={s.immutable} style={{ marginTop: 20 }}>
          <div className={s.immutableTag}>{t("guidelines.s11ImmutableTag")}</div>
          <p>{t("guidelines.s17Immutable")}</p>
        </div>
      </BrandSection>

      {/* 18 UI TOKENS */}
      <BrandSection id="ui-tokens" number="18" title={t("guidelines.s18Title")} lede={t("guidelines.s18Lede")}>
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
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 13, margin: "0 0 10px" }}>{t("guidelines.s18Shipments")}</h4>
                <div className={s.pillRow}>
                  <span className={`${s.pill} ${s.pillSuccess}`}>{t("guidelines.s18Delivered")}</span>
                  <span className={`${s.pill} ${s.pillInfo}`}>{t("guidelines.s18InTransit")}</span>
                  <span className={`${s.pill} ${s.pillWarning}`}>{t("guidelines.s18Delayed")}</span>
                  <span className={`${s.pill} ${s.pillError}`}>{t("guidelines.s18Failed")}</span>
                </div>
                <div className={s.miniCard}>{t("guidelines.s18Processed")}</div>
                <div style={{ marginTop: 10 }}><span className={s.btnPrimary}>{t("guidelines.s18NewOrder")}</span></div>
              </div>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* 19 VERTICALS */}
      <BrandSection id="verticals" number="19" title={t("guidelines.s19Title")} lede={t("guidelines.s19Lede")}>
        <div className={s.vertRow}>
          {verticals.map((v) => (
            <div className={s.vertChip} key={v.slug}>
              <span className={s.vertDot} style={{ background: v.color }} />
              {/* The vertical's short label comes from the dictionary now, so
                  it follows the reader's language like everything else. */}
              <span className={s.vertName}>{v.name}<small>{dict.verticals[v.slug].short}</small></span>
            </div>
          ))}
        </div>
      </BrandSection>

      {/* 20 APPLICATIONS */}
      <BrandSection id="applications" number="20" title={t("guidelines.s20Title")}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>{t("guidelines.s20Digital")}</h3>
        <div className={s.grid3} style={{ marginBottom: 32 }}>
          <div className={s.appFrame}>
            <div style={{ padding: 30, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--core-paper)" }}>
              <div className={s.card} style={{ width: "100%", maxWidth: 220, textAlign: "center" }}>
                <CoreSymbol size={36} title="" />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, margin: "14px 0" }}>{t("guidelines.s20SignIn")}</div>
                <div style={{ border: "1px solid var(--core-line)", borderRadius: 6, padding: "7px 10px", fontSize: 10, color: "var(--core-muted)", marginBottom: 7, textAlign: "left" }}>user@company.com</div>
                <div style={{ border: "1px solid var(--core-line)", borderRadius: 6, padding: "7px 10px", fontSize: 10, color: "var(--core-muted)", marginBottom: 10, textAlign: "left" }}>••••••••</div>
                <div className={s.btnPrimary} style={{ textAlign: "center" }}>{t("guidelines.s20Continue")}</div>
              </div>
            </div>
            <div className={s.appFrameLabel}>{t("guidelines.s20Login")}</div>
          </div>
          <div className={s.appFrame}>
            <div style={{ padding: 16, background: "var(--core-ink)", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", gap: 8 }}>
              <CoreSymbol size={16} className="" title="" />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "#fff" }}>CORE</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 9, color: "#B7BFD6" }}>v1.0</span>
            </div>
            <div style={{ padding: 14, fontSize: 10.5, color: "var(--core-muted)" }}>{t("guidelines.s20NavItems")}</div>
            <div className={s.appFrameLabel}>{t("guidelines.s20Navbar")}</div>
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
                  <div className={s.miniCard} style={{ marginBottom: 8 }}>{t("guidelines.s20MobileDash")}</div>
                  <div className={s.miniCard}>{t("guidelines.s20Alerts")}</div>
                </div>
              </div>
            </div>
            <div className={s.appFrameLabel}>{t("guidelines.s20MobileHeader")}</div>
          </div>
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>{t("guidelines.s20Corporate")}</h3>
        <div className={s.grid3}>
          <div className={s.appFrame}>
            <div className={s.slideCover}>
              <CoreSymbol size={40} className="" title="" />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#fff", marginTop: 14 }}>CORE Group</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#8A93B5", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 6 }}>{t("guidelines.s20SlideSub")}</div>
            </div>
            <div className={s.appFrameLabel}>{t("guidelines.s20SlideCover")}</div>
          </div>
          <div className={s.appFrame}>
            <div className={s.bizCard}>
              <CoreSymbol size={26} className="" title="" />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>{t("guidelines.s20FullName")}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#8A93B5", marginTop: 2 }}>{t("guidelines.s20Role")}</div>
              </div>
            </div>
            <div className={s.appFrameLabel}>{t("guidelines.s20BizCard")}</div>
          </div>
          <div className={s.appFrame}>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, borderBottom: "2px solid var(--core-ink)", paddingBottom: 10, marginBottom: 12 }}>
                <CoreSymbol size={18} title="" />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>CORE</span>
              </div>
              <div style={{ fontSize: 10, color: "var(--core-muted)", lineHeight: 1.7 }}>{t("guidelines.s20DocText")}<br />Ref. CORE-2026-014</div>
            </div>
            <div className={s.appFrameLabel}>{t("guidelines.s20DocHeader")}</div>
          </div>
        </div>
      </BrandSection>

      {/* 21 RULES */}
      <BrandSection id="rules" number="21" title={t("guidelines.s21Title")}>
        <div className={s.ruleGrid} style={{ marginBottom: 28 }}>
          {dict.guidelines.s21Rules.map((r, i) => (
            <div className={s.ruleCard} key={r}>
              <div className={s.ruleId}>{t("guidelines.s21Rule")} {String(i + 1).padStart(2, "0")}</div>
              <div className={s.ruleText}>{r}</div>
            </div>
          ))}
        </div>

        <div className={s.finalCheck}>
          <div className={s.finalQ}>{t("guidelines.s21Q1")}</div>
          <div className={s.finalA}>{t("guidelines.s21No")}</div>
          <div className={s.finalQ} style={{ marginTop: 14 }}>{t("guidelines.s21Q2")}</div>
          <div className={s.finalA}>{t("guidelines.s21No")}</div>
        </div>

        <Rich className={s.note} style={{ marginTop: 24, maxWidth: "74ch" }} html={t("guidelines.s21ClosingRich")} />
      </BrandSection>
    </>
  );
}
