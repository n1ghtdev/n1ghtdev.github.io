import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = styled.ul`
  width: 45px;
  margin-left: auto;
`;

const Item = styled.li`
  &:last-child {
    padding-top: 20px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  color: #fff;
  font-size: 1.5rem;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: all .25s;

  &:hover {
    border-color: #435365;
  }
`;

const Socials = ({ children }) => {
  return (
    <List>
      <Item>
        <Link href="#facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></Link>
      </Item>
      <Item>
        <Link href="#telegram"><FontAwesomeIcon icon={['fab', 'telegram-plane']}/></Link>
      </Item>
    </List>
  );
};

Socials.propTypes = {
  children: PropTypes.any,
};

export default Socials;
