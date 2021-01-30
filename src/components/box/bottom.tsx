import { SPACE_L } from '@styles/theme';
import styled from 'styled-components';

const BoxBottom = styled.div<{ marginBottom?: string }>`
  & > * {
    &:last-child {
      margin-bottom: 0;
    }
    margin-bottom: ${(props) => props.marginBottom || SPACE_L};
  }
`;

export { BoxBottom };
