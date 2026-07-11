import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800); // Wait for fade out
    }, 2000); // 2 second display

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.logoWrapper}>
        <motion.span
          className={styles.letter}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          P
        </motion.span>
        <motion.span
          className={styles.letter}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          S
        </motion.span>
      </div>
      <motion.div
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
};
