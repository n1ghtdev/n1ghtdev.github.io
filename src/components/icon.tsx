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

    &:hover {
      fill: ${({ isDisabled, theme }: { isDisabled: boolean; theme: any }) =>
        isDisabled ? theme.secondary : '#fff'};
    }
  }
`;

function Icon(props: Props) {
  return <SvgWrapper isDisabled={props.isDisabled}>{props.icon}</SvgWrapper>;
}

export default Icon;
