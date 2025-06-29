import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
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

export const roomNameInput = style({
  width: '100%',
  backgroundColor: theme.gray['800'],
  borderRadius: '4px',
  padding: '12px 16px',
  color: theme.white,
  ...font.p1,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const roomDescriptionInput = style({
  width: '100%',
  minHeight: '240px',
  backgroundColor: theme.gray['800'],
  borderRadius: '4px',
  padding: '12px 16px',
  color: theme.white,
  ...font.p1,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const roomPriceContainer = style({
  width: '100%',
  position: 'relative',
});

export const roomPriceInput = style({
  width: '100%',
  padding: '12px 16px',
  borderRadius: '4px',
  backgroundColor: theme.gray['800'],
  ...font.p1,
  color: theme.white,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const priceIconText = style({
  ...font.p1,
  color: theme.yellow['500'],
  position: 'absolute',
  top: '50%',
  right: '16px',
  transform: 'translate(-50%, -50%)',
});
