import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from '../Headings';

const Wrapper = styled.div`
  position: relative;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Nk = styled.div`
  font-weight: 700;
  font-size: 31rem;
  line-height: 1;

`;

const BlueGradient = styled.div`
  display: inline;
  user-select: none;
  background: linear-gradient(to bottom, #03020D 23%, #112B6F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RedGradient = styled.div`
  display: inline;
  user-select: none;
  background: linear-gradient(to bottom, #1B0303 23%, #5C1E1E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: -8.75rem;
`;

const About = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  left: 45%;
  top: 52%;
  transform: translateX(-50%);
  color: #fff;
  line-height: 1;
`;

const Name = styled.h2`
  font-size: 3rem;
  font-weight: 900;
`;
const Spec = styled.h3`
  font-size: 2.25rem;
  font-weight: 400;
`;

const Logotype = ({ children }) => {
  return (
    <Wrapper>
      <Nk>
        <BlueGradient>N</BlueGradient>
        <RedGradient>k</RedGradient>
      </Nk>
      <About>
        <Name>Nikita Borodai</Name>
        <Spec>front-end developer</Spec>
      </About>
    </Wrapper>
  );
};

Logotype.propTypes = {
  children: PropTypes.any,
};

export default Logotype;

