const petals = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 7) % 100}%`,
  delay: `${(index * .57) % 7}s`,
  duration: `${8 + (index % 5) * 1.4}s`,
  drift: `${((index * 13) % 90) - 45}px`,
  size: `${7 + (index % 4) * 2}px`,
}));

export default function FlowerPetals({ burst = false }) {
  return <div className={`petal-field ${burst ? 'petal-burst' : ''}`} aria-hidden="true">{petals.map((petal) => <i key={petal.id} style={{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration, '--drift': petal.drift, width: petal.size, height: `calc(${petal.size} * 1.45)` }}/>)}</div>;
}
