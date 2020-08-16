import gsap from 'gsap';

type options = {
  opacity?: number;
  y?: number;
};

export const fadeIn = (element: string, options?: options) => {
  gsap.to(element, 3, {
    opacity: options?.opacity || 1,
    y: options?.y || 0,
    ease: 'expo.out',
    stagger: {
      amount: 0.7,
    },
  });
};

export const fadeOut = (element: string, options?: options) => {
  gsap.to(element, 1, {
    opacity: options?.opacity || 0,
    y: options?.y || 60,
    ease: 'power4.out',
  });
};
