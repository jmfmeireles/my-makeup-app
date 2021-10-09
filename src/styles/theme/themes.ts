import { createTheme } from '@mui/material/styles';

const lightTheme = {
  primary: '#8a6063',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  header: '#ffffff',
  background: '#F8F8F8',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: '#8a6063',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  header: 'rgba(0,0,0,1)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const materialUiTheme = createTheme({
  typography: {
    fontFamily: ['"Gruppo"', 'sans-serif'].join(','),
  },
});
