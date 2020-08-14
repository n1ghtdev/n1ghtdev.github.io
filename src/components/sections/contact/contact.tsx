import React from 'react';

import Form from './form';
import Section from '@components/section';
import { Wrapper, Title, Subtitle } from './style';
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';
import { email } from '@config/index';

function Contact() {
  const ref = React.useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn('.contact-fadeIn');
    }
  }, [intersection]);

  return (
    <Section id="contact">
      <Wrapper ref={ref}>
        <Title className="contact-fadeIn">Contact</Title>
        <Subtitle className="contact-fadeIn">{email}</Subtitle>
        <Form />
      </Wrapper>
    </Section>
  );
}

export default Contact;
