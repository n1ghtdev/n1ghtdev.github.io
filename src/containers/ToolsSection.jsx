import React, { Component } from 'react';
import Typist from 'react-typist';
import Grid from '../components/Grid';
import TerminalSection from '../components/TerminalSection';
import Terminal from '../components/Terminal';
import WaypointWrapper from './WaypointWrapper';
import fetchData from '../utils/fetchData';

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
      <TerminalSection>
        {fetched ? (
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
                <Terminal.Tree folders={tools} rootFolder="." />
              </WaypointWrapper>
            </Grid>
          </Terminal>
        ) : null}
      </TerminalSection>
    );
  }
}

export default ToolsSection;
