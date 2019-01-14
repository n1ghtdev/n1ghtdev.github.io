import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  ${({ overlap }) => overlap && `
    position: relative;
    z-index: 1;
  `}

  ${({ Style }) => Style === 'grey-italic' && `
    font-style: italic;
    opacity: .35;
    transition: all .25s;

    &:hover {
      opacity: .75;
    }
  `}
`;

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  Style: PropTypes.string,
  overlap: PropTypes.bool,
};

export default Link;
