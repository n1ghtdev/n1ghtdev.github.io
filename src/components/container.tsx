import styled from 'styled-components';
import media from '@styles/media';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  
  ${media.small`
    max-width: 576px;
  `}
  ${media.medium`
    max-width: 768px;
    padding: 0 15px;
  `}
  ${media.large`
    max-width: 992px;
  `}
  ${media.xl`
    max-width: 1030px;
  `}
  ${media.xxl`
    max-width: 1400px;
  `}
  @media screen and (max-width: 330px) {
    padding: 0 5px;
  }
`;

export default Container;
