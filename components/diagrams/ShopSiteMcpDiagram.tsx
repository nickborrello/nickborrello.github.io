import React from 'react';

/**
 * ShopSite-MCP — architecture diagram.
 * Authored visual reflecting production implementation:
 * LLM Client connects via Model Context Protocol to ShopSite-MCP server, which exposes typed Zod tools wrapping legacy ShopSite XML/CGI endpoints with HMAC-SHA1 authentication.
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
      aria-label="ShopSite-MCP architecture diagram: an LLM client connects over the Model Context Protocol to the ShopSite-MCP server, which validates typed Zod tools and communicates with the legacy ShopSite Back Office via authenticated XML and CGI requests"
      className="w-full h-auto block"
    >
      <defs>
        <marker id="mcp-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill={ink} fillOpacity="0.55" />
        </marker>
      </defs>

      {/* Header labels */}
      <text x="24" y="24" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="12" letterSpacing="1.5" fill={inkStrong}>
        MCP INFRASTRUCTURE
      </text>
      <text x="736" y="24" textAnchor="end" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10" letterSpacing="1.2" fill={ink} fillOpacity="0.6">
        LEGACY E-COMMERCE — SHOPSITE
      </text>

      {/* LLM client */}
      <rect x="220" y="40" width="320" height="52" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <text x="380" y="62" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        LLM CLIENT
      </text>
      <text x="380" y="79" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.7">
        any MCP host — Claude, IDEs, autonomous agent runtimes
      </text>

      {/* Connector: client → server */}
      <line x1="380" y1="92" x2="380" y2="124" stroke={ink} strokeOpacity="0.55" strokeWidth="1.2" markerEnd="url(#mcp-arrow)" />
      <text x="396" y="112" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1" fill={ink} fillOpacity="0.75">
        MODEL CONTEXT PROTOCOL (STDIO / SSE)
      </text>

      {/* MCP server */}
      <rect x="220" y="128" width="320" height="74" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <rect x="220" y="128" width="3" height="74" fill={accent} />
      <text x="240" y="150" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        SHOPSITE-MCP SERVER
      </text>
      <text x="240" y="169" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.75">
        typed Zod tools — products · orders · inventory
      </text>
      <text x="240" y="187" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="0.8" fill={accent}>
        TYPED ACTION BOUNDARIES — NO RAW API ACCESS
      </text>

      {/* Right annotation */}
      <g fontFamily="Inter, sans-serif" fontSize="9.5" fill={ink} fillOpacity="0.65">
        <text x="560" y="148" fontWeight="600">typed contracts:</text>
        <text x="560" y="160">agents execute safe</text>
        <text x="560" y="172">operations with schema</text>
        <text x="560" y="184">validation on all params</text>
      </g>

      {/* Connector: server → data */}
      <line x1="380" y1="202" x2="380" y2="234" stroke={ink} strokeOpacity="0.55" strokeWidth="1.2" markerEnd="url(#mcp-arrow)" />
      <text x="396" y="222" fontFamily="Rajdhani, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1" fill={ink} fillOpacity="0.75">
        HMAC-SHA1 AUTHENTICATED XML / CGI
      </text>

      {/* Legacy back office */}
      <rect x="220" y="238" width="320" height="52" rx="2" fill={dim} fillOpacity="0.45" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
      <text x="380" y="260" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5" fill={inkStrong}>
        SHOPSITE BACK OFFICE
      </text>
      <text x="380" y="277" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={ink} fillOpacity="0.7">
        XML / CGI endpoints — order processing &amp; catalog management
      </text>
    </svg>
  );
};
