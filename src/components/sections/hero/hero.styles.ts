import styled from 'styled-components';

import Container from '@components/container';
import Button from '@components/button';
import { fadeInUpShort, fadeInDownShort } from '@styles/animations';
import media from '@styles/media';

export const Wrapper = styled.div`
  height: calc(100vh - 50px);
  margin: 50px 0;
  background: url(https://i.imgur.com/hbOw3jv.png);
`;

export const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.xxl`
    padding: 0 200px;
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const Buttons = styled.div`
  margin-top: 50px;
  animation: ${fadeInDownShort} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;

  ${media.medium`
    margin-top: 30px;
  `}
`;

export const EmailButton = styled(Button)`
  display: block;
  margin: 0 30px 30px 30px;

  ${media.medium`
    display: inline-block;
    margin: 0 30px 0 0;
  `}
`;

export const GithubButton = styled(Button)`
  display: block;
  margin: 0 30px;

  ${media.medium`
    display: inline-block;
    margin: 0;
  `}
`;

export const Header = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 20px;
  font-size: 32px;

  ${media.small`
    font-size: 48px;
  `}
  ${media.medium`
    font-size: 72px;
  `}
  ${media.large`
    font-size: 80px;
  `}
  ${media.xl`
    font-size: 96px;
  `}
`;

export const Title = styled.h1`
  font-size: inherit;
  font-weight: inherit;

  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;
`;

export const Specialization = styled.h2`
  font-size: inherit;
  font-weight: inherit;

  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;

  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;

  ${media.medium`
    font-size: 24px;
  `}
`;
