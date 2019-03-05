import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tool = styled.li`
  display: block;
  color: #000;
  font-size: 5rem;
  text-align: center;
  flex-basis: 25%;
  list-style-type: none;
  padding-bottom: 20px;
`;

Tool.propTypes = {
  children: PropTypes.node,
};

export default Tool;
