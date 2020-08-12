import React from 'react';
import styled, { css } from 'styled-components';
import Button from '@components/button';

export const Wrapper = styled.div`
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 2rem;
  text-align: center;
  opacity: 0;
`;

export const Subtitle = styled.span`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  background: #10141d;
  border-radius: 5px;
  padding: 5px 15px;
  margin-bottom: 40px;
  opacity: 0;
`;

export const Form = styled.form`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
`;

export const FormRow = styled.div`
  margin-bottom: 20px;
  opacity: 0;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputStyles = css`
  display: block;
  width: 100%;
  padding: 0 15px;
  font-size: 18px;
  background: #1a202d;
  border: 2px solid #303b52;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondary};
  }
`;

export const Input = styled.input`
  ${InputStyles};

  height: 50px;
`;

export const Textarea = styled.textarea`
  ${InputStyles};
`;

export const Error = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  color: #e83030;
`;

export const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 40px;
  opacity: 0;
`;
