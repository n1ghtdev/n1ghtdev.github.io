import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;

  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    outline: none;
  }
`;
