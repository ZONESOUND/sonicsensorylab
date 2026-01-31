import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { getPost } from '../utils/markdown';
import ReactMarkdown from 'react-markdown';
import { useMemo } from 'react';

const ProjectDetail = () => {
    const { slug } = useParams();
    const post = useMemo(() => getPost(slug), [slug]);

    if (!post) {
        return (
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <h1>Project not found</h1>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '6rem' }}
        >
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <header style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>{post.frontmatter.title}</h1>
                    <div style={{ display: 'flex', gap: '2rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                        <span>{post.frontmatter.date}</span>
                        <span>{post.frontmatter.tags?.join(' / ')}</span>
                    </div>
                </header>

                {post.frontmatter.coverImage && (
                    <img
                        src={post.frontmatter.coverImage}
                        alt={post.frontmatter.title}
                        style={{ width: '100%', marginBottom: '4rem', filter: 'grayscale(0%)' }}
                    />
                )}

                <div className="prose" style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#ccc' }}>
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#fff', borderLeft: '2px solid white', paddingLeft: '1rem' }} {...props} />,
                            h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff' }} {...props} />,
                            p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem', maxWidth: '65ch' }} {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote style={{ borderLeft: '1px solid var(--secondary-color)', paddingLeft: '2rem', color: 'var(--secondary-color)', fontStyle: 'italic', margin: '3rem 0', fontSize: '1.1rem' }} {...props} />
                            ),
                            img: ({ node, ...props }) => <img style={{ maxWidth: '100%', margin: '3rem 0', display: 'block' }} {...props} />,
                            a: ({ node, ...props }) => <a style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '4px' }} {...props} />,
                            ul: ({ node, ...props }) => <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }} {...props} />,
                            li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
