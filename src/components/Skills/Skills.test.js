import React from 'react';
import { mount } from 'enzyme';

import Skills from './Skills';
import Item from './Item';

const array = [
  {
    id: 0,
    title: 'Title',
    description: 'Description',
  },
];

const children = <Item key={array[0].id} title={array[0].title} description={array[0].description} />;

const wrapper = mount(
  <Skills skills={array}>
    {children}
  </Skills>
);

describe('<Skills />', () => {
  it('should render <Skills />', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });
  it('should have skills prop', () => {
    expect(wrapper.prop('skills')).toEqual(array);
  });
  it('should have children', () => {
    expect(wrapper.contains(children)).toEqual(true);
  });
});
