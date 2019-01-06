import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 125px;
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
  transition: all .25s;
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

`;

const Number = styled.span`

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

const Project = ({ number, imgSrc, imgAlt, projectTitle, projectDesc }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={imgSrc} alt={imgAlt} />
        <Line />
        <Number>{ number }</Number>
        <Overlay>
          <Header>
            <Title>{ projectTitle }</Title>
            <Description>{ projectDesc }</Description>
          </Header>
        </Overlay>
      </Container>
    </Wrapper>
  );
};

Project.propTypes = {
  children: PropTypes.any,
};

export default Project;
