import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Span from '../components/Span';
import A from '../components/A';
import { device } from '../breakpoints';

const Wrapper = styled.footer`
  color: #000;
  padding: 30px 0;
  flex-shrink: 0;
  @media ${device.mobile} {
    padding: 15px 0;
  }
`;

const StyledGrid = styled(Grid)`
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <StyledGrid>
      <Row justifyContent="center">
        <Span FontSize="1.5rem" FontFamily="Roboto" FontWeight="thin">
          {'///////////////////////////////////////////'}
        </Span>
        <Span FontSize="1.5rem" FontFamily="Roboto" FontWeight="thin">
          2019 \\ <A href="#">NICKEW</A>
        </Span>
      </Row>
    </StyledGrid>
  </Wrapper>
);

export default Footer;
