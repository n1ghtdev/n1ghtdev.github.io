import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Wrapper = styled.section`
  display: block;
`;

const Section = (props: Props) => {
  return (
    <Wrapper className={props.className} id={props.id}>
      {props.children}
    </Wrapper>
  );
};

export default Section;
