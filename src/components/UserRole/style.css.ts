import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const layout = style({
  width: '100%',
  ...flex.FLEX,
  padding: '12px 16px',
  gap: '8px',
  borderRadius: '8px',
  border: `1px solid ${theme.white}`,
  color: theme.white,
});

export const textWrapper = style({
  ...flex.COLUMN_HORIZONTAL,
});

export const role = style({
  ...font.s2,
  color: theme.white,
});

export const roleInfo = style({
  ...font.caption,
  color: theme.white,
});
