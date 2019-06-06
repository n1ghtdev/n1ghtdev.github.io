import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3 } from './Headings';

const Wrapper = styled.div`
  position: relative;
  height: 510px;
  margin: 0 50px;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
  position: absolute;
  left: -17px;
  top: -17px;
  width: 110%;
`;

const Description = styled.div`
  padding: 130px 10px 0 10px;
  font-size: 1.125rem;
  text-indent: 2rem;
`;

const Card = ({ children, title, bgColor }) => (
  <Wrapper bgColor={bgColor}>
    <Title>
      <H3
        LineHeight="90%"
        FontSize="4rem"
        Color="#fff"
        FontFamily="Merriweather"
        FontWeight="900"
        FontStyle="italic"
      >
        {title}
      </H3>
    </Title>
    <Description>{children}</Description>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  bgColor: PropTypes.string,
};

export default Card;
