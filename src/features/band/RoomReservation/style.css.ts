import { style, styleVariants } from '@vanilla-extract/css';
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

export const timeSlotContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
  width: '100%',
});

export const timeSlotWrapper = style({
  ...flex.FLEX,
  alignItems: 'end',
  gap: '1px',
  width: '100%',
  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const timeSlot = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const timeLabel = style({
  ...font.caption,
  color: theme.white,
});

export const timeBlockContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
  width: '52px',
});

export const time = style({
  ...font.caption,
  color: theme.gray['300'],
});

export const timeBlock = style({
  height: '40px',
  backgroundColor: theme.yellow[900],
});

export const roundedLeft = style({
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
});

export const roundedRight = style({
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
});

export const labelContainer = style({
  ...flex.FLEX,
  gap: '12px',
});

export const labelWrapper = style({
  ...flex.FLEX,
  gap: '4px',
});

export const labelColorBox = styleVariants({
  selected: {
    width: '12px',
    height: '12px',
    borderRadius: '4px',
    backgroundColor: theme.yellow['500'],
  },
  unselected: {
    width: '12px',
    height: '12px',
    borderRadius: '4px',
    backgroundColor: theme.yellow['900'],
  },
  closed: {
    width: '12px',
    height: '12px',
    borderRadius: '4px',
    backgroundColor: theme.gray['700'],
  },
});

export const labelText = style({
  ...font.caption,
  color: theme.white,
});

export const selected = style({
  backgroundColor: theme.yellow['500'],
});

export const unselected = style({
  backgroundColor: theme.yellow['900'],
});
