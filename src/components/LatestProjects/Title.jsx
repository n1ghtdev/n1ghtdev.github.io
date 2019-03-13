import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h3`
  font-family: 'Lobster Two', cursive;
  font-weight: normal;
  font-size: 2rem;
  line-height: 1.5;
  &:after {
    content: '';
    width: 60px;
    height: 12px;
    display: block;
    margin: 5px auto 10px auto;
    background: url(src/assets/svg/hr.svg) no-repeat;
  }
`;

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
