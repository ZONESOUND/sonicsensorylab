import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPosts } from '../utils/markdown';
import { useMemo } from 'react';

const Projects = () => {
    const posts = useMemo(() => getPosts(), []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '4rem' }}
        >
            <div style={{
                padding: '2rem 0',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 400 }}>Index</h1>
                <span style={{ color: 'var(--secondary-color)' }}>{posts.length} Projects</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '4rem 2rem' }}>
                {posts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/projects/${post.slug}`} className="minimal-card" style={{ display: 'block', height: '100%', borderTop: 'none' }}>
                            {post.frontmatter.coverImage && (
                                <div style={{ marginBottom: '1.5rem', overflow: 'hidden', aspectRatio: '4/3', background: '#222' }}>
                                    <img
                                        src={post.frontmatter.coverImage}
                                        alt={post.frontmatter.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'grayscale(100%)' }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.filter = 'grayscale(0%)';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.filter = 'grayscale(100%)';
                                        }}
                                    />
                                </div>
                            )}
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 400 }}>{post.frontmatter.title}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-color)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                                <span>{post.frontmatter.date.split('-')[0]}</span>
                                <span>{post.frontmatter.tags?.[0]}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
