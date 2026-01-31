import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';
import socialData from '../data/social.json';

const Social = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '4rem' }}
        >
            <h1 className="rich-gradient-text" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Social Feed</h1>
            <p style={{ marginBottom: '2rem', color: '#888' }}>
                Latest updates from <a href="https://instagram.com/sonic.sensory.lab" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>@sonic.sensory.lab</a>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {socialData.map((url, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url={url} width={328} />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Social;
