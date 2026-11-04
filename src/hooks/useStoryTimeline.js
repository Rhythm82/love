import { useCallback, useEffect, useRef, useState } from 'react';
import { scenes } from '../data/storyContent.js';

export default function useStoryTimeline() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [playthrough, setPlaythrough] = useState(0);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const remainingRef = useRef(null);
  const deadlineRef = useRef(0);
  const discardRemainingRef = useRef(false);
  const timerFinishedRef = useRef(false);

  useEffect(() => {
    if (!started || !playing || sceneIndex >= scenes.length - 1) return undefined;

    const duration = remainingRef.current ?? scenes[sceneIndex].duration;
    remainingRef.current = null;
    deadlineRef.current = Date.now() + duration;
    const timer = window.setTimeout(() => {
      timerFinishedRef.current = true;
      remainingRef.current = null;
      setSceneIndex((index) => Math.min(index + 1, scenes.length - 1));
    }, duration);

    return () => {
      window.clearTimeout(timer);
      if (timerFinishedRef.current) {
        timerFinishedRef.current = false;
        discardRemainingRef.current = false;
        remainingRef.current = null;
      } else if (discardRemainingRef.current) {
        discardRemainingRef.current = false;
      } else {
        remainingRef.current = Math.max(0, deadlineRef.current - Date.now());
      }
    };
  }, [sceneIndex, playing, started, playthrough]);

  const goToScene = useCallback((nextIndex) => {
    discardRemainingRef.current = true;
    remainingRef.current = null;
    setSceneIndex(Math.max(0, Math.min(scenes.length - 1, nextIndex)));
  }, []);

  const start = useCallback(() => {
    setSceneIndex(0);
    remainingRef.current = null;
    setPlaying(true);
    setStarted(true);
  }, []);

  const replay = useCallback(() => {
    discardRemainingRef.current = true;
    setSceneIndex(0);
    setPlaythrough((value) => value + 1);
    remainingRef.current = null;
    setPlaying(true);
    setStarted(true);
  }, []);

  const togglePlaying = useCallback(() => setPlaying((value) => !value), []);

  return { sceneIndex, playthrough, started, playing, start, replay, togglePlaying, goToScene };
}
