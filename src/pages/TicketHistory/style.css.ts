import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';

export const container = style({
  ...flex.COLUMN_FLEX,
  width: '100vw',
  height: '100vh',
  padding: '0 24px 108px 24px',
  backgroundColor: theme.gray['900'],
});
