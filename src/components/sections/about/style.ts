import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  grid-template-areas:
    'title title'
    'illustration content';
`;

export const Title = styled.h2`
  grid-area: title;
  margin-bottom: 40px;
`;

export const Illustration = styled.div`
  grid-area: illustration;
`;

export const Content = styled.div`
  align-self: center;
  grid-area: content;
  padding-left: 80px;
  line-height: 1.6;
  text-align: justify;

  p {
    margin-bottom: 20px;
  }
`;
