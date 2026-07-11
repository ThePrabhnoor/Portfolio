import styles from './Background.module.css';

export const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.noiseOverlay}></div>
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>
      <div className={styles.glowBlob3}></div>
      <div className={styles.gridOverlay}></div>
    </div>
  );
};
