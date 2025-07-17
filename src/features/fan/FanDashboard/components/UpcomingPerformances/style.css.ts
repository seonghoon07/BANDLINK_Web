import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const upcomingPerformanceContainer = style({
  width: '100%',
  minHeight: '176px',
  ...flex.COLUMN_FLEX,
  gap: '12px',
});

export const titleText = style({
  ...font.h5,
  color: theme.white,
});

export const upcomingPerformanceCardWrapper = style({
  width: '100%',
  height: '100%',
  ...flex.FLEX,
  gap: '8px',
  overflowX: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const noUpcomingContainer = style({
  width: '100%',
  height: '100%',
  ...flex.CENTER,
});

export const noUpcomingText = style({
  ...font.p2,
  color: theme.gray['300'],
});
