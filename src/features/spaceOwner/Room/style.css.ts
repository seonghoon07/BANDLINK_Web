import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  ...flex.COLUMN_FLEX,
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 98px 24px'
});

export const contentContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
});

export const header = style({
  padding: '72px 0px 12px 0px',
});

export const roomInfoContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '16px',
});

export const rooomImage = style({
  width: '100%',
  aspectRatio: '3.5/2.4',
  borderRadius: '8px',
});

export const mainInfoWrapper= style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const roomName = style({
  width: '100%',
  ...font.h3,
  color: theme.white,
});

export const roomDescription = style({
  width: '100%',
  ...font.p2,
  color: theme.gray['300'],
});

export const roomPrice = style({
  width: '100%',
  ...font.h5,
  color: theme.yellow['500'],
});

export const lightText = style({
  ...font.h5,
  fontWeight: 400,
});

export const dividerLine = style({
  width: '100%',
  height: '1px',
  backgroundColor: theme.gray['700'],
});

export const categoryContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
});

export const categoryLabel = style({
  ...font.s2,
  color: theme.white,
});

export const restDay = style({
  width: '100%',
  ...font.p2,
  color: theme.white,
});

export const redColor = style({
  color: theme.red,
});

export const additionalDescriptionBox = style({
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: theme.gray['800'],
});

export const additionalDescription = style({
  width: '100%',
  ...font.p2,
  color: theme.gray['200'],
});
