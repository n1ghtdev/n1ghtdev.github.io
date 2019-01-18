import React from 'react';
import { mount } from 'enzyme';

import Socials from './Socials';
import Item from './Item';

const children = <Item />;

const wrapper = mount(
  <Socials>
    {children}
  </Socials>
);

describe('<Socials />', () => {
  it('should render <Socials />', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });
  it('should have children', () => {
    expect(wrapper.contains(children)).toEqual(true);
  });
});
