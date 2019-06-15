import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 10px 30px;
  background-color: #fafafa;
`;

const ToolsItem = styled(ListItem)`
  &:before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #1e94c7;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 10px;
  }
`;

const ProjectTools = ({ tools = [] }) => (
  <Box>
    <List Margin="0 50px 0 0" listStyle="circle" Color="#000">
      {tools.slice(0, 5).map(tool => (
        <ToolsItem key={tool.id}>{tool.title}</ToolsItem>
      ))}
    </List>
    <List listStyle="circle" Color="#000">
      {tools.slice(5, 10).map(tool => (
        <ToolsItem key={tool.id}>{tool.title}</ToolsItem>
      ))}
    </List>
  </Box>
);

ProjectTools.propTypes = {
  tools: PropTypes.array,
};

export default ProjectTools;
