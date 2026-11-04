import useTypingEffect from '../hooks/useTypingEffect.js';

export default function TypingText({ text, delay = 34, startDelay = 0, className = '' }) {
  const value = useTypingEffect(text, { delay, startDelay });
  return <span className={className} aria-label={text} aria-live="off">{value}<span className="typing-caret" aria-hidden="true" /></span>;
}
