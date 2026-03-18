import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const ABOUT_CARDS = [
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
    ),
    title: 'Who I Am',
    color: '#6366f1', // Indigo/Blue
    description: "I'm Vignesh R, a Frontend Developer from Chennai with a B.E. in Computer Science (CGPA 8.02). I focus on building modern, responsive, and user-centric web applications.",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M501.6 4.4L245.6 156.4l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64L3.6 459.6c-4.8 4.8-4.8 12.5 0 17.3l31.5 31.5c4.8 4.8 12.5 4.8 17.3 0L304.4 256.4l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64L507.6 10.4c4.8-4.8 4.8-12.5 0-17.3l-5.7-5.7c-4.7-4.8-12.4-4.8-17.2 0zM352 352v-16c0-26.5-21.5-48-48-48h-16l128 128h16c26.5 0 48-21.5 48-48v-16zM160 160h16c26.5 0 48-21.5 48-48v-16L96 96v16c0 26.5 21.5 48 48 48h16z"></path></svg>
    ),
    title: 'My Journey',
    color: '#10b981', // Emerald Green
    description: "My journey started with a B.E. at KCG College of Technology. Over time, I've cultivated a deep passion for solving real-world problems through technology and creating production-ready software solutions.",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
    ),
    title: 'What I Do',
    color: '#f59e0b', // Amber/Yellow
    description: "I specialize in developing React.js applications with secure authentication, role-based access control, and seamless REST API integration, prioritizing clean and maintainable code.",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16h160.03c9.68-33.35 35.78-73.16 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0S0 78.8 0 176zm295.99 59.51c-14.06 16.03-34.52 46.46-44.14 74.49H100.15c-9.62-28.03-30.08-58.46-44.14-74.49C33.4 209.46 20 193.36 20 176c0-86.02 69.98-156 156-156s156 69.98 156 156c0 17.36-13.4 33.46-36.01 59.51z"></path></svg>
    ),
    title: 'Beyond Coding',
    color: '#ef4444', // Red
    description: "Beyond coding, I build scalable full-stack systems using Python & Django, focusing on performance, clean architecture, and seamless user experiences.",
  }
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg2, #0a192f)', position: 'relative', zIndex: 1, padding: '80px 0' }}>
      <div className="container">
        
        {/* Animated Title: Fades and scales in as you scroll to it */}
        <motion.div 
          className={styles.headerWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.mainTitle}>
            About Me <span role="img" aria-label="laptop">👨‍💻</span>
          </h2>
        </motion.div>

        {/* 4-Card Grid with Staggered Animations */}
        <div className={styles.grid}>
          {ABOUT_CARDS.map((card, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              
              /* This delay math is the secret! 
                 Card 0: 0s delay
                 Card 1: 0.15s delay
                 Card 2: 0.3s delay
                 Card 3: 0.45s delay */
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} 
            >
              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconWrapper} 
                  style={{ color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.divider}></div>
              </div>
              
              <p className={styles.cardText}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}