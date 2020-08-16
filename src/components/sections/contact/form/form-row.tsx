import React from 'react';
import { Row, Label, Error } from './style';

type Props = {
  name: string;
  error: string | boolean | undefined;
  children: React.ReactNode;
  className?: string;
};

function FormRow({ name, error, children, className }: Props) {
  return (
    <Row className={className || ''}>
      <Label htmlFor={name}>{name}</Label>
      {children}
      <Error>{error || ''}</Error>
    </Row>
  );
}

export default FormRow;
