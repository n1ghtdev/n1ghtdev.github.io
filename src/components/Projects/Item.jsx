import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from '../../components/Col';
import { H3 } from '../Headings';
import ItemHover from './ItemHover';
import ItemTools from './ItemTools';

const Wrapper = styled.article`
  padding: 15px 0;
  margin: 0 15px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  opacity: .5;
  transition: all .25s;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Hover = styled(ItemHover)`
  transition: all .25s ease; 
  ${Wrapper}:hover & {
    transform: translateY(calc(-50% + 20px));
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = styled.div`
  padding: 10px 0;
  text-align: center;
  color: #bcbcbc;
  transition: all .25s;

  ${Wrapper}:hover & {
    color: #7c7c7c;
  }
`;

const Item = ({ children, imgSrc, imgAlt, tools }) => (
  <Col lg={4}>
    <Wrapper>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAlt} />
        <Hover>
          <ItemTools tools={tools} />
        </Hover>
      </ImageContainer>
      <Header>
        <H3
          fontFamily="ShadowsIntoLight"
          fontSize="1.25rem"
          fontWeight="normal"
          Color="inherit"
        >
          {children}
        </H3>
      </Header>
    </Wrapper>
  </Col>
);

Item.propTypes = {
  children: PropTypes.any,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  tools: PropTypes.array,
};

export default Item;
