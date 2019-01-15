export const calcParallax = (startX = 100, startY, endY) => {
  const diff = endY - startY;
  const currentY = window.scrollY;
  const multiplier = (startX * 2) / diff;

  if (currentY - startY > 0 && currentY - startY < diff) {
    return -startX + (multiplier * (currentY - startY));
  } else if (currentY - startY < 0) {
    return -startX;
  } else if (currentY - startY > diff) {
    return startX;
  }
};
