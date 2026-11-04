import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const sparks = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  angle: `${index * 20}deg`,
  distance: `${48 + (index % 3) * 20}px`,
  delay: `${(index % 4) * 25}ms`,
}));

export default function BalloonAnimation() {
  const [popped, setPopped] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const timer = window.setTimeout(() => setPopped(true), reduceMotion ? 300 : 4500);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return <div className="balloon-scene-art" aria-hidden="true">
    <AnimatePresence>
      {!popped && <motion.div className="heart-balloon" initial={{ opacity: 0, scale: .25, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1.45 }} transition={{ duration: .7, ease: 'easeOut' }}>
        <svg viewBox="0 0 110 128"><path d="M55 99C36 83 9 62 10 37 11 14 39 9 55 31 71 9 99 14 100 37c1 25-26 46-45 62Z" fill="url(#balloon-fill)"/><defs><linearGradient id="balloon-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7bad8"/><stop offset="1" stopColor="#bd9df4"/></linearGradient></defs><path d="M55 99 52 109l5 2-3 16" fill="none" stroke="#e8c1e3" strokeWidth="2"/></svg>
        <span className="balloon-glint"/>
      </motion.div>}
    </AnimatePresence>
    <AnimatePresence>{popped && <motion.div className="balloon-burst" initial={{ scale: .1 }} animate={{ scale: 1 }} exit={{ opacity: 0 }}>{sparks.map((spark) => <i key={spark.id} style={{ '--angle': spark.angle, '--distance': spark.distance, animationDelay: spark.delay }}/>)}</motion.div>}</AnimatePresence>
  </div>;
}
