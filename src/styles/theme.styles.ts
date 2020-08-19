import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#20203E',
      mid: '#2d2b4c',
      light: '#484567',
    },
    secondary: {
      dark: '#da553b',
      mid: '#e27a66',
      light: '#e79383',
    },
    gray: {
      dark: '#bac4c5',
      mid: '#ccd4d5',
      light: '#fdf6f5',
      light2: '#fbfbfb',
    },
    red: '#eb3b5a',
    green: '#1abc9c',
    blue: '#3498db',
  },
  fonts: {
    primary: 'Mulish, sans-serif',
    secondary: 'Sora, sans-serif',
  },
  fontSizes: {
    xsmall: '12px',
    small: '14px',
    regular: '16px',
    medium: '20px',
    large: '28px',
    h1: '60px',
    h2: '40px',
    h3: '22px',
  },
  headerWidth: '70px',
};

export default Theme;
