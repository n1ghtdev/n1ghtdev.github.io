// import React from 'react';
// import PropTypes from 'prop-types';
// import { withScroll } from '../../modules/ScrollProvider';

// class SectionTransition extends React.Component {
//   static propTypes = {
//     scrollY: PropTypes.number,
//     refObject: PropTypes.object,
//   }
//   componentDidUpdate() {
//     const { scrollY, refObject } = this.props;
//     const { current } = refObject;
//     const waypoint = current.offsetTop - current.offsetHeight;

//     const container = document.getElementById('app');
//     if (scrollY > waypoint + 450) {
//       container.classList.add('transitioned');
//     } else if (scrollY < waypoint + 450 && container.classList.contains('transitioned')) {
//       container.classList.remove('transitioned');
//     }
//   }
//   render() {
//     return null;
//   }
// }

// export default withScroll(SectionTransition);
