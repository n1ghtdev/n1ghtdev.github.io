import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
  fontSize?: string;
  fontStyle?: string;
  children: string | React.ReactNode;
};

const Heading = styled.h1.attrs((props: HeadingProps) => ({
  as: props.as || 'h1',
}))`
  ${(props: HeadingProps) => `
    font-size: ${props.fontSize || 'initial'};
    font-style: ${props.fontStyle || 'initial'};
  `};
`;

export default Heading;
