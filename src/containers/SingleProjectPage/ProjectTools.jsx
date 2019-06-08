import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from '../../components/List';

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  padding: 10px 30px;
`;

const ProjectTools = ({ tools = [] }) => (
  <Box Height="150px" Padding="10px 30px" Color="#fafafa" BorderRadius="5px">
    <List Margin="0 50px 0 0" listStyle="circle" Color="#000">
      {tools.slice(0, 5).map(tool => (
        <List.Item key={tool.id}>{tool.title}</List.Item>
      ))}
    </List>
    <List listStyle="circle" Color="#000">
      {tools.slice(5, 10).map(tool => (
        <List.Item key={tool.id}>{tool.title}</List.Item>
      ))}
    </List>
  </Box>
);

ProjectTools.propTypes = {
  tools: PropTypes.array,
};

export default ProjectTools;
