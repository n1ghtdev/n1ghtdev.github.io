import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  primary: '#67d378',
  secondary: '#2f363d',
  background: '#000',
  text: '#fff',
};

export default theme;
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
