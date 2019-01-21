import PropTypes from 'prop-types';
import styled from 'styled-components';

const Projects = styled.section`
  position: relative;
  padding-top: 25px;
  margin: 0 100px;
  display: inherit;
  flex-wrap: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex: auto;
`;

Projects.propTypes = {
  children: PropTypes.any,
};

export default Projects;
