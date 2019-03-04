import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from '../Col';
import Button from '../Button';

const Wrapper = styled.div`
  position: relative;
  margin-top: 400px;
  display: flex;

  ${({ Id }) => {
    if (Id % 2 === 0) {
      return `
        & > ${Container} {
          margin-left: auto;
          order: 2;
        }
        & > ${Header} {
          padding: 0 120px 0 25px;
        }
      `;
    }
    return `
      & > ${Container} {
        margin-left: auto;
        order: 0;
      }
      & > ${Header} {
        padding: 0 25px 0 120px;
      }
    `;
  }}
`;


const Container = styled.article`
  position: relative;
  height: 428px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .45);

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 105%;
    height: 110%;
    border: 1px solid rgba(255,255,255, .1);
    border-radius: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const Header = styled.header`
  order: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.h2`
  font-family: 'Lobster Two', cursive;
  letter-spacing: .0625rem;
  font-weight: normal;
  font-size: 2rem;
  line-height: 1.5;
  &:after {
    content: '';
    width: 60px;
    height: 12px;
    display: block;
    margin: 5px auto 10px auto;
    background: url(src/assets/svg/hr.svg) no-repeat;
  }
`;

const Description = styled.p`
  line-height: 1.2;
`;

const Project = ({
  Id, imgSrc, imgAlt, projectTitle, projectDesc,
}) => (
  <Wrapper Id={Id}>
    <Header as={Col} lg={4} textAlign="center">
      <Title>{ projectTitle }</Title>
      <Description>{ projectDesc }</Description>
      <Button href="#demo" Offset="40px 0 0 0" Theme="blue-squared">DEMO</Button>
    </Header>
    <Container as={Col} lg={8}>
      <Image src={imgSrc} alt={imgAlt} />
    </Container>
  </Wrapper>
);

Project.propTypes = {
  Id: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDesc: PropTypes.string,
};

export default Project;
