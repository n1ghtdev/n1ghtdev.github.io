import React from 'react';

const useRaf = (callback: () => void, isActive: boolean) => {
  const raf = React.useRef<number | null>(null);

  const stop = () => {
    raf.current && cancelAnimationFrame(raf.current);
  };

  React.useEffect(() => {
    const tick = () => {
      loop();
      callback();
    };

    const loop = () => {
      raf.current = requestAnimationFrame(tick);
    };

    isActive && loop();

    return stop;
  }, [isActive, callback]);

  return stop;
};

export default useRaf;
