import React from 'react';
import styles from './Values.module.css';

const values = [
  { icon: '⏰', name: 'Discipline',       desc: 'Structure that creates possibility. Daily habits of mind and body that free students to reach their full potential.' },
  { icon: '🙏', name: 'Respect',          desc: 'For self, others, and heritage. A culture of mutual dignity that makes Aranya a community, not just a school.' },
  { icon: '🤝', name: 'Integrity',        desc: 'Honesty in all actions — in the classroom, on the field, and in life. Character that holds even when no one is watching.' },
  { icon: '💛', name: 'Responsibility',   desc: 'Ownership of choices. Students learn that their decisions shape their path, building accountability from an early age.' },
  { icon: '⭐', name: 'Excellence',       desc: 'Pursuit of continuous growth. Not perfection, but the daily commitment to be better — the spirit of Kaizen.' },
  { icon: '🌏', name: 'Global Awareness', desc: "Understanding interconnectedness. Seeing one's place in a larger world and acting with empathy, curiosity, and purpose." },
];

export default function Values() {
  return (
    <section id="values" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className="section-label reveal">What We Stand For</div>
          <h2 className="section-title reveal">Our Core Values</h2>
        </div>
        <p className={`section-sub reveal ${styles.headerSub}`}>
          Six guiding principles that shape every interaction, lesson, and experience at Aranya.
        </p>
      </div>

      <div className={styles.grid}>
        {values.map((v) => (
          <div key={v.name} className={`${styles.card} reveal`}>
            <div className={styles.iconWrap}>{v.icon}</div>
            <div className={styles.name}>{v.name}</div>
            <div className={styles.desc}>{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
