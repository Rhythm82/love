import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Scene01Intro from '../scenes/Scene01Intro.jsx';
import Scene02SorryRain from '../scenes/Scene02SorryRain.jsx';
import Scene03SadMoment from '../scenes/Scene03SadMoment.jsx';
import Scene04FlowerDelivery from '../scenes/Scene04FlowerDelivery.jsx';
import Scene05Promises from '../scenes/Scene05Promises.jsx';
import Scene06LoveLetter from '../scenes/Scene06LoveLetter.jsx';
import { scenes } from '../data/storyContent.js';

const sceneComponents = [Scene01Intro, Scene02SorryRain, Scene03SadMoment, Scene04FlowerDelivery, Scene05Promises, Scene06LoveLetter];

export default function SceneController({ index, playthrough, onSwipe, playing, onTogglePlaying, onReplay }) {
  const pointerStart = useRef(null);
  const Scene = sceneComponents[index];

  const beginPointer = (event) => {
    if (event.target.closest('button')) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };
  const finishPointer = (event) => {
    if (!pointerStart.current) return;
    const dx = event.clientX - pointerStart.current.x;
    const dy = event.clientY - pointerStart.current.y;
    pointerStart.current = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) onSwipe(dx < 0 ? 1 : -1);
  };

  return <main className="story-experience" onPointerDown={beginPointer} onPointerUp={finishPointer} onPointerCancel={() => { pointerStart.current = null; }}>
    <div className="story-topline"><span>our little story</span><div className="scene-progress" aria-label={`Scene ${index + 1} of ${scenes.length}`}>{scenes.map((scene, itemIndex) => <i key={scene.id} className={itemIndex <= index ? 'is-lit' : ''}/>)}</div><span className="scene-count">{String(index + 1).padStart(2, '0')} <b>/</b> 06</span></div>
    <div className="scene-viewport"><AnimatePresence mode="wait" initial={false}><motion.div className={`story-scene scene-${scenes[index].id}`} key={`${scenes[index].id}-${playthrough}`} initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.015 }} transition={{ duration: .8, ease: 'easeInOut' }}><Scene/></motion.div></AnimatePresence></div>
    <div className="story-controls flex items-center justify-center" aria-label="Story controls">
      <button type="button" onClick={onTogglePlaying} aria-label={playing ? 'Pause story' : 'Resume story'} title={playing ? 'Pause story' : 'Resume story'}><span className={playing ? 'pause-symbol' : 'play-symbol'} aria-hidden="true"/>{playing ? 'pause' : 'resume'}</button>
      <button type="button" onClick={onReplay} aria-label="Replay our story" title="Replay our story"><span className="replay-symbol" aria-hidden="true">↻</span> replay</button>
    </div>
    <span className="swipe-hint" aria-hidden="true">swipe to revisit a moment <i>↔</i></span>
  </main>;
}
