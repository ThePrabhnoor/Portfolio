import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Firebase'],
  },
  {
    title: 'Databases',
    skills: ['Firebase', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Arduino IDE'],
  },
  {
    title: 'Cloud',
    skills: ['Firebase Hosting', 'Railway'],
  },
  {
    title: 'AI',
    skills: ['Machine Learning', 'Gemini API'],
  },
  {
    title: 'IoT',
    skills: ['ESP32', 'Sensors', 'Embedded Systems'],
  }
];

export const Skills = () => {
  return (
    <section className={`section-padding ${styles.skillsSection}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.sectionTitle}
      >
        Technical Arsenal
      </motion.h2>

      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-panel ${styles.categoryCard}`}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <ul className={styles.skillList}>
              {category.skills.map(skill => (
                <li key={skill} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
