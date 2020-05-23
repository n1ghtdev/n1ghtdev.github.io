import React from 'react';
import styled from 'styled-components';
import media from '@styles/media';

type Props = {
  onClick: any;
  tag: string;
  active: boolean;
};

export const Item = styled.li`
  margin: 0;
  height: 35px;

  width: auto;
  margin-right: 5px;
  margin-bottom: 5px;

  ${media.xl`
    width: calc(1/3 * 100% - 2px);
    margin: 0 1px 3px 1px;
  `}
  ${media.xxl`
    width: calc(25% - 4px);
    margin: 0 2px 4px 2px;
  `}
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  white-space: nowrap;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;

  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.secondary};

  &.active {
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.primary};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

function Tag({ onClick, tag, active }: Props) {
  return (
    <Item>
      <Button onClick={() => onClick(tag)} className={active ? 'active' : ''}>
        {tag}
      </Button>
    </Item>
  );
}

export default Tag;
