import React from 'react';
import PropTypes from 'prop-types';

const ProjectPage = (props) => {
  console.log(props);
  return (
    <div style={{height: '1800px'}}>
      <h3>{props.match.params.id}</h3>
    </div>
  );
};

ProjectPage.propTypes = {
  children: PropTypes.any,
};

export default ProjectPage;
