import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  minHeight: '100vh',
  width: '100vw',
  backgroundColor: theme.gray['900'],
  padding: '0px 24px 108px 24px',
});

export const header = style({
  padding: '72px 0px 12px 0px',
});

export const createForm = style({
  width: '100%',
  ...flex.COLUMN_VERTICAL,
  gap: '20px',
});

export const imageUploadContainer = style({
  ...flex.COLUMN_CENTER,
  gap: '12px',
  width: '216px',
  height: '304px',
});

export const imageUploadInput = style({
  width: '100%',
  height: '100%',
});

export const previewImage = style({
  width: '100%',
  height: '100%',
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

export const infoContainer = style({
  width: '100%',
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const label = style({
  ...font.caption,
  color: theme.gray['200'],
});

export const titleInput = style({
  width: '100%',
  padding: '12px 16px',
  borderRadius: '4px',
  backgroundColor: theme.gray['800'],
  color: theme.white,
  ...font.p1,

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const descriptionInput = style({
  width: '100%',
  padding: '12px 16px',
  minHeight: '240px',
  backgroundColor: theme.gray['800'],
  color: theme.white,
  ...font.p1,
  borderRadius: '4px',

  '::placeholder': {
    color: theme.gray['400'],
  },
});

export const deviderLine = style({
  height: '1px',
  width: '100%',
  backgroundColor: theme.gray['700'],
});

export const dropdownList = style({
  width: '100%',
  minHeight: '57px',
  backgroundColor: theme.gray['800'],
  borderRadius: '4px',
});

export const dropdownIcon = style({
  position: 'absolute',
  top: '50%',
  right: '16px',
  transform: 'translate(0, -50%) rotate(0deg)',
  transition: 'transform 0.3s ease',
});

export const dropdownIconOpen = style({
  transform: 'translate(0, -50%) rotate(180deg)',
});

export const dropdownItem = style({
  position: 'relative',
  ...flex.VERTICAL,
  gap: '20px',
  width: '100%',
  minHeight: '57px',
  padding: '12px 16px',
  borderTop: `1px solid ${theme.gray['700']}`,
  paddingRight: '56px',

  ':first-child': {
    border: 'none',
  },
});
export const placeInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  width: '100%',
});

export const placeName = style({
  width: '100%',
  ...font.p1,
  color: theme.white,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const address = style({
  ...font.caption,
  color: theme.gray['400'],
});
