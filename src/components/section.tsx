import React from 'react';
import styled from 'styled-components';

import useInView from '@hooks/use-in-view';
import { useSection } from '@hooks/use-active-section';

type Props = {
  id: string;
  children: React.ReactNode;
};

const Wrapper = styled.section`
  display: block;
`;

const Section = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  const { setActiveSection } = useSection();

  React.useEffect(() => {
    isInView && setActiveSection(props.id);
  }, [isInView, setActiveSection, props.id]);

  return (
    <Wrapper id={props.id} ref={ref}>
      {props.children}
    </Wrapper>
  );
};

export default Section;
