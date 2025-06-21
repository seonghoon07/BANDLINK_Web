import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  ...flex.COLUMN_FLEX,
  gap: '24px',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 148px 24px',
});

export const header = style({
  paddingTop: '72px',
});

export const contentContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '24px',
});

export const imageUploadContainer = style({
  width: '100%',
  aspectRatio: '3/2',
  ...flex.CENTER,
  gap: '12px',
  borderRadius: '8px',
  border: `1px solid ${theme.gray['400']}`,
});

export const imageUploadInput = style({
  width: '100%',
  height: '100%',
});

export const previewImage = style({
  width: '100%',
  aspectRatio: '3/2',
  objectFit: 'cover',
  borderRadius: '8px',
});

export const addImageContainer = style({
  ...flex.COLUMN_CENTER,
  gap: '12px',
  width: '100%',
  height: '100%',
  border: `1px solid ${theme.gray['400']}`,
  borderRadius: '8px',
});

export const imageAddText = style({
  ...font.h4,
  color: theme.white,
});

export const categoryContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const categoryLabel = style({
  ...font.caption,
  color: theme.gray['200'],
});

export const placeNameInput = style({
  width: '100%',
  backgroundColor: theme.gray['800'],
  borderRadius: '4px',
  padding: '12px 16px',
  color: theme.white,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const placeTypeWrapper = style({
  ...flex.FLEX,
  gap: '12px',
});

export const placeType = style({
  padding: '12px 20px',
  borderRadius: '8px',
  border: `1px solid ${theme.gray['700']}`,
});

export const selectedBorder = style({
  border: `1px solid ${theme.yellow['500']}` + '!important',
});

export const selectedColor = style({
  color: theme.yellow['500'] + '!important',
});

export const placeTypeText = style({
  ...font.btn3,
  color: theme.white,
});

export const businessDay = style({
  width: '100%',
  ...flex.CENTER,
  padding: '12px 0px 12px 0',
  borderRadius: '8px',
  border: `1px solid ${theme.gray['700']}`,
});

export const businessDayText = style({
  ...font.btn3,
  color: theme.white,
});

export const businessTimeContainer = style({
  width: '100%',
  ...flex.COLUMN_VERTICAL,
  gap: '20px',
});

export const startTimeWrapper = style({
  width: '100%',
  ...flex.BETWEEN,
});

export const startTimeLabel = style({
  ...font.p1,
  color: theme.white,
});

export const timeWrapper = style({
  ...flex.FLEX,
  gap: '12px',
});

export const time = style({
  ...font.p1,
  color: theme.white,
});

export const roomWrapper = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
});

export const room = style({
  width: '100%',
  ...flex.BETWEEN,
  padding: '12px 0',
});

export const createRoomContainer = style({
  width: '100%',
  ...flex.VERTICAL,
  gap: '28px',
  padding: '24px 28px',
  backgroundColor: theme.gray['800'],
  borderRadius: '8px',
  border: `1px solid ${theme.gray['600']}`,
});

export const createRoomText = style({
  ...font.s2,
  color: theme.white,
});

export const roomPlaceholder = style({
  width: '100%',
  ...flex.BETWEEN,
  padding: '12px 0',
});

export const roomPlaceholderTextWrapper = style({
  ...flex.CENTER,
  width: '100%',
  backgroundColor: theme.gray['800'],
  padding: '32px',
  borderRadius: '8px',
});

export const noRoomText = style({
  ...font.p1,
  color: theme.gray['400'],
});

export const dividerLine = style({
  width: '100%',
  height: '1px',
  backgroundColor: theme.gray['700'],
});
