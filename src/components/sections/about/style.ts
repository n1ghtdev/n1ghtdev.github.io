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

export const Socials = styled.ul`
  margin-top: 20px;
`;

export const Social = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: underline;
    }
    & > svg {
      width: 32px;
      height: 32px;
    }
    & > span {
      margin-left: 10px;
    }
  }
`;
