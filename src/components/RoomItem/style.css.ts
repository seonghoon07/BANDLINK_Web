import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const roomContainer = style({
  ...flex.FLEX,
  gap: '12px',
  width: '100%',
  padding: '12px 0',
  borderBottom: `1px solid ${theme.gray['700']}`,

  ':last-child': {
    borderBottom: 'none',
  },
});

export const roomInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  width: '100%',
  gap: '4px',
});

export const roomname = style({
  ...font.s2,
  fontWeight: 400,
  color: theme.yellow['500'],
});

export const price = style({
  ...font.p3,
  color: theme.white,
});


export const priceBold = style({
  ...font.p3,
  fontWeight: 600,
  color: theme.white,
});

export const roomDescription = style({
  ...font.p2,
  color: theme.gray['200'],
});

export const roomImg = style({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  objectFit: 'cover',
  objectPosition: 'center',
});
