import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

// const NavLogoSVG = () => (
//   <svg className={styles.logoIcon} viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="40" cy="38" r="32" fill="none" stroke="#c0c0c0" strokeWidth="1.5" />
//     <g fill="#5a3e10">
//       <path d="M22 60 Q40 56 58 60 L62 65 Q40 60 18 65 Z" />
//       <rect x="38" y="52" width="4" height="12" rx="2" />
//     </g>
//     <line x1="40" y1="62" x2="40" y2="22" stroke="#5a3e10" strokeWidth="4" strokeLinecap="round" />
//     <line x1="40" y1="42" x2="28" y2="32" stroke="#5a3e10" strokeWidth="2.5" strokeLinecap="round" />
//     <line x1="40" y1="36" x2="52" y2="28" stroke="#5a3e10" strokeWidth="2.5" strokeLinecap="round" />
//     <ellipse cx="24" cy="28" rx="8" ry="5" fill="#6ab04c" transform="rotate(-30 24 28)" />
//     <ellipse cx="38" cy="18" rx="8" ry="5" fill="#8cc63f" transform="rotate(5 38 18)" />
//     <ellipse cx="54" cy="24" rx="7" ry="5" fill="#4a8c2a" transform="rotate(35 54 24)" />
//     <ellipse cx="58" cy="36" rx="7" ry="5" fill="#6ab04c" transform="rotate(50 58 36)" />
//   </svg>
// );

const links = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#vision',     label: 'Vision' },
  { href: '#values',     label: 'Values' },
  { href: '#admissions', label: 'Admissions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.navLogo}>
       <img src="/logo.png" alt="Aranya Logo" className={styles.logoIcon} />
        <div className={styles.brand}>
          ARANYA
          <span>The School</span>
        </div>
      </a>

      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.cta}
        onClick={() => scrollTo('#admissions')}
      >
        Enquire Now
      </button>
    </nav>
  );
}
