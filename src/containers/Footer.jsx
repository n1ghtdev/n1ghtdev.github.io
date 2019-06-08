import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Span from '../components/Span';
import A from '../components/A';

const Wrapper = styled.footer`
  color: #000;
  margin-bottom: 30px;
  flex-shrink: 0;
`;

const Footer = () => (
  <Wrapper>
    <Grid>
      <Row alignItems="center" Padding="35px 0 0 0">
        <Col lg={12} textAlign="center">
          <Span FontSize="1.5rem" FontFamily="Roboto" FontWeight="thin">
            {'//////////////////////////////////////////////'} 2019 \\{' '}
            <A href="#">GITHUB/NICKEW</A>
          </Span>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);

export default Footer;
