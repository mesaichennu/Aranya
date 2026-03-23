import React from 'react';
import styles from './Footer.module.css';

const navLinks = [
  { href: '#philosophy', label: 'Our Philosophy' },
  { href: '#vision',     label: 'Vision' },
  { href: '#values',     label: 'Core Values' },
  { href: '#admissions', label: 'Admissions' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* Brand */}
        <div className={`${styles.brand} reveal`}>
          <div className={styles.logoRow}>
            <img src="/logo.png" alt="Aranya Logo" className={styles.logoIcon} />
            <div className={styles.logoText}>
              <div className={styles.logoName}>ARANYA</div>
              <div className={styles.logoSub}>The School</div>
            </div>
          </div>
          <p>
            Nurturing tomorrow's global leaders through Indian heritage,
            global excellence, and Japanese discipline.
          </p>
        </div>

        {/* Nav */}
        <div className={`${styles.col} reveal`}>
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={`${styles.col} reveal`}>
          <h4>Contact</h4>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>
              Plot No 74, Brahmanapalli Road, Om Ganesh Nagar,<br />
              Ragannaguda, Turkayamjal – 501510
            </span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <a href="tel:9666866974">9666866974</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Aranya – The School. All rights reserved.</span>
        <span>Made with 🌿 for tomorrow's leaders</span>
      </div>
    </footer>
  );
}