import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import isMobile from '../utils/isMobile';

class WaypointWrapper extends Component {
  static propTypes = {
    delay: PropTypes.number,
    children: PropTypes.any.isRequired,
    waypointProps: PropTypes.object,
  };
  static defaultProps = {
    delay: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      entered: false,
      disabled: false,
    };
  }
  componentDidMount() {
    if (isMobile()) {
      this.setState({ disabled: true });
    }
  }
  onEnter = () => {
    const { delay } = this.props;

    if (delay) {
      setTimeout(() => {
        this.setState({ entered: true });
      }, delay);
    } else {
      this.setState({ entered: true });
    }
  };
  render() {
    const { entered, disabled } = this.state;
    const { waypointProps, children } = this.props;

    return (
      <Fragment>
        {disabled ? (
          children
        ) : (
          <Waypoint onEnter={this.onEnter} {...waypointProps}>
            {entered ? children : null}
          </Waypoint>
        )}
      </Fragment>
    );
  }
}

export default WaypointWrapper;
