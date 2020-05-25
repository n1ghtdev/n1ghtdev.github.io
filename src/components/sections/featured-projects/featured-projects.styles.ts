import styled from 'styled-components';
import media from '@styles/media';
import Container from '@components/container';

export const Wrapper = styled(Container)`
  ${media.large`
    padding-top: 100px;
    padding-bottom: 100px;
  `}
  ${media.xxl`
    padding: 100px;
  `}
`;
