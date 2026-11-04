const particles = Array.from({ length: 132 }, (_, index) => {
  const position = (index * 47 + 9) % 100;
  const rotation = (index * 19) % 46 - 23;
  const duration = 7 + (index * 11 % 80) / 10;
  const delay = -((index * 17) % 90) / 10;
  const size = 9 + (index * 13 % 13);
  const colors = ['#f5a9cb', '#bca5f5', '#fff5fc'];
  return { id: index, position, rotation, duration, delay, size, color: colors[index % colors.length] };
});

export default function SorryRain() {
  return <div className="sorry-rain" aria-hidden="true">{particles.map((particle) => <span key={particle.id} style={{ left: `${particle.position}%`, fontSize: `${particle.size}px`, color: particle.color, animationDuration: `${particle.duration}s`, animationDelay: `${particle.delay}s`, '--tilt': `${particle.rotation}deg` }}>SORRY</span>)}</div>;
}
