import { THEME } from '@styles/theme';
import React, { FC } from 'react';
import styled from 'styled-components';

const Base = styled.div`
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
  return <Base>{children}</Base>;
};

export { Placeholder };
