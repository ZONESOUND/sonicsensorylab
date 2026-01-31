import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '4rem' }}
        >
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="rich-gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>

                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Sonic Sensory Lab</strong> focuses on sonification and sonic intervention, aiming to translate everyday occurrences into the auditory sensorium as a counterpoint to the overwhelming influence of visual culture.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Inspired by early cybernetic art practices, the team blends digital and analog strategies to explore the relationships between technology, humans, and the environment, creating immersive and organic sensorial experiences.
                    </p>

                    <p>
                        Our diverse projects include experimental soundscapes, interactive installations, crowd participation, international collaborations, and educational activities.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Contact</h3>
                        <p>info@sonicsensorylab.art</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Location</h3>
                        <p>Taipei, Taiwan</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
