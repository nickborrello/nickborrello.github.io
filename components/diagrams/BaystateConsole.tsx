import React from 'react';

/**
 * Bay State AI Product Data Onboarding Pipeline — authored console view.
 *
 * Direction contract (extension of established "field terminal" world):
 * THESIS: the case visual IS the pipeline at work — one vendor document
 * becoming a reviewable catalog record — instead of a screenshot of an
 * admin table or an abstract diagram.
 * OWN-WORLD: beige field-terminal ground, hairline column dividers (no
 * nested bordered panels), Rajdhani tracked labels, machine-red reserved
 * for the fail-closed gate and live review status.
 * STORY: OCR extraction with confidence, entity resolution, bounded tool
 * trace, and human-in-the-loop approval understood in one glance.
 * FIRST VIEWPORT: run header + stage tracker strip across the top; three
 * columns SOURCE INTAKE / EXTRACTED RECORD / VALIDATION & REVIEW below.
 * FORM: authored React composition populated with illustrative data,
 * labeled as such; single motion moment = pulsing review-status dot.
 */

const STAGES = ['INGEST', 'CLASSIFY', 'EXTRACT', 'RESOLVE', 'REVIEW'];

const CONFIDENCE_FIELDS = [
  { label: 'BRAND', value: 'KONG', score: 0.99 },
  { label: 'PRODUCT', value: 'Classic Dog Toy', score: 0.96 },
  { label: 'VARIANT SIZE', value: 'XL', score: 0.93 },
  { label: 'UNIT PRICE', value: '$12.40', score: 0.99 },
];

const GATE_CHECKS = [
  { label: 'SCHEMA', result: 'PASS' },
  { label: 'PROVENANCE', result: 'PASS' },
  { label: 'TOKEN BUDGET', result: '61%' },
];

