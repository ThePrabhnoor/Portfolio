import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from './ui/Magnetic';
import styles from './Hero.module.css';

const headline = "Engineering digital experiences with uncompromising precision.";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const words = headline.split(" ");
  
  return (
    <section className={styles.hero}>
      <motion.div style={{ y: y1, opacity }} className={styles.content}>
        <h1 className={styles.headline}>
          {words.map((word, index) => (
            <span key={index} className={styles.wordWrapper}>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: index * 0.05 
                }}
                className={styles.word}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.subhead}
        >
          <span className={styles.subheadItem}>Software Engineer</span>
          <span className={styles.dot}>&bull;</span>
          <span className={styles.subheadItem}>System Architect</span>
          <span className={styles.dot}>&bull;</span>
          <span className={styles.subheadItem}>Creative Developer</span>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.ctaContainer}
        >
          <Magnetic strength={0.4}>
            <a href="#projects" className={styles.primaryBtn}>Explore Work</a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
          </Magnetic>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.scrollHint}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  );
};
