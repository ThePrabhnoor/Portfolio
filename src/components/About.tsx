import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';

const AnimatedText = ({ text, delay = 0, large = false }: { text: string; delay?: number; large?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <p ref={ref} className={large ? styles.highlightPara : styles.para}>
      {words.map((word, index) => (
        <span key={index} className={styles.wordContainer}>
          <motion.span
            className={styles.animWord}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + index * 0.025 }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  );
};

const paragraphs = [
  { text: "I'm a Computer Science student who enjoys building software that solves real-world problems.", large: false },
  { text: "What started as curiosity about how things work has grown into a passion for creating products that combine thoughtful design, solid engineering, and practical impact.", large: false },
  { text: "I spend most of my time building—whether that's developing full-stack web applications, experimenting with AI, integrating IoT hardware, or leading teams during hackathons.", large: false },
  { text: "I enjoy understanding the complete picture, from the user experience on the frontend to the systems powering everything behind the scenes.", large: false },
  { text: "I'm still early in my journey, and that's what excites me the most.", large: true },
];

export const About = () => {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className={styles.container}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Prabhnoor.
        </motion.span>
        
        <div className={styles.textContent}>
          {paragraphs.map((p, index) => (
            <AnimatedText key={index} text={p.text} delay={0.05} large={p.large} />
          ))}
        </div>
      </div>
    </section>
  );
};
