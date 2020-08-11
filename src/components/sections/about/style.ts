import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 100px;
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  grid-template-areas:
    'title title'
    'illustration content';
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 2rem;
  margin-bottom: 40px;
  opacity: 0;
`;

export const Illustration = styled.div`
  grid-area: illustration;
  opacity: 0;
`;

export const Content = styled.div`
  align-self: center;
  grid-area: content;
  padding-left: 80px;
  line-height: 1.6;
  text-align: justify;
  opacity: 0;

  p {
    margin-bottom: 20px;
  }
`;
