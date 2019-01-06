import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Logotype from '../../components/Logotype';
import Particles from '../Particles';
import Socials from '../../components/Socials';
import NkSvg from '../../components/Logotype/NkSvg';
import ScrolldownHint from '../../components/ScrolldownHint';
import Link from '../../components/Link';
import Line from '../../components/Line';

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgLines: {
        mouseX: 0,
        mouseY: 0,
      },
    };

    this.onMouseMove = this.onMouseMove.bind(this);
  }
  onMouseMove(e) {
    this.setState({ svgLines: {mouseX: e.screenX, mouseY: e.screenY} });
  }
  render() {
    const { svgLines } = this.state;
    const { mouseX, mouseY } = svgLines;
    return (
      <Header onMouseMove={this.onMouseMove}>
        <Grid relative flex>
          <Line vertical color="#25282D" />
          <Line vertical color="#25282D" align="center" />
          <Line vertical color="#25282D" align="right" />
          <Row Height={50} alignItems="center">
            <Col lg={12} textAlign="right">
              <Link
                Style="grey"
                href="https://github.com/Nickew/nickew.github.io"
                target="_blank"
              >
                nickew.github.io
              </Link>
            </Col>
          </Row>
          <Row FlexProps="1" alignItems="center">
            <Col lg={11} md={11} sm={11}>
              <Logotype>
                <NkSvg mouseX={mouseX} mouseY={mouseY} />
              </Logotype>
            </Col>
            <Col lg={1} md={1} sm={1}>
              <Socials />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <ScrolldownHint />
            </Col>
          </Row>
        </Grid>
      </Header>
    );
  }
};

export default HeaderSection;
