import React from 'react';
import styled from 'styled-components';

type Props = {
  icon: React.ReactNode;
  isDisabled: boolean;
};

const SvgWrapper = styled.i`
  & > svg {
    fill: ${({ isDisabled, theme }: { isDisabled: boolean; theme: any }) =>
      isDisabled ? theme.secondary : '#fff'};

    transition: fill 250ms;

    &:hover {
      fill: ${({ isDisabled, theme }: { isDisabled: boolean; theme: any }) =>
        isDisabled ? theme.secondary : theme.primary};
    }
  }
`;

function Icon(props: Props) {
  return <SvgWrapper isDisabled={props.isDisabled}>{props.icon}</SvgWrapper>;
}

export default Icon;
