import styled from 'styled-components';
import { fadeInUp } from '@styles/animations';

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: ${({ theme }: { theme: any }) => theme.text};

  opacity: 0;
  visibility: hidden;

  &.visible {
    visibility: visible;
    animation: ${fadeInUp} 250ms forwards linear;
    animation-delay: 250ms;
  }
`;

export const List = styled.div``;
