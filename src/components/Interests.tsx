import { motion } from 'framer-motion';
import styles from './Interests.module.css';

const interests = [
  "Software Engineering",
  "Full-Stack Development",
  "Artificial Intelligence",
  "IoT & Embedded Systems",
  "Product Design",
  "Developer Experience",
  "Open Source",
  "System Design"
];

export const Interests = () => {
  return (
    <section className={`section-padding ${styles.interestsSection}`}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.sectionTitle}
        >
          My Interests
        </motion.h2>

        <div className={styles.tagsContainer}>
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={styles.tag}
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
