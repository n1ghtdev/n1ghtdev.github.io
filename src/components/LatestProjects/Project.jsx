import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
`;

const Container = styled.article`
  position: relative;
  width: 960px;
  height: 400px;
  margin: 0 auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .45);
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all .5s;
  background: rgba(26, 37, 51, .9);
  display: flex;
  align-items: flex-end;
  transform: translateX(100%);

  ${Container}:hover & {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 1px;
  background: #dfdfdf;
`;

const Number = styled.span`
  position: absolute;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  top: 39%;
  left: -7px;
  font-size: 2.5rem;
  color: #8c8c8c;
  transition: all .25s;

  ${Wrapper}:hover & {
    color: #37639a;
  }
`;

const Header = styled.header`
  max-width: 275px;
  color: #fff;
  padding: 0 0 50px 50px;
`;

const Title = styled.h2`

`;

const Description = styled.p`

`;

const Project = ({
  number, imgSrc, imgAlt, projectTitle, projectDesc,
}) => (
  <Wrapper>
    <Line />
    <Number>{ `0${number}` }</Number>
    <Container>
      <Image src={imgSrc} alt={imgAlt} />
      <Overlay>
        <Header>
          <Title>{ projectTitle }</Title>
          <Description>{ projectDesc }</Description>
        </Header>
      </Overlay>
    </Container>
  </Wrapper>
);

Project.propTypes = {
  number: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDesc: PropTypes.string,
};

export default Project;
