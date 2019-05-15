import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Poster from './Poster';
import Header from './Header';
import Title from './Title';
import Btn from './Button';

const Wrapper = styled.div`
  position: relative;
  max-width: 1360px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* ${({ Id }) => {
    if (Id % 2 === 0) {
      return `
        & > ${Container} {
          order: 2;
        }
      `;
    }
    return `
      & > ${Container} {
        order: 0;
      }
    `;
  }} */
`;

const LatestProjects = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

LatestProjects.propTypes = {
  children: PropTypes.node,
};

LatestProjects.Button = Btn;
LatestProjects.Poster = Poster;
LatestProjects.Header = Header;
LatestProjects.Title = Title;

export default LatestProjects;
