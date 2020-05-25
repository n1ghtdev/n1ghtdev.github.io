import styled from 'styled-components';
import { fadeIn, fadeInUp, fadeInRight } from '@styles/animations';
import media from '@styles/media';
import Container from '@components/container';

export const Wrapper = styled(Container)`
  padding-top: 50px;
  padding-bottom: 100px;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin-bottom: 40px;
  opacity: 0;
  visibility: hidden;

  ${Wrapper}.visible & {
    visibility: visible;
    animation: ${fadeInUp} 250ms forwards linear;
    animation-delay: 250ms;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;

  font-size: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 1000;
  color: ${({ theme }: { theme: any }) => theme.text};
`;

export const Subtitle = styled.p``;

export const FlexContainer = styled.div`
  display: block;
  opacity: 0;
  visibility: hidden;

  ${media.xl`
    display: flex;
  `}

  ${Wrapper}.visible & {
    visibility: visible;
    animation: ${fadeIn} 250ms forwards linear;
    animation-delay: 250ms;
  }
`;

export const Aside = styled.aside`
  display: block;
  flex-shrink: 0;
  width: 100%;

  opacity: 0;
  visibility: hidden;

  ${Wrapper}.visible & {
    visibility: visible;
    animation: ${fadeInRight} 250ms forwards linear;
    animation-delay: 250ms;
  }

  ${media.xl`
    max-width: 320px;
    margin-right: 20px;
  `}
  ${media.xxl`
    max-width: 460px;
    margin-right: 40px;
  `}
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.xl`
    margin: -5px;
  `}
  ${media.xxl`
    margin: -10px;
  `}
`;

export const LoadMore = styled.button`
  display: block;
  margin: 50px auto 0 auto;

  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 30px;
  border: 1px solid transparent;

  cursor: pointer;
  transition: all 250ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.secondary};
  }
`;
