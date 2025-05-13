import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const layout = style({
  ...flex.COLUMN_START,
  width: '100vw',
  height: '100vh',
  background: theme.gray['900'],
  padding: '128px 24px 0px 24px',
});

export const contentWrapper = style({
  width: '100%',
  ...flex.COLUMN_CENTER,
  gap: '116px',
});

export const questionText = style({
  ...font.h2,
  color: theme.white,
});

export const questionTextHighlight = style({
  color: theme.yellow[500],
});

export const roleInfoWrapper = style({
  width: '100%',
  ...flex.COLUMN_START,
  gap: '16px',
});

export const changeableText = style({
  color: theme.gray[300],
  ...font.p3,
});
