import React from 'react';
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';

function useAnimation(ref: React.RefObject<HTMLElement>, className: string) {
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  React.useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn(`.${className}`);
    }
  }, [intersection, className]);
}

export default useAnimation;
