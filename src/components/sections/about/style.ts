import styled from 'styled-components';
import media from '@styles/media';

export const Wrapper = styled.div`
  padding-bottom: 100px;
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  grid-template-areas:
    'title title'
    'content content';

  ${media.large`
    grid-template-areas:
      'title title'
      'illustration content';
    `}
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 2rem;
  margin-bottom: 40px;
  opacity: 0;
`;

export const Illustration = styled.div`
  display: none;
  grid-area: illustration;
  opacity: 0;

  ${media.large`
    display: block;
  `}
`;

export const Content = styled.div`
  align-self: center;
  grid-area: content;
  line-height: 1.6;
  text-align: justify;
  opacity: 0;

  ${media.large`
    padding-left: 80px;
  `}

  p {
    margin-bottom: 20px;
  }
`;

export const SocialList = styled.ul``;

export const SocialItem = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.text};
    margin-right: 10px;
    vertical-align: middle;
    margin-top: -2px;
  }
  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;
