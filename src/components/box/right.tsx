import { SPACE_L } from '@styles/theme';
import styled from 'styled-components';

const BoxRight = styled.div<{ marginRight?: string }>`
  & > * {
    &:last-child {
      margin-right: 0;
    }
    margin-right: ${(props) => props.marginRight || SPACE_L};
  }
`;

export { BoxRight };
