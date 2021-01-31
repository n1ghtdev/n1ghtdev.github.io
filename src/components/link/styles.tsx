import { SPACE_L, SPACE_M } from '@styles/theme';
import { css } from 'styled-components';

const LinkBase = css`
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  display: inline-block;
  padding: ${SPACE_M} ${SPACE_L};
  position: relative;

  &:hover:before {
    opacity: 1;
  }

  &:before {
    content: '';
    opacity: 0;
    transition-duration: 300ms;
    transition-property: opacity;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: inherit;
    filter: blur(10px);
    transform: translate3d(0, 0, 0);
    z-index: -1;
  }
`;

export { LinkBase };
