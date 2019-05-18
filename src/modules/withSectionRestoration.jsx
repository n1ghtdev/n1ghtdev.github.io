import React from 'react';

const withSectionRestoration = ComposedComponent =>
  class sectionRestoration extends React.Component {
    state = {
      activeSection: null,
      isRouteChanged: false,
    };
    setActiveSection = sectionIndex => {
      this.setState({ activeSection: sectionIndex });
    };
    handleRouteChange = state => {
      this.setState({ isRouteChanged: state });
    };
    render() {
      const { activeSection, isRouteChanged } = this.state;
      return (
        <ComposedComponent
          {...this.props}
          activeSection={activeSection}
          isRouteChanged={isRouteChanged}
          setActiveSection={this.setActiveSection}
          handleRouteChange={this.handleRouteChange}
        />
      );
    }
  };

export default withSectionRestoration;
