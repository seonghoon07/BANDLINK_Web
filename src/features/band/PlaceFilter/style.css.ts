import { style } from '@vanilla-extract/css';
import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  width: '100vw',
  height: '100vh',
  ...flex.COLUMN_FLEX,
  backgroundColor: theme.gray['900'],
});

export const filterContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '20px',
});

export const filterHeader = style({
  ...flex.VERTICAL,
  justifyContent: 'space-between',
  width: '100%',
  padding: '60px 24px 12px 24px',
  borderBottom: `1px solid ${theme.gray['700']}`,
});

export const headerText = style({
  ...font.s1,
  color: theme.white,
});

export const resetText = style({
  ...font.p2,
  color: theme.white,
});

export const filterContentWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: '36px',
  width: '100%',
  padding: '0 24px',
});

export const categoryContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '16px',
  width: '100%',
});

export const categoryTitle = style({
  ...font.p1,
  fontWeight: 600,
  color: theme.gray['500'],
});

export const typeOption = style({
  ...flex.FLEX,
  gap: '32px',
});

export const typeItem = style({
  ...flex.BETWEEN,
  width: '100%',
});

export const type = style({
  ...font.s2,
  color: theme.white,
});

export const typeCheckBox = style({
  display: 'none',
});

export const checkedBox = style({
  ...flex.CENTER,
  width: '20px',
  height: '20px',
  borderRadius: '2px',
  backgroundColor: theme.yellow['500'],
});

export const uncheckedBox = style({
  width: '20px',
  height: '20px',
  borderRadius: '2px',
  border: `1px solid ${theme.yellow['600']}`,
});

export const price = style({
  ...font.s2,
  color: theme.white,
});

export const track = style({
  width: 'calc(100% - 20px)',
  height: '2px',
  margin: '10px 0px 10px 10px',
});

export const thumb = style({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: `2px solid ${theme.yellow['500']}`,
  backgroundColor: theme.gray['900'],
});

export const selectAreaContainer = style({
  ...flex.COLUMN_FLEX,
  gap: '8px',
});

export const areaWrapper = style({
  ...flex.FLEX,
  gap: '8px',
  width: '100%',
  flexWrap: 'wrap',
});

export const allAreaBtn = recipe({
  base: {
    ...flex.CENTER,
    width: '100%',
    padding: '12px 0',
    borderRadius: '8px',
    ...font.p1,
    fontWeight: 600,
  },
  variants: {
    selected: {
      true: {
        border: `1px solid ${theme.yellow['500']}`,
        color: theme.yellow['500'],
      },
      false: {
        border: `1px solid ${theme.gray['700']}`,
        color: theme.white,
      },
    },
  },
});

export const areaBtn = style({
  ...flex.CENTER,
  width: 'calc((100% - 24px) / 4)',
  padding: '12px 0',
  borderRadius: '8px',
  border: `1px solid ${theme.gray['700']}`,
  color: theme.white,
  ...font.p1,
  fontWeight: 600,
});

export const checkedAreaBtn = style({
  ...flex.CENTER,
  width: 'calc((100% - 24px) / 4)',
  padding: '12px 0',
  borderRadius: '8px',
  border: `1px solid ${theme.yellow['500']}`,
  color: theme.yellow['500'],
  ...font.p1,
  fontWeight: 600,
});
