import React from 'react';
import { mount } from 'enzyme';

import Tools from './Tools';

const toolsArray = [
  {
    title: 'javascript',
    bgColor: '#D4C143',
    children: ['es6', 'react', 'redux', 'jquery'],
  },
];

const wrapper = mount(
  <Tools tools={toolsArray} />
);

describe('<Tools />', () => {
  it('should render <Tools />', () => {
    expect(wrapper.find('section').exists()).toEqual(true);
  });
  it('should have tools prop', () => {
    expect(wrapper.prop('tools')).toEqual(toolsArray);
  });
  it('should have <ul> nested', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });
});
