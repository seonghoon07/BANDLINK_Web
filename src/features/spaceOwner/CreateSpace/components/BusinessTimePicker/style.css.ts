import { style } from '@vanilla-extract/css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const item = style({
  ...font.p1,
  color: theme.white,
});

export const selected = style({
  ...font.p1,
  color: theme.yellow['500'],
});
