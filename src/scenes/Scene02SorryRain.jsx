import { motion } from 'framer-motion';
import SorryRain from '../components/SorryRain.jsx';
import TypingText from '../components/TypingText.jsx';

export default function Scene02SorryRain() {
  return <div className="scene-content sorry-content">
    <SorryRain/>
    <motion.div className="sorry-message" initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: .8, duration: 1.1 }}>
      <span className="scene-kicker">02 · the words I mean</span>
      <h1>I’m Really,<br/><em>Really Sorry...</em></h1>
      <p><TypingText text="If I could say sorry a thousand times, I would." delay={44} startDelay={1800}/></p>
    </motion.div>
  </div>;
}
