import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: theme.gray['900'],
});

export const submitBtnContainer = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: theme.gray['900'],
  position: 'fixed',
  bottom: '98px',
});
