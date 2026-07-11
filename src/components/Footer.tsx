import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Designed & Built by Prabhnoor Singh. &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
