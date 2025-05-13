import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const performanceItemContainer = style({
  ...flex.VERTICAL,
  gap: '16px',
});

export const performanceImg = style({
  width: '72px',
  height: '72px',
  borderRadius: '8px',
  objectFit: 'cover',
});

export const textWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
});

export const title = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: theme.white,
  ...font.s2,
});

export const artist = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: theme.white,
  ...font.p3,
});

export const price = style({
  ...font.p3,
  fontWeight: '600',
  color: theme.yellow['500'],
  whiteSpace: 'nowrap',
});
