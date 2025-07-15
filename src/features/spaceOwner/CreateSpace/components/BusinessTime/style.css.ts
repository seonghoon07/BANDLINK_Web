import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const businessTimeContainer = style({
  width: '100%',
  ...flex.COLUMN_VERTICAL,
  gap: '20px',
});

export const startTimeWrapper = style({
  width: '100%',
  ...flex.BETWEEN,
});

export const startTimeLabel = style({
  ...font.p1,
  color: theme.white,
});

export const timeWrapper = style({
  ...flex.FLEX,
  gap: '12px',
});

export const time = style({
  ...font.p1,
  color: theme.white,
});

export const categoryContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const categoryLabel = style({
  ...font.caption,
  color: theme.gray['200'],
});
