"use client";

import React from "react";

export type Aspect = "4:5" | "9:16";

function getViewBox(aspect: Aspect): { w: number; h: number } {
  return aspect === "4:5" ? { w: 800, h: 1000 } : { w: 900, h: 1600 };
}

function WarmGradientDefs() {
  return (
    <defs>
      <linearGradient id="backlight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff3c2" />
        <stop offset="60%" stopColor="#ffd27a" />
        <stop offset="100%" stopColor="#ffbf70" />
      </linearGradient>
      <radialGradient id="sun-glow" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#fff6d6" />
        <stop offset="65%" stopColor="#ffd27a" />
        <stop offset="100%" stopColor="#ffbf70" />
      </radialGradient>
    </defs>
  );
}

function Outline({ children }: { children: React.ReactNode }) {
  return (
    <g stroke="#111" strokeWidth={6} strokeLinejoin="round" strokeLinecap="round">
      {children}
    </g>
  );
}

function KitchenBackground({ w, h }: { w: number; h: number }) {
  const floorH = h * 0.28;
  const wallH = h - floorH;

  return (
    <g>
      <rect x={0} y={0} width={w} height={h} fill="#ffefcc" />
      <rect x={0} y={wallH} width={w} height={floorH} fill="#ffd9a0" />

      {/* Window backlight */}
      <g>
        <rect x={w * 0.58} y={h * 0.08} width={w * 0.34} height={h * 0.28} fill="url(#backlight)" />
        <Outline>
          <rect x={w * 0.58} y={h * 0.08} width={w * 0.34} height={h * 0.28} fill="none" />
          <line x1={w * 0.58} y1={h * 0.22} x2={w * 0.92} y2={h * 0.22} />
          <line x1={w * 0.75} y1={h * 0.08} x2={w * 0.75} y2={h * 0.36} />
        </Outline>
      </g>

      {/* Brass utensils shelf */}
      <g>
        <rect x={w * 0.06} y={h * 0.1} width={w * 0.28} height={h * 0.04} fill="#c49217" />
        <Outline>
          <rect x={w * 0.06} y={h * 0.1} width={w * 0.28} height={h * 0.04} fill="none" />
        </Outline>
        {/* plates */}
        <Outline>
          <circle cx={w * 0.12} cy={h * 0.1} r={h * 0.045} fill="#fff8e5" />
          <circle cx={w * 0.18} cy={h * 0.1} r={h * 0.04} fill="#fff8e5" />
          <ellipse cx={w * 0.25} cy={h * 0.12} rx={w * 0.045} ry={h * 0.03} fill="#c49217" />
          <ellipse cx={w * 0.29} cy={h * 0.12} rx={w * 0.035} ry={h * 0.022} fill="#c49217" />
        </Outline>
      </g>

      {/* Sun glow overlay from window */}
      <circle cx={w * 0.75} cy={h * 0.22} r={h * 0.28} fill="url(#sun-glow)" opacity={0.35} />

      {/* Mat */}
      <Outline>
        <rect x={w * 0.18} y={h * 0.76} width={w * 0.48} height={h * 0.07} rx={14} fill="#ffe69c" />
        <line x1={w * 0.18} y1={h * 0.795} x2={w * 0.66} y2={h * 0.795} />
      </Outline>
    </g>
  );
}

function Mother({ w, h }: { w: number; h: number }) {
  const baseX = w * 0.24;
  const baseY = h * 0.72;

  return (
    <Outline>
      {/* Sari */}
      <path d={`M ${baseX} ${baseY} C ${baseX - 40} ${baseY - 50}, ${baseX - 20} ${baseY - 120}, ${baseX + 30} ${baseY - 135}
                  C ${baseX + 70} ${baseY - 145}, ${baseX + 90} ${baseY - 80}, ${baseX + 60} ${baseY - 40}
                  C ${baseX + 40} ${baseY - 15}, ${baseX + 15} ${baseY} ${baseX} ${baseY}`}
        fill="#e94e77"
      />

      {/* Face */}
      <circle cx={baseX + 40} cy={baseY - 150} r={36} fill="#f8d9b5" />
      {/* Hair bun */}
      <circle cx={baseX + 60} cy={baseY - 178} r={20} fill="#2a2a2a" />
      <path d={`M ${baseX + 20} ${baseY - 170} q 30 -20 60 0`} fill="#2a2a2a" />

      {/* Eyes */}
      <circle cx={baseX + 32} cy={baseY - 154} r={4} fill="#111" />
      <circle cx={baseX + 48} cy={baseY - 154} r={4} fill="#111" />

      {/* Mouth (stern yet loving) */}
      <path d={`M ${baseX + 30} ${baseY - 138} q 10 6 20 0`} fill="none" />

      {/* Arm and pointing hand */}
      <path d={`M ${baseX + 60} ${baseY - 120} q 28 -16 56 -14`} fill="#f8d9b5" />
      <rect x={baseX + 112} y={baseY - 138} width={26} height={14} rx={7} fill="#f8d9b5" />

      {/* Bangles */}
      <circle cx={baseX + 92} cy={baseY - 130} r={7} fill="#ffd27a" />
      <circle cx={baseX + 102} cy={baseY - 132} r={6} fill="#ffd27a" />
    </Outline>
  );
}

