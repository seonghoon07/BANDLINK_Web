import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const headerLayout = style({
  ...flex.COLUMN_FLEX,
  padding: '72px 24px 0px 24px',
});

export const logoLayout = style({
  ...flex.START,
});

export const textLogo = style({
  ...font.h3,
  color: theme.yellow['500'],
});
