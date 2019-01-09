import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const List = styled.ul`
  padding-right: 40px;

  &:last-child {
    padding-right: 0;
  }
`;

const Tool = styled.li`
  width: 120px;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242E39;
  font-weight: bold;
  font-size: 0.875rem;
  color: #fff;
  text-transform: uppercase;
`;

const Tools = ({ tools }) => {
  return (
    <Wrapper>
      { tools.map((tool, i) => (
        <List>
          <Tool key={i}>
            {tool.title}
          </Tool>
          { tool.children.map((child, i) => (
            <Tool key={i}>
              {child}
            </Tool>
          )) }
        </List>
      )) }
    </Wrapper>
  );
};

Tools.propTypes = {
  children: PropTypes.any,
};

export default Tools;
