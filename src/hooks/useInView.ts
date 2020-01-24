import React from 'react';

const useInView = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): boolean => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (isInView) return;

    if (ref.current) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [options, ref, isInView]);

  return isInView;
};

export default useInView;
