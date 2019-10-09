import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2 } from '../../../components/Headings';
import { device } from '../../../breakpoints';

const Title = styled(H2).attrs(props => ({
  Color: props.theme.primaryColor,
  FontFamily: 'Merriweather',
  FontSize: '2rem',
  FontStyle: 'italic',
}))`
  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

Title.propTypes = {
  children: PropTypes.any,
};

export default Title;
