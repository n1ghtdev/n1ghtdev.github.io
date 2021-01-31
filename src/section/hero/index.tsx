import IllustrationSVG from '@components/assets/illustration';
import { BoxBottom } from '@components/box/bottom';
import { BoxRight } from '@components/box/right';
import { LinkAir } from '@components/link/air';
import { LinkPrimary } from '@components/link/primary';
import { HERO } from '@utils/config';
import media from '@styles/media';
import {
  TEXT_SIZE_2,
  THEME,
  TEXT_SIZE_1,
  TEXT_SIZE_3,
  SPACE_S,
} from '@styles/theme';
import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled(BoxBottom)`
  text-align: center;
  max-width: 35rem;

  ${media.medium`
    text-align: left;
  `}
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: ${TEXT_SIZE_2};
  line-height: 1.1;

  span {
    color: ${THEME.PRIMARY};
  }

  ${media.xxl`
    font-size: ${TEXT_SIZE_1}
  `}
`;

const Subtitle = styled.h3`
  font-size: ${TEXT_SIZE_3};
  font-weight: 400;
  font-style: italic;

  ${media.large`
    font-size: ${TEXT_SIZE_2};
  `}
`;

const Divider = styled.span`
  font-weight: bold;
  font-style: italic;
  &:after,
  &:before {
    content: '';
    width: 15px;
    height: 1px;
    background-color: ${THEME.LIGHT};
    margin-left: ${SPACE_S};
    margin-right: ${SPACE_S};
    vertical-align: middle;
    display: inline-block;
    opacity: 0.2;
  }
`;

const Image = styled.div`
  display: none;

  ${media.medium`
    display: block;
  `}
`;

const SectionHero: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Title dangerouslySetInnerHTML={{ __html: HERO.title }} />
        <Subtitle dangerouslySetInnerHTML={{ __html: HERO.subtitle }} />
        <BoxRight>
          <LinkPrimary to="#projects">Show my work</LinkPrimary>
          <Divider>or</Divider>
          <LinkAir href="mailto://artyenick@gmail.com">contact me</LinkAir>
        </BoxRight>
      </Content>
      <Image>
        <IllustrationSVG />
      </Image>
    </Wrapper>
  );
};

export { SectionHero };
