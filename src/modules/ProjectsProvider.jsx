import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/fetchData';

const ProjectsContext = React.createContext({ data: [] });

export class ProjectsProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  state = {
    fetched: false,
    data: [],
  }
  async componentDidMount() {
    const cachedData = sessionStorage.getItem('projects');
    if (cachedData) {
      this.setState({ data: JSON.parse(cachedData), fetched: true });
    } else {
      await fetchData('/api/projects.json')
        .then(data => {
          this.setState({ data, fetched: true });
          sessionStorage.setItem('projects', JSON.stringify(this.state.data));
        });
    }
  }
  render() {
    const { data, fetched } = this.state;
    return (
      <ProjectsContext.Provider value={{ data, fetched }}>
        { this.props.children }
      </ProjectsContext.Provider>
    );
  }
}

export const withProjects = (ComposedComponent) => (props) => (
  <ProjectsContext.Consumer>
    {({ data, fetched }) => (
      <Fragment>
        { fetched ? <ComposedComponent {...props} projects={data} /> : 'loading...' }
      </Fragment>
    )}
  </ProjectsContext.Consumer>
);
