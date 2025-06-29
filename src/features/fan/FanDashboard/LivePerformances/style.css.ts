import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const livePerformanceContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '12px',
});

export const titleText = style({
  ...font.h5,
  color: theme.white,
});

export const livePerformanceCardWrapper = style({
  width: '100%',
  ...flex.FLEX,
  gap: '8px',
  overflowX: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
