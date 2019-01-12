import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

const Button = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  overflow: hidden;
  
  text-decoration: none;
  background: #889FB0;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
`;

const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  background: #154883;
  transform: translateX(-100%);
  transition: all .5s;

  ${Button}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 10;
  display: block;
  color: #fff;
  font-size: 2rem;
  transition: all .5s;

  ${Button}:hover & {
    transform: translateX(30%);
  }
`;

const MoreProjects = ({ children, to }) => (
  <Wrapper>
    <Button to={to}>
      <Text>{children}</Text>
      <Hover />
    </Button>
  </Wrapper>
);

MoreProjects.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
};

export default MoreProjects;
