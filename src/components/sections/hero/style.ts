import styled from 'styled-components';
import { Link } from 'gatsby';
import Section from '@components/section';
import Button from '@components/button';
import media from '@styles/media';
import { TEXT_SIZE_1, TEXT_SIZE_2, TEXT_SIZE_3, THEME } from '@styles/theme';

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
  font-size: ${TEXT_SIZE_2};
  opacity: 0;

  span {
    color: ${THEME.PRIMARY};
  }

  ${media.xxl`
    font-size: ${TEXT_SIZE_1}
  `}
`;

export const Subtitle = styled.h3`
  font-size: ${TEXT_SIZE_3};
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0;

  ${media.large`
    font-size: ${TEXT_SIZE_2};
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
  font-weight: bold;
  font-style: italic;
  &:after,
  &:before {
    content: '';
    width: 15px;
    height: 1px;
    background-color: ${THEME.LIGHT};
    vertical-align: middle;
    display: inline-block;
    opacity: 0.2;
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
