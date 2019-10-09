import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../../components/Paragraph';
import { device } from '../../../breakpoints';

const StyledParagraph = styled(Paragraph).attrs(props => ({
  Color: props.theme.altSecondaryColor,
}))`
  @media ${device.mobile} {
    font-size: 1.25rem;
    margin-top: 20px;
    text-align: center;
  }
  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

const SubTitle = ({ children }) => (
  <StyledParagraph
    LineHeight="1.35"
    FontSize="1.5rem"
    FontFamily="Merriweather"
    FontStyle="italic"
  >
    {children}
  </StyledParagraph>
);

SubTitle.propTypes = {
  children: PropTypes.any,
};

export default SubTitle;
