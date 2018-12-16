import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsList = styled.ul`
  display: inline-flex;
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

const Options = ({ onClick, value }) => {
  return (
    <OptionsList>
      <OptionsItem>
        <OptionsButton onClick={onClick} value={value}>List</OptionsButton>
      </OptionsItem>
      <OptionsItem> 
        <OptionsButton onClick={onClick} value={value}>Photo</OptionsButton>
      </OptionsItem>
    </OptionsList>
  );
};

Options.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Options;
