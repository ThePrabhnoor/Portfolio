import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import styles from './DevelopmentJourney.module.css';

const storyBlocks = [
  "I didn't start with a roadmap or a clear destination—I just wanted to understand how things worked.",
  "It began with simple programs, then websites, and before long I found myself asking bigger questions: How does this connect to a database? How does an API work? How can software interact with real hardware?",
  "That curiosity pushed me beyond writing code. I started building complete projects, participating in hackathons, and exploring technologies that felt unfamiliar. Every project became an excuse to learn something new.",
  "Today, I enjoy working across the stack. One day I might be building a React interface, the next I'm designing a FastAPI backend, training a machine learning model, or wiring sensors to an ESP32.",
  "I don't see these as separate disciplines—they're simply different tools for solving different problems.",
];

const domains = [
  "Frontend", "Backend", "AI / ML", "IoT", "Cloud"
];

export const DevelopmentJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });

  return (
    <section className={`section-padding ${styles.journeySection}`} id="journey" ref={containerRef}>
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.sectionTitle}>The Journey</h2>
        </Reveal>
        
        <div className={styles.timeline}>
          <div className={styles.timelineLineContainer}>
            <svg width="4" height="100%" className={styles.timelineSvg}>
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="var(--accent-color)"
                strokeWidth="4"
                style={{ pathLength }}
              />
            </svg>
            <div className={styles.timelineLineBg} />
          </div>

          <div className={styles.storyContainer}>
            {storyBlocks.map((block, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={styles.storyBlock}
              >
                {block}
              </motion.p>
            ))}

            <div className={styles.domainsContainer}>
              {domains.map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.domainBadge}
                >
                  {domain}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={styles.closingStatement}
            >
              I don't aim to know everything. I aim to stay curious, keep learning, and build things that make a real impact. That's the journey I'm on, and it's only just getting started.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
