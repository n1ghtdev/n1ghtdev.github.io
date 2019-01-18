import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  ${({ overlap }) => overlap && `
    position: relative;
    z-index: 1;
  `}

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

const Item = ({ children, overlap, href }) => (
  <Wrapper overlap={overlap}>
    <Link href={href}>{children}</Link>
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  overlap: PropTypes.bool,
};

export default Item;
