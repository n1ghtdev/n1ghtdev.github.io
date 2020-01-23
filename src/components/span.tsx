import React from 'react';
import styled from 'styled-components';

type SpanProps = {
  block?: boolean;
  color?: string;
  children: string | React.ReactNode;
};

const Span = styled.span`
  ${(props: SpanProps & { theme: any }) => `
    display: ${props.block ? 'inline-block' : 'initial'};
    color: ${props.color ? props.theme[props.color] : 'inherit'};
  `}
  font-size: inherit;
`;

export default Span;