export const BaystateConsole: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="Bay State onboarding pipeline console with illustrative data: a vendor price sheet is classified and read by OCR, extracted fields carry confidence scores, the product resolves to catalog SKU KNG-CLS-XL through bounded agent tools, passes fail-closed validation, and queues a price update for human review."
      className="bg-nier-beige text-nier-darker p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 h-full"
    >
      <div aria-hidden="true" className="flex flex-col gap-3 sm:gap-4 flex-1">
        {/* Run header */}
        <div className="flex items-baseline justify-between gap-2 border-b border-nier-dark/15 pb-2">
          <p className="font-tech font-bold text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-nier-darker truncate">
            Onboarding Run #4821 <span className="text-nier-dark/60 font-semibold">·</span>{' '}
            <span className="text-nier-dark">Northeast Supply Co. — Q3 Batch</span>
          </p>
          <span className="font-tech font-semibold text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-nier-dark/90 border border-nier-dark/20 px-1.5 py-px flex-shrink-0">
            Illustrative data
          </span>
        </div>

        {/* Stage tracker */}
        <ol className="flex items-center gap-0 -mt-1" style={{ listStyle: 'none' }}>
          {STAGES.map((stage, i) => {
            const current = i === STAGES.length - 1;
            return (
              <li key={stage} className="flex items-center flex-1 last:flex-none">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      current ? 'bg-accent animate-pulse' : 'bg-nier-dark'
                    }`}
                  />
                  <span
                    className={`font-tech font-bold tracking-[0.12em] uppercase whitespace-nowrap ${
                      current ? 'text-accent' : 'text-nier-dark'
                    } ${current ? 'text-[9px] sm:text-[10px]' : 'text-[8px] sm:text-[9px]'}`}
                  >
                    {stage}
                  </span>
                </span>
                {i < STAGES.length - 1 && (
                  <span className="flex-1 min-w-2 h-px bg-nier-dark/25 mx-1.5" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Three-stage composition */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-nier-dark/15 flex-1">
          {/* Column 1 — Source intake */}
          <div className="flex flex-col gap-2.5 md:pr-4 min-w-0">
            <h4 className="font-tech font-bold text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-nier-dark">
              Source Document
            </h4>

            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" className="flex-shrink-0" aria-hidden="true">
                <path
                  d="M4 1.5h7l3 3v12H4z"
                  fill="none"
                  stroke="#4b4845"
                  strokeWidth="1.2"
                />
                <path d="M11 1.5v3h3" fill="none" stroke="#4b4845" strokeWidth="1.2" />
                <text x="9" y="13.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#8c3a2c" fontFamily="Rajdhani, sans-serif">
                  PDF
                </text>
              </svg>
              <div className="min-w-0">
                <p className="font-tech font-semibold text-[10px] sm:text-[11px] tracking-[0.04em] truncate">
                  ne-supply_price-sheet_q3.pdf
                </p>
                <p className="text-[9px] text-nier-dark/90 leading-tight">14 pages · dropped by vendor sync</p>
              </div>
            </div>

            {/* Classification readouts */}
            <div className="space-y-1.5">
              {[
                { k: 'DOC TYPE', v: 'PRICE SHEET', s: 0.97 },
                { k: 'SUPPLIER', v: 'NORTHEAST SUPPLY CO.', s: 0.98 },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px]">
                  <span className="font-tech font-semibold tracking-[0.1em] text-nier-dark">{row.k}</span>
                  <span className="font-medium truncate">{row.v}</span>
                  <span className="font-tech font-bold text-nier-darker tabular-nums">{row.s.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* OCR hit excerpt */}
            <div className="mt-auto bg-nier-beige-dim/50 px-2 py-1.5 border border-nier-dark/10">
              <p className="font-tech font-bold text-[9px] tracking-[0.14em] uppercase text-nier-dark/90 mb-1">
                OCR hit · row 41
              </p>
              <p className="text-[9px] sm:text-[10px] leading-snug text-nier-darker">
                <mark className="bg-accent/15 text-nier-darker px-0.5">KONG Classic Dog Toy — XL</mark>{' '}
                · 12.40 · 737837010018
              </p>
            </div>
          </div>

          {/* Column 2 — Extracted record */}
          <div className="flex flex-col gap-2.5 md:px-4 min-w-0 border-t md:border-t-0 border-nier-dark/15 pt-3 md:pt-0">
            <h4 className="font-tech font-bold text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-nier-dark">
              Extracted Record
            </h4>

            <div className="space-y-1.5">
              {CONFIDENCE_FIELDS.map((f) => (
                <div key={f.label}>
                  <div className="flex items-baseline justify-between gap-2 text-[9px] sm:text-[10px]">
                    <span className="font-tech font-semibold tracking-[0.1em] text-nier-dark">{f.label}</span>
                    <span className="font-medium truncate">{f.value}</span>
                    <span className="font-tech font-bold text-nier-darker tabular-nums">{f.score.toFixed(2)}</span>
                  </div>
                  <div className="h-[3px] bg-nier-grid/30 mt-0.5">
                    <div
                      className={`h-full ${f.score < 0.95 ? 'bg-accent' : 'bg-nier-darker'}`}
                      style={{ width: `${f.score * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div>
                <div className="flex items-baseline justify-between gap-2 text-[9px] sm:text-[10px]">
                  <span className="font-tech font-semibold tracking-[0.1em] text-nier-dark">UPC</span>
                  <span className="font-medium">737837010018</span>
                  <span className="font-tech font-bold text-accent tabular-nums">0.91</span>
                </div>
                <div className="h-[3px] bg-nier-grid/30 mt-0.5">
                  <div className="h-full bg-accent" style={{ width: '91%' }} />
                </div>
              </div>
            </div>

            {/* Entity resolution — the payload of the whole run */}
            <div className="mt-auto pt-1">
              <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px]">
                <span className="font-tech font-semibold tracking-[0.1em] text-nier-dark">RESOLVED → SKU</span>
                <span className="font-tech font-extrabold text-[11px] sm:text-[12px] tracking-[0.04em] text-nier-darker">
                  <span aria-hidden className="text-nier-dark mr-0.5">▸</span>KNG-CLS-XL
                </span>
                <span className="font-tech font-bold text-nier-darker tabular-nums">0.94</span>
              </div>
              <p className="text-[9px] text-nier-dark/90 mt-0.5">
                2 variant candidates rejected · barcode mismatch reconciled
              </p>
              <p className="font-tech font-semibold text-[9px] tracking-[0.08em] text-nier-dark/90 mt-1.5">
                resolveBarcode ✓&ensp;fetchVendorPage ✓&ensp;matchVariant ✓
              </p>
            </div>
          </div>

          {/* Column 3 — Validation & review */}
          <div className="flex flex-col gap-2.5 md:pl-4 min-w-0 border-t md:border-t-0 border-nier-dark/15 pt-3 md:pt-0">
            <h4 className="font-tech font-bold text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-nier-dark">
              Validation &amp; Review
            </h4>

            <div className="space-y-1">
              {GATE_CHECKS.map((c) => (
                <div key={c.label} className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px]">
                  <span className="font-tech font-semibold tracking-[0.1em] text-nier-dark">{c.label}</span>
                  <span className="font-tech font-bold">
                    {c.result === 'PASS' ? (
                      <>
                        <span className="text-nier-darker">✓</span>
                        <span className="ml-1 text-nier-dark">PASS</span>
                      </>
                    ) : (
                      <span className="text-nier-dark">{c.result}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Proposed change */}
            <div className="bg-nier-beige-dim/50 px-2 py-1.5 border border-nier-dark/10">
              <p className="font-tech font-bold text-[9px] tracking-[0.14em] uppercase text-nier-dark/90 mb-0.5">
                Proposed change
              </p>
              <p className="text-[9px] sm:text-[10px] leading-snug">
                Retail price{' '}
                <s className="text-nier-dark/90">$12.99</s> →{' '}
                <span className="font-semibold">$12.40</span>
              </p>
            </div>

            {/* Review queue */}
            <div className="mt-auto">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <p className="font-tech font-bold text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-accent">
                  Queued for human review
                </p>
              </div>
              <div className="flex gap-1.5 mt-2">
                <span className="font-tech font-bold text-[9px] tracking-[0.12em] uppercase bg-nier-panel text-nier-beige px-2.5 py-1">
                  Approve
                </span>
                <span className="font-tech font-bold text-[9px] tracking-[0.12em] uppercase border border-nier-dark/25 text-nier-dark/90 px-2.5 py-1">
                  Escalate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
