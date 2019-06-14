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
    height: 580px;
    margin: 0;
  }
  @media ${device.mobileLarge} {
    height: 500px;
    margin: 0;
  }
`;

const Title = styled(H3)`
  position: absolute;
  left: -17px;
  top: -17px;
  width: 110%;
  @media ${device.mobile} {
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Content = styled.div`
  padding: 130px 10px 0 10px;
  @media ${device.mobile} {
    padding: 75px 10px 0 10px;
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
`;

const StoryCard = ({ children, title }) => (
  <Wrapper>
    <Title
      LineHeight="90%"
      FontSize="4rem"
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
