import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';

export const navigationLayout = style({
  position: 'fixed',
  zIndex: 1,
  bottom: 0,
  left: 0,
  ...flex.FLEX,
  width: '100%',
  backgroundColor: theme.gray['900'],
  padding: '8px 0px',
});

export const navigationBtn = style({
  ...flex.COLUMN_CENTER,
  gap: '4px',
  width: '100%',
  padding: '16px 0px',
  color: theme.white,
});
