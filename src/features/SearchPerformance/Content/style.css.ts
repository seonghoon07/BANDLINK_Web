import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const contentContainer = style({
  height: '100%',
  ...flex.COLUMN_FLEX,
  gap: '28px',
});

export const headerContainer = style({
  width: '100%',
  ...flex.END,
  paddingTop: '60px',
});

export const searchWrapper = style({
  position: 'relative',
  width: '100%',
});

export const searchInput = style({
  width: '100%',
  ...flex.VERTICAL,
  padding: '12px 40px 12px 16px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: theme.gray['800'],
  ...font.p2,
  color: theme.white,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const searchIcon = style({
  position: 'absolute',
  top: '50%',
  right: '16px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});

export const performanceWrapper = style({
  width: '100%',
  height: '100%',
  paddingBottom: '108px',
  ...flex.COLUMN_FLEX,
  gap: '12px',
  overflowY: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
