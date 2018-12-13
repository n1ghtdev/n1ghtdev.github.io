import React from 'react';
import Wrapper from '../components/Wrapper';
import { H1, H2 } from '../components/Headings';
import Header from '../components/Header';
import Section from '../components/Section';
import Particles from './Particles';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';

export default function App() {
  return (
    <Wrapper>
      <Header>
        
      </Header>
      <Section
        Height="460px"
        Background="linear-gradient(to top, rgb(26,37,51), rgb(29,26,51))" 
      >
        <Grid justify='center' alignItems='center' relative>
          <Row>
            <Col lg={6} xs={12}>
              <H1 Color="white">nickew</H1>
            </Col>
          </Row>
        </Grid>
        <Particles />
      </Section>
    </Wrapper>
  );
}

