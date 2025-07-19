import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const redirectContainer = style({
  width: '100vw',
  height: '100vh',
  ...flex.COLUMN_CENTER,
  backgroundColor: theme.gray['900'],
});

export const loadingText = style({
  ...font.p1,
  color: theme.gray['300'],
});
