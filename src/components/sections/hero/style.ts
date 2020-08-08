import styled from 'styled-components';
import Section from '@components/section';
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

  ${media.large`
    font-size: 2rem; 
  `}
  ${media.xl`
    margin-top: 0;
  `}
`;

export const Illustration = styled.div`
  display: none;
  grid-area: illustration;
  align-self: center;

  svg {
    width: 100%;
  }

  ${media.medium`
    display: block; 
  `}
`;

export const Footer = styled.div`
  grid-area: footer;
`;

export const FooterTitle = styled.p`
  opacity: 0.5;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:after {
    content: '';
    display: block;
    flex: 1;
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
`;

export const Tool = styled.li`
  width: 100px;
  flex-shrink: 0;
  filter: grayscale(1);
  opacity: 0.25;
`;
