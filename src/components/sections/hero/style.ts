import styled from 'styled-components';
import { Link } from 'gatsby';
import Section from '@components/section';
import Button from '@components/button';
import media from '@styles/media';

export const HeroSection = styled(Section)`
  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template: 2fr 1fr / 1fr 1fr;
  grid-template-areas:
    'content content'
    'footer footer';

  ${media.medium`
    grid-template: 1fr auto / 1fr 1fr;
    grid-template-areas:
      'content illustration'
      'footer footer';
  `}
`;

export const Content = styled.div`
  grid-area: content;
  align-self: center;
  text-align: center;

  ${media.medium`
    text-align: left;
  `}
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 1.1;
  opacity: 0;

  span {
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${media.large`
    font-size: 4rem; 
  `}
  ${media.xxl`
    font-size: 5rem; 
  `}
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 1rem 0 2rem 0;
  opacity: 0;

  ${media.large`
    font-size: 2rem; 
  `}
`;

export const StyledButton = styled(Button)`
  opacity: 0;
`;

export const ContactMe = styled(Link)`
  opacity: 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const DividerOr = styled.span`
  opacity: 0;
  margin: 0 10px;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
  &:after,
  &:before {
    content: '';
    width: 15px;
    height: 1px;
    background: ${({ theme }) => theme.text};
    vertical-align: middle;
    display: inline-block;
    opacity: 0.2;
    margin: 0 10px;
  }
`;

export const Illustration = styled.div`
  display: none;
  opacity: 0;

  grid-area: illustration;
  align-self: center;

  ${media.medium`
    display: block; 
  `}
`;

export const Footer = styled.div`
  grid-area: footer;
`;

export const FooterTitle = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  white-space: nowrap;
  opacity: 0;

  @keyframes animateLine {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  &:after {
    animation: animateLine 1500ms linear forwards;
    animation-delay: 1000ms;
    content: '';
    display: block;
    width: 0;
    height: 1px;
    margin-left: 20px;
    background: ${({ theme }) => theme.text};
    opacity: 0.1;
  }
`;

export const Tools = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  ${media.medium`
    flex-wrap: nowrap; 
  `}
`;

export const Tool = styled.li`
  width: 20%;
  & > svg {
    width: 60px;
  }
  height: 70px;
  ${media.medium`
    width: 60px;
    height: auto;
    & > svg {
      width: 100%;
    } 
  `}
  ${media.large`
    width: 70px;
  `}

  flex-shrink: 0;
  filter: grayscale(1);
  opacity: 0;
  animation-delay: ${({ animationOrder }: { animationOrder: number }) =>
    `${100 * animationOrder + 1000}ms`};

  ${Tools}.hero-fade-in & {
    animation: fadeInTool 250ms linear forwards;
  }

  @keyframes fadeInTool {
    from {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }
    to {
      opacity: 0.25;
      transform: translate3d(0, 0, 0);
    }
  }
`;
