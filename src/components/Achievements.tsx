import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import styles from './Achievements.module.css';

const stats = [
  { label: 'Hackathons Participated', value: 15 },
  { label: 'Projects Built', value: 20 },
  { label: 'Technologies Learned', value: 25 },
  { label: 'GitHub Repositories', value: 40 },
];

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: "circOut"
      });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Achievements = () => {
  return (
    <section className={`section-padding ${styles.achievementsSection}`}>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-panel ${styles.statCard}`}
          >
            <h3 className={styles.statValue}>
              <Counter value={stat.value} />+
            </h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
