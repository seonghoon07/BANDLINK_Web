import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  ...flex.COLUMN_FLEX,
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 177px 24px',
});

export const fixBtnContainer = style({
  width: '100%',
  ...flex.CENTER,
  padding: '16px 24px',
  backgroundColor: theme.gray['900'],
  position: 'fixed',
  bottom: '98px',
  left: '0',
});

export const contentContainer = style({
  width: '100%',
  height: '100%',
  ...flex.COLUMN_FLEX,
  gap: '24px',
});

export const headerContainer = style({
  width: '100%',
  padding: '72px 0px 12px 0px',
  ...flex.HORIZONTAL,
  borderBottom: `1px solid ${theme.gray['700']}`,
});

export const headerText = style({
  ...font.h4,
  color: theme.white,
});

export const spaceInfoWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '16px',
});

export const spaceImg = style({
  width: '100%',
  aspectRatio: '3.5/2.4',
  borderRadius: '8px',
  objectFit: 'cover',
});

export const textInfoWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const spaceName = style({
  ...font.h3,
  color: theme.white,
});

export const spaceAddress = style({
  ...font.p1,
  color: theme.white,
});

export const restDay = style({
  ...font.p1,
  color: theme.white,
});

export const redColor = style({
  color: theme.red,
});

export const roomWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
});
