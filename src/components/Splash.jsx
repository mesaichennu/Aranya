import React, { useEffect, useState } from 'react';
import styles from './Splash.module.css';

export default function Splash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.splash} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
          <circle
            className={styles.ring}
            cx="100" cy="90" r="80"
            fill="none"
            stroke="rgba(168,201,127,0.5)"
            strokeWidth="2"
          />
          {/* Book */}
          <g fill="#5a3e10">
            <path d="M60 148 Q100 140 140 148 L150 158 Q100 150 50 158 Z" />
            <path d="M55 145 Q100 135 100 135 Q100 135 145 145 L150 155 Q100 145 50 155 Z" opacity="0.7" />
            <rect x="97" y="128" width="6" height="22" rx="3" />
          </g>
          {/* Trunk */}
          <line className={styles.trunk} x1="100" y1="148" x2="100" y2="60" stroke="#5a3e10" strokeWidth="8" strokeLinecap="round" />
          {/* Branches */}
          <g stroke="#5a3e10" strokeWidth="4" strokeLinecap="round" fill="none">
            <line className={styles.trunk} x1="100" y1="110" x2="72" y2="88" />
            <line className={styles.trunk} x1="100" y1="100" x2="128" y2="78" />
            <line className={styles.trunk} x1="100" y1="90" x2="80" y2="70" />
            <line className={styles.trunk} x1="100" y1="85" x2="120" y2="68" />
          </g>
          {/* Leaves */}
          {[
            { cx: 65, cy: 82, rx: 12, ry: 8, rot: -30, fill: '#6ab04c' },
            { cx: 50, cy: 72, rx: 11, ry: 7, rot: -45, fill: '#8cc63f' },
            { cx: 75, cy: 62, rx: 10, ry: 7, rot: -15, fill: '#4a8c2a' },
            { cx: 95, cy: 52, rx: 11, ry: 7, rot: 10,  fill: '#6ab04c' },
            { cx: 115, cy: 55, rx: 11, ry: 7, rot: 25,  fill: '#8cc63f' },
            { cx: 130, cy: 65, rx: 10, ry: 7, rot: 40,  fill: '#4a8c2a' },
            { cx: 135, cy: 78, rx: 11, ry: 7, rot: 50,  fill: '#6ab04c' },
            { cx: 108, cy: 48, rx: 9,  ry: 6, rot: 15,  fill: '#8cc63f' },
            { cx: 88,  cy: 45, rx: 9,  ry: 6, rot: -10, fill: '#4a8c2a' },
          ].map((leaf, i) => (
            <g key={i} className={styles.leafItem} style={{ animationDelay: `${1.2 + i * 0.15}s` }}>
              <ellipse
                cx={leaf.cx} cy={leaf.cy}
                rx={leaf.rx} ry={leaf.ry}
                fill={leaf.fill}
                transform={`rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`}
              />
            </g>
          ))}
        </svg>
      </div>
      <div className={styles.title}>ARANYA</div>
      <div className={styles.sub}>The School</div>
      <div className={styles.bar} />
    </div>
  );
}
