import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../../../components/Span';

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled(Span)`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 2rem;
  line-height: 1;
`;

const CommandLine = ({ user, path, children }) => (
  <Wrapper>
    <Item Color="#11ec83">{user}</Item>
    <Item Color="#fff">:</Item>
    <Item Color="#3050fa">{path}</Item>
    <Item Color="#fff">$</Item>
    <Item style={{ marginLeft: '15px' }} Color="#fff">
      {children}
    </Item>
  </Wrapper>
);

CommandLine.propTypes = {
  children: PropTypes.any,
  user: PropTypes.string,
  path: PropTypes.string,
};

export default CommandLine;
