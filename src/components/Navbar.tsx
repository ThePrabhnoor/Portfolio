import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Magnetic } from './ui/Magnetic';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPos = window.scrollY + 300; // Offset

      sections.forEach((section) => {
        if (section) {
          if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={styles.navbar}
      >
        <div className={styles.navContainer}>
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={0.2}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${styles.navItem} ${active === item.href.substring(1) ? styles.active : ''}`}
              >
                {item.name}
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
