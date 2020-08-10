import React from 'react';
import styled from 'styled-components';

import useIntersection from '@hooks/use-intersection';
import { useSection } from '@hooks/use-active-section';

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Wrapper = styled.section`
  display: block;
`;

const Section = (props: Props) => {
  const ref = React.useRef(null);
  // const intersection = useIntersection(ref, { threshold: 0.5 });
  // const { setActiveSection } = useSection();

  // React.useEffect(() => {
  //   intersection && setActiveSection(props.id);
  // }, [intersection, setActiveSection, props.id]);

  return (
    <Wrapper className={props.className} id={props.id} ref={ref}>
      {props.children}
    </Wrapper>
  );
};

export default Section;
