import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// ── Role typing animation (left side) ──
const ROLES = [
  "Full-Stack Enthusiast",
  "Frontend Developer",
  "React.js Specialist",
  "Python & Django Developer",
  
];

// ── Code lines typed one by one on the right card ──
const CODE_LINES = [
  { tokens: [{ t: "keyword", v: "const " }, { t: "var", v: "dev" }, { t: "dim", v: " = " }, { t: "bracket", v: "{" }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "key", v: "name" }, { t: "dim", v: ": " }, { t: "string", v: '"Vignesh R"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "key", v: "role" }, { t: "dim", v: ": " }, { t: "string", v: '"Fullstack Dev"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "key", v: "stack" }, { t: "dim", v: ": " }, { t: "bracket", v: "[" }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"React.js"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"JavaScript"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"Python"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"Django"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"Tailwind CSS"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: '    ' }, { t: "string", v: '"sql"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "bracket", v: "]" }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "key", v: "status" }, { t: "dim", v: ": " }, { t: "string", v: '"open_to_work"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "dim", v: "  " }, { t: "key", v: "location" }, { t: "dim", v: ": " }, { t: "string", v: '"Chennai, IN"' }, { t: "dim", v: "," }] },
  { tokens: [{ t: "bracket", v: "};" }] },
];

// Flatten all code into one string for char-by-char typing
function flattenLine(line) {
  return line.tokens.map((t) => t.v).join("");
}

// Token color class map
const TOKEN_CLASS = {
  keyword: styles.cKeyword,
  var:     styles.cVar,
  key:     styles.cKey,
  string:  styles.cString,
  bracket: styles.cBracket,
  dim:     styles.cDim,
};

export default function Hero() {
  // ── Role typer (left) ──
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // ── Code typer (right card) ──
  // visibleLines = how many full lines are shown
  // currentLineChars = how many chars of the current line are typed
  const [visibleLines, setVisibleLines]         = useState(0);
  const [currentLineChars, setCurrentLineChars] = useState(0);
  const [codeFinished, setCodeFinished]         = useState(false);

  // ── Role typing logic ──
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // ── Code card typing logic ──
  useEffect(() => {
    if (codeFinished) return;

    // If all lines done → mark finished, then restart after pause
    if (visibleLines >= CODE_LINES.length) {
      const restart = setTimeout(() => {
        setVisibleLines(0);
        setCurrentLineChars(0);
        setCodeFinished(false);
      }, 2800);
      return () => clearTimeout(restart);
    }

    const currentLine   = CODE_LINES[visibleLines];
    const fullLineText  = flattenLine(currentLine);
    const totalChars    = fullLineText.length;

    if (currentLineChars < totalChars) {
      // Type next character
      const t = setTimeout(() => {
        setCurrentLineChars((c) => c + 1);
      }, 38);
      return () => clearTimeout(t);
    } else {
      // Line complete → move to next line after short pause
      const t = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setCurrentLineChars(0);
      }, 60);
      return () => clearTimeout(t);
    }
  }, [visibleLines, currentLineChars, codeFinished]);

  // ── Render a single code line with partial chars typed ──
  const renderLine = (lineIndex) => {
    const line        = CODE_LINES[lineIndex];
    const isLastLine  = lineIndex === visibleLines; // currently being typed
    const fullText    = flattenLine(line);

    // For fully completed lines, render with syntax colors
    if (lineIndex < visibleLines) {
      return (
        <div key={lineIndex} className={styles.codeLine}>
          {line.tokens.map((token, ti) => (
            <span key={ti} className={TOKEN_CLASS[token.t] || styles.cDim}>
              {token.v}
            </span>
          ))}
        </div>
      );
    }

    // For the currently typing line, show partial text with color
    if (isLastLine) {
      let charsLeft = currentLineChars;
      const parts   = [];

      for (let ti = 0; ti < line.tokens.length; ti++) {
        const token = line.tokens[ti];
        if (charsLeft <= 0) break;

        const visible = token.v.slice(0, charsLeft);
        charsLeft -= token.v.length;

        parts.push(
          <span key={ti} className={TOKEN_CLASS[token.t] || styles.cDim}>
            {visible}
          </span>
        );
      }

      return (
        <div key={lineIndex} className={styles.codeLine}>
          {parts}
          <span className={styles.codeCursor}>▌</span>
        </div>
      );
    }

    return null;
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.inner}>

        {/* ── LEFT CONTENT ── */}
        <div className={styles.content}>

          {/* <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for work
          </div> */}

          <p className={styles.greeting}>Hi there, I'm</p>

          <h1 className={styles.name}>
            Vignesh <span className={styles.nameAccent}>R</span>
          </h1>

          <div className={styles.roleWrap}>
            <span className={styles.roleText}>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.desc}>
            I build <strong>scalable, production-ready web applications</strong> using <strong>React.js</strong>, with a focus on performance and clean architecture. 
            I also develop backend systems using <strong>Python & Django</strong>, delivering complete full-stack solutions.
          </p>

          <div className={styles.actions}>
            {/* <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button> */}
            {/* <button
              className={`${styles.btn} ${styles.btnOutline}`}
              onClick={() => scrollTo("contact")}
            >
              Get In Touch
            </button> */}
            <a
              href="/Vignesh_R.pdf"
              download
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Fullstack</span>
              <span className={styles.statLabel}>Developer</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT — TYPING CODE CARD ── */}
        <div className={styles.visual}>
          <div className={styles.card}>

            {/* Title bar */}
            <div className={styles.cardBar}>
              <div className={styles.cardDots}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.cardFilename}>dev.js</span>
            </div>

            {/* ── TYPING CODE BODY ── */}
            <div className={styles.cardBody}>
              <div className={styles.codeBlock}>
                {/* Render completed + current lines */}
                {Array.from({ length: Math.min(visibleLines + 1, CODE_LINES.length) }, (_, i) =>
                  renderLine(i)
                )}
              </div>
            </div>

            {/* Card footer */}
            <div className={styles.cardFooter}>
              <span className={styles.cardTag}>JavaScript</span>
              <span className={styles.cardLine}>
                Ln {visibleLines + 1}, Col {currentLineChars + 1}
              </span>
            </div>
          </div>

          {/* Floating badge */}
          <div className={styles.floatBadge}>
            <span className={styles.floatIcon}>🚀</span>
            <div>
              <div className={styles.floatTitle}>Open to Work</div>
              <div className={styles.floatSub}>Full-time / Remote</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  );
}