import React from "react";
import styles from "./TechStack.module.css";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDjango } from "react-icons/si";

const skills = [
  { name: "React",      icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python",     icon: <FaPython /> },
  { name: "Django",     icon: <SiDjango /> },
  { name: "HTML",       icon: <FaHtml5 /> },
  { name: "CSS",        icon: <FaCss3Alt /> },
  { name: "Git",        icon: <FaGitAlt /> },
  { name: "MySQL",      icon: <SiMysql /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } }
};

export default function TechStack() {
  return (
    <section id="stack" className={styles.section}>

      {/* ── TILTED MARKER HEADING ── */}
      <motion.div
        className={styles.headerWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.mainTitle}>Skills 🔥</h2>
      </motion.div>

      {/* ── SKILLS GRID ── */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={styles.card}
          >
            <p className={styles.name}>{skill.name}</p>
            <div className={styles.icon}>{skill.icon}</div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}