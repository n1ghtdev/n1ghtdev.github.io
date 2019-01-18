import React from 'react';
import { mount } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';

import WideButton from './WideButton';

const to = '#test';
const children = 'Button text';
const Style = 'simple';

const wrapper = mount(
  <MemoryRouter>
    <WideButton to={to} Style={Style}>
      {children}
    </WideButton>
  </MemoryRouter>
);

describe('<WideButton />', () => {
  it('should render <WideButton />', () => {
    expect(wrapper.find(Link).exists()).toEqual(true);
  });
  it('should have children', () => {
    expect(wrapper.contains(children)).toEqual(true);
  });
  it('should have to prop', () => {
    expect(wrapper.find(Link).props().to).toEqual(to);
  });
  it('should adopt a Style prop', () => {
    expect(wrapper.find(WideButton).prop('Style')).toEqual(Style);
  });
});
