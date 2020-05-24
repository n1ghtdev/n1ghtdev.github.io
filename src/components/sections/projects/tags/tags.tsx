import styled from 'styled-components';
import media from '@styles/media';

const Tags = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;

  ${media.xl`
    margin: 20px -1px 0 -1px;
  `}
  ${media.xxl`
    margin: 20px -2px 0 -2px;
  `}
`;

export default Tags;
