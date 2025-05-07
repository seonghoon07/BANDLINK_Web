import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';

export const contentLayout = style({
  ...flex.COLUMN_FLEX,
  width: '100%',
  height: '100%',
});
