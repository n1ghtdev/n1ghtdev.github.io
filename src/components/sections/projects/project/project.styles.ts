import styled from 'styled-components';
import { fadeInDownShort, fadeInUpShort } from '@styles/animations';

export const Wrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-top: none;

  visibility: hidden;
  opacity: 0;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.secondary};
  }

  &.visible {
    visibility: visible;
    animation: ${fadeInUpShort} 250ms forwards linear;
    animation-delay: 500ms;
    &:nth-child(2n) {
      animation: ${fadeInDownShort} 250ms forwards linear;
      animation-delay: 500ms;
    }
  }
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 250ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }: { theme: any }) => theme.text};
  font-size: 16px;
`;

export const Description = styled.p`
  animation: ${fadeInUpShort} 250ms forwards linear;
`;

export const Tools = styled.ul`
  display: inline-flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const Tool = styled.li`
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 5px;
  opacity: 0.7;
  &:last-child {
    margin-right: 0;
  }
`;

export const ProjectInnerContent = styled.div`
  max-height: ${({ open }: { open: boolean }) => (open ? '500px' : '0')};
  overflow: hidden;
  /* visibility: ${({ open }: { open: boolean }) =>
    open ? 'visible' : 'hidden'}; */
  transition: max-height 500ms;
`;
