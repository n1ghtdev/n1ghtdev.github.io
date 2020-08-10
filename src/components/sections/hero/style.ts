import styled from 'styled-components';
import Section from '@components/section';
import Button from '@components/button';
import media from '@styles/media';

export const HeroSection = styled(Section)`
  height: calc(100vh - 100px);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template: 1fr auto / 1fr 1fr;
  grid-template-areas:
    'content content'
    'footer footer';

  ${media.medium`
    grid-template-areas:
      'content illustration'
      'footer footer';
  `}
`;

export const Content = styled.div`
  grid-area: content;
  align-self: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 900;
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
  ${media.xl`
    margin-top: 0;
  `}
`;

export const StyledButton = styled(Button)`
  opacity: 0;
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
  text-transform: uppercase;
  font-weight: 500;
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
    opacity: 0.2;
  }
`;

export const Tools = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
`;

export const Tool = styled.li`
  width: 100px;
  flex-shrink: 0;
  filter: grayscale(1);
  opacity: 0;
  animation-delay: ${({ animationOrder }: { animationOrder: number }) =>
    `${100 * animationOrder + 1000}ms`};

  /* prettier-ignore */
  ${Tools}.hero-fadeIn & {
    animation: fadeIn 250ms linear forwards;
  }

  @keyframes fadeIn {
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
