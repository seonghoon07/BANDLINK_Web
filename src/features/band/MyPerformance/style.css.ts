import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const myPerformanceContainer = style({
  position: 'relative',
  ...flex.COLUMN_FLEX,
  gap: '24px',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px',
});

export const titleHeader = style({
  ...flex.CENTER,
  padding: '72px 0px 12px 0px',
  ...font.s2,
  color: theme.white,
  borderBottom: `1px solid ${theme.gray['700']}`,
});

export const myPerformnaces = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
  overflowY: 'auto',
  paddingBottom: '200px',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const myPerformnaceCardContainer = style({
  ...flex.FLEX,
  gap: '16px',
  width: '100%',
  height: '100%',
});

export const performanceCardImage = style({
  height: '112px',
  aspectRatio: '5/7',
  borderRadius: '8px',
  backgroundSize: 'cover',
  objectFit: 'cover',
});

export const categories = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
  width: '100%',
});

export const categoryContainer = style({
  ...flex.FLEX,
  gap: '12px',
  width: '100%',
});

export const categoryLabel = style({
  ...font.caption,
  color: theme.gray['300'],
  width: '48px',
  flexShrink: 0,
});

export const categoryValue = style({
  ...font.caption,
  color: theme.white,
  wordBreak: 'keep-all',
});

export const createBtnWrapper = style({
  position: 'absolute',
  left: 0,
  bottom: '108px',
  ...flex.CENTER,
  padding: '16px 24px',
  width: '100%',
  backgroundColor: theme.gray['900'],
});
