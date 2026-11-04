import { motion } from 'framer-motion';
import BalloonAnimation from '../components/BalloonAnimation.jsx';
import CatMascot from '../components/CatMascot.jsx';
import TypingText from '../components/TypingText.jsx';

export default function Scene01Intro() {
  return <div className="scene-content intro-content">
    <span className="scene-kicker">01 · a little hello</span>
    <div className="intro-art"><BalloonAnimation/><motion.div className="intro-kitten" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .6, duration: 1.5, ease: 'easeOut' }}><CatMascot accessory="heart"/></motion.div></div>
    <motion.div className="intro-copy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }}>
      <h1><TypingText text="Hey, my favourite person..." delay={48}/></h1>
      <p><TypingText text="I have something special to tell you." delay={42} startDelay={2600}/></p>
    </motion.div>
  </div>;
}
