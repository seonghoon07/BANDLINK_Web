import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  ...flex.COLUMN_FLEX,
  gap: '32px',
  flex: '1',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 122px 24px',
});

export const contentContainer = style({
  width: '100%',
  height: '100%',
  ...flex.COLUMN_FLEX,
  flex: '1',
  gap: '36px',
});

export const todayReservationContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '16px',
});

export const todayReservation = style({
  width: '100%',
  ...font.h4,
  color: theme.white,
});

export const reservationTimeContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const reservationTimeWrapper = style({
  width: '100%',
  ...flex.BETWEEN,
});

export const timeLabel = style({
  ...font.p1,
  color: theme.white,
});

export const timeValue = style({
  ...font.p1,
  color: theme.white,
  textAlign: 'right',
});

export const revenueBox = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '20px',
  borderRadius: '8px',
  backgroundColor: theme.gray['800'],
  padding: '20px',
});

export const monthRevenueWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
});

export const categoryLabel = style({
  ...font.p2,
  fontWeight: '600px',
  color: theme.gray['300'],
});

export const categoryValue = style({
  ...font.h4,
  fontWeight: '500px',
  color: theme.white,
});

export const yellowColor = style({
  color: theme.yellow['500'],
});

export const mySpaceContainer = style({
  width: '100%',
  height: '100%',
  ...flex.COLUMN_FLEX,
  flex: '1',
  gap: '12px',
});

export const mySpaceTitle = style({
  ...font.h5,
  color: theme.white,
});

export const mySpaceWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '16px',
});

export const spaceImage = style({
  width: '100%',
  height: '140px',
  borderRadius: '4px',
  objectFit: 'cover',
});

export const spaceInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
});

export const placeName = style({
  width: '100%',
  ...font.s2,
  color: theme.white,
});

export const placeAddress = style({
  width: '100%',
  ...font.p1,
  color: theme.white,
});

export const businessHours = style({
  width: '100%',
  ...font.p1,
  color: theme.white,
});

export const emptySpaceWrapper = style({
  width: '100%',
  height: '100%',
  ...flex.CENTER,
  flex: '1',
});

export const emptyText = style({
  ...font.h5,
  color: theme.gray['300'],
});
