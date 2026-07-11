import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TechStack.module.css';

const techCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C']
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS']
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['FastAPI', 'REST APIs']
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['Firebase', 'Firestore', 'MySQL']
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM', 'Gemini API']
  },
  {
    id: 'iot',
    label: 'IoT',
    skills: ['ESP32', 'Arduino', 'Embedded Systems', 'Sensor Integration']
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: ['Vercel', 'Firebase Hosting', 'Railway']
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
  }
];

export const TechStack = () => {
  const [activeTab, setActiveTab] = useState(techCategories[0].id);

  const activeCategory = techCategories.find(c => c.id === activeTab);

  return (
    <section className={`section-padding ${styles.techSection}`}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.sectionTitle}
        >
          Tech Stack
        </motion.h2>

        <div className={styles.interactiveArea}>
          <div className={styles.tabContainer}>
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`${styles.tab} ${activeTab === category.id ? styles.activeTab : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className={styles.skillsContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.skillsGrid}
              >
                {activeCategory?.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={styles.skillTag}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
