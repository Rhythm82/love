const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 9) % 100}%`,
  delay: `${(index * 1.73) % 13}s`,
  duration: `${13 + (index % 6) * 2}s`,
  size: `${10 + (index % 4) * 5}px`,
  glyph: index % 3 === 0 ? '✦' : '♡',
}));

export default function FloatingHearts() {
  return <div className="ambient-particles" aria-hidden="true">{particles.map((particle) => <span key={particle.id} style={{ left: particle.left, animationDelay: particle.delay, animationDuration: particle.duration, fontSize: particle.size }}>{particle.glyph}</span>)}</div>;
}
