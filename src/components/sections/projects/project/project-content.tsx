import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div``;

export default function ProjectContent(props: Props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
