const sections = [
  {
    eyebrow: "01 / BRAND",
    title: "Brand",
    text: "The visual identity and design language of CORE.",
    href: "/brand",
  },
  {
    eyebrow: "02 / SYSTEM",
    title: "System",
    text: "The platform layers and capabilities that compose CORE.",
    href: "/system",
  },
  {
    eyebrow: "03 / CORPORATE ARCHITECTURE",
    title: "Corporate Architecture",
    text: "The relationship between ODDY, CORE, OnDemand and COMITA.",
    href: "/architecture",
  },
  {
    eyebrow: "04 / RESOURCES",
    title: "Resources",
    text: "Official assets, icons and implementation tokens.",
    href: "/resources",
  },
];

export default function Home() {
  return (
    <div className="portal">
      <aside className="sidebar">
        <a className="mark" href="/">
          <span className="mark-symbol">C</span>
          CORE
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <div className="nav-group">
            <div className="nav-label">Brand</div>
            <a href="/brand">Overview</a>
            <a href="/brand/guidelines">Brand Guidelines</a>
            <a href="/brand/logo">Logo & Assets</a>
            <a href="/brand/color">Color System</a>
            <a href="/brand/typography">Typography</a>
            <a href="/brand/orbit">CORE Orbit</a>
          </div>
          <div className="nav-group">
            <div className="nav-label">System</div>
            <a href="/system">Overview</a>
            <a href="/system/logistics">CORE Logistics</a>
            <a href="/system/rep">CORE Rep</a>
            <a href="/system/market">CORE Market</a>
            <a href="/system/intelligence">CORE Intelligence</a>
            <a href="/system/finance">CORE Finance</a>
          </div>
          <div className="nav-group">
            <div className="nav-label">Corporate</div>
            <a href="/architecture">Architecture</a>
            <a href="/architecture/oddy">ODDY</a>
            <a href="/architecture/ondemand">OnDemand</a>
            <a href="/architecture/comita">COMITA</a>
          </div>
          <div className="nav-group">
            <div className="nav-label">Resources</div>
            <a href="/resources">Overview</a>
            <a href="/resources/assets">Assets</a>
            <a href="/resources/icons">Icons</a>
            <a href="/resources/tokens">UI Tokens</a>
          </div>
        </nav>
      </aside>

      <main className="main">
        <div className="container">
          <section className="hero">
            <div className="hero-copy">
              <div className="hero-symbol" aria-label="CORE symbol placeholder" />
              <div className="eyebrow">CORE / Brand & System</div>
              <h1>Identity, architecture and visual system.</h1>
              <p>
                The official reference for the CORE identity, system architecture,
                corporate relationships and implementation resources.
              </p>
              <div className="grid">
                {sections.map((section) => (
                  <a className="card" href={section.href} key={section.href}>
                    <div className="card-index">{section.eyebrow}</div>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="eyebrow">Corporate model</div>
            <h2>One system. Clear responsibilities.</h2>
            <p>
              CORE provides the system. OnDemand operates logistics. COMITA develops
              commerce. ODDY articulates the corporate ecosystem.
            </p>
            <div className="diagram">
{`ODDY
Corporate Ecosystem
        |
       CORE
Technology Platform / System
     /          \\
OnDemand      COMITA
Logistics     Commerce`}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
