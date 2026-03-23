import React from 'react';
import styles from './Vision.module.css';

const stats = [
  { num: '3',   label: 'TRADITIONS UNITED' },
  { num: 'K–7', label: 'GRADES OFFERED' },
  { num: '∞',   label: 'POTENTIAL UNLOCKED' },
];

const points = [
  {
    num: '01',
    title: 'Beyond Academics',
    desc: "Students don't just learn — they grow into leaders who respect their heritage while embracing opportunities across borders and cultures.",
  },
  {
    num: '02',
    title: 'Character First',
    desc: 'True education builds the mind, strengthens character, and shapes the future. Every child is a whole person, not just a student.',
  },
  {
    num: '03',
    title: 'Lifelong Contribution',
    desc: 'Preparing students not just for college or career, but for a lifetime of meaningful contribution as confident, disciplined global citizens.',
  },
];

export default function Vision() {
  return (
    <section id="vision" className={styles.section}>
      {/* Visual side */}
      <div className={`${styles.visual} reveal`}>
        <div className={styles.deco} />
        <div className={styles.deco2} />
        <div className={styles.imgWrap}>
          <div className={styles.imgInner}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className={`${styles.text} reveal`}>
        <div className="section-label">Our Vision</div>
        <h2 className="section-title">Growing Leaders<br />of Character</h2>
        <p className="section-sub">
          We envision a generation of disciplined, confident, and value-driven global citizens
          who are deeply rooted in Indian culture and equipped with the skills, mindset,
          and character to lead in an interconnected world.
        </p>

        <div className={styles.points}>
          {points.map((p) => (
            <div key={p.num} className={styles.point}>
              <div className={styles.pointNum}>{p.num}</div>
              <div className={styles.pointContent}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
