import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../../breakpoints';

const Wrapper = styled.div`
  display: inline-block;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 2rem;
  margin-top: 4rem;
  white-space: nowrap;
  @media ${device.mobile} {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  @media ${device.tablet} {
    margin-left: 4rem;
    margin-top: 2rem;
  }
`;
const RootFolder = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  &:after {
    content: '';
    z-index: -1;
    display: block;
    position: absolute;
    left: 0;
    top: 16px;
    width: 92%;
    height: 2px;
    background-color: #fff;
  }
  @media ${device.mobile} {
    flex-direction: column;
    &:after {
      display: none;
      /* left: 7px;
      width: 2px;
      height: 100%; */
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    &:after {
      display: none;
    }
  }
`;
const RootFolderName = styled.span`
  background-color: #11ec83;
  color: #001f31;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const DeepFolder = styled.div`
  margin-left: 55px;
  z-index: 2;
  position: relative;
  line-height: 1;
  &:after {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    left: 7px;
    top: 0px;
    width: 2px;
    height: calc(100% - 12px);
    background-color: #fff;
  }
  @media ${device.mobile} {
    margin-left: 15px;
    margin-top: 15px;
    &:after {
      height: calc(100% - 9px);
    }
  }
  @media ${device.tablet} {
    margin-left: 15px;
    margin-top: 15px;
  }
`;
const DeepFolderName = styled.span`
  background-color: #11ec83;
  color: #001f31;
`;
const DeepFolderList = styled.ul`
  padding-left: 55px;
`;
const DeepFolderItem = styled.li`
  color: #fff;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -47px;
    top: 18px;
    width: 47px;
    height: 2px;
    background-color: #fff;
  }
  @media ${device.mobile} {
    &:before {
      top: 13px;
    }
  }
`;

const Tree = ({ folders, rootFolder }) => (
  <Wrapper>
    <RootFolder>
      <RootFolderName>{rootFolder}</RootFolderName>
      {Object.keys(folders).map(folder => (
        <DeepFolder>
          <DeepFolderName>{folder}</DeepFolderName>
          <DeepFolderList>
            {folders[folder].map(file => (
              <DeepFolderItem>{file}</DeepFolderItem>
            ))}
          </DeepFolderList>
        </DeepFolder>
      ))}
    </RootFolder>
  </Wrapper>
);

Tree.propTypes = {
  folders: PropTypes.object,
  rootFolder: PropTypes.string,
};

export default Tree;
