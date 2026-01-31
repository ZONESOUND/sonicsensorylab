import { motion } from 'framer-motion';
import { getPage } from '../utils/markdown';
import ReactMarkdown from 'react-markdown';
import { useMemo } from 'react';

const About = () => {
    const page = useMemo(() => getPage('about'), []);

    if (!page) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '4rem' }}
        >
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="rich-gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>{page.frontmatter.title}</h1>

                <div className="prose" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                    <ReactMarkdown
                        components={{
                            p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                            strong: ({ node, ...props }) => <strong style={{ color: 'white', fontWeight: 600 }} {...props} />,
                        }}
                    >
                        {page.content}
                    </ReactMarkdown>
                </div>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Contact</h3>
                        <p>{page.frontmatter.contact}</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Location</h3>
                        <p>{page.frontmatter.location}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
