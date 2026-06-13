import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  textColor?: string;
}

export function Logo({ className = "h-12", iconOnly = false, textColor = "text-white" }: LogoProps) {
  // We use dual themes: beautiful gold/midnight navy for high contrast matching the photo
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Exquisite high-fidelity SVG representation matching the uploaded 'Epic Ride and Transport' prestige shield logo */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square flex-shrink-0 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Majestic Metallic Gold & Bronze Gradients */}
          <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" />
            <stop offset="20%" stopColor="#F5E2B3" />
            <stop offset="40%" stopColor="#D8B26E" />
            <stop offset="75%" stopColor="#AD8743" />
            <stop offset="100%" stopColor="#7E5F25" />
          </linearGradient>

          <linearGradient id="carGold" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#A88548" />
            <stop offset="30%" stopColor="#F5E2B3" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#AD8743" />
            <stop offset="100%" stopColor="#6C4E1A" />
          </linearGradient>

          <linearGradient id="highwayGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E5F25" />
            <stop offset="30%" stopColor="#E2CD9C" />
            <stop offset="70%" stopColor="#F5E2B3" />
            <stop offset="100%" stopColor="#7E5F25" />
          </linearGradient>

          {/* Deep Royal Midnight Sapphire Navy for the shield body */}
          <linearGradient id="prestigeNavy" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0D1E3D" />
            <stop offset="100%" stopColor="#040914" />
          </linearGradient>

          <filter id="carDepth" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Shield Upper Segment */}
        <g filter="url(#carDepth)">
          {/* Outer Shield Bezel - Upper */}
          <path
            d="M 250,90 C 290,83 345,71 390,67 C 397,163 388,235 348,272 L 334,262 C 370,227 377,163 372,83 C 332,87 285,97 250,104 C 215,97 168,87 128,83 C 123,163 130,227 166,262 L 152,272 C 112,235 103,163 110,67 C 155,71 210,83 250,90 Z"
            fill="url(#prestigeNavy)"
            stroke="url(#premiumGold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Shield Accent Bezel - Upper */}
          <path
            d="M 250,105 C 285,99 335,89 375,85 C 381,155 373,220 338,252 L 328,245 C 358,217 364,157 359,97 C 324,101 280,111 250,117 C 220,111 176,101 141,97 C 136,157 142,217 172,245 L 162,252 C 127,220 119,155 125,85 C 165,89 215,99 250,105 Z"
            fill="url(#prestigeNavy)"
            stroke="url(#premiumGold)"
            strokeWidth="1.5"
            opacity="0.8"
          />
        </g>

        {/* 2. Sweeping Highway / Corporate Orbit */}
        <path
          d="M 90,235 C 145,265 240,277 325,255 C 397,237 458,192 472,137 L 452,132 C 438,177 387,217 320,233 C 245,252 160,242 105,217 Z"
          fill="url(#highwayGold)"
        />
        <path
          d="M 150,245 C 210,258 290,252 360,222"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* 3. Luxury Sedan Car (Superimposed in Gold) */}
        <g filter="url(#carDepth)">
          {/* Windows / Cavity Background */}
          <path
            d="M 197,162 C 215,134 290,133 328,157 Z"
            fill="#050A15"
          />
          {/* Windows Frame and Highlight */}
          <path
            d="M 197,162 C 215,134 290,133 328,157 C 340,166 345,178 346,180 L 182,180 Z"
            fill="#0B1329"
            stroke="url(#carGold)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Pillar divider */}
          <path d="M 275,135 L 280,180" stroke="url(#carGold)" strokeWidth="2" />
          <path d="M 230,147 L 232,180" stroke="url(#carGold)" strokeWidth="1.2" opacity="0.7" />

          {/* Luxury Sedan Profile Body Panels */}
          <path
            d="M 130,183 C 150,180 175,175 220,175 L 348,175 C 365,175 380,182 378,196 Q 330,208 260,208 C 190,208 150,204 130,191 Z"
            fill="url(#carGold)"
            stroke="#050A15"
            strokeWidth="1"
          />
          <path
            d="M 125,191 Q 155,178 205,179 L 368,179 C 375,183 377,190 373,195 Q 260,218 125,191 Z"
            fill="url(#carGold)"
          />

          {/* Front Grille and bumper contour (Left view) */}
          <path
            d="M 125,190 C 120,193 118,200 121,205 C 128,212 147,217 170,217 L 190,217 Z"
            fill="url(#carGold)"
            stroke="url(#premiumGold)"
            strokeWidth="1"
          />
          <path d="M 130,191 C 136,192 142,195 146,199" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

          {/* Wheels (Chrome Gold alloy spokes) */}
          {/* Wheel 1 (Rear) */}
          <circle cx="188" cy="209" r="19" fill="#040813" stroke="url(#premiumGold)" strokeWidth="3" />
          <circle cx="188" cy="209" r="14" fill="#121F3E" stroke="url(#premiumGold)" strokeWidth="1" />
          <circle cx="188" cy="209" r="6" fill="url(#premiumGold)" />
          <path d="M 188,190 L 188,228 M 169,209 L 207,209" stroke="url(#premiumGold)" strokeWidth="1" opacity="0.7" />

          {/* Wheel 2 (Front) */}
          <circle cx="318" cy="209" r="19" fill="#040813" stroke="url(#premiumGold)" strokeWidth="3" />
          <circle cx="318" cy="209" r="14" fill="#121F3E" stroke="url(#premiumGold)" strokeWidth="1" />
          <circle cx="318" cy="209" r="6" fill="url(#premiumGold)" />
          <path d="M 318,190 L 318,228 M 299,209 L 337,209" stroke="url(#premiumGold)" strokeWidth="1" opacity="0.7" />

          {/* Ground drop shadow under chassis */}
          <ellipse cx="255" cy="226" rx="100" ry="5" fill="#000" opacity="0.8" />
        </g>

        {/* 4. Integrated "EPIC RIDE" & "AND TRANSPORT" Text in Middle Splice of Shield */}
        <g filter="url(#carDepth)">
          {/* EPIC RIDE display in high contrast matching the uploaded branding */}
          <text
            x="248"
            y="320"
            fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif"
            fontWeight="900"
            fontSize="45"
            letterSpacing="1"
            fill="url(#premiumGold)"
            textAnchor="middle"
          >
            EPIC RIDE
          </text>

          {/* Subtitle with spacious kerning */}
          <text
            x="250"
            y="358"
            fontFamily="'Plus Jakarta Sans', 'Outfit', 'Inter', sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="6"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            AND TRANSPORT
          </text>
        </g>

        {/* 5. Shield Bottom Pointed V-Apex Segment */}
        <g filter="url(#carDepth)">
          {/* Outer Shield Bezel - Bottom */}
          <path
            d="M 166,380 C 180,412 205,442 250,470 C 295,442 320,412 334,380 L 320,373 C 308,401 285,427 250,452 C 215,427 192,401 180,373 Z"
            fill="url(#prestigeNavy)"
            stroke="url(#premiumGold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Shield Bezel - Bottom */}
          <path
            d="M 176,380 C 188,406 210,432 250,457 C 290,432 312,406 324,380 L 314,375 C 304,397 284,420 250,442 C 216,420 196,397 186,375 Z"
            fill="url(#prestigeNavy)"
            stroke="url(#premiumGold)"
            strokeWidth="1.5"
            opacity="0.85"
          />
        </g>

        {/* Centered Golden Crown accent at the very apex */}
        <path
          d="M 238,55 L 244,65 L 250,53 L 256,65 L 262,55 L 258,70 L 242,70 Z"
          fill="url(#premiumGold)"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none mt-0.5">
          <span className="font-serif text-2xl font-black uppercase tracking-wide text-white leading-none">
            EPIC RIDE
          </span>
          <div className="flex items-center space-x-1.5 mt-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#FF6B00] font-sans">
              AND TRANSPORT
            </span>
          </div>
          <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400/85 font-mono mt-1">
            TEXAS CERTIFIED
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

