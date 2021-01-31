import { SPACE_M } from '@styles/theme';
import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  marginBottom?: string;
};

const FlexBottom = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
    margin-bottom: ${(props) => props.marginBottom || SPACE_M};
  }
`;

export { FlexBottom };
