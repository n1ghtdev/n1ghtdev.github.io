import React from 'react';
import { mount } from 'enzyme';

import Item from './Item';

const children = 'Facebook';
const href = 'https://facebook.com/';

const wrapper = mount(
  <Item href={href}>
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
  it('should have href prop', () => {
    expect(wrapper.prop('href')).toEqual(href);
  });
});
