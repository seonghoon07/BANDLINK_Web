import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';
import { recipe } from '@vanilla-extract/recipes';

export const layout = style({
  ...flex.COLUMN_FLEX,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
  padding: '80px 24px',
  gap: '24px',
});

export const contentWrapper = style({
  ...flex.COLUMN_FLEX,
  justifyContent: 'space-between',
  height: '100%',
  gap: '104px',
});

export const titleText = style({
  ...font.h2,
  color: theme.white,
});

export const inputFormWrapper = style({
  ...flex.COLUMN_FLEX,
  justifyContent: 'space-between',
  height: '100%',
});

export const nicknameInput = recipe({
  base: {
    width: '100%',
    padding: '12px',
    borderBottom: `1px solid ${theme.gray['100']}`,
    backgroundColor: 'transparent',
    color: theme.white,
    ...font.h4,

    '::placeholder': {
      color: theme.gray['300'],
      ...font.h4,
    },
  },
  variants: {
    status: {
      default: {},
      error: {
        borderBottom: `1px solid ${theme.red}`,
      },
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export const warningWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const warning = style({
  ...font.p2,
  color: theme.red,
});
