import styled from 'styled-components';
import { fadeInUpShort } from '@styles/animations';
import media from '@styles/media';

export const Wrapper = styled.article`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.secondary};

  visibility: hidden;
  opacity: 0;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &.visible {
    visibility: visible;
    animation: ${fadeInUpShort} 250ms forwards linear;
    animation-delay: 500ms;
  }

  ${media.xl`
    width: calc(33% - 10px);
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${({ theme }: { theme: any }) => theme.text};
  font-size: 16px;
`;

export const Description = styled.p`
  animation: ${fadeInUpShort} 250ms forwards linear;
`;

export const Tags = styled.ul`
  display: inline-flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 5px;
  opacity: 0.7;
  &:last-child {
    margin-right: 0;
  }
`;

export const Content = styled.div``;
