import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.span`
  color: ${(props) => props.hColor || 'black' };
  font-weight: bold;
`;

const H1Wrapper = Heading.withComponent('h1').extend`
  font-size: 2rem;
`;

const H2Wrapper = Heading.withComponent('h2').extend`
  font-size: 1.5rem;
`;

const H3Wrapper = Heading.withComponent('h3').extend`
  font-size: 1.17rem;
`;

const H4Wrapper = Heading.withComponent('h4').extend`
  font-size: 1.12rem;
`;

const H5Wrapper = Heading.withComponent('h5').extend`
  font-size: .83rem;
`;

const H6Wrapper = Heading.withComponent('h6').extend`
  font-size: .75rem;
`;

const H1 = ({ hColor, children }) => (
  <H1Wrapper hColor={hColor}>{ children }</H1Wrapper>
);

const H2 = ({ hColor, children }) => (
  <H2Wrapper hColor={hColor}>{ children }</H2Wrapper>
);

const H3 = ({ hColor, children }) => (
  <H3Wrapper hColor={hColor}>{ children }</H3Wrapper>
);

const H4 = ({ hColor, children }) => (
  <H4Wrapper hColor={hColor}>{ children }</H4Wrapper>
);

const H5 = ({ hColor, children }) => (
  <H5Wrapper hColor={hColor}>{ children }</H5Wrapper>
);

const H6 = ({ hColor, children }) => (
  <H6Wrapper hColor={hColor}>{ children }</H6Wrapper>
);

H1.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

H2.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

H3.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

H4.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

H5.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

H6.propTypes = {
  hColor: PropTypes.string,
  children: PropTypes.any,
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
