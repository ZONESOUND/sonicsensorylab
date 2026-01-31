import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="container"
        >
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    fontWeight: 400,
                    lineHeight: 0.9,
                    marginBottom: '2rem',
                    letterSpacing: '-0.04em'
                }}>
                    SONIC<br />
                    SENSORY<br />
                    LAB
                </h1>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                    <p style={{
                        maxWidth: '500px',
                        fontSize: '1.2rem',
                        color: 'var(--secondary-color)',
                        lineHeight: 1.4
                    }}>
                        Translating everyday occurrences into the auditory sensorium.
                        Blending digital and analog strategies to create immersive, organic experiences.
                    </p>

                    <Link to="/projects" style={{
                        fontSize: '1.2rem',
                        borderBottom: '1px solid white',
                        paddingBottom: '4px'
                    }}>
                        VIEW INDEX →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