function ApeSon({ w, h }: { w: number; h: number }) {
  const baseX = w * 0.6;
  const baseY = h * 0.74;

  return (
    <Outline>
      {/* Legs (sitting) */}
      <rect x={baseX - 30} y={baseY - 10} width={70} height={30} rx={10} fill="#855f2c" />
      <rect x={baseX + 20} y={baseY - 18} width={86} height={32} rx={12} fill="#855f2c" />

      {/* Shorts */}
      <rect x={baseX - 10} y={baseY - 60} width={100} height={60} rx={14} fill="#3fb37f" />

      {/* Torso with colorful shirt */}
      <path d={`M ${baseX - 30} ${baseY - 140} 
                C ${baseX + 40} ${baseY - 160}, ${baseX + 110} ${baseY - 120}, ${baseX + 80} ${baseY - 60}
                L ${baseX - 10} ${baseY - 60} Z`} fill="#ff8f66" />
      {/* Shirt pattern */}
      <circle cx={baseX + 30} cy={baseY - 110} r={8} fill="#ffd27a" />
      <circle cx={baseX + 58} cy={baseY - 86} r={7} fill="#ffd27a" />
      <rect x={baseX + 6} y={baseY - 90} width={12} height={12} fill="#ffd27a" />

      {/* Arms */}
      <rect x={baseX + 78} y={baseY - 120} width={70} height={24} rx={12} fill="#855f2c" />
      <rect x={baseX - 50} y={baseY - 118} width={60} height={24} rx={12} fill="#855f2c" />

      {/* Head (ape, friendly) */}
      <ellipse cx={baseX + 40} cy={baseY - 170} rx={54} ry={62} fill="#855f2c" />
      <ellipse cx={baseX + 48} cy={baseY - 152} rx={38} ry={30} fill="#a97a43" />

      {/* Ears */}
      <circle cx={baseX + 2} cy={baseY - 172} r={16} fill="#855f2c" />
      <circle cx={baseX + 82} cy={baseY - 172} r={16} fill="#855f2c" />

      {/* Eyes (expressive) */}
      <circle cx={baseX + 28} cy={baseY - 170} r={6} fill="#111" />
      <circle cx={baseX + 56} cy={baseY - 170} r={6} fill="#111" />

      {/* Brows for stern comedic look */}
      <path d={`M ${baseX + 14} ${baseY - 184} q 14 -8 28 0`} fill="none" />
      <path d={`M ${baseX + 42} ${baseY - 184} q 14 -8 30 2`} fill="none" />

      {/* Mouth (nervous grin) */}
      <path d={`M ${baseX + 32} ${baseY - 148} q 12 8 26 0`} fill="none" />

      {/* Nose */}
      <ellipse cx={baseX + 44} cy={baseY - 156} rx={10} ry={6} fill="#111" />

      {/* Simple village shirt collar */}
      <path d={`M ${baseX + 12} ${baseY - 128} q 16 10 32 0`} fill="#ffd27a" />
    </Outline>
  );
}

export default function KitchenScene({ aspect }: { aspect: Aspect }) {
  const { w, h } = getViewBox(aspect);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Warm kitchen interior: elderly Indian mother orders her son, an anthropomorphic ape, stern yet loving."
    >
      <WarmGradientDefs />
      <KitchenBackground w={w} h={h} />

      {/* Characters with slight overlap for depth */}
      <Mother w={w} h={h} />
      <ApeSon w={w} h={h} />

      {/* Foreground simple props */}
      <g>
        <g>
          <rect x={w * 0.12} y={h * 0.8} width={w * 0.12} height={h * 0.06} rx={10} fill="#fff8e5" stroke="#111" strokeWidth={6} />
          <circle cx={w * 0.18} cy={h * 0.8} r={h * 0.025} fill="#c49217" stroke="#111" strokeWidth={6} />
        </g>
        <g>
          <ellipse cx={w * 0.78} cy={h * 0.82} rx={w * 0.06} ry={h * 0.03} fill="#c49217" stroke="#111" strokeWidth={6} />
          <ellipse cx={w * 0.78} cy={h * 0.82} rx={w * 0.03} ry={h * 0.015} fill="#ffd27a" stroke="#111" strokeWidth={6} />
        </g>
      </g>
    </svg>
  );
}
