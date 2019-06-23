import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: #fafafa;
  margin-top: 10px;
`;

const ToolsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Tool = styled.div`
  padding: 0 10px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  height: 16px;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor || '#000'};
  margin: 2px;
  font-size: 12px;
  font-family: Verdana;
`;

const ProjectTools = ({ tools = [], devTools = [] }) => (
  <React.Fragment>
    <Box>
      <ToolsList>
        {tools.map(tool => (
          <Tool bgColor="#001f31" key={tool.id}>
            {tool.name}
          </Tool>
        ))}
      </ToolsList>
    </Box>
    <Box>
      <ToolsList>
        {devTools.map(tool => (
          <Tool bgColor="#256386" key={tool.id}>
            {tool.name}
          </Tool>
        ))}
      </ToolsList>
    </Box>
  </React.Fragment>
);

ProjectTools.propTypes = {
  tools: PropTypes.array,
  devTools: PropTypes.array,
};

export default ProjectTools;
