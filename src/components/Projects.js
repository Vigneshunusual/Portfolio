import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';


// ── SVG Illustrations — unique per project ──────────────────
const WorkflowSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#0d0d0d"/>
    {/* Grid lines */}
    {[0,1,2,3,4,5].map(i => (
      <line key={`h${i}`} x1="0" y1={i*60} x2="600" y2={i*60} stroke="#1a1a1a" strokeWidth="1"/>
    ))}
    {[0,1,2,3,4,5,6,7,8,9].map(i => (
      <line key={`v${i}`} x1={i*70} y1="0" x2={i*70} y2="340" stroke="#1a1a1a" strokeWidth="1"/>
    ))}
    {/* Sidebar */}
    <rect x="0" y="0" width="140" height="340" fill="#111111" rx="0"/>
    <rect x="10" y="20" width="120" height="36" fill="#ef4444" fillOpacity="0.15" rx="8"/>
    <rect x="20" y="32" width="60" height="8" fill="#ef4444" fillOpacity="0.8" rx="4"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <rect x="10" y={70 + i*48} width="120" height="36" fill="#1a1a1a" rx="8"/>
        <circle cx="28" cy={88 + i*48} r="7" fill="#ef4444" fillOpacity="0.4"/>
        <rect x="42" y={83 + i*48} width="50" height="6" fill="#333" rx="3"/>
        <rect x="42" y={93 + i*48} width="35" height="5" fill="#222" rx="3"/>
      </g>
    ))}
    {/* Main content area */}
    <rect x="155" y="15" width="430" height="55" fill="#161616" rx="10"/>
    <rect x="168" y="30" width="120" height="10" fill="#333" rx="5"/>
    <rect x="168" y="44" width="80" height="8" fill="#222" rx="4"/>
    <rect x="530" y="25" width="44" height="30" fill="#ef4444" fillOpacity="0.9" rx="8"/>
    <rect x="540" y="35" width="24" height="6" fill="#fff" fillOpacity="0.9" rx="3"/>
    {/* Table header */}
    <rect x="155" y="82" width="430" height="32" fill="#161616" rx="8"/>
    {['Project','Status','Owner','Due'].map((label, i) => (
      <rect key={i} x={168 + i * 100} y="92" width={60} height="8" fill="#333" rx="4"/>
    ))}
    {/* Table rows */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x="155" y={122 + i*44} width="430" height="36" fill={i%2===0?"#111":"#0e0e0e"} rx="6"/>
        <rect x="168" y={134 + i*44} width="80" height="7" fill="#2a2a2a" rx="3"/>
        <rect x={168+100} y={131 + i*44} width="48" height="14" fill={i===0?"#ef444422":i===1?"#22c55e22":"#f59e0b22"} rx="99"/>
        <rect x={168+106} y={135 + i*44} width="36" height="6" fill={i===0?"#ef4444":i===1?"#22c55e":"#f59e0b"} fillOpacity="0.8" rx="3"/>
        <circle cx={168+215} cy={138 + i*44} r="9" fill="#ef4444" fillOpacity="0.3"/>
        <rect x={168+230} y={134 + i*44} width="50" height="7" fill="#222" rx="3"/>
        <rect x={168+315} y={134 + i*44} width="55" height="7" fill="#1e1e1e" rx="3"/>
      </g>
    ))}
    {/* Red glow bottom right */}
    <ellipse cx="500" cy="300" rx="120" ry="60" fill="#ef4444" fillOpacity="0.06"/>
  </svg>
);

const RestaurantSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#0d0d0d"/>
    {/* Nav */}
    <rect x="0" y="0" width="600" height="50" fill="#111"/>
    <rect x="20" y="18" width="70" height="14" fill="#ef4444" fillOpacity="0.9" rx="7"/>
    <rect x="420" y="20" width="40" height="10" fill="#222" rx="5"/>
    <rect x="470" y="20" width="40" height="10" fill="#222" rx="5"/>
    <rect x="520" y="16" width="50" height="18" fill="#ef4444" rx="9"/>
    {/* Hero section */}
    <rect x="0" y="50" width="600" height="160" fill="#0f0f0f"/>
    <ellipse cx="450" cy="130" rx="150" ry="80" fill="#ef4444" fillOpacity="0.06"/>
    <rect x="30" y="80" width="180" height="22" fill="#f5f5f5" fillOpacity="0.9" rx="6"/>
    <rect x="30" y="110" width="240" height="14" fill="#555" rx="5"/>
    <rect x="30" y="130" width="200" height="12" fill="#333" rx="5"/>
    <rect x="30" y="155" width="100" height="30" fill="#ef4444" rx="8"/>
    <rect x="140" y="155" width="100" height="30" fill="transparent" rx="8" stroke="#ef4444" strokeWidth="1.5"/>
    {/* Food cards */}
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={30 + i * 190} y="225" width="170" height="100" fill="#161616" rx="12"/>
        <rect x={30 + i * 190} y="225" width="170" height="55" fill="#1a1a1a" rx="12"/>
        {/* Plate icon */}
        <circle cx={115 + i * 190} cy="253" r="20" fill="#222"/>
        <circle cx={115 + i * 190} cy="253" r="13" fill="#2a2a2a"/>
        <circle cx={115 + i * 190} cy="253" r="6" fill="#ef4444" fillOpacity="0.5"/>
        <rect x={45 + i * 190} y="290" width="80" height="8" fill="#333" rx="4"/>
        <rect x={45 + i * 190} y="304" width="55" height="6" fill="#222" rx="3"/>
        <rect x={140 + i * 190} y="300" width="40" height="16" fill="#ef4444" fillOpacity="0.8" rx="6"/>
      </g>
    ))}
  </svg>
);

const KeyloggerSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#080808"/>
    {/* Terminal window */}
    <rect x="30" y="20" width="540" height="300" fill="#0f0f0f" rx="12" stroke="#1a1a1a" strokeWidth="1"/>
    {/* Terminal title bar */}
    <rect x="30" y="20" width="540" height="36" fill="#141414" rx="12"/>
    <rect x="30" y="44" width="540" height="12" fill="#141414"/>
    <circle cx="55" cy="38" r="7" fill="#ff5f57"/>
    <circle cx="78" cy="38" r="7" fill="#febc2e"/>
    <circle cx="101" cy="38" r="7" fill="#28c840"/>
    <rect x="230" y="32" width="140" height="12" fill="#1a1a1a" rx="6"/>
    {/* Code lines */}
    {[
      { w: 60,  c: '#f87171', x: 50 },
      { w: 120, c: '#a78bfa', x: 50 },
      { w: 200, c: '#86efac', x: 50 },
      { w: 90,  c: '#f87171', x: 50 },
      { w: 260, c: '#94a3b8', x: 50 },
      { w: 170, c: '#86efac', x: 50 },
      { w: 80,  c: '#f87171', x: 50 },
      { w: 310, c: '#94a3b8', x: 50 },
    ].map((line, i) => (
      <g key={i}>
        <rect x={line.x} y={78 + i * 28} width="28" height="10" fill="#1e293b" rx="3"/>
        <rect x="90" y={78 + i * 28} width={line.w} height="10" fill={line.c} fillOpacity="0.8" rx="3"/>
        {i < 5 && <rect x={100 + line.w} y={78 + i * 28} width={Math.random() * 100 + 40} height="10" fill="#334155" fillOpacity="0.5" rx="3"/>}
      </g>
    ))}
    {/* Encryption badge */}
    <rect x="380" y="90" width="160" height="70" fill="#1a0a0a" rx="10" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4"/>
    <rect x="395" y="105" width="80" height="8" fill="#ef4444" fillOpacity="0.7" rx="4"/>
    <rect x="395" y="120" width="50" height="6" fill="#555" rx="3"/>
    <rect x="395" y="132" width="110" height="6" fill="#333" rx="3"/>
    <circle cx="520" cy="118" r="14" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5"/>
    <rect x="515" y="113" width="10" height="10" fill="#ef4444" fillOpacity="0.6" rx="2"/>
    {/* Cursor blink line */}
    <rect x="50" y="308" width="8" height="16" fill="#ef4444" fillOpacity="0.9" rx="1"/>
    {/* Red glow */}
    <ellipse cx="300" cy="200" rx="200" ry="80" fill="#ef4444" fillOpacity="0.03"/>
  </svg>
);

const DjangoSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#0a0a0a"/>
    {/* Left — Django API panel */}
    <rect x="20" y="20" width="260" height="300" fill="#111" rx="12" stroke="#1a1a1a" strokeWidth="1"/>
    <rect x="20" y="20" width="260" height="40" fill="#161616" rx="12"/>
    <rect x="20" y="48" width="260" height="12" fill="#161616"/>
    <rect x="35" y="32" width="80" height="10" fill="#ef4444" fillOpacity="0.8" rx="5"/>
    <rect x="230" y="28" width="36" height="18" fill="#22c55e" fillOpacity="0.2" rx="6"/>
    <rect x="237" y="33" width="22" height="8" fill="#22c55e" fillOpacity="0.8" rx="3"/>
    {/* API endpoints */}
    {[
      { method: 'GET',    path: '/api/items/',    color: '#22c55e' },
      { method: 'POST',   path: '/api/items/',    color: '#3b82f6' },
      { method: 'PUT',    path: '/api/items/:id', color: '#f59e0b' },
      { method: 'DELETE', path: '/api/items/:id', color: '#ef4444' },
    ].map((ep, i) => (
      <g key={i}>
        <rect x="30" y={75 + i * 58} width="240" height="44" fill="#0f0f0f" rx="8" stroke="#1e1e1e" strokeWidth="1"/>
        <rect x="38" y={85 + i * 58} width="46" height="16" fill={ep.color} fillOpacity="0.15" rx="4"/>
        <rect x="43" y={89 + i * 58} width="36" height="8" fill={ep.color} fillOpacity="0.9" rx="3"/>
        <rect x="92" y={89 + i * 58} width="100" height="8" fill="#333" rx="3"/>
        <rect x="38" y={105 + i * 58} width="160" height="6" fill="#1e1e1e" rx="3"/>
      </g>
    ))}
    {/* Arrow connector */}
    <line x1="280" y1="170" x2="320" y2="170" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3"/>
    <polygon points="318,165 328,170 318,175" fill="#ef4444"/>
    {/* Right — React panel */}
    <rect x="320" y="20" width="260" height="300" fill="#111" rx="12" stroke="#1a1a1a" strokeWidth="1"/>
    <rect x="320" y="20" width="260" height="40" fill="#161616" rx="12"/>
    <rect x="320" y="48" width="260" height="12" fill="#161616"/>
    <rect x="335" y="32" width="70" height="10" fill="#3b82f6" fillOpacity="0.8" rx="5"/>
    {/* React UI mockup */}
    <rect x="330" y="70" width="240" height="50" fill="#0f0f0f" rx="8"/>
    <rect x="342" y="82" width="100" height="10" fill="#222" rx="5"/>
    <rect x="342" y="96" width="70" height="8" fill="#1a1a1a" rx="4"/>
    <rect x="460" y="78" width="96" height="28" fill="#ef4444" fillOpacity="0.15" rx="8" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3"/>
    <rect x="472" y="86" width="72" height="8" fill="#ef4444" fillOpacity="0.7" rx="4"/>
    {/* List items */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x="330" y={132 + i*48} width="240" height="38" fill="#0d0d0d" rx="8" stroke="#1a1a1a" strokeWidth="1"/>
        <rect x="342" y={142 + i*48} width="80" height="8" fill="#222" rx="4"/>
        <rect x="342" y={154 + i*48} width="120" height="6" fill="#1a1a1a" rx="3"/>
        <rect x="520" y={140 + i*48} width="36" height="18" fill="#ef4444" fillOpacity="0.8" rx="5"/>
        <rect x="526" y={145 + i*48} width="24" height="8" fill="#fff" fillOpacity="0.8" rx="3"/>
      </g>
    ))}
    {/* Glow */}
    <ellipse cx="300" cy="180" rx="80" ry="40" fill="#ef4444" fillOpacity="0.04"/>
  </svg>
);

const WeatherSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#090b0f"/>
    {/* Sky gradient */}
    <rect x="0" y="0" width="600" height="200" fill="url(#sky)"/>
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c1220"/>
        <stop offset="100%" stopColor="#111827"/>
      </linearGradient>
    </defs>
    {/* Stars */}
    {[[80,30],[200,50],[350,20],[480,45],[550,70],[120,80],[420,90]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="1.5" fill="#fff" fillOpacity="0.6"/>
    ))}
    {/* Moon */}
    <circle cx="480" cy="60" r="35" fill="#1e2a3a"/>
    <circle cx="468" cy="52" r="30" fill="#ef4444" fillOpacity="0.12"/>
    <circle cx="480" cy="60" r="28" fill="#ef4444" fillOpacity="0.08"/>
    {/* Cloud */}
    <ellipse cx="200" cy="90" rx="70" ry="30" fill="#1e293b"/>
    <ellipse cx="160" cy="100" rx="45" ry="25" fill="#1e293b"/>
    <ellipse cx="240" cy="100" rx="45" ry="25" fill="#1e293b"/>
    {/* Main weather card */}
    <rect x="80" y="50" width="220" height="240" fill="#111827" rx="20" stroke="#1f2937" strokeWidth="1"/>
    <rect x="95" y="70" width="120" height="14" fill="#374151" rx="7"/>
    <text x="185" y="145" fontSize="48" fill="#f87171" textAnchor="middle" fontFamily="monospace" fontWeight="bold">24°</text>
    <rect x="120" y="158" width="130" height="10" fill="#374151" rx="5"/>
    {/* Weather icons row */}
    {[
      { icon: '💧', label: '72%' },
      { icon: '💨', label: '12km' },
      { icon: '👁️', label: '10km' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={95 + i*70} y="185" width="60" height="50" fill="#1f2937" rx="8"/>
        <text x={125 + i*70} y="207" fontSize="14" textAnchor="middle">{item.icon}</text>
        <rect x={103 + i*70} y="212" width="44" height="8" fill="#374151" rx="4"/>
      </g>
    ))}
    {/* Search bar */}
    <rect x="95" y="248" width="190" height="30" fill="#1f2937" rx="8" stroke="#374151" strokeWidth="1"/>
    <rect x="108" y="258" width="90" height="8" fill="#374151" rx="4"/>
    <rect x="255" y="252" width="22" height="22" fill="#ef4444" fillOpacity="0.8" rx="6"/>
    {/* Right side city cards */}
    {[
      { city: 'Chennai', temp: '32°' },
      { city: 'Mumbai',  temp: '29°' },
      { city: 'Delhi',   temp: '35°' },
    ].map((c, i) => (
      <g key={i}>
        <rect x="340" y={30 + i*100} width="230" height="85" fill="#111827" rx="14" stroke="#1f2937" strokeWidth="1"/>
        <rect x="358" y={48 + i*100} width="100" height="10" fill="#374151" rx="5"/>
        <rect x="358" y={62 + i*100} width="70" height="8" fill="#1f2937" rx="4"/>
        <rect x="510" y={45 + i*100} width="44" height="28" fill="#ef4444" fillOpacity="0.15" rx="8"/>
        <rect x="516" y={50 + i*100} width="32" height="14" fill="#f87171" fillOpacity="0.8" rx="4"/>
        <rect x="358" y={78 + i*100} width="150" height="6" fill="#1e293b" rx="3"/>
      </g>
    ))}
    {/* Red glow */}
    <ellipse cx="185" cy="170" rx="100" ry="60" fill="#ef4444" fillOpacity="0.04"/>
  </svg>
  
);


