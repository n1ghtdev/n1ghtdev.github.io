import React from 'react';

type Props = {};

const useInView = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit,
  once?: boolean
): boolean => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (isInView && once) return;

    if (ref.current) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [options, ref, isInView, once]);

  return isInView;
};

export default useInView;
