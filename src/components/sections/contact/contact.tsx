import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  Error,
  SubmitButton,
} from './style';
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';

type Props = {};

function Contact(props: Props) {
  const schema = Yup.object({
    name: Yup.string(),
    email: Yup.string()
      .email('Please enter a valid email')
      .min(5)
      .required('Please enter a valid email'),
    message: Yup.string().max(200).required('Message cannot be empty'),
  });
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: schema,
    onSubmit: (values: any) => {},
  });
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
        <Form onSubmit={handleSubmit}>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="name">Name</Label>
            <Input name="name" value={values.name} onChange={handleChange} />
            <Error>
              {touched.name && errors.name ? <div>{errors.name}</div> : null}
            </Error>
          </FormRow>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="email">Email</Label>
            <Input name="email" value={values.email} onChange={handleChange} />
            <Error>
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
            </Error>
          </FormRow>
          <FormRow className="contact-fadeIn">
            <Label htmlFor="message">Message</Label>
            <Textarea
              rows={6}
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            <Error>
              {touched.message && errors.message ? (
                <div>{errors.message}</div>
              ) : null}
            </Error>
          </FormRow>
          <SubmitButton type="submit" className="contact-fadeIn">
            send email
          </SubmitButton>
        </Form>
      </Wrapper>
    </Section>
  );
}

export default Contact;
