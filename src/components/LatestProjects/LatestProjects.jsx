import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';
import Poster from './Poster';
import Header from './Header';
import Title from './Title';
import Btn from './Button';

const Wrapper = styled.main`
  max-width: 1360px;
  margin: 0 auto;
  padding-bottom: 200px;
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
LatestProjects.Item = Item;
LatestProjects.Poster = Poster;
LatestProjects.Header = Header;
LatestProjects.Title = Title;

export default LatestProjects;
