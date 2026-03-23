import React from 'react';
import styles from './Admissions.module.css';

const infoItems = [
  { icon: '🏫', title: 'Grades',   value: 'Nursery – Grade VII' },
  { icon: '📍', title: 'Location', value: 'Turkayamjal, Hyderabad' },
  { icon: '📞', title: 'Call Us',  value: '9666866974' },
];

export default function Admissions() {
  return (
    <section id="admissions" className={styles.section}>
      <div className={styles.circle1} />
      <div className={styles.circle2} />

      <div className="section-label" style={{ color: 'var(--amber)' }}>Enroll Today</div>
      <h2 className={`section-title ${styles.title}`}>Admissions Open</h2>
      <p className={`section-sub ${styles.sub}`}>
        Join a community where every child is seen, valued, and inspired to grow.
      </p>

      <div className={styles.badge}>
        <span className={styles.badgeMain}>ADMISSION</span>
        <span className={styles.badgeYear}>2026<br />2027</span>
        <span className={styles.badgeSub}>OPEN NOW</span>
      </div>

      <div className={`${styles.infoGrid} reveal`}>
        {infoItems.map((item) => (
          <div key={item.title} className={styles.infoItem}>
            <div className={styles.infoIcon}>{item.icon}</div>
            <div className={styles.infoTitle}>{item.title}</div>
            <div className={styles.infoVal}>{item.value}</div>
          </div>
        ))}
      </div>

      <div className={`${styles.btns} reveal`}>
        <a href="tel:9666866974" className="btn-amber">Call to Enquire</a>
        <a href="#philosophy" className="btn-ghost">Learn More</a>
      </div>
    </section>
  );
}
