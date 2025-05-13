import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';

export const container = style({
  width: '100vw',
  height: '100vh',
  ...flex.COLUMN_FLEX,
  backgroundColor: theme.gray['900'],
  padding: '0px 24px',
});
