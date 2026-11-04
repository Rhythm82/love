import { useRef, useState } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';

const musicSource = `${import.meta.env.BASE_URL}music/romantic.mp3`;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setUnavailable(false);
      setPlaying(true);
    } catch {
      setUnavailable(true);
      setPlaying(false);
    }
  };

  return <>
    <audio ref={audioRef} src={musicSource} loop preload="none" onError={() => { setUnavailable(true); setPlaying(false); }}/>
    <button className="music-control" onClick={toggle} type="button" aria-label={playing ? 'Turn music off' : unavailable ? 'Music file is not available' : 'Turn music on'} title={unavailable ? 'Place romantic.mp3 in public/music to enable music' : playing ? 'Turn music off' : 'Turn music on'}>
      {unavailable ? <VolumeX size={16}/> : playing ? <Volume2 size={16}/> : <Music2 size={16}/>}
      <span>{unavailable ? 'music unavailable' : playing ? 'music on' : 'music off'}</span>
      <i className={playing ? 'music-status is-playing' : 'music-status'}/>
    </button>
  </>;
}
