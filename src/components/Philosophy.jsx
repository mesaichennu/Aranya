import React from 'react';
import styles from './Philosophy.module.css';

const pillars = [
  {
    icon: '🌿',
    title: 'Indian Heritage',
    desc: 'Cultural literacy and traditional values form the deep roots from which our students grow. Ancient wisdom, moral frameworks, and India\'s rich intellectual tradition ground every learner in identity and purpose.',
    quote: '"Rooted in culture, ready for the world."',
    large: true,
  },
  {
    icon: '🌐',
    title: 'Global Mindset',
    desc: 'Communication and innovation skills that transcend borders. Students learn to collaborate, think critically, and lead across cultures with confidence and clarity.',
  },
  {
    icon: '⛩️',
    title: 'Japanese Discipline',
    desc: 'Structure and self-responsibility inspired by the Japanese principle of Kaizen — continuous improvement through daily discipline, respect, and personal accountability.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.bgText}>A</div>
      <div className="section-label reveal" style={{ color: 'var(--leaf-light)' }}>Our Approach</div>
      <h2 className={`section-title reveal ${styles.title}`}>
        A Holistic Approach<br />to Excellence
      </h2>
      <p className={`section-sub reveal ${styles.sub}`}>
        Three powerful traditions unite to create an exceptional educational experience
        that prepares students for success on every continent.
      </p>

      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p.title} className={`${styles.card} ${p.large ? styles.large : ''} reveal`}>
            <div>
              <div className={styles.icon}>{p.icon}</div>
              <div className={styles.cardTitle}>{p.title}</div>
              <div className={styles.cardDesc}>{p.desc}</div>
            </div>
            {p.quote && <div className={styles.quote}>{p.quote}</div>}
            <div className={styles.accent} />
          </div>
        ))}
      </div>
    </section>
  );
}
