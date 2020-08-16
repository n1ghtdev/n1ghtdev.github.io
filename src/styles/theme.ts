import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  primary: '#173ef6',
  secondary: '#832cff',
  background: '#151b27',
  text: '#e2f3f5',
  success: '#137538',
  error: '#bf2a3d',
};

export default theme;
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
