import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './BlogPreview.module.css';

const posts = [
  {
    id: 1,
    title: 'Project Deep Dive: Building BlueSentinel from Scratch',
    date: 'Nov 12, 2023',
    readTime: '8 min read',
    link: '#'
  },
  {
    id: 2,
    title: 'Lessons from 15 Hackathons: Rapid Prototyping and Leadership',
    date: 'Oct 05, 2023',
    readTime: '6 min read',
    link: '#'
  }
];

export const BlogPreview = () => {
  return (
    <section className={`section-padding ${styles.blogSection}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.sectionTitle}
      >
        Recent Thoughts
      </motion.h2>

      <div className={styles.postList}>
        {posts.map((post, index) => (
          <motion.a
            href={post.link}
            key={post.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-panel ${styles.postCard}`}
          >
            <div className={styles.postMeta}>
              <span>{post.date}</span>
              <span className={styles.dot}>&bull;</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.readMore}>
              Read Article <ArrowRight size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
