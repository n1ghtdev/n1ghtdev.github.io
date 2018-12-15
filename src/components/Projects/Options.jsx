import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const OptionsItem = styled.li`
  cursor: pointer;
  padding-right: 15px;
  &:last-child {
    padding-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const OptionsButton = styled.a`

`;

const Options = ({ children }) => {
  return (
    <OptionsList>
      <OptionItem>
        <OptionsButton onClick={}>List</OptionsButton>
      </OptionItem>
      <OptionItem> 
        <OptionsButton onClick={}>Photo</OptionsButton>
      </OptionItem>
    </OptionsList>
  );
};

Options.propTypes = {
  children: PropTypes.any,
};

export default Options;
