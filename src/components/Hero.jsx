import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background leaf shape */}
      <div className={styles.bgLeaf}>
        <img src ="/logo.png" alt="Leaf" />
      </div>

      {/* Left content */}
      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Admissions Open 2026–27
        </div>

        <h1 className={styles.h1}>
          Nurturing<br />
          <em>Tomorrow's</em><br />
          Global Leaders
        </h1>

        <p className={styles.sub}>
          Where Indian values meet global excellence and Japanese discipline.
          A school that grows citizens of character, wisdom, and purpose.
        </p>

        <div className={styles.pills}>
          {['Indian Heritage', 'Global Mindset', 'Japanese Discipline'].map((p) => (
            <span key={p} className={styles.pill}>
              <span className={styles.pillDot} />
              {p}
            </span>
          ))}
        </div>

        <div className={styles.btns}>
          <a href="#admissions" className="btn-primary">Apply for Admission</a>
          <a href="#philosophy" className="btn-outline">Explore Our Approach</a>
        </div>
      </div>

      {/* Right card */}
      <div className={styles.visual}>
        <div className={styles.card}>
          <span className={styles.cardBadge}>Admission Open Now</span>
          <h3 className={styles.cardTitle}>2026–2027 Academic Year</h3>
          <p className={styles.cardDesc}>Grade I through Grade VII — limited seats available</p>
          <div className={styles.cardInfo}>
            {[
              { icon: '📍', label: 'Location', text: 'Plot No 74, Brahmanapalli Road, Om Ganesh Nagar, Ragannaguda, Turkayamjal – 501510' },
              { icon: '📞', label: 'Contact',  text: '9666866974' },
              { icon: '🏫', label: 'Grades',   text: 'Nursery – Grade VII' },
            ].map((item) => (
              <div key={item.label} className={styles.infoRow}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <strong>{item.label}</strong>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
