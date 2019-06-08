import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from '../../../components/Headings';
import { device } from '../../../breakpoints';

const Title = styled(H1).attrs(() => ({
  Color: '#fff',
  FontSize: '4.5rem',
  FontWeight: 'normal',
  FontFamily: 'Ubuntu',
}))`
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.tabletSmall} {
    font-size: 2rem;
  }
`;

Title.propTypes = {
  children: PropTypes.any,
};

export default Title;
