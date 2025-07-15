import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  ...flex.COLUMN_FLEX,
  gap: '32px',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 132px 24px',
});

export const header = style({
  ...flex.CENTER,
  padding: '84px 0px 12px 0px',
  borderBottom: `1px solid ${theme.gray['700']}`,
});

export const headerText = style({
  ...font.h4,
  color: theme.white,
});

export const reservationsContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '36px',
  flex: '1',
  overflowY: 'auto',
});

export const dayReservationContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '16px',
});

export const date = style({
  width: '100%',
  ...font.h4,
  color: theme.white,
});

export const reservationInfoWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '4px',
  paddingLeft: '20px',
  borderLeft: `4px solid ${theme.yellow['500']}`,
});

export const reservationInfo = style({
  width: '100%',
  ...font.p1,
  color: theme.white,
});
