import { THEME } from '@styles/theme';
import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: inherit;
  background-color: ${THEME.NEUTRAL};
  height: 100%;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placeholder: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export { Placeholder };
