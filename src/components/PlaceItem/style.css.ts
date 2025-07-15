import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const placeContainer = style({
  width: '100%',
  ...flex.VERTICAL,
  gap: '16px',
});

export const placeImg = style({
  height: '72px',
  aspectRatio: '1/1',
  borderRadius: '8px',
});

export const textContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '4px',
});

export const placename = style({
  ...font.s2,
  color: theme.white,
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const infoText = style({
  ...font.p3,
  color: theme.gray['400'],
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});
