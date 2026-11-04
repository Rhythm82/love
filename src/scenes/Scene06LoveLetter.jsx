import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import CatMascot from '../components/CatMascot.jsx';
import FlowerPetals from '../components/FlowerPetals.jsx';
import FloatingHearts from '../components/FloatingHearts.jsx';
import TypingText from '../components/TypingText.jsx';
import { letterParagraphs } from '../data/storyContent.js';

export default function Scene06LoveLetter() {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (reduceMotion) return;
      const heart = confetti.shapeFromText({ text: '💜', scalar: 1.5 });
      confetti({ particleCount: 55, spread: 80, startVelocity: 24, gravity: .7, origin: { y: .65 }, shapes: [heart], scalar: 1.2, ticks: 230 });
    }, 12000);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return <div className="scene-content letter-content">
    <FloatingHearts/><FlowerPetals/>
    <span className="scene-kicker">06 · whenever you’re ready</span>
    <div className="letter-cats"><CatMascot accessory="none"/><CatMascot accessory="none" className="second-cat"/></div>
    <div className="love-letter">
      {letterParagraphs.map((paragraph, index) => <p key={paragraph}><TypingText text={paragraph} delay={index === 2 ? 30 : 39} startDelay={1000 + index * 1750}/></p>)}
    </div>
    <motion.div className="final-hug" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 13.2, duration: 1.2 }}>
      <motion.span className="glowing-heart" animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>♥</motion.span>
      <p>Sending you the biggest virtual hug.</p>
    </motion.div>
  </div>;
}
