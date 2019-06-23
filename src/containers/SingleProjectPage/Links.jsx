import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import GithubLogo from 'svg-url-loader!../../assets/svg/github-logo.svg';
import { device } from '../../breakpoints';

import Nav from '../../components/Nav';
import A from '../../components/A';

const Links = styled(Nav)`
  @media ${device.mobile} {
    flex-flow: column nowrap;
  }
`;

const Item = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 30px;
  margin-right: 20px;

  border-radius: 3px;
  background-color: #24b277;
  color: #fff;

  ${({ github }) => github && GithubItem};

  &:last-child {
    margin-right: 0;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 50px;
    margin: 10px 0;
  }
`;

const GithubItem = css`
  width: 160px;
  background-color: #24292e;
  &:before {
    content: '';
    margin-right: 7px;
    background: url(${GithubLogo}) no-repeat;
    display: block;
    width: 32px;
    height: 32px;
  }
`;

Links.propTypes = {
  children: PropTypes.any,
};

Links.Item = Item;

export default Links;
