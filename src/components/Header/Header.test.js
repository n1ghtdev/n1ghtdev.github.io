import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Header from './Header';

const children = 'Node element';

const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Header {...props}>
      {children}
    </Header>
  );

  return enzymeFind(wrapper, Header);
};

describe('<Header />', () => {
  const renderedComponent = renderComponent();
  it('should render an <header /> tag', () => {
    expect(renderedComponent.type()).toEqual('header');
  });
  it('should have children', () => {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
