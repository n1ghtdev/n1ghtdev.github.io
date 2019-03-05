import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Tool from '../../components/Tool';
import Icon from '../../components/Icon';
import List from '../../components/List';

const tools = [
  {
    id: 4,
    title: 'redux',
    icon: 'redux',
  },
  {
    id: 5,
    title: 'git',
    icon: 'git',
  },
  {
    id: 6,
    title: 'webpack',
    icon: 'webpack',
  },
  {
    id: 7,
    title: 'jquery',
    icon: 'jquery',
  },
  {
    id: 8,
    title: 'eslint',
    icon: 'eslint',
  },
  {
    id: 9,
    title: 'gulp',
    icon: 'gulp',
  },
  {
    id: 10,
    title: 'sass',
    icon: 'sass',
  },
  {
    id: 11,
    title: 'npm',
    icon: 'npm',
  },
];

const ToolsList = () => (
  <Row>
    <Col lg={6} Margin="0 auto" Padding="75px 0 0 0">
      <List flexWrap="wrap" >
        { tools.map(item => (
          <Tool>
            <Icon iconName={item.icon} />
          </Tool>
        )) }
      </List>
    </Col>
  </Row>
);

export default ToolsList;
