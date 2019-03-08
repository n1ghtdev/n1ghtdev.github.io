import React, { Component } from 'react';

const withMousePointer = ComposedComponent => class mousePointer extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

  componentDidMount() {
 
  }

  componentDidUpdate() {
    console.log();
  }

  render() {
    const { scrollY } = this.state;
    return (
      <ComposedComponent
        {...this.props}
        scrollY={scrollY}
      />
    );
  }
};

export default withMousePointer;
