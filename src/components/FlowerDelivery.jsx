import { motion, useReducedMotion } from 'framer-motion';
import CatMascot from './CatMascot.jsx';

export default function FlowerDelivery() {
  const reduceMotion = useReducedMotion();
  return <motion.div className="flower-walker" initial={reduceMotion ? { opacity: 0 } : { x: '-58vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: reduceMotion ? .2 : 3.2, delay: .35, ease: [0.2, 0.72, 0.32, 1] }}>
    <CatMascot mood="happy" accessory="bouquet" className="delivery-kitten"/>
  </motion.div>;
}
