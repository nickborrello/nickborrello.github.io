import React from 'react';

/**
 * Bay State AI Product Intelligence & CMS Pipeline — architecture diagram.
 * Authored visual reflecting production architecture:
 * Distributor data → Playwright/Crawlee extraction → 25-tool bounded agent layer → Fail-closed validation → Bun/Hono + SQLite CMS → ShopSite CGI.
 */
export const BaystatePipeline: React.FC = () => {
  const ink = '#4b4845';
  const inkStrong = '#3a3836';
  const dim = '#cfc9b0';
  const accent = '#8c3a2c';

  const boxes = [
    { x: 18, title: 'VENDOR SOURCES', sub1: 'catalogs · price sheets', sub2: 'external feeds' },
    { x: 164, title: 'EXTRACTION FLEET', sub1: 'Playwright · Crawlee', sub2: 'VLM & document parsers' },
    { x: 310, title: 'BOUNDED AGENTS', sub1: '25 research tools', sub2: 'runtime & budget caps' },
    { x: 456, title: 'VALIDATION GATE', sub1: 'fail-closed schema', sub2: 'provenance review' },
    { x: 602, title: 'RETAIL CMS', sub1: 'Bun / Hono · SQLite', sub2: 'ShopSite CGI sync' },
  ];

  return (
    <svg
      viewBox="0 0 760 185"
      role="img"
      aria-label="Bay State AI product intelligence pipeline: vendor sources flow through Playwright/Crawlee extraction, 25 bounded research tools, fail-closed validation, and synchronize into a Bun/Hono SQLite CMS and ShopSite CGI"
      className="w-full h-auto block"
    >
      <defs>
        <marker id="bay-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill={ink} fillOpacity="0.55" />
        </marker>
      </defs>

      {/* Header labels */}
      <text x="18" y="24" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="12" letterSpacing="1.5" fill={inkStrong}>
        PRODUCT INTELLIGENCE PIPELINE
      </text>
      <text x="742" y="24" textAnchor="end" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10" letterSpacing="1.2" fill={ink} fillOpacity="0.6">
        BAY STATE PET &amp; GARDEN — PRODUCTION
      </text>

      {/* Policy tag above agent runtime */}
      <g>
        <rect x="318" y="28" width="102" height="18" rx="2" fill={accent} />
        <text x="369" y="41" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="10" letterSpacing="1" fill="#ded8c1">
          POLICY BOUNDS
        </text>
      </g>

      {/* Provenance tag above validation */}
      <g>
        <rect x="464" y="28" width="102" height="18" rx="2" fill={accent} />
        <text x="515" y="41" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="10" letterSpacing="1" fill="#ded8c1">
          FAIL-CLOSED GATE
        </text>
      </g>

      {/* Stage boxes */}
      {boxes.map((b, i) => {
        const isGate = i === 3;
        return (
          <g key={b.title}>
            <rect
              x={b.x}
              y="56"
              width="120"
              height="72"
              rx="2"
              fill={isGate ? accent : dim}
              fillOpacity={isGate ? 0.12 : 0.45}
              stroke={isGate ? accent : ink}
              strokeOpacity={isGate ? 0.8 : 0.3}
              strokeWidth="1"
            />
            <text
              x={b.x + 60}
              y="80"
              textAnchor="middle"
              fontFamily="Rajdhani, sans-serif"
              fontWeight="700"
              fontSize="12"
              letterSpacing="0.8"
              fill={inkStrong}
            >
              {b.title}
            </text>
            <text
              x={b.x + 60}
              y="98"
              textAnchor="middle"
              fontFamily="Rajdhani, sans-serif"
              fontWeight="600"
              fontSize="10.5"
              letterSpacing="0.4"
              fill={ink}
              fillOpacity="0.75"
            >
              {b.sub1}
            </text>
            {b.sub2 && (
              <text
                x={b.x + 60}
                y="112"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="9"
                fill={ink}
                fillOpacity="0.7"
              >
                {b.sub2}
              </text>
            )}
          </g>
        );
      })}

      {/* Connectors */}
      <g stroke={ink} strokeOpacity="0.55" strokeWidth="1.2" markerEnd="url(#bay-arrow)">
        <line x1="138" y1="92" x2="158" y2="92" />
        <line x1="284" y1="92" x2="304" y2="92" />
        <line x1="430" y1="92" x2="450" y2="92" />
        <line x1="576" y1="92" x2="596" y2="92" />
      </g>

      {/* Captions under flow */}
      <g fontFamily="Inter, sans-serif" fontSize="9.5" fill={ink} fillOpacity="0.65">
        <text x="18" y="152" fontWeight="600">multi-source feeds</text>
        <text x="18" y="164">distributor catalogs,</text>
        <text x="18" y="176">barcodes &amp; sheets</text>

        <text x="164" y="152" fontWeight="600">targeted extraction</text>
        <text x="164" y="164">Playwright &amp; Crawlee</text>
        <text x="164" y="176">structured scrapers</text>

        <text x="310" y="152" fontWeight="600">execution bounds</text>
        <text x="310" y="164">25 bounded tools with</text>
        <text x="310" y="176">strict cost/call caps</text>

        <text x="456" y="152" fontWeight="600">provenance check</text>
        <text x="456" y="164">every edit verified</text>
        <text x="456" y="176">before catalog ingest</text>

        <text x="602" y="152" fontWeight="600">retail publishing</text>
        <text x="602" y="164">SQLite CMS syncs to</text>
        <text x="602" y="176">ShopSite back office</text>
      </g>
    </svg>
  );
};
