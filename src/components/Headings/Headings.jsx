import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.span`
  color: ${({ Color }) => Color || '#000'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}!important`};
  font-style: ${({ fontStyle }) => fontStyle};
`;

const H1 = Heading.withComponent('h1').extend`
  font-size: 2rem;
`;

const H2 = Heading.withComponent('h2').extend`
  font-size: 1.5rem;
`;

const H3 = Heading.withComponent('h3').extend`
  font-size: 1.17rem;
`;

const H4 = Heading.withComponent('h4').extend`
  font-size: 1.12rem;
`;

const H5 = Heading.withComponent('h5').extend`
  font-size: .83rem;
`;

const H6 = Heading.withComponent('h6').extend`
  font-size: .75rem;
`;

const listOfHeadings = [H1, H2, H3, H4, H5, H6];

listOfHeadings.forEach(heading => {
  heading.propTypes = {
    Color: PropTypes.string,
    children: PropTypes.any,
    fontSize: PropTypes.string,
    fontStyle: PropTypes.string,
    fontWeight: PropTypes.string,
  };
});

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

