import React, { Component } from 'react';
import Typist from 'react-typist';

import StyledToolsSection from './StyledToolsSection';
import Terminal from './Terminal';

import Grid from '../../../components/Grid';

import WaypointWrapper from '../../WaypointWrapper';
import fetchData from '../../../utils/fetchData';

class ToolsSection extends Component {
  state = {
    tools: [],
    fetched: false,
  };
  async componentDidMount() {
    const cached = sessionStorage.getItem('tools');
    if (cached) {
      this.setState({ tools: JSON.parse(cached), fetched: true });
    } else {
      await fetchData('/api/tools.json').then(response => {
        this.setState({ tools: response, fetched: true });
        sessionStorage.setItem('tools', JSON.stringify(this.state.tools));
      });
    }
  }
  render() {
    const { tools, fetched } = this.state;
    return (
      <StyledToolsSection>
        <Terminal>
          <Grid>
            <WaypointWrapper delay={500}>
              <Terminal.CommandLine user="n1ght" path="/">
                <Typist cursor={{ show: false }}>
                  <Typist.Delay ms={500} />
                  cd dev/tools
                </Typist>
              </Terminal.CommandLine>
            </WaypointWrapper>
            <WaypointWrapper delay={2000}>
              <Terminal.CommandLine user="n1ght" path="/dev/tools">
                <Typist cursor={{ show: false }}>
                  <Typist.Delay ms={500} />
                  tree
                </Typist>
              </Terminal.CommandLine>
            </WaypointWrapper>
            <WaypointWrapper delay={3200}>
              {fetched ? (
                <Terminal.Tree folders={tools} rootFolder="." />
              ) : null}
            </WaypointWrapper>
          </Grid>
        </Terminal>
      </StyledToolsSection>
    );
  }
}

export default ToolsSection;
