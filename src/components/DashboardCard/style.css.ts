import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const livePerformanceCard = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const performanceImg = style({
  width: '100px',
  height: '100px',
  borderRadius: '8px',
  objectFit: 'cover',
});

export const textWrapper = style({
  width: '100px',
  ...flex.COLUMN_FLEX,
  gap: '4px',
});

export const artistName = style({
  ...font.p3,
  fontWeight: '600',
  color: theme.white,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const stateText = style({
  ...font.caption,
  color: theme.gray['200'],
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
