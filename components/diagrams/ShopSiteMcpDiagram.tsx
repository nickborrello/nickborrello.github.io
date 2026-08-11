import React from 'react';

/**
 * ShopSite-MCP — architecture diagram.
 * Authored visual (repo is private); follows DESIGN.md grammar.
 */
export const ShopSiteMcpDiagram: React.FC = () => {
  const ink = '#4b4845';
  const inkStrong = '#3a3836';
  const dim = '#cfc9b0';
  const accent = '#8c3a2c';

  return (
    <svg
      viewBox="0 0 760 300"
      role="img"
      aria-label="ShopSite-MCP architecture diagram: an LLM client connects over the Model Context Protocol to the ShopSite-MCP server, which exposes typed tools through a type-safe schema mapping to the legacy ShopSite PostgreSQL database"
      className="w-full h-auto block"
    >
      <defs>
        <marker id="mcp-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
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
        MCP INFRASTRUCTURE
      </text>
      <text x="736" y="26" textAnchor="end" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10" letterSpacing="1.5" fill={ink} fillOpacity="0.6">
        LEGACY E-COMMERCE — SHOPSITE
      </text>

      {/* LLM client */}
      <rect x="230" y="40" width="300" height="52" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <text x="380" y="62" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        LLM CLIENT
      </text>
      <text x="380" y="79" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.7">
        any MCP host — Claude, IDEs, autonomous agents
      </text>

      {/* Connector: client → server */}
      <line x1="380" y1="92" x2="380" y2="124" stroke={ink} strokeOpacity="0.55" strokeWidth="1.2" markerEnd="url(#mcp-arrow)" />
      <text x="396" y="112" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1.2" fill={ink} fillOpacity="0.75">
        MCP PROTOCOL
      </text>

      {/* MCP server */}
      <rect x="230" y="130" width="300" height="72" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <rect x="230" y="130" width="3" height="72" fill={accent} />
      <text x="250" y="152" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        SHOPSITE-MCP SERVER
      </text>
      <text x="250" y="172" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.75">
        typed tools — products · orders · catalog
      </text>
      <text x="250" y="188" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1" fill={accent}>
        NO RAW SQL — SCOPED SURFACE
      </text>

      {/* Right annotation */}
      <g fontFamily="Inter, sans-serif" fontSize="9.5" fill={ink} fillOpacity="0.6">
        <text x="556" y="150" fontWeight="600">agents call tools,</text>
        <text x="556" y="162">not the database —</text>
        <text x="556" y="174">every query passes</text>
        <text x="556" y="186">a type-safe contract</text>
      </g>

      {/* Connector: server → data */}
      <line x1="380" y1="202" x2="380" y2="234" stroke={ink} strokeOpacity="0.55" strokeWidth="1.2" markerEnd="url(#mcp-arrow)" />
      <text x="396" y="222" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1.2" fill={ink} fillOpacity="0.75">
        TYPE-SAFE SCHEMA MAPPING
      </text>

      {/* Legacy data */}
      <rect x="230" y="240" width="300" height="52" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <text x="380" y="262" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        SHOPSITE DATABASE
      </text>
      <text x="380" y="279" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.7">
        PostgreSQL — proprietary relational schema
      </text>
    </svg>
  );
};
