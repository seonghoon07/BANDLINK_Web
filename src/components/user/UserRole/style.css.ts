import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';
import { recipe } from '@vanilla-extract/recipes';

export const layout = recipe({
  base: {
    width: '100%',
    ...flex.FLEX,
    padding: '12px 16px',
    gap: '8px',
    borderRadius: '8px',
    border: `1px solid ${theme.white}`,
    color: theme.white,
  },
  variants: {
    selected: {
      true: {
        borderColor: theme.yellow['500'],
        color: theme.yellow['500'],
      },
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const textWrapper = style({
  ...flex.COLUMN_HORIZONTAL,
});

export const role = recipe({
  base: {
    ...font.s2,
    color: theme.white,
  },
  variants: {
    selected: {
      true: {
        color: theme.yellow['500'],
      },
      false: {},
    },
  },
});

export const roleInfo = recipe({
  base: {
    ...font.caption,
    color: theme.white,
  },
  variants: {
    selected: {
      true: {
        color: theme.yellow['500'],
      },
      false: {},
    },
  },
});
