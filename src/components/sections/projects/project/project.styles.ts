import styled from 'styled-components';
import { fadeInUpShort } from '@styles/animations';
import media from '@styles/media';

export const Wrapper = styled.article`
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  min-height: 200px;

  width: 100%;
  padding: 5px 15px 15px 15px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.secondary};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  ${media.medium`
    width: calc(1/2 * 100% - 10px);
    margin: 5px;
  `}
  ${media.xxl`
    width: calc(1/3 * 100% - 20px);
    margin: 10px;
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  color: ${({ theme }: { theme: any }) => theme.text};
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 1000;
`;

export const Description = styled.p`
  animation: ${fadeInUpShort} 250ms forwards linear;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Tags = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;

  list-style-type: none;
`;

export const Tag = styled.li`
  margin-right: 10px;
  margin-bottom: 5px;

  color: ${({ theme }: { theme: any }) => theme.primary};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
`;

export const Content = styled.div``;
