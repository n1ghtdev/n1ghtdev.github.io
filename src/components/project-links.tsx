import React from 'react';
import styled from 'styled-components';

import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';

type Props = {
  github: string;
  external: string;
};

export const Wrapper = styled.div`
  & > * {
    vertical-align: middle;
    transition: fill 250ms;

    &:nth-child(2) {
      margin-left: 10px;
    }

    &:hover {
      fill: ${({ theme }: { theme: any }) => theme.text};
    }
  }
`;

function ProjectLinks({ github, external }: Props) {
  return (
    <Wrapper>
      {github ? (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GithubIcon color="#fff" />
        </a>
      ) : (
        <GithubIcon />
      )}
      {external ? (
        <a href={external} target="_blank" rel="noopener noreferrer">
          <ExternalIcon color="#fff" />
        </a>
      ) : (
        <ExternalIcon />
      )}
    </Wrapper>
  );
}

export default ProjectLinks;
