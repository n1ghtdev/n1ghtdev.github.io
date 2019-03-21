import '@babel/polyfill';
import React, { Component, Fragment } from 'react';

const withProjects = ComposedComponent => class fetchProjects extends Component {
  constructor() {
    super();

    this.state = {
      fetched: localStorage.getItem('projects') && true,
      fetching: false,
      error: false,
      data: localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : {},
    };
  }
  componentDidMount() {
    const cachedData = localStorage.getItem('projects');
    if (cachedData) {
      this.setState({ data: JSON.parse(cachedData), fetched: true });
    } else {
      this.fetchProjects();
    }

  }
  componentWillUnmount() {
    localStorage.setItem('projects', JSON.stringify(this.state.data));
  }
  async fetchProjects() {
    try {
      const response = await fetch('/api/projects.json', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
      throw error.message;
    } finally {
      this.setState({ fetched: true, fetching: false });
    }
  }

  render() {
    const { data, fetched } = this.state;
    return (
      <Fragment>
        { fetched ?
          <ComposedComponent {...this.props} projects={data} /> :
          'loading...' }
      </Fragment>
    );
  }
};

export default withProjects;
