import { FC } from 'react';
import styled from 'styled-components';
import media from '@styles/media';
import React from 'react';
import IllustrationSVG from '@components/assets/illustration';
import GithubRoundIcon from '@components/assets/github-round-icon';
import LinkedinIcon from '@components/assets/linkedin-icon';
import { ABOUT, LINK } from '@utils/config';
import { SPACE_XL, SPACE_M, TEXT_SIZE_2, TEXT_SIZE_3 } from '@styles/theme';
import { FlexRight } from '@components/flex/right';
import { BoxBottom } from '@components/box/bottom';

export const Wrapper = styled.div`
  padding-bottom: 6rem;

  ${media.large``}
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 2rem;
  margin-bottom: ${SPACE_XL};
`;

export const Illustration = styled.div`
  display: none;

  ${media.large`
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 50%;
  `}
`;

export const Content = styled(BoxBottom)`
  max-width: 37rem;
  line-height: 1.7;
  text-align: justify;

  & > div > p {
    margin-bottom: ${SPACE_M};
  }
`;

const ContentTitle = styled.h3`
  font-size: ${TEXT_SIZE_3};

  ${media.medium`
    font-size: ${TEXT_SIZE_2};
  `}
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
  & > svg {
    width: 32px;
    height: 32px;
  }
  & > span {
    margin-left: 10px;
  }
`;

const SectionAbout: FC = () => {
  return (
    <Wrapper>
      <Title>About me</Title>
      <FlexRight alignItems="center" justifyContent="space-between">
        <Illustration>
          <IllustrationSVG />
        </Illustration>
        <Content>
          <ContentTitle>n1ght // front-end developer</ContentTitle>
          <div dangerouslySetInnerHTML={{ __html: ABOUT }} />
          <FlexRight marginRight={SPACE_XL}>
            <Social href={LINK.github}>
              <GithubRoundIcon />
              <span>github</span>
            </Social>
            <Social href={LINK.linkedin}>
              <LinkedinIcon />
              <span>linkedin</span>
            </Social>
          </FlexRight>
        </Content>
      </FlexRight>
    </Wrapper>
  );
};

export { SectionAbout };
