import { resumeDataEn } from '../data/resumeEn'

export default function PrintResume() {
  const r = resumeDataEn

  return (
    <div className="print-root">
      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          .no-print { display: none !important; }
          .print-root { background: white !important; }
          .print-page { box-shadow: none !important; margin: 0 !important; }
        }
        .print-root {
          background: #e9ecef;
          min-height: 100vh;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          font-family: 'Inter', system-ui, sans-serif;
          color: #111;
        }
        .print-page {
          width: 210mm;
          min-height: 297mm;
          padding: 14mm 16mm;
          background: white;
          color: #1a1a1a;
          box-shadow: 0 10px 40px rgba(0,0,0,0.18);
          font-size: 9.6pt;
          line-height: 1.42;
        }
        .print-name { font-size: 22pt; font-weight: 700; letter-spacing: -0.4px; color: #0a1f2b; }
        .print-title { font-size: 10.5pt; color: #0d4d3a; font-weight: 600; margin-top: 1px; letter-spacing: 0.2px; }
        .print-meta { font-size: 8.5pt; color: #555; margin-top: 4px; }
        .print-links { font-size: 8.5pt; color: #0d4d3a; margin-top: 4px; word-break: break-all; }
        .print-links a { color: #0d4d3a; text-decoration: none; }
        .print-section-title {
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #0d4d3a;
          border-bottom: 1.2pt solid #0d4d3a;
          padding-bottom: 2px;
          margin-top: 11px;
          margin-bottom: 6px;
        }
        .print-summary { color: #2a2a2a; font-size: 9.4pt; }
        .print-job-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }
        .print-job-name { font-size: 10pt; font-weight: 700; color: #0a1f2b; }
        .print-job-tagline { font-size: 9pt; color: #0d4d3a; font-style: italic; }
        .print-job-period { font-size: 8.5pt; color: #555; white-space: nowrap; font-variant-numeric: tabular-nums; }
        .print-bullets { margin: 3px 0 0 0; padding-left: 14px; }
        .print-bullets li { margin-bottom: 1.5px; }
        .print-stack { font-size: 8.3pt; color: #4a4a4a; margin-top: 2px; font-style: italic; }
        .print-skill-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 8px;
          font-size: 9pt;
          margin-bottom: 1.5px;
        }
        .print-skill-cat { font-weight: 600; color: #0a1f2b; }
        .print-edu-row {
          display: flex;
          justify-content: space-between;
          font-size: 9pt;
          margin-bottom: 1.5px;
        }
        .print-toolbar {
          width: 210mm;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: system-ui, sans-serif;
        }
        .print-toolbar a, .print-toolbar button {
          padding: 8px 14px;
          background: #0d4d3a;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
        }
        .print-toolbar a.secondary {
          background: white;
          color: #0d4d3a;
          border: 1px solid #0d4d3a;
        }
      `}</style>

      <div className="print-toolbar no-print">
        <a href="./" className="secondary">← Back to portfolio</a>
        <button onClick={() => window.print()}>Print / Save as PDF →</button>
      </div>

      <div className="print-page">
        <div>
          <div className="print-name">
            {r.name} <span style={{ fontSize: '13pt', fontWeight: 500, color: '#666' }}>({r.nameZh})</span>
          </div>
          <div className="print-title">{r.title}</div>
          <div className="print-meta">
            {r.email} · {r.location}
          </div>
          <div className="print-links">
            <a href={r.links.portfolio}>{r.links.portfolio.replace('https://', '')}</a>
            {' · '}
            <a href={r.links.leadion}>{r.links.leadion.replace('https://', '')}</a>
            {' · '}
            <a href={r.links.screenidea}>App Store: ScreenIdea</a>
            {' · '}
            <a href={r.links.github}>github.com/JOOLD</a>
            {' · '}
            <a href={r.links.linkedin}>linkedin/jesper-chang</a>
          </div>
        </div>

        <div className="print-section-title">Summary</div>
        <div className="print-summary">{r.summary}</div>

        <div className="print-section-title">Featured Products (Solo-built)</div>
        {r.featured.map((p) => (
          <div key={p.name} style={{ marginBottom: 6 }}>
            <div className="print-job-head">
              <div>
                <span className="print-job-name">{p.name}</span>
                {p.badge && (
                  <span
                    style={{
                      marginLeft: 6,
                      background: '#0d4d3a',
                      color: 'white',
                      padding: '1px 6px',
                      borderRadius: 3,
                      fontSize: '7.4pt',
                      fontWeight: 700,
                      letterSpacing: '0.4px',
                      verticalAlign: '2px',
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                {' — '}
                <span className="print-job-tagline">{p.tagline}</span>
              </div>
              <div className="print-job-period">
                <a href={p.url} style={{ color: '#0d4d3a' }}>{p.url.replace('https://', '').replace(/\/$/, '')}</a>
              </div>
            </div>
            <ul className="print-bullets">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="print-stack">Stack: {p.stack}</div>
          </div>
        ))}

        <div className="print-section-title">Experience</div>
        {r.experience.map((e) => (
          <div key={e.company} style={{ marginBottom: 6 }}>
            <div className="print-job-head">
              <div>
                <span className="print-job-name">{e.role}</span>
                {' — '}
                <span className="print-job-tagline">{e.company}</span>
              </div>
              <div className="print-job-period">{e.period}</div>
            </div>
            <ul className="print-bullets">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="print-section-title">Skills</div>
        {r.skills.map((s) => (
          <div key={s.category} className="print-skill-row">
            <div className="print-skill-cat">{s.category}</div>
            <div>{s.items}</div>
          </div>
        ))}

        <div className="print-section-title">Education</div>
        {r.education.map((e) => (
          <div key={e.school} className="print-edu-row">
            <div>
              <strong>{e.school}</strong> — {e.degree}
            </div>
            <div style={{ color: '#555' }}>{e.period}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
