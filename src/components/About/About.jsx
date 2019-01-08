import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const About = styled.div`
  background: linear-gradient(180deg, #171d24 0%, #111019 100%);
`;

About.propTypes = {
  children: PropTypes.any,
};

export default About;
