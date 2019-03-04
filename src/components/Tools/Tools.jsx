import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const Wrapper = styled.div`
  margin-top: 50px;
  padding-left: 175px;
  padding-right: 175px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const Item = styled.li`
  color: #000;
  font-size: 5rem;
  text-align: center;
  flex-basis: calc(100% / 6);
`;

const Tools = ({ tools }) => (
  <Wrapper>
    { tools.map(tool => (
      <Item key={tool.id}>
        <Icon iconName={tool.icon} />
      </Item>
    )) }
  </Wrapper>
);

Tools.propTypes = {
  tools: PropTypes.array,
};

export default Tools;
