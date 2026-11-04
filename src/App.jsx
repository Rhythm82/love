import { MotionConfig } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import SceneController from './components/SceneController.jsx';
import StartScreen from './components/StartScreen.jsx';
import useStoryTimeline from './hooks/useStoryTimeline.js';

export default function App() {
  const story = useStoryTimeline();

  return <MotionConfig reducedMotion="user">
    <div className="app-shell relative min-h-screen overflow-hidden">
      <div className="cosmic-backdrop" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <FloatingHearts/>
      <div className={`music-dock ${story.started ? 'is-story' : ''}`}><MusicPlayer/></div>
      {!story.started ? <StartScreen onStart={story.start}/> : <SceneController index={story.sceneIndex} playthrough={story.playthrough} onSwipe={(direction) => story.goToScene(story.sceneIndex + direction)} playing={story.playing} onTogglePlaying={story.togglePlaying} onReplay={story.replay}/>}
    </div>
  </MotionConfig>;
}
