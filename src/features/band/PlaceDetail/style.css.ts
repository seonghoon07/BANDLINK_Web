import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const placeDetailContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '12px',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px',
});

export const placeDetailHeader = style({
  paddingTop: '60px',
});

export const placeDetailContent = style({
  ...flex.COLUMN_FLEX,
  gap: '16px',
  paddingBottom: '108px',
});

export const placeImage = style({
  width: '100%',
  aspectRatio: '1.5/1',
  borderRadius: '8px',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const placeInfo = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const placename = style({
  ...font.h3,
  color: theme.white,
});

export const address = style({
  ...font.p1,
  color: theme.white,
});

export const roomList = style({
  ...flex.COLUMN_FLEX,
});
