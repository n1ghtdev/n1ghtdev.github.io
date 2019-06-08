import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/fetchData';

const ProjectsContext = React.createContext({ data: [] });

export class ProjectsProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  state = {
    loading: false,
    error: false,
    data: [],
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const cachedData = sessionStorage.getItem('projects');
    if (cachedData) {
      this.setState({ data: JSON.parse(cachedData), loading: false });
    } else {
      await fetchData('/api/projects.json')
        .then(data => {
          this.setState({ data, loading: false });
          sessionStorage.setItem('projects', JSON.stringify(this.state.data));
        })
        .catch(error => this.setState({ error }));
    }
  }
  render() {
    const { data, loading, error } = this.state;
    return (
      <ProjectsContext.Provider value={{ data, loading, error }}>
        {this.props.children}
      </ProjectsContext.Provider>
    );
  }
}

export const withProjects = ComposedComponent => props => (
  <ProjectsContext.Consumer>
    {({ data, loading, error }) => (
      <Fragment>
        {!loading && !error && data.length !== 0 ? (
          <ComposedComponent {...props} projects={data} />
        ) : (
          'loading...'
        )}
      </Fragment>
    )}
  </ProjectsContext.Consumer>
);
