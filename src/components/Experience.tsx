import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Technical Leader',
    organization: '15+ Hackathons',
    date: '2022 - Present',
    description: 'Led multidisciplinary teams in rapid prototyping. Managed end-to-end development, problem solving, and final presentations for complex AI/IoT solutions.'
  },
  {
    id: 2,
    role: 'Active Member & Contributor',
    organization: 'IEEE Student Branch',
    date: '2023 - Present',
    description: 'Fostering technical leadership and ownership. Organizing workshops and collaborating on deep-tech projects within the campus community.'
  },
  {
    id: 3,
    role: 'Hardware & Software Integrator',
    organization: 'Personal & Open Source Projects',
    date: '2021 - Present',
    description: 'Continuously learning by shipping complete end-to-end products combining embedded systems with modern web frontends.'
  }
];

export const Experience = () => {
  return (
    <section className={`section-padding ${styles.experienceSection}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.sectionTitle}
      >
        Experience & Leadership
      </motion.h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <h4 className={styles.organization}>{exp.organization}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
