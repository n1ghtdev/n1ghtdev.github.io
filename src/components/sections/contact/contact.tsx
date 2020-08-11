import React from 'react';
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

type Props = {};

function Contact(props: Props) {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Subtitle>artyenick@gmail.com</Subtitle>
      <Form>
        <FormRow>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" name="email" />
        </FormRow>
        <FormRow>
          <Label htmlFor="message">Message</Label>
          <Textarea rows={6} id="message" name="message" />
        </FormRow>
        <SubmitButton onClick={() => {}}>send email</SubmitButton>
      </Form>
    </Wrapper>
  );
}

export default Contact;
