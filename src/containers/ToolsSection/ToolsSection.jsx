import React from 'react';
import Tools from '../../components/Tools';

const toolsData = [
  {
    title: 'css',
    bgColor: '#007DC6',
    children: ['sass', 'styled'],
  },
  {
    title: 'javascript',
    bgColor: '#D4C143',
    children: ['es6', 'react', 'redux', 'jquery'],
  },
  {
    title: 'bundlers',
    bgColor: '#316C3A',
    children: ['webpack', 'gulp'],
  },
  {
    title: 'graphics',
    bgColor: 'linear-gradient(to right, #c94b4b, #4b134f)',
    children: ['photoshop', 'figma', 'inkspace'],
  },
  {
    title: 'back end',
    bgColor: '#494D52',
    children: ['node.js', 'spring boot', 'mysql/postgres'],
  },
  {
    title: 'other',
    bgColor: '',
    children: ['git', 'npm', 'bash'],
  },
];

const ToolsSection = () => (
  <Tools tools={toolsData} />
);

export default ToolsSection;
