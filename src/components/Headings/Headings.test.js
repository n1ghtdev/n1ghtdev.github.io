import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import { H1 } from './Headings';

const children = 'Test social';

const renderComponent = (props = {}) => {
  const wrapper = mount(
    <H1 {...props}>
      {children}
    </H1>
  );

  return enzymeFind(wrapper, H1);
};

describe('<H1 />', () => {
  const renderedComponent = renderComponent();
  it('should render an <h1 /> tag', () => {
    expect(renderedComponent.type()).toEqual('h1');
  });
  it('should have children', () => {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
