import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const roomResevationContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
  width: '100%',
  minHeight: '100vh',
  padding: '0 24px',
  backgroundColor: theme.gray['900'],
  paddingBottom: '108px',
});

export const roomReservationHeader = style({
  paddingTop: '60px',
});

export const contentContainer = style({
  ...flex.COLUMN_FLEX,
  paddingBottom: '40px',
  gap: '16px',
});

export const roomImg = style({
  width: '100%',
  aspectRatio: '1.5/1',
  borderRadius: '8px',
});

export const roomInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const roomName = style({
  ...font.h3,
  color: theme.white,
});

export const description = style({
  ...font.p2,
  color: theme.gray['300'],
});

export const price = style({
  color: theme.yellow[500],
  ...font.s2,
  fontWeight: 600,
});

export const thinText = style({
  fontWeight: 400,
});

export const deviderLine = style({
  height: '1px',
  width: '100%',
  backgroundColor: theme.gray['700'],
});

export const calendarLayout = style({});