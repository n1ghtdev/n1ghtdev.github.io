import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../components/Paragraph';
import Icon from '../../components/Icon';
import Col from '../../components/Col';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 5rem;
  margin-right: 25px;
`;

const Skill = ({ description, icon }) => (
  <Col as={Wrapper} lg={6} Padding={25}>
    <IconWrapper>
      <Icon iconName={icon} />
    </IconWrapper>
    <Paragraph Color="rgb(50,50,50)" FontSize="1rem">{description}</Paragraph>
  </Col>
);

Skill.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default Skill;
