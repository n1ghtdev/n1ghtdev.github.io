import { THEME } from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0;
`;

export const Subtitle = styled.span`
  display: inline-block;
  opacity: 0;
`;

export const List = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    height: 6px;
    background-color: ${THEME.DARK};
  }
  &::-webkit-scrollbar-thumb {
    height: 6px;
    background-color: ${THEME.NEUTRAL};
    border-radius: 4px;
  }
  // opacity: 0;
`;
