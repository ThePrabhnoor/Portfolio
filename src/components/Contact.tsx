
import { motion } from 'framer-motion';
import { Mail, Download, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Magnetic } from './ui/Magnetic';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`glass-panel ${styles.contactCard}`}
      >
        <h2 className={styles.title}>Let's build something extraordinary.</h2>
        <p className={styles.subtitle}>
          Always open to discussing product design, software architecture, or hackathon collaborations.
        </p>
        
        <div className={styles.buttonGroup}>
          <Magnetic strength={0.4}>
            <a href="mailto:theprabhnoors@gmail.com" className={styles.primaryButton}>
              <Mail size={20} />
              Email Me
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a href="#" className={styles.secondaryButton}>
              <Download size={20} />
              Resume
            </a>
          </Magnetic>
        </div>

        <div className={styles.socialLinks}>
          <Magnetic strength={0.3}>
            <a href="https://github.com/ThePrabhnoor" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="https://www.linkedin.com/in/prabhnoor-singh7/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="https://x.com/ThePrabhnoorS" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="https://leetcode.com/u/Prabhnoor-singh7/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
              <Code2 size={24} />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};
