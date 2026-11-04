import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import CatMascot from './CatMascot.jsx';

export default function StartScreen({ onStart }) {
  return <main className="start-screen">
    <div className="start-glow start-glow-left"/><div className="start-glow start-glow-right"/>
    <motion.div className="start-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
      <span className="overline"><Sparkles size={13}/> a little story, from my heart</span>
      <h1>I’m sorry,<br/><em>my love.</em></h1>
      <p>A small story I made for you. Take your time with it.</p>
      <motion.button className="start-button" type="button" onClick={onStart} whileTap={{ scale: .97 }}>
        <Heart size={16} fill="currentColor"/> Begin our little story <span aria-hidden="true">↗</span>
      </motion.button>
      <span className="start-caption">about a minute and a half, just for you</span>
    </motion.div>
    <motion.div className="start-mascot" initial={{ opacity: 0, y: 28, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1.2, delay: .25 }}><CatMascot accessory="heart"/></motion.div>
    <span className="start-star star-a">✦</span><span className="start-star star-b">✧</span><span className="start-star star-c">✦</span>
  </main>;
}
