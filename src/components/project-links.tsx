import React from 'react';
import styled from 'styled-components';

import Icon from '@components/icon';
import IconLink from '@components/icon-link';

import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';

type Props = {
  github?: string;
  external?: string;
};

export const Wrapper = styled.div`
  & > * {
    vertical-align: middle;
    transition: fill 250ms;

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

function ProjectLinks({ github, external }: Props) {
  return (
    <Wrapper>
      <IconLink href={github || ''}>
        <Icon icon={<GithubIcon />} isDisabled={!github} />
      </IconLink>
      <IconLink href={external || ''}>
        <Icon icon={<ExternalIcon />} isDisabled={!external} />
      </IconLink>
    </Wrapper>
  );
}

export default ProjectLinks;
