import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2 } from '../../../components/Headings';
import { device } from '../../../breakpoints';

const SubTitle = styled(H2).attrs(() => ({
  Color: '#fff',
  FontWeight: 'normal',
  FontFamily: 'Merriweather',
}))`
  margin: 15px 0 25px 0;
  max-width: 500px;
  @media ${device.tablet} {
  }
  @media ${device.tabletSmall} {
  }
`;

SubTitle.propTypes = {
  children: PropTypes.any,
};

export default SubTitle;
