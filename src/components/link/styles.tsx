import { SPACE_L, SPACE_M } from '@styles/theme';
import { css } from 'styled-components';

const LinkBase = css`
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  display: inline-block;
  padding: ${SPACE_M} ${SPACE_L};
`;

export { LinkBase };
