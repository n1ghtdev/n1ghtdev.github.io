const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

/* prettier-ignore */
export const device = {
  mobile:
    `(min-width: ${size.mobileS}px)
    and (max-width: ${size.mobileL}px)`,
  mobileLarge:
    `(min-width: ${size.mobileM}px)
    and (max-width: ${size.mobileL}px)`,
  tabletSmall:
    `(min-width: ${size.mobileL + 1}px)
    and (max-width: ${size.tablet - 1}px)`,
  tabletLandscape:
    `(min-width: ${size.tablet}px)
    and (max-width: ${size.laptop}px)
    and (orientation: landscape)`,
  tablet:
    `(min-width: ${size.tablet}px)
    and (max-width: ${size.laptop}px)`,
  laptop:
    `(min-width: ${size.laptop + 1}px)
    and (max-width: ${size.desktop}px)`,
  desktop: `(min-width: ${size.desktop + 1}px)`,
};

/*
export const device = {
  mobile: `(min-width: ${px(
    size.mobileS,
  )}) and (max-width: ${px(size.mobileL)})`,
  tabletSmall: `(min-width: ${px(
    size.mobileL + 1,
  )}) and (max-width: ${px(size.tablet - 1)})`,
  tabletLandscape: `(min-width: ${px(
    size.tablet,
  )}) and (max-width: ${px(
    size.laptop,
  )}) and (orientation: landscape)`,
  tablet: `(min-width: ${px(
    size.tablet,
  )}) and (max-width: ${px(size.laptop)})`,
  laptop: `(min-width: ${px(
    size.laptop + 1,
  )}) and (max-width: ${px(size.desktop)})`,
  desktop: `(min-width: ${px(size.desktop + 1)})`,
};
*/
