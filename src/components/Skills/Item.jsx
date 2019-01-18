import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li``;

const Title = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 10px;
    width: 6px;
    height: 6px;
    background: #5C7A9E;
    border-radius: 50%;
  }
`;

const Description = styled.p`
  color: #fff;
`;

const Item = ({ title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Item;
