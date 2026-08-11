import React from 'react';

/**
 * Baystate AI Data Pipeline — architecture diagram.
 * Authored visual (pipeline is private work); follows DESIGN.md grammar:
 * hairlines, squared corners, Rajdhani labels, one accent for the gate.
 */
export const BaystatePipeline: React.FC = () => {
  const ink = '#4b4845';
  const inkStrong = '#3a3836';
  const dim = '#cfc9b0';
  const accent = '#8c3a2c';

  const boxes = [
    { x: 20, title: 'VENDOR SOURCES', sub1: 'catalogs · price lists', sub2: '' },
    { x: 166, title: 'SCRAPER FLEET', sub1: 'Playwright · Docker', sub2: 'GitHub Actions — async' },
    { x: 312, title: 'HYBRID ROUTER', sub1: 'Gemini Flash', sub2: 'GPT-4o-mini' },
    { x: 458, title: 'VALIDATION', sub1: 'extraction gates', sub2: 'reject → retry' },
    { x: 604, title: 'PRODUCT SYSTEMS', sub1: 'Supabase · Postgres', sub2: 'storefront + dashboards' },
  ];

  return (
    <svg
      viewBox="0 0 760 300"
      role="img"
      aria-label="Baystate AI data pipeline diagram: vendor sources flow through a Playwright scraper fleet into a hybrid Gemini Flash and GPT-4o-mini router, pass a 100 percent accuracy validation gate, and land in Supabase and PostgreSQL product systems"
      className="w-full h-auto block"
    >
      <defs>
        <marker id="bay-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill={ink} fillOpacity="0.55" />
        </marker>
      </defs>

      {/* Frame corner ticks */}
      <g stroke={ink} strokeOpacity="0.35" strokeWidth="1">
        <path d="M14,8 h10 M14,8 v10" />
        <path d="M746,8 h-10 M746,8 v10" />
        <path d="M14,292 h10 M14,292 v-10" />
        <path d="M746,292 h-10 M746,292 v-10" />
      </g>

      {/* Header labels */}
      <text x="24" y="26" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="12" letterSpacing="2" fill={inkStrong}>
        CONSOLIDATION PIPELINE
      </text>
      <text x="736" y="26" textAnchor="end" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10" letterSpacing="1.5" fill={ink} fillOpacity="0.6">
        BAYSTATE PET &amp; GARDEN — PRODUCTION
      </text>

      {/* Cost tag above router */}
      <g>
        <rect x="320" y="30" width="104" height="18" rx="2" fill={accent} />
        <text x="372" y="43" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="1.2" fill="#ded8c1">
          −70% LLM COST
        </text>
      </g>

      {/* Accuracy tag above validation */}
      <g>
        <rect x="474" y="30" width="104" height="18" rx="2" fill={accent} />
        <text x="526" y="43" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="1.2" fill="#ded8c1">
          100% ACCURACY
        </text>
      </g>

      {/* Stage boxes */}
      {boxes.map((b, i) => {
        const isGate = i === 3;
        return (
          <g key={b.title}>
            <rect
              x={b.x}
              y="58"
              width="118"
              height="72"
              rx="2"
              fill={isGate ? accent : dim}
              fillOpacity={isGate ? 0.12 : 0.45}
              stroke={isGate ? accent : ink}
              strokeOpacity={isGate ? 0.8 : 0.3}
              strokeWidth="1"
            />
            <text
              x={b.x + 59}
              y="82"
              textAnchor="middle"
              fontFamily="Rajdhani, sans-serif"
              fontWeight="700"
              fontSize="12.5"
              letterSpacing="1"
              fill={inkStrong}
            >
              {b.title}
            </text>
            <text
              x={b.x + 59}
              y="100"
              textAnchor="middle"
              fontFamily="Rajdhani, sans-serif"
              fontWeight="600"
              fontSize="10.5"
              letterSpacing="0.5"
              fill={ink}
              fillOpacity="0.75"
            >
              {b.sub1}
            </text>
            {b.sub2 && (
              <text
                x={b.x + 59}
                y="114"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="9.5"
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
        <line x1="138" y1="94" x2="160" y2="94" />
        <line x1="284" y1="94" x2="306" y2="94" />
        <line x1="430" y1="94" x2="452" y2="94" />
        <line x1="576" y1="94" x2="598" y2="94" />
      </g>

      {/* Captions under flow */}
      <g fontFamily="Inter, sans-serif" fontSize="9.5" fill={ink} fillOpacity="0.6">
        <text x="20" y="152" fontWeight="600">20+ suppliers</text>
        <text x="20" y="164">synced without</text>
        <text x="20" y="176">human re-keying</text>

        <text x="166" y="152" fontWeight="600">distributed scraping</text>
        <text x="166" y="164">Docker containers,</text>
        <text x="166" y="176">scheduled syncs</text>

        <text x="312" y="152" fontWeight="600">cost-gated routing:</text>
        <text x="312" y="164">cheap tasks stay on</text>
        <text x="312" y="176">Flash, hard cases escalate</text>

        <text x="458" y="152" fontWeight="600">every extraction</text>
        <text x="458" y="164">checked before it</text>
        <text x="458" y="176">touches inventory</text>

        <text x="604" y="152" fontWeight="600">registered products</text>
        <text x="604" y="164">flow to storefront</text>
        <text x="604" y="176">and analytics</text>
      </g>
    </svg>
  );
};
