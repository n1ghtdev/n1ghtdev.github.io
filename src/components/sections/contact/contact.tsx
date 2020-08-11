import React from 'react';
import Section from '@components/section';
import {
  Wrapper,
  Title,
  Subtitle,
  Form,
  FormRow,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from './style';
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';

type Props = {};

function Contact(props: Props) {
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
        <Subtitle className="contact-fadeIn">artyenick@gmail.com</Subtitle>
        <Form>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" />
          </FormRow>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" name="email" />
          </FormRow>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="message">Message</Label>
            <Textarea rows={6} id="message" name="message" />
          </FormRow>
          <SubmitButton className="contact-fadeIn" onClick={() => {}}>
            send email
          </SubmitButton>
        </Form>
      </Wrapper>
    </Section>
  );
}

export default Contact;
