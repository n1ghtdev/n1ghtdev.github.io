import { SPACE_M } from '@styles/theme';
import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  marginRight?: string;
};

const FlexRight = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  & > * {
    &:last-child {
      margin-right: 0;
    }
    margin-right: ${(props) => props.marginRight || SPACE_M};
  }
`;

export { FlexRight };
