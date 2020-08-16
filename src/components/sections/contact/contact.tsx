import React from 'react';

import Form from './form';
import Section from '@components/section';
import { Wrapper, Title, Subtitle } from './style';

import useAnimation from '@hooks/use-animation';
import { email } from '@config/index';

function Contact() {
  const ref = React.useRef(null);

  const animationClass = 'contact-fade-in';
  useAnimation(ref, animationClass);

  return (
    <Section id="contact">
      <Wrapper ref={ref}>
        <Title className={animationClass}>Contact</Title>
        <Subtitle className={animationClass}>{email}</Subtitle>
        <Form />
      </Wrapper>
    </Section>
  );
}

export default Contact;
