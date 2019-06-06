import React from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

class WaypointWrapper extends React.Component {
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
    };
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
    const { entered } = this.state;
    const { waypointProps, children } = this.props;

    return (
      <Waypoint onEnter={this.onEnter} {...waypointProps}>
        {entered ? children : null}
      </Waypoint>
    );
  }
}

export default WaypointWrapper;
