import React from 'react';
import { mount } from 'enzyme';

import Item from './Item';

const children = 'Tool test';
const parent = true;

const wrapper = mount(
  <Item parent={parent}>
    {children}
  </Item>
);

describe('<Item />', () => {
  it('should render <Item />', () => {
    expect(wrapper.find('li').exists()).toEqual(true);
  });
  it('should have children', () => {
    expect(wrapper.contains(children)).toEqual(true);
  });
  it('should adopt parent prop', () => {
    expect(wrapper.prop('parent')).toEqual(parent);
  });
});
