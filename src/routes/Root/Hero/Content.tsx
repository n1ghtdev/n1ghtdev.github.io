import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title, TitleBlock, TitleSpanPrimary } from './styles';
import { ReactComponent as Logotype } from '../../../assets/svg/logotype.svg';
import { ButtonTransparent } from '../../../views/Button';

const Introduction = styled(Title)`
  display: inline-block;
  font-size: 64px;
`;

const StyledLogotype = styled(Logotype)`
  width: 40%;
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  max-width: 360px;
  letter-spacing: 5px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: space-between;
`;

const Content = () => {
  return (
    <Wrapper style={{ height: '100%' }}>
      <div>
        <Introduction as="h2">
          <TitleBlock>Hi,</TitleBlock>
          <TitleBlock>
            I'm Nikita,
            <TitleSpanPrimary> front end developer </TitleSpanPrimary>
            based in Kyiv, Ukraine.
          </TitleBlock>
        </Introduction>
        <Buttons>
          <ButtonTransparent href="#c">contact</ButtonTransparent>
          <ButtonTransparent href="#r">resume</ButtonTransparent>
        </Buttons>
      </div>
      <StyledLogotype />
    </Wrapper>
  );
};

export default Content;
