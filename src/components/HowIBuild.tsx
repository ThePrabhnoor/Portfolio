import { motion } from 'framer-motion';
import styles from './HowIBuild.module.css';

const processSteps = [
  { number: '01', label: 'Understand the problem' },
  { number: '02', label: 'Explore existing solutions' },
  { number: '03', label: 'Design with intention' },
  { number: '04', label: 'Build the first version' },
  { number: '05', label: 'Test and refine' },
  { number: '06', label: 'Keep improving' },
];

export const HowIBuild = () => {
  return (
    <section className={`section-padding ${styles.buildSection}`}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* Left: Philosophy */}
          <div className={styles.stickyColumn}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.label}
            >
              My Approach
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={styles.intro}
            >
              I don't start with code—I start with questions.
            </motion.p>

            <div className={styles.questions}>
              {['What problem am I solving?', 'Who am I building this for?', 'Can it be simpler?'].map((q, i) => (
                <motion.p
                  key={q}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={styles.question}
                >
                  {q}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.philosophy}
            >
              Whether it's a React application, an AI-powered workflow, or an IoT system — my goal is always the same: build something that's useful, reliable, and enjoyable to use.
            </motion.p>
          </div>

          {/* Right: Numbered Process */}
          <div className={styles.scrollColumn}>
            <div className={styles.stepsContainer}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.stepRow}
                >
                  <span className={styles.stepNumber}>{step.number}</span>
                  <span className={styles.stepLabel}>{step.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
