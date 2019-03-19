import '@babel/polyfill';
import React, { Component } from 'react';

const withProjects = ComposedComponent => class getProjects extends Component {
  constructor() {
    super();

    this.state = {
      fetched: false,
      fetching: false,
      error: false,
      data: {},
    };
  }
  componentDidMount() {
    this.fetchProjects();
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
    // fetch('/api/projects.json', {
    //   method: 'get',
    //   headers: {
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ data });
    //   })
    //   .catch(err => console.log(err.message));
  }

  render() {
    const { data } = this.state;
    return (
      <ComposedComponent
        {...this.props}
        projects={data}
      />
    );
  }
};

export default withProjects;
