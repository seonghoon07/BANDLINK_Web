import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const contentContainer = style({
  ...flex.COLUMN_FLEX,
  width: '100%',
  height: '100%',
  paddingBottom: '108px',
});

export const performanceContentContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '16px',
  overflowY: 'auto',
  paddingBottom: '20px',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const headerContainer = style({
  paddingTop: '60px',
});

export const performanceImg = style({
  width: '100%',
  aspectRatio: '1/1',
  borderRadius: '8px',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const infoContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '24px',
});

export const nameAndArtistWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
  width: '100%',
});

export const performanceName = style({
  ...font.h3,
  color: theme.white,
  width: '100%',
});

export const artist = style({
  ...font.p1,
  color: theme.white,
  width: '100%',
});

export const categoryContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const categoryName = style({
  ...font.p2,
  color: theme.gray['300'],
});

export const categoryContent = style({
  ...font.p2,
  color: theme.white,
});

export const price = style({
  ...font.s2,
  color: theme.yellow['500'],
});

export const reserveBtnContainer = style({
  ...flex.CENTER,
  padding: '12px 0px',
});
