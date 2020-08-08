import styled from 'styled-components';

const ButtonBase = styled.a`
  background: none;
  border: none;

  padding: 10px 15px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;

  position: relative;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`};

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: inherit;
    filter: blur(35px);
  }
`;

export default ButtonBase;
