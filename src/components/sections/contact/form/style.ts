import styled, { css } from 'styled-components';
import ButtonSubmit from '@components/button-submit';
import { THEME } from '@styles/theme';

export const FormWrapper = styled.form`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
`;

export const FormResponseMessage = styled.div`
  opacity: 0;
  animation: fadeIn 250ms linear forwards;
  padding: 14px 16px;
  margin-bottom: 20px;
  border-radius: 5px;

  ${({ isSuccess }: { isSuccess: boolean }) => `
    background-color: ${isSuccess ? THEME.GREEN : THEME.RED};
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Row = styled.div`
  margin-bottom: 20px;
  opacity: 0;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const Error = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  color: #e83030;
`;

const InputStyles = css`
  display: block;
  width: 100%;
  padding: 0 15px;
  font-size: 18px;
  background: #1a202d;
  border: 2px solid #303b52;
  border-radius: 3px;
  color: ${THEME.LIGHT};
  font-family: 'Fira Sans', sans-serif;

  &:focus {
    outline: none;
    border-color: ${THEME.PURPLE};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: inset 0 0 0 30px #1a202d !important;
    -webkit-text-fill-color: ${THEME.LIGHT} !important;
  }
`;

export const Input = styled.input`
  ${InputStyles};

  height: 50px;
`;

export const Textarea = styled.textarea`
  ${InputStyles};
  resize: none;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FormButtonSubmit = styled(ButtonSubmit)`
  margin-top: 40px;
  opacity: 0;
`;
