// ═══════════════════════════════════════════════════
// ADD THIS to your Experience.js — replace the old
// <p class="section-label"> and <h2 class="section-title">
// with this new headerWrapper block:
// ═══════════════════════════════════════════════════

// STEP 1: Add this import at the top (already there if using framer-motion)


// STEP 2: Replace old heading with this inside your return():
/*
  <motion.div
    className={styles.headerWrapper}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className={styles.mainTitle}>
      Work Experience 💼
    </h2>
  </motion.div>
*/

// ─────────────────────────────────────────────────
// FULL Experience.js (complete file, ready to use):
// ─────────────────────────────────────────────────

import React from 'react';
import styles from './Experience.module.css';
import { motion } from 'framer-motion';


const experiences = [
  {
    role: "Trainee Telecom Engineer",
    company: "Centillion Networks Pvt. Ltd.",
    period: "Nov 2024 – Dec 2025",
    points: [
      "Developed and enhanced internal employee dashboard and project matrix applications using React.js.",
      "Built reusable UI components and improved data visualization for project tracking systems.",
      "Optimized frontend performance and ensured smooth user experience across enterprise tools.",
      "Collaborated with team members to deliver scalable and maintainable frontend solutions."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "Jan 2025 – Present",
    points: [
      "Built responsive web apps including Stopwatch, Tic-Tac-Toe, and Weather App.",
      "Integrated OpenWeather REST API for real-time data fetching.",
      "Focused on clean UI design and mobile-first development."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">

        {/* ── TILTED MARKER HEADING ── */}
        <motion.div
          className={styles.headerWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.mainTitle}>
            Work Experience 💼
          </h2>
        </motion.div>

        {/* ── TIMELINE ── */}
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${i % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <div className={styles.header}>
                <div>
                  <p className={styles.role}>{exp.role}</p>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <ul className={styles.points}>
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}