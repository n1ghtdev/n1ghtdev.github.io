import React from 'react';
import styled from 'styled-components';
import RoundLogotype from 'svg-react-loader!../assets/svg/round-logotype.svg';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Span from '../components/Span';
import { device } from '../breakpoints';

const Wrapper = styled.footer`
  position: relative;
  color: #000;
  padding: 15px 0;
  flex-shrink: 0;
  @media ${device.mobile} {
    padding: 15px 0;
  }
`;

const StyledGrid = styled(Grid)`
  text-align: center;
`;

const StyledLogotype = styled(RoundLogotype)`
  margin: 0 10px;
  transform: scale(0.75);
  circle {
    fill: #d1d1d1;
  }
  path {
    stroke: #fff;
  }
`;

const Footer = () => (
  <Wrapper>
    <StyledGrid>
      <Row justifyContent="center" alignItems="center">
        <Span
          Color="#d1d1d1"
          FontSize="1.5rem"
          FontFamily="Merriweather"
          FontWeight="400"
          FontStyle="italic"
        >
          nickew
        </Span>
        <StyledLogotype />
        <Span
          Color="#d1d1d1"
          FontSize="1.5rem"
          FontFamily="Merriweather"
          FontWeight="400"
          FontStyle="italic"
        >
          2019
        </Span>
      </Row>
    </StyledGrid>
  </Wrapper>
);

export default Footer;
