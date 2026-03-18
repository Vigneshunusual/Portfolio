/**
 * Navbar Component
 * Fixed top navigation with smooth scroll links.
 * Highlights active section as user scrolls.
 */
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';


const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack',  href: '#stack'  },
];

export default function Navbar() {
  const [active,     setActive]     = useState('');
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  // Change navbar background when scrolled
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = ['about', 'experience', 'projects', 'stack'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        {/* <a href="/" className={styles.logo}>
          V<span>.</span>R
        </a> */}

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <button
                className={`${styles.link} ${active === link.href.replace('#','') ? styles.activeLink : ''}`}
                onClick={() => handleClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(link => (
            <button key={link.label} onClick={() => handleClick(link.href)} className={styles.mobileLink}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
