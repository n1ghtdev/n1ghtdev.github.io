import styled from 'styled-components';
import media from '@styles/media';

export const Wrapper = styled.div`
  ${media.large`
    padding-top: 100px;
    padding-bottom: 100px;
  `}
  ${media.xxl`
    padding: 100px;
  `}
`;
