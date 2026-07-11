import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './FeaturedProjects.module.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'VerdeX',
    role: 'Team Lead & Architect',
    category: 'Hackathon Winner · Sustainability Platform',
    tagline: 'A gamified sustainability and institutional governance platform.',
    color: '#4ade80',
    colorRgb: '74, 222, 128',
    details: [
      { label: 'The Problem', value: 'Campuses often lack transparent, accountable systems for reporting and resolving infrastructure or sustainability issues. Issues go unreported, untracked, and unresolved.' },
      { label: 'The Solution', value: 'Architected an "Institutional Governance Engine" centered around a highly transparent "Report → Resolve → Verify" loop. Any student can report an issue, any authority must resolve it, and the community verifies it.' },
      { label: 'My Architecture', value: 'Drafted comprehensive PRD/TRD and UI-UX workflows to guide the development team. Built a deterministic "Campus Score" mathematical model to track, incentivize, and gamify sustainable practices among users.' },
      { label: 'The Outcome', value: '1st Place overall at "The Winter Sprint" hackathon (2026). Led the full technical execution and team coordination under a timed, high-pressure environment.' },
    ],
    technologies: ['System Architecture', 'PRD/TRD', 'UI/UX Design', 'React', 'Gamification'],
    outcome: '1st Place · The Winter Sprint 2026',
  },
  {
    id: 2,
    number: '02',
    title: 'BlueSentinel',
    role: 'Full-Stack IoT Developer',
    category: 'IoT · Real-Time Monitoring',
    tagline: 'An IoT-based water detection and management system for real-time environmental monitoring.',
    color: '#38bdf8',
    colorRgb: '56, 189, 248',
    details: [
      { label: 'The Problem', value: 'Critical water quality metrics—pH, turbidity, temperature—require constant, scalable monitoring to prevent contamination before it becomes a crisis. Manual checks are too slow and too infrequent.' },
      { label: 'The Solution', value: 'Engineered a robust hardware-software bridge. ESP32 microcontrollers act as the edge computing layer, continuously capturing sensor data and transmitting it to a real-time backend pipeline.' },
      { label: 'My Execution', value: 'Integrated specialized IoT sensors for water pH, turbidity, and temperature. Designed complex backend data processing pipelines to handle real-time telemetry, normalization, and automated alert thresholds.' },
      { label: 'The Outcome', value: 'A production-ready monitoring system capable of triggering real-time alerts when water quality metrics fall outside safe thresholds, enabling rapid environmental response.' },
    ],
    technologies: ['ESP32', 'Arduino', 'Sensor Integration', 'FastAPI', 'Firebase', 'Real-Time Pipelines'],
    outcome: 'Production-Ready IoT System',
  },
  {
    id: 3,
    number: '03',
    title: 'FarmSense AI',
    role: 'Frontend Lead & Integrations Architect',
    category: 'IoT · AI · Smart Agriculture',
    tagline: 'A smart agriculture platform integrating IoT sensor data with an AI-driven crop diagnosis engine.',
    color: '#f59e0b',
    colorRgb: '245, 158, 11',
    details: [
      { label: 'The Problem', value: 'Smallholder farmers lack access to real-time, actionable data about their crops and soil. Diagnosis happens too late, after visible damage has already occurred.' },
      { label: 'The Solution', value: 'Developed a smart agriculture platform that integrates IoT sensor data with an AI-driven crop diagnosis engine, giving farmers a real-time dashboard of their field health.' },
      { label: 'My Execution', value: 'Coordinated the engineering team and designed a highly responsive, mobile-first frontend dashboard. Implemented hardware simulators to display mocked sensor data, enabling full end-to-end testing before physical deployment.' },
      { label: 'The Outcome', value: 'A complete, demo-ready platform that could be validated end-to-end before physical IoT hardware was deployed, dramatically accelerating the development cycle.' },
    ],
    technologies: ['React', 'Mobile-First', 'Gemini API', 'IoT Simulators', 'FastAPI', 'Figma'],
    outcome: 'Full-Stack AI + IoT Integration',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={styles.projectWrapper}
    >
      {/* Header Row */}
      <div className={styles.projectMeta}>
        <span className={styles.projectNumber}>{project.number}</span>
        <span className={styles.projectCategory}>{project.category}</span>
      </div>

      {/* Main Card */}
      <div
        style={{
          '--project-color': project.color,
          '--project-color-rgb': project.colorRgb,
        } as React.CSSProperties}
      >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${styles.projectCard} glass-panel`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      >
        <div className={styles.cardGlow}></div>
        
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectRole}>{project.role}</p>
          </div>
          <motion.div 
            className={styles.expandIcon}
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p className={styles.projectTagline}>{project.tagline}</p>

        <div className={styles.techRow}>
          {project.technologies.map(tech => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <div className={styles.outcomeRow}>
          <span className={styles.outcomeDot}></span>
          <span className={styles.outcomeText}>{project.outcome}</span>
        </div>
      </motion.div>
      </div>

      {/* Expanded Case Study */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={styles.caseStudy}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.caseStudyInner}>
              {project.details.map((detail, i) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.caseStudyItem}
                >
                  <span className={styles.caseStudyLabel}>{detail.label}</span>
                  <p className={styles.caseStudyValue}>{detail.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FeaturedProjects = () => {
  return (
    <section id="projects" className={`section-padding ${styles.projectsSection}`}>
      <div className={styles.sectionHeader}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.sectionLabel}
        >
          Selected Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.sectionTitle}
        >
          Every project starts with
          <br />
          <em>a problem worth solving.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.sectionSubtitle}
        >
          Click any project to expand the full case study.
        </motion.p>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
