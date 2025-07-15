import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';

export const container = style({
  ...flex.COLUMN_FLEX,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.gray['900'],
  padding: '60px 24px 108px 24px',
});

export const profileContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '20px',
  padding: '24px 0',
});

export const profileTextWrapper = style({
  ...flex.COLUMN_FLEX,
});

export const greetText = style({
  ...font.s1,
  color: theme.white,
});

export const name = style({
  color: theme.yellow['500'],
});

export const email = style({
  ...font.p3,
  color: theme.gray['300'],
});

export const infoSummaryCard = style({
  ...flex.FLEX,
  gap: '12px',
  width: '100%',
  padding: '12px 16px',
  backgroundColor: theme.gray['800'],
  borderRadius: '8px',
});

export const infoSummaryItem = style({
  ...flex.COLUMN_CENTER,
  gap: '8px',
  padding: '12px',
  width: '100%',
});

export const summaryLable = style({
  ...font.p1,
  color: theme.white,
});

export const summaryText = style({
  ...font.p1,
  color: theme.white,
  fontWeight: '600',
});

export const settingMenuList = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const menuSectionTitleContainer = style({
  ...flex.VERTICAL,
  padding: '16px 0 8px 0',
});

export const menuSectionTitle = style({
  ...font.p3,
  color: theme.gray['300'],
  fontWeight: '600',
});

export const menuItemContainer = style({
  ...flex.VERTICAL,
  gap: '12px',
  padding: '16px 0',
});

export const menuItem = style({
  ...font.p1,
  fontWeight: '600',
  color: theme.white,
});

export const accountSetting = style({
  ...flex.COLUMN_FLEX,
});

export const warningText = style({
  color: theme.red,
});

export const menuDivider = style({
  height: '1px',
  width: '100%',
  backgroundColor: theme.gray['800'],
});
