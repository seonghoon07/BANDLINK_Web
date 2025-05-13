import { style } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { flex } from '@/shared/styles/flex.css';
import { font } from '@/shared/styles/font.css';

export const layout = style({
  ...flex.CENTER,
  width: '100vw',
  height: '100vh',
  background: theme.gray['900'],
  padding: '0 24px',
});

export const contentWrapper = style({
  width: '100%',
  ...flex.COLUMN_CENTER,
  gap: '148px',
});

export const logoLayout = style({
  ...flex.COLUMN_CENTER,
});

export const googleLoginBtn = style({
  width: '100%',
  ...flex.START,
  padding: '12px',
  borderRadius: '4px',
  border: `1px solid ${theme.gray['200']}`,
  backgroundColor: theme.white,
  position: 'relative',
});

export const googleLoginText = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  ...font.btn1,
});
