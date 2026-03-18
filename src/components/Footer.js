import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Left Side: Email */}
        <div className={styles.left}>
          <a href="mailto:your.email@example.com" className={styles.textLink}>
            vignesh01ak@gmail.com
          </a>
        </div>

        {/* Center: Social Icons */}
        <div className={styles.center}>
          <a 
            href="https://www.linkedin.com/in/vignesh-r-5365a3231/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Vigneshunusual" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Right Side: Phone Number */}
        <div className={styles.right}>
          <a href="tel:+919876543210" className={styles.textLink}>
            +91 6383527141
          </a>
        </div>

      </div>
    </footer>
  );
}