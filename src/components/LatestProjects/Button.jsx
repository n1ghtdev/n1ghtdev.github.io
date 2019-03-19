import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 40px;
`;

const Button = styled(Link)`
  display: block;
  background: transparent;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 15px 45px;
  transition: all .25s;
  position: relative;
  overflow: hidden;
  line-height: 1;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: transform .25s ease-out;
  }
  &:before {
    left: -25%;
    top: 0;
  }
  &:after {
    left: 25%;
    bottom: 0;
  }
  &:hover {
    &:before {
      transform: translateX(50%) rotate(90deg);
    }
    &:after {
      transform: translateX(-50%) rotate(90deg);
    }
  }
`;

const Btn = (props) => (
  <Container>
    <Button {...props}>{props.children}</Button>
  </Container>
);

Btn.propTypes = {
  children: PropTypes.any,
};

export default Btn;
