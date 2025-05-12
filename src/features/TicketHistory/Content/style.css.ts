import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const contentContainer = style({
  width: '100%',
  height: '100%',
  ...flex.COLUMN_FLEX,
  gap: '28px',
});

export const headerContainer = style({
  ...flex.CENTER,
  paddingTop: '60px',
});

export const headerTitle = style({
  ...font.s1,
  color: theme.white,
});

export const ticketListContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '16px',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
