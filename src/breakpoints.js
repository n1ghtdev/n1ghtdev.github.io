const size = {
  mobileSmall: 320,
  mobileLarge: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

const getBreakpoint = breakpoint => `${breakpoint}px`;

export const device = {
  mobile: `(min-width: ${getBreakpoint(
    size.mobileSmall
  )}) and (max-width: ${getBreakpoint(size.mobileLarge)})`,
  tabletSmall: `(min-width: ${getBreakpoint(
    size.mobileLarge + 1
  )}) and (max-width: ${getBreakpoint(size.tablet - 1)})`,
  tabletLandscape: `(min-width: ${getBreakpoint(
    size.tablet
  )}) and (max-width: ${getBreakpoint(
    size.laptop
  )}) and (orientation: landscape)`,
  tablet: `(min-width: ${getBreakpoint(
    size.tablet
  )}) and (max-width: ${getBreakpoint(size.laptop)})`,
  laptop: `(min-width: ${getBreakpoint(
    size.laptop + 1
  )}) and (max-width: ${getBreakpoint(size.desktop)})`,
  desktop: `(min-width: ${getBreakpoint(size.desktop + 1)})`,
};
