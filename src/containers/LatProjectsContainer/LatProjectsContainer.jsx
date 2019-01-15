import React from 'react';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Line from '../../components/Line';
import LatestProjects from '../../components/LatestProjects';
import WideButton from '../../components/WideButton';
import { calcParallax } from '../../utils/scrollParallax';

const latestProjects = [
  {
    number: 1,
    title: 'Latest project #1',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 2,
    title: 'Latest project #2',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 3,
    title: 'Latest project #3',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
];

class LatProjectsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      coords: [0, 0, 0],
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      coords: [
        calcParallax(100, 350, 1700),
        calcParallax(100, 1100, 2450),
        calcParallax(100, 1850, 3200),
      ],
    });
  }
  render() {
    return (
      <LatestProjects.Container>
        <Grid relative>
          <Line vertical color="#dfdfdf" />
          <Line vertical color="#dfdfdf" align="right" />
          <Line vertical color="#dfdfdf" align="center" />
          <LatestProjects projects={latestProjects} coords={this.state.coords} />
          <Row justify="center">
            <Col lg={10} md={12} Padding="0 0 200px 0">
              <WideButton view="blue" to="/projects">More projects</WideButton>
            </Col>
          </Row>
        </Grid>
      </LatestProjects.Container>
    );
  }
}

export default LatProjectsContainer;
