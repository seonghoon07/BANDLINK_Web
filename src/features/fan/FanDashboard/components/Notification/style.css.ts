import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import { BusanRockFestaImg } from '@/assets';
import { font } from '@/shared/styles/font.css';
import theme from '@/shared/styles/theme.css';

export const contentLayout = style({
  ...flex.COLUMN_FLEX,
  width: '100%',
  height: '100%',
});

export const notificationLayout = style({
  position: 'relative',
  ...flex.COLUMN_FLEX,
  justifyContent: 'end',
  height: '180px',
  width: '100%',
  padding: '20px',
  borderRadius: '8px',
  backgroundImage: `url(${BusanRockFestaImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const gradientOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 16.5%, rgba(0, 0, 0, 0.70) 100%)',
});

export const notificationWrapper = style({
  ...flex.COLUMN_FLEX,
});

export const notificationText = style({
  ...font.h5,
  color: theme.white,
  zIndex: 1,
});
