import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
  ...flex.COLUMN_FLEX,
  gap: '12px',
  padding: '0px 24px 132px 24px',
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

export const filterContainer = style({
  width: '100%',
  ...flex.FLEX,
  gap: '8px',
});

export const filterBtnContainer = style({
  ...flex.CENTER,
  padding: '8px',
  borderRadius: '8px',
  border: `1px solid ${theme.gray['800']}`,
});

export const placesContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
  width: '100%',
  height: '100%',
});
