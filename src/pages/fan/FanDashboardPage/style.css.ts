import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';

export const layout = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
  ...flex.COLUMN_FLEX,
  gap: '20px',
  padding: '0px 24px 132px 24px',
});

export const contentLayout = style({
  ...flex.COLUMN_BETWEEN,
  width: '100%',
  height: '100%',
});
