import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';

export const container = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
});
