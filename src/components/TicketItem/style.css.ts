import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const ticketItemContainer = style({
  ...flex.FLEX,
  gap: '16px',
  width: '100%',
});

export const performanceImg = style({
  height: '112px',
  aspectRatio: '5/7',
  borderRadius: '8px',
});

export const ticketContentWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
  width: '100%',
  paddingTop: '8px',
});

export const infoItem = style({
  ...flex.FLEX,
});

export const infoLable = style({
  ...font.caption,
  color: theme.gray['300'],
  width: '6rem',
});

export const infoText = style({
  ...font.caption,
  color: theme.white,
  width: '100%',
});
