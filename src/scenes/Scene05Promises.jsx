import { motion } from 'framer-motion';
import CatMascot from '../components/CatMascot.jsx';
import { promises } from '../data/storyContent.js';

export default function Scene05Promises() {
  return <div className="scene-content promises-content">
    <span className="scene-kicker">05 · things I want to do</span>
    <div className="promise-cats"><CatMascot accessory="flower"/><CatMascot accessory="heart" className="second-cat"/></div>
    <h1>My little promises</h1>
    <div className="promise-lines">{promises.map((promise, index) => <motion.p key={promise} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 + index * 2.1, duration: .9 }}><span className="promise-heart">♡</span>{promise}</motion.p>)}</div>
    <motion.p className="promise-caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 7.5, duration: 1 }}><i/>Because love is not just about saying things.<br/>It’s about showing them.<i/></motion.p>
  </div>;
}
