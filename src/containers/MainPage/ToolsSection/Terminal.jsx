import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommandLine from './CommandLine';
import Tree from './Tree';

const Terminal = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  width: 100%;
  height: 650px;
  padding-top: 30px;
  background-color: #001f31;
  border-radius: 5px;
`;

Terminal.propTypes = {
  children: PropTypes.any,
};

Terminal.CommandLine = CommandLine;
Terminal.Terminal = Terminal;
Terminal.Tree = Tree;

export default Terminal;
