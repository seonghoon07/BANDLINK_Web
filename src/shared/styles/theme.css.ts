import { createGlobalTheme } from '@vanilla-extract/css';

const theme = createGlobalTheme(':root', {
  yellow: {
    50: '#FAFFEE',
    100: '#EFFECA',
    200: '#E8FEB1',
    300: '#DDFD8D',
    400: '#D6FD77',
    500: '#CCFC55',
    600: '#BAE54D',
    700: '#91B33C',
    800: '#708B2F',
    900: '#566A24',
  },
  gray: {
    50: '#F4F4F4',
    100: '#E5E5E5',
    200: '#D8D8D8',
    300: '#C5C5C5',
    400: '#A2A2A2',
    500: '#787878',
    600: '#5A5A5A',
    700: '#4A4A4A',
    800: '#323131',
    900: '#20201E',
  },
  red: '#FF4E4E',
  blue: '#6492FF',
  white: '#FFFFFF',
  black: '#121213',
});

export default theme;