const HandGestureSVG = () => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="600" height="340" fill="#080808"/>
 
    {/* Background particles / dots */}
    {[[60,30],[120,80],[500,40],[540,90],[420,25],[300,15],[160,50]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="1.8" fill="#ef4444" fillOpacity="0.35"/>
    ))}
 
    {/* Red glow orbs */}
    <ellipse cx="160" cy="180" rx="130" ry="110" fill="#ef4444" fillOpacity="0.05"/>
    <ellipse cx="450" cy="160" rx="120" ry="100" fill="#a855f7" fillOpacity="0.05"/>
 
    {/* ── LEFT — Hand silhouette with detection points ── */}
    {/* Palm base */}
    <ellipse cx="155" cy="230" rx="60" ry="50" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
 
    {/* Fingers */}
    {/* Thumb */}
    <path d="M100,225 Q80,200 90,175 Q98,162 110,170 Q118,180 112,205" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Index */}
    <path d="M125,210 Q120,170 125,140 Q130,120 140,122 Q150,124 148,150 Q146,175 143,210" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Middle */}
    <path d="M148,210 Q148,165 150,132 Q153,110 163,112 Q173,114 172,138 Q170,168 168,210" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Ring */}
    <path d="M172,212 Q174,170 175,142 Q177,122 186,124 Q195,126 194,148 Q192,172 190,212" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Pinky */}
    <path d="M193,218 Q198,185 200,162 Q202,148 210,150 Q218,152 216,168 Q213,188 208,218" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
 
    {/* Detection skeleton lines */}
    <line x1="155" y1="230" x2="136" y2="155" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.6"/>
    <line x1="155" y1="230" x2="155" y2="141" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.6"/>
    <line x1="155" y1="230" x2="173" y2="143" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.6"/>
    <line x1="155" y1="230" x2="188" y2="150" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.6"/>
    <line x1="155" y1="230" x2="102" y2="182" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.5"/>
 
    {/* Knuckle lines */}
    <line x1="125" y1="195" x2="143" y2="193" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.4"/>
    <line x1="143" y1="193" x2="165" y2="192" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.4"/>
    <line x1="165" y1="192" x2="185" y2="194" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.4"/>
 
    {/* Keypoints — red dots */}
    {[
      [155,230],[136,155],[155,141],[173,143],[188,150],[102,182],
      [125,195],[143,193],[165,192],[185,194],
      [130,172],[149,169],[168,170],[186,174],
      [133,155],[151,152],[170,153],[188,158],
    ].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#ef4444" fillOpacity="0.9"
        stroke="#ff6b6b" strokeWidth="0.8"/>
    ))}
 
    {/* Wrist label */}
    <rect x="88" y="248" width="80" height="18" fill="#1a1a1a" rx="5"/>
    <rect x="96" y="253" width="50" height="7" fill="#ef4444" fillOpacity="0.6" rx="3"/>
 
    {/* Bounding box around hand */}
    <rect x="75" y="110" width="165" height="145" fill="none" stroke="#ef4444"
      strokeWidth="1.2" strokeDasharray="6 4" strokeOpacity="0.45" rx="4"/>
    <rect x="75" y="110" width="55" height="18" fill="#ef4444" fillOpacity="0.85" rx="3"/>
    <rect x="80" y="115" width="44" height="8" fill="#fff" fillOpacity="0.9" rx="3"/>
 
    {/* ── RIGHT — Speech waveform + recognition panel ── */}
    <rect x="310" y="30" width="270" height="280" fill="#0f0f0f" rx="14"
      stroke="#1a1a1a" strokeWidth="1"/>
 
    {/* Panel title */}
    <rect x="325" y="45" width="100" height="10" fill="#222" rx="5"/>
    <rect x="435" y="43" width="50" height="14" fill="#a855f7" fillOpacity="0.2" rx="5"/>
    <rect x="441" y="46" width="38" height="8" fill="#a855f7" fillOpacity="0.7" rx="3"/>
 
    {/* Microphone icon */}
    <ellipse cx="445" cy="100" rx="18" ry="24" fill="#1a1a1a" stroke="#a855f7"
      strokeWidth="1.2" strokeOpacity="0.6"/>
    <rect x="437" y="92" width="16" height="16" fill="#a855f7" fillOpacity="0.25" rx="3"/>
    <line x1="445" y1="124" x2="445" y2="138" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7"/>
    <line x1="432" y1="138" x2="458" y2="138" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7"/>
 
    {/* Mic glow rings */}
    <ellipse cx="445" cy="100" rx="30" ry="36" fill="none" stroke="#a855f7"
      strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3"/>
    <ellipse cx="445" cy="100" rx="44" ry="50" fill="none" stroke="#a855f7"
      strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="4 4"/>
 
    {/* Audio waveform bars */}
    {[8,14,22,10,18,26,12,20,16,24,10,18,8,14,22,10].map((h, i) => (
      <rect
        key={i}
        x={325 + i * 15}
        y={175 - h}
        width="8"
        height={h * 2}
        rx="4"
        fill={i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#ef4444" : "#333"}
        fillOpacity={i % 3 === 2 ? 0.4 : 0.75}
      />
    ))}
 
    {/* Recognized text */}
    <rect x="325" y="215" width="240" height="36" fill="#141414" rx="8"
      stroke="#1e1e1e" strokeWidth="1"/>
    <rect x="336" y="226" width="140" height="8" fill="#333" rx="4"/>
    <rect x="336" y="238" width="100" height="6" fill="#222" rx="3"/>
    <rect x="490" y="221" width="60" height="24" fill="#a855f7" fillOpacity="0.15"
      rx="6" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.3"/>
    <rect x="498" y="228" width="44" height="8" fill="#a855f7" fillOpacity="0.7" rx="3"/>
 
    {/* Gesture label boxes */}
    {[
      { label: 'OPEN HAND', color: '#ef4444', x: 325, y: 265 },
      { label: 'POINTING',  color: '#22c55e', x: 430, y: 265 },
      { label: 'FIST',      color: '#f59e0b', x: 511, y: 265 },
    ].map((g, i) => (
      <g key={i}>
        <rect x={g.x} y={g.y} width={i === 2 ? 62 : i === 1 ? 74 : 96} height="22"
          fill={g.color} fillOpacity="0.1" rx="5"
          stroke={g.color} strokeWidth="0.8" strokeOpacity="0.35"/>
        <rect x={g.x + 7} y={g.y + 7} width={i === 2 ? 48 : i === 1 ? 60 : 82} height="8"
          fill={g.color} fillOpacity="0.65" rx="3"/>
      </g>
    ))}
 
    {/* Connection arrow from hand to panel */}
    <line x1="245" y1="180" x2="305" y2="180" stroke="#ef4444" strokeWidth="1.5"
      strokeDasharray="5 3" strokeOpacity="0.5"/>
    <polygon points="303,175 313,180 303,185" fill="#ef4444" fillOpacity="0.7"/>
  </svg>
);

