import styled from 'styled-components';
import { fadeInDownShort, fadeInUpShort } from '@styles/animations';

export const Wrapper = styled.article`
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  /* background-color: ${({ theme }: { theme: any }) => theme.contrastLow}; */
  padding: 20px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  visibility: hidden;
  opacity: 0;

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

export const Content = styled.header`
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  color: ${({ theme }: { theme: any }) => theme.text};
`;

export const Description = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.35;

  a:hover {
    text-decoration: underline;
  }
`;

export const Date = styled.div`
  margin-top: 3px;
  font-size: 14px;
  float: right;
`;

export const LinkWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > a {
    vertical-align: middle;
    fill: ${({ theme }: { theme: any }) => theme.text};
    transition: fill 250ms;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:hover {
      fill: ${({ theme }: { theme: any }) => theme.text};
    }
  }
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
