import { motion } from 'framer-motion';
import FlowerDelivery from '../components/FlowerDelivery.jsx';
import FlowerPetals from '../components/FlowerPetals.jsx';
import TypingText from '../components/TypingText.jsx';

export default function Scene04FlowerDelivery() {
  return <div className="scene-content flower-content">
    <div className="garden-glow"/><FlowerPetals burst/>
    <span className="scene-kicker">04 · a little something for you</span>
    <motion.div className="garden-moon" initial={{ opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}/>
    <FlowerDelivery/>
    <motion.div className="flower-message" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.4, duration: 1.3 }}>
      <p><TypingText text="If I could, I’d bring you your favourite flowers and say sorry a thousand times." delay={36} startDelay={4900}/></p>
    </motion.div>
  </div>;
}