// ── Project data ──────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Workflow Management Dashboard",
    description: "A role-based internal dashboard with Firebase Authentication, protected routes, and RESTful API integration. Full timesheet workflow: Pending → Approved/Rejected.",
    tech_list: ["React.js", "Firebase", "JavaScript", "Context API"],
    github_link: "https://github.com/Vigneshunusual/workflow-dashboard",
    live_link: "",
    status: "In Progress",
    IllustrationComponent: WorkflowSVG,
  },
  {
    id: 2,
    title: "Restaurant Web App",
    description: "Fully responsive restaurant landing page with custom navigation, organized grid layout, and modern UI/UX for desktop, tablet, and mobile.",
    tech_list: ["HTML5", "CSS3", "Responsive Design"],
    github_link: "https://github.com/Vigneshunusual/The-Crispy-Coop-UI",
    live_link: "https://respui.netlify.app/",
    status: "Live",
    IllustrationComponent: RestaurantSVG,
  },
  {
    id: 3,
    title: "Ethical Keylogger",
    description: "Python security research tool with 40% improved data capture, full encryption, automated alerts, and 100% improved keyword detection accuracy.",
    tech_list: ["Python", "Encryption", "Security", "Automation"],
    github_link: "https://github.com/Vigneshunusual/keylogger",
    live_link: "",
    status: "Completed",
    IllustrationComponent: KeyloggerSVG,
  },
  {
    id: 4,
    title: "Django CRUD App",
    description: "Full-stack CRUD application using Django REST Framework backend and React.js frontend. Covers ORM, routing, serializers, and API design.",
    tech_list: ["Django", "Python", "React.js", "SQLite"],
    github_link: "https://github.com/Vigneshunusual/django-crud",
    live_link: "",
    status: "In Progress",
    IllustrationComponent: DjangoSVG,
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather app integrated with OpenWeather REST API. Displays temperature, humidity, wind speed, and forecasts for any city worldwide.",
    tech_list: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    github_link: "https://github.com/Vigneshunusual/Weather_Application",
    live_link: "https://weatherapiclimate.netlify.app/",
    status: "Completed",
    IllustrationComponent: WeatherSVG,
  },
  {
    id: 6,
    title: "Hand Gesture and SpeechRecognition",
    description: "Real-time hand gesture and speech recognition app using computer vision and machine learning. Displays recognized gestures and provides interactive feedback.",
    tech_list: ["Python", "OpenCV", "TensorFlow", "Flask"],
    github_link: "https://github.com/Vigneshunusual/Hand-Gesture-and-Speech-recognition",
    live_link: "",
    status: "Completed",
    IllustrationComponent: HandGestureSVG,
  },
];

