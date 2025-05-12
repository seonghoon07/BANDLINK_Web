import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const baseButton = style({
  borderRadius: '8px',
  cursor: 'pointer',
});

export const button = recipe({
  base: baseButton,
  variants: {
    color: {
      primary: {
        backgroundColor: theme.yellow['500'],
        color: theme.gray['900'],
      },
      disabled: {
        backgroundColor: theme.gray['400'],
        color: theme.gray['600'],
      },
    },
    size: {
      lg: { width: '100%', padding: '14px 0px', ...font.btn1 },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'lg',
  },
});
