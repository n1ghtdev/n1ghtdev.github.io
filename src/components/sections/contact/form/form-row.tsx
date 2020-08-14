import React from 'react';
import { Row, Label, Error } from './style';

type Props = {
  name: string;
  error: string | boolean | undefined;
  children: React.ReactNode;
};

function FormRow({ name, error, children }: Props) {
  return (
    <Row className="contact-fadeIn">
      <Label htmlFor={name}>{name}</Label>
      {children}
      <Error>{error || ''}</Error>
    </Row>
  );
}

export default FormRow;
