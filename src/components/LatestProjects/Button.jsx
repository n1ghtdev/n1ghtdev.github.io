import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 40px;
`;

const Button = styled(Link)`
  display: block;
  background: hsl(244, 44%, 20%);
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px 30px;
  transition: all .25s;
  position: relative;
  overflow: hidden;
  font-family: 'Lobster Two', cursive;
  &:hover {
    background: hsl(244, 44%, 15%);
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
