import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function useTypingEffect(text, { delay = 34, startDelay = 0 } = {}) {
  const [value, setValue] = useState('');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setValue('');
    if (reduceMotion) {
      setValue(text);
      return undefined;
    }

    let index = 0;
    let interval;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setValue(text.slice(0, index));
        if (index >= text.length) window.clearInterval(interval);
      }, delay);
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text, delay, startDelay, reduceMotion]);

  return value;
}
