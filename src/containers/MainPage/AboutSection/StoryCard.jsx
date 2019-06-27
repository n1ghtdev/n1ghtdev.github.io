import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3 } from '../../../components/Headings';
import Paragraph from '../../../components/Paragraph';
import { device } from '../../../breakpoints';

const Wrapper = styled.div`
  position: relative;
  height: 510px;
  margin: 0 50px;
  background-color: hsl(210, 100%, 27%);
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
  @media ${device.mobile} {
    height: auto;
    margin: 0;
  }
  @media ${device.mobileLarge} {
    height: auto;
    margin: 0;
  }
  @media ${device.tablet} {
    height: auto;
  }
  @media ${device.tabletLandscape} {
    height: 320px;
  }
  @media ${device.laptop} {
    height: auto;
    margin: 0 25px;
  }
`;

const Title = styled(H3)`
  position: absolute;
  left: 0;
  top: -25px;
  width: 100%;
  text-align: center;
  @media ${device.mobile} {
    left: 0;
    top: -15px;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  @media ${device.tabletLandscape} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const Content = styled.div`
  padding: 75px 10px 0 10px;
  @media ${device.mobile} {
    padding: 50px 10px 20px 10px;
  }
  @media ${device.tablet} {
    padding: 50px 15px 20px 15px;
  }
  @media ${device.tabletLandscape} {
    padding-top: 60px;
  }
  @media ${device.laptop} {
    padding-top: 50px;
    padding-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph).attrs(() => ({
  Color: '#fff',
  FontFamily: 'Ubuntu Mono',
  Margin: '0 0 20px 0',
}))`
  font-size: 1.125rem;
  text-indent: 2rem;
  @media ${device.mobile} {
    font-size: 1rem;
  }
  @media ${device.desktop} {
    padding: 0 20px;
  }
`;

const StoryCard = ({ children, title }) => (
  <Wrapper>
    <Title
      LineHeight="90%"
      FontSize="3.5rem"
      Color="#fff"
      FontFamily="Merriweather"
      FontWeight="900"
      FontStyle="italic"
    >
      {title}
    </Title>
    <Content>{children}</Content>
  </Wrapper>
);

StoryCard.Paragraph = StyledParagraph;

StoryCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default StoryCard;
