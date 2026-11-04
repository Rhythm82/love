import { motion } from 'framer-motion';
import CatMascot from '../components/CatMascot.jsx';
import TypingText from '../components/TypingText.jsx';
import { apologyText } from '../data/storyContent.js';

export default function Scene03SadMoment() {
  return <div className="scene-content sad-content">
    <span className="scene-kicker">03 · I’ve been thinking</span>
    <motion.div className="sad-kitten" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6, ease: 'easeOut' }}><CatMascot mood="sad"/></motion.div>
    <h1>A little sad moment</h1>
    <p className="apology-copy"><TypingText text={apologyText} delay={35} startDelay={1200}/></p>
  </div>;
}