const STATUS_COLOR = {
  "Live":        "#4ade80",
  "Completed":   "#4ade80",
  "In Progress": "#f87171",
};

const CARDS_PER_PAGE = 2;

// Slide animation variants
const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const visible = projects.slice(start, start + CARDS_PER_PAGE);

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage(p => p + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage(p => p - 1);
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">

        {/* ── TILTED MARKER HEADING ── */}
        <motion.div
          className={styles.headerWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.mainTitle}>Projects 🚀</h2>
        </motion.div>

        {/* ── SLIDER AREA ── */}
        <div className={styles.sliderWrapper}>

          {/* Left arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft} ${page === 0 ? styles.arrowDisabled : ''}`}
            onClick={goPrev}
            aria-label="Previous projects"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Cards viewport */}
          <div className={styles.viewport}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                className={styles.grid}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {visible.map((project) => {
                  const Illustration = project.IllustrationComponent;
                  return (
                    <div key={project.id} className={styles.card}>

                      {/* ── IMAGE / SVG ILLUSTRATION ── */}
                      <div className={styles.imageWrap}>
                        <Illustration />
                        {/* Number badge */}
                        <span className={styles.numBadge}>
                          {String(project.id).padStart(2, '0')}
                        </span>
                        {/* Status badge */}
                        <span className={styles.statusBadge} style={{ color: STATUS_COLOR[project.status] }}>
                          <span className={styles.statusDot} style={{ background: STATUS_COLOR[project.status] }}/>
                          {project.status}
                        </span>
                      </div>

                      {/* ── BODY ── */}
                      <div className={styles.body}>
                        {/* Tech tags */}
                        <div className={styles.tags}>
                          {project.tech_list.map(tech => (
                            <span key={tech} className={styles.tag}>{tech}</span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className={styles.title}>{project.title}</h3>

                        {/* Desc */}
                        <p className={styles.desc}>{project.description}</p>

                        {/* Buttons */}
                        <div className={styles.actions}>
                          {project.github_link && (
                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnCode}`}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"/>
                                <polyline points="8 6 2 12 8 18"/>
                              </svg>
                              Code
                            </a>
                          )}
                          {project.live_link ? (
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnLive}`}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                              Live View
                            </a>
                          ) : (
                            <span className={`${styles.btn} ${styles.btnDisabled}`}>No Live Demo</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowRight} ${page === totalPages - 1 ? styles.arrowDisabled : ''}`}
            onClick={goNext}
            aria-label="Next projects"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* ── DOT INDICATORS ── */}
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Page counter
        <p className={styles.counter}>
          <span>{start + 1}–{Math.min(start + CARDS_PER_PAGE, projects.length)}</span>
          &nbsp;of&nbsp;
          <span>{projects.length}</span> projects
        </p> */}

      </div>
    </section>
  );
}