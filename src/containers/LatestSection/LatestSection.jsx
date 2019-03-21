import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';
import ProjectContainer from './ProjectContainer';
import withProjects from '../../utils/getProjects';

// const LatestSection = (props) => {
//   const { projects } = props;
//   const projectsArray = Object.keys(projects).map(key => projects[key]);
//   return (
//     <Section>
//       <Grid fluid relative>
//         <LatestProjects>
//           { projectsArray.map(item => (
//             <ProjectContainer key={item.id} project={item} />
//           )) }
//         </LatestProjects>
//       </Grid>
//     </Section>
//   );
// };

class LatestSection extends React.Component {
  static propTypes = {
    projects: PropTypes.object,
  }
  state = {
    data: localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : {},
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!Object.keys(prevState.data).length) {
      return { data: nextProps.projects };
    }
    return null;
  }
  componentDidMount() {
    if (this.state.data === {}) {
      this.setState({ data: this.props.projects });
    }
    // fetch('/api/projects.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ data });
    //     console.log(`DATA SENT - ${window.pageYOffset} / ${document.body.offsetHeight}`);
    //     console.log(this.state.data);
    //   })
    //   .catch(err => console.log(err.message));
  }
  // componentWillUnmount() {
  //   localStorage.setItem('projects', JSON.stringify(this.state.data));
  // }
  render() {
    const { data } = this.state;
    const projectsArray = Object.keys(data).map(key => data[key]);
    return (
      <Section>
        <Grid fluid relative>
          <LatestProjects>
            { projectsArray.map(item => (
              <ProjectContainer key={item.id} project={item} />
            )) }
          </LatestProjects>
        </Grid>
      </Section>
    );
  }
}

export default withProjects(LatestSection);
