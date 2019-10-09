import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommandLine from './CommandLine';
import Tree from './Tree';
import { device } from '../../../breakpoints';

const Terminal = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  width: 100%;
  height: inherit;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  @media ${device.mobile} {
    position: relative;
    left: 0;
    top: 0;
  }
  @media ${device.tablet} {
    left: 0;
    top: 0;
    margin: 15px;
  }
`;

Terminal.propTypes = {
  children: PropTypes.any,
};

Terminal.CommandLine = CommandLine;
Terminal.Terminal = Terminal;
Terminal.Tree = Tree;

export default Terminal;
