import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  textColor?: string;
}

export function Logo({ className = "h-11", iconOnly = false, textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3.5 select-none ${className}`}>
      {/* Exquisite SVG representation matching the uploaded 'Epic Ride and Transport' prestige shield logo */}
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-[5/4] flex-shrink-0"
      >
        <defs>
          {/* Majestic Metallic Gold & Bronze Gradients from the corporate asset */}
          <linearGradient id="shieldGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" />
            <stop offset="30%" stopColor="#F5E2B3" />
            <stop offset="70%" stopColor="#AD8743" />
            <stop offset="100%" stopColor="#8F6A2B" />
          </linearGradient>

          <linearGradient id="carGoldGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#9E7B45" />
            <stop offset="25%" stopColor="#E2CD9C" />
            <stop offset="50%" stopColor="#F3E5C8" />
            <stop offset="75%" stopColor="#C19E5E" />
            <stop offset="100%" stopColor="#856123" />
          </linearGradient>

          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F6A2B" opacity="0.3" />
            <stop offset="40%" stopColor="#D4BF8F" />
            <stop offset="70%" stopColor="#F6E7C4" />
            <stop offset="100%" stopColor="#8F6A2B" />
          </linearGradient>

          {/* Deep Sapphire Midnight Navy Fill for high-contrast elite branding */}
          <linearGradient id="shieldNavyFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B152C" />
            <stop offset="100%" stopColor="#040814" />
          </linearGradient>

          {/* Luxury drop shadow to separate the shield layers beautifully */}
          <filter id="logoDepthShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 1. Base Layer: The Prestige Shield */}
        <g filter="url(#logoDepthShadow)">
          {/* Outer Gold Boundary Line */}
          <path
            d="M 200,45 C 235,40 280,31 315,28 C 322,110 315,190 200,270 C 85,190 78,110 85,28 C 120,31 165,40 200,45 Z"
            fill="url(#shieldNavyFill)"
            stroke="url(#shieldGoldGrad)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* Inner Gold Parallel Inset Accent (Creating the double gold bezel layout seen in user image) */}
          <path
            d="M 200,58 C 230,53 270,45 299,42 C 304,112 298,180 200,250 C 102,180 96,112 101,42 C 130,45 170,53 200,58 Z"
            fill="url(#shieldNavyFill)"
            stroke="url(#shieldGoldGrad)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </g>

        {/* 2. Sweeping Corporate Orbit / Highway (Curve starting low left, sweeping past bottom wheels, circling high-right) */}
        <path
          d="M 68,162 C 110,185 180,195 240,180 C 295,166 345,130 358,85 L 344,83 C 332,122 288,154 236,167 C 182,180 115,172 75,151 Z"
          fill="url(#orbitGrad)"
        />
        <path
          d="M 120,172 C 165,183 230,178 285,152"
          stroke="url(#shieldGoldGrad)"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* 3. The Grand Luxury Sedan Car (Superimposed onto the shield structure with metallic golden/bronze highlights) */}
        <g>
          {/* Dark Windows silhouette group */}
          <path
            d="M 152,116 C 170,95 240,94 274,114 Z"
            fill="#050B18"
          />
          {/* Windows gold framework and inner glint */}
          <path
            d="M 152,116 C 170,95 240,94 274,114 C 285,123 290,132 291,133 L 140,133 Z"
            fill="#0B1329"
            stroke="url(#carGoldGrad)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Window Chrome Pillar */}
          <path
            d="M 215,96 L 219,132"
            stroke="url(#carGoldGrad)"
            strokeWidth="1.8"
          />
          {/* Window Reflection Specular Glint */}
          <path
            d="M 172,112 C 185,103 198,101 205,104 Z"
            fill="#FFFFFF"
            opacity="0.3"
          />

          {/* Car main metal body panels in rich golds */}
          <path
            d="M 103,135 C 122,132 140,128 178,128 L 290,128 C 304,128 316,134 314,146 C 307,152 260,154 200,154 C 135,154 112,151 103,141 C 100,138 101,136 103,135 Z"
            fill="url(#carGoldGrad)"
            stroke="#050B18"
            strokeWidth="0.8"
          />
          <path
            d="M 98,141 Q 120,131 160,132 L 310,132 C 316,135 318,141 315,145 Q 210,165 98,141 Z"
            fill="url(#carGoldGrad)"
          />

          {/* Front Bumper & Luxury Mercedes-style Grille Contour on Left */}
          <path
            d="M 98,141 C 94,143 92,148 95,152 C 101,158 118,162 138,162 L 155,162 Z"
            fill="url(#carGoldGrad)"
            stroke="url(#shieldGoldGrad)"
            strokeWidth="1"
          />
          {/* Front Headlight flare */}
          <path
            d="M 102,140 C 107,141 112,143 115,146"
            stroke="#FFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Rear premium tail taper on Right */}
          <path
            d="M 292,130 C 305,130 315,134 318,140 L 314,148 Z"
            fill="url(#carGoldGrad)"
          />

          {/* Chrome Alloy Wheels with matching center badges */}
          {/* Wheel 1 (Rear-Right) */}
          <circle cx="152" cy="155" r="15" fill="#040814" stroke="url(#shieldGoldGrad)" strokeWidth="2.2" />
          <circle cx="152" cy="155" r="11" fill="#121D3A" stroke="url(#shieldGoldGrad)" strokeWidth="1" />
          <circle cx="152" cy="155" r="5" fill="url(#shieldGoldGrad)" />
          {/* Alloy Spokes */}
          <path d="M 152,140 L 152,170 M 137,155 L 167,155" stroke="url(#shieldGoldGrad)" strokeWidth="0.8" opacity="0.6" />

          {/* Wheel 2 (Front-Left) */}
          <circle cx="264" cy="155" r="15" fill="#040814" stroke="url(#shieldGoldGrad)" strokeWidth="2.2" />
          <circle cx="264" cy="155" r="11" fill="#121D3A" stroke="url(#shieldGoldGrad)" strokeWidth="1" />
          <circle cx="264" cy="155" r="5" fill="url(#shieldGoldGrad)" />
          {/* Alloy Spokes */}
          <path d="M 264,140 L 264,170 M 249,155 L 279,155" stroke="url(#shieldGoldGrad)" strokeWidth="0.8" opacity="0.6" />

          {/* Sleek Under-chassis dark shadow masking */}
          <ellipse cx="204" cy="169" rx="80" ry="4" fill="#000000" opacity="0.75" />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none mt-1">
          <span className="font-serif text-2xl font-black uppercase tracking-wide text-white leading-none">
            EPIC RIDE
          </span>
          <div className="flex items-center space-x-1.5 mt-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#FF6B00] font-sans">
              AND TRANSPORT
            </span>
          </div>
          <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400/80 font-mono mt-1">
            TEXAS CHAUFFEURED LUXURY
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center bg-[#050B18] border border-[#FF6B00]/20 rounded-md p-0.5 shadow-inner overflow-hidden group`}>
      {/* Background glow pulse */}
      <div className="absolute inset-0 bg-[#FF6B00]/5 group-hover:bg-[#FF6B00]/10 transition-colors duration-300" />
      <Logo iconOnly className="h-full w-full" />
    </div>
  );
}
